import React from 'react'
import Image from 'next/image'
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
import { IoPin } from "react-icons/io5";
import { Button } from '@/components/ui/button';



const page = () => {
  return (
    <div>

      <div>
        <Image src={"/img18.png"} alt='img18' width={1440} height={316}></Image>

      </div>


{/* righ side content */}






      <div>
        <Image src={"/img19.png"} alt='img19' width={817} height={500}></Image>

        <div className='flex flex-row gap space-x-8'>

          <RiAdminFill />Admin
          <FaShoppingBag /> 14 Oct 2022
          <IoPin /> Wood
        </div>


        <div >

          <h2 className='text-2xl font-bold '>Going all-in with millennial design</h2>
          <span className='flex justify-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</span>

          <p className='underline'>
            Read more
          </p>
        </div>



      </div>

      <div>
        <Image src={"/img20.png"} alt='img20' width={817} height={500}></Image>

        <div className='flex flex-row gap space-x-8'>

          <RiAdminFill />Admin
          <FaShoppingBag /> 14 Oct 2022
          <IoPin /> Wood
        </div>

        <div >

          <h2 className='text-2xl font-bold '>Exploring new ways of decorating</h2>
          <span className='flex justify-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</span>

          <p className='underline'>
            Read more
          </p>
        </div>


      </div>


      <div>
        <Image src={"/img21.png"} alt='img21' width={817} height={500}></Image>

        <div className='flex flex-row gap space-x-8'>

          <RiAdminFill />Admin
          <FaShoppingBag /> 14 Oct 2022
          <IoPin /> Wood
        </div>

        <div >

          <h2 className='text-2xl font-bold '>Handmade pieces that took time to make</h2>
          <span className='flex justify-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</span>

          <p className='underline'>
            Read more
          </p>
        </div>

        <div className='flex flex-row space-x-12 justify-center text-black'>
          <Button className='bg-[#B88E2F] text-black'>1</Button>

          <Button className='bg-[#F9F1E7] text-black'>2</Button>
          <Button className='bg-[#F9F1E7] text-black' >3</Button>
          <Button className='bg-[#F9F1E7] text-black'>Next</Button>

        </div>

      </div>









    </div>
  )
}

export default page
