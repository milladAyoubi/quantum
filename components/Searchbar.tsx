"use client"
import {FormEvent, useState} from 'react'

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
    const [searchprompt, setSearchPrompt] = useState('')
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const isValidLink = isValidAmazonProductURL(searchprompt)

      alert(isValidLink ? 'Valid link' : 'Invalid link')
    }
  return (
    <form 
    className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}>

        <input 
        placeholder='Enter Product link'
        className='searchbar-input'
        type="text"
        
        />

        <button type="submit" className='searchbar-btn'>
            Search
        </button>

    </form>
  )
}

export default Searchbar