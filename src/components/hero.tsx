import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <div className="relative bg-[url('/plant1.png')] h-screen flex justify-end items-center w-full">
      <div className='bg-[#FFF3E3] mr-32 w-[643px] pl-16 flex flex-col p-4 gap-8 justify-center px-6 h-[443px] rounded-lg z-40'>
        <p className='text-sm text-black'>New Arrival</p>
        <h1 className='text-5xl text-[#B88E2F] font-bold'>Discover Our <br /> New Collection</h1>
        <p className='text-black font-bold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Fugiat earum accusantium in voluptatum nam?</p>
        <button className='p-3 bg-[#B88E2F] text-lg w-[200px]  h-[50px] rounded-lg hover:bg-[#d8ac45] duration-200'> Buy Now</button>
      </div>
      {/* <Image 
        src="/plant1.png" 
        alt="first image" 
        fill
        className="object-cover z-0"
        priority
      />
        */}
    </div>
  )
}

export default hero
