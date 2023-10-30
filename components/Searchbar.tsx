import React from 'react'


const Searchbar = () => {
    const handleSubmit = () => {}
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