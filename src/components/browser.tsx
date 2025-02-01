import React from 'react'
import Image from "next/image"

const Header = () => {  // Changed to capital H for component naming convention
  return (
    <div className='space-y-8 px-4 md:px-8'> 
      
    <div className='container mx-auto'>
      <h1 className='text-black text-2xl sm:text-3xl md:text-4xl mt-4 font-bold text-center'>Browse The Range</h1>
      <br />
      <p className='text-black text-center text-base sm:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className='flex flex-col sm:flex-row gap-6 justify-around items-center mt-8'> 
        <Image 
          src={"/dinig.png"} 
          alt='dining' 
          width={381} 
          height={480} 
          className='w-full sm:w-1/3 md:w-1/4 object-cover'
        />
        <Image 
          src={"/living.png"} 
          alt='living' 
          width={381} 
          height={480}  
          className='w-full sm:w-1/3 md:w-1/4 object-cover'
        />
        <Image 
          src={"/bedroom.png"} 
          alt='bedroom' 
          width={381} 
          height={480} 
          className='w-full sm:w-1/3 md:w-1/4 object-cover'
        />
      </div>
    </div>
    </div>
  )
}

export default Header
