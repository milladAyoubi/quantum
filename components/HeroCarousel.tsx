"use client"
import React from 'react'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel"

const heroImage = [
    {imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    {imgUrl: '/assets/images/hero-2.svg', alt: 'bag'},
    {imgUrl: '/assets/images/hero-3.svg', alt: 'lamp'},
    {imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer'},
]
const HeroCarousel = () => {
  return (
    <div className='hero-carousel'>
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImage.map((image) => (
                <Image
                src={image.imgUrl}
                alt={image.alt}
                width={484}
                height={484}
                className="object-contain"
                key={image.alt}
                />

            ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel