import axios from "axios";
import * as cheerio from 'cheerio'
import { extractPrice } from "../utils";
export async function scrapeAmazonProduct (url:string) {
    if(!url) return;

    //BrightData Configeration
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)

    const port = 22225; 
    const session_id = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${session_id}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false, 

    }

    try {
        const response = await axios.get(url, options);
        const cheer = cheerio.load(response.data)

        //Get the product title
        const title = cheer('#productTitle').text().trim()
        const currentPrice = extractPrice(
            cheer('.priceToPay span.a-price-whole'),
            cheer('a.size.basea-color-price'),
            cheer('.a-button-selected .a-color-base'),
            cheer('a-price.a-text-price')
        );

        const orgPrice = extractPrice(
            cheer('#priceblock_ourprice'),
            cheer('.a-price.a-text-price span.a-offscreen'),
            cheer('#listPrice'),
            cheer('#priceblock_dealprice'),
            cheer('.a-size-base.a-color-price')
        );

        const outOfStock = cheer('#avalibility span').text().trim().toLowerCase() === 'currently unavailable'
        
        const image = cheer('#imgBlkFront').attr('data-a-dynamic-image') || cheer('#landingImage').attr('data-a-dynamic-image')

        console.log({title, currentPrice, orgPrice, outOfStock})
        //console.log(response.data);
    } catch (error: any) {
        throw new Error(`Failed to scrape product: ${error.message}`)
    }
}