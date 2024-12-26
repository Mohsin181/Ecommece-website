import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const page = () => {
    return (
        <div>

            <div className='w-[1440] h-[100] gap-32 bg-[#F9F1E7]'>
                Home
                Shop
                Asgard Sofa
            </div>


            <div className='mt-20'>


                <div className='text-end mr-32'>

                    <h3 className='text-2xl font-bold'>Asgard Sofa</h3>
                    <p>Rs. 250,000.00</p>
                    💛💛🧡🧡 5 Customer Review
                    <span >Setting the bar as one of the loudest speakers in its class, <br /> the Kilburn is a compact, stout-hearted hero with a well-balanced <br />audio which boasts a <br /> clear midrange and extended highs for a sound.
                    </span>

                    <div className='space-x-10'>

                        <Button>Size</Button>
                        <Button className='bg-[#F9F1E7]  text-black'>L</Button>
                        <Button className='bg-[#F9F1E7] text-black'> XL</Button>

                    </div>


                    <div className='space-x-12 mt-12'>

                        <Button>color</Button>
                        <Button className='bg-[#816DFA]'></Button>
                        <Button className='bg-black'></Button>
                        <Button className='bg-[#B88E2F]'></Button>
                    </div>


                </div>

                <Image src={"/img22.png"} alt="img21" width={553} height={500} ></Image>






            </div>




        </div>
    )
}

export default page
