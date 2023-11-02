"use client"
import { scrapeStoreProduct } from '@/lib/actions'
import {FormEvent, use, useState} from 'react'

const isValidAmazonProductURL = (url: string) => {
  try {
    const parsedURL = new URL(url)
    const hostname = parsedURL.hostname 

    if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.includes('amazon')) {
      return true
    }
  } catch (error) {
    return false
  }
}
import React from 'react'

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isValidLink = isValidAmazonProductURL(searchPrompt)
      if(!isValidLink) return alert('Please Provide a Valid Amazon Link')

      try {
        //Webscraping primary function executed in this block
        setIsLoading(true)
        const product = await scrapeStoreProduct(searchPrompt);
      }catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
     
    }
  return (
    <form 
    className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}>

        <input 
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter Product link'
        className='searchbar-input'
        type="text"
        
        />

        <button 
        
        type="submit" 
        className='searchbar-btn'
        disabled={searchPrompt === ''}>
            {isLoading ? 'Searching...' : 'Search'}
        </button>

    </form>
  )
}

export default Searchbar