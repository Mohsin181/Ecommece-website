import React from 'react'
import Image from "next/image"

const header = () => {
  return (
    <div className='space-y-8'> 
      
    <div className=''>


<h1 className='text-black font-extrabold flex justify-center'>Browse The Range</h1><br />
<p className='text-black flex justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<div className='flex justify-between  items-center space-y-20 space-x-4 '> 

<Image src={"/dinig.png"} alt='dinig' width={381} height={480} className='w-1/4' ></Image>
<Image src={"/living.png"} alt='dinig' width={381} height={480}  className='w-1/4'></Image>
<Image src={"/bedroom.png"} alt='dinig' width={381} height={480} className='w-1/4' ></Image>




</div>


    </div>


    </div>
  )
}

export default header
