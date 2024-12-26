import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        
        <div>

      <Image src={"/img15.png"} alt='img15' width={1440} height={316}></Image>
      </div>

<div className='  text-black gap-2 ml-10 flex space-x-10 items-center bg-[#F9F1E7] w-[817] h-[55] ' > 


<p>Product</p>
<p>Price</p>
<p>Quality</p>
<p>Subtotal</p>

</div>

<div>


</div>

<Image src={"/img16.png"} alt='img15' width={105} height={105}></Image>

<p>Asgard Sofa</p>
<p>Rs. 250000.00</p>



    </div>
  )
}

export default page
 