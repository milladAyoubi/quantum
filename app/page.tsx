import React from 'react'
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'
import Image from 'next/image'
const Home = () => {
  return (
    <>
    <section className='px-6 md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
        <div className='flex flex-col justify-center'>
      <p className='small-text'>
        Smart Shopping Starts Here
        <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow-right"
        width={16}
        height={16}/>
      </p>
      <h1 className='head-text'>
        Unleash The Power Of 
        <span className='text-primary'>Quantum</span> 
      </h1>
      <p className='mt-6'>
        A way for you to surf the web for the best avalible prices of the products you need to grow, convert and engage. 
      </p>

      <Searchbar/>
        </div>
        <HeroCarousel/>
      </div>
    </section>
    <section className='trending-section'>
      <h2 className='section-text'>Trending</h2>
      <div className='flex flex-wrap gap-x-8 gap-y-16'>
        {['Apple Iphone 15', 'Book', 'Monitor'].map
        ((product) => (
            <div>{product}</div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Home