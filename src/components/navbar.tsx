import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { Heart, ShoppingCart  } from 'lucide-react'
import { Button } from './ui/button'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";



const navbar = () => {
  return (
      <nav className=' mx-auto border-b-2 border-gray-300 p-4'>

          <div className="max-w-7xl mx-auto flex items-center justify-between">

                <Image src={"/logo.png"} alt='logo' width={50} height={32}></Image>

              <h1 className="font-bold text-2xl">Furnio</h1>

              <div className='flex gap-8 size-1px font-normal  text-black underline'>

                  <Link href='Home'>
                      Home
                  </Link>

                  <Link href='shop'>
                      Shop
                  </Link>

                  <Link href='blog'>
                      Blog
                  </Link>

                  <Link href='contact'>
                      Contact
                  </Link>


              </div>

              <div className=" flex gap-4">

                  <div className='relative'>



                  </div >
                  <CgProfile className='rounded-full' size={30} />



                  <CiSearch className='rounded-full' size={30} />

                  <Button variant={"outline"} size={"icon"} className='rounded-full '>
                      <Heart />

                  </Button>
                  <Button variant={'outline'} size={"icon"}>
                      <ShoppingCart></ShoppingCart>
                  </Button>

              </div>

           
          </div>


      </nav>
  )
}; export default navbar 
