import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";



const page = () => {
    return (
        <div>

            <div>
                <Image src={"/img14.png"} alt="img14" width={1440} height={340}></Image>

            </div>

            <div className='text-center  text-black'>
                <h2 className='text-2xl font-bold'>Ge in touch</h2>
                <span >For More Information About Our Product & Services. Please Feel Free To Drop Us  <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
            </div>

            <div className='text-black ml-32'>


                <FaLocationDot />

                <h3>Address</h3>
                <span>236 5th SE Avenue, New York NY10000, United States</span>

                <form className='flex justify-end items-end w-[528] h-[75] '>

                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </form>
            </div>


            {/* Phone Detail */}

            <div className='text-black ml-32'>

            <FaPhoneAlt />

                <h3>Phone</h3>
                <span>Mobile: +(84) 546-6789 <br />
                Hotline: +(84) 456-6789</span>

                <form className='flex justify-end items-end w-[528] h-[75] '>

                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                       Email Address
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </form>
            </div>


{/* Working Time */}


<div className='text-black ml-32'>

<MdOutlineAccessTimeFilled />


    <h3>Working Times</h3>
    <span>Monday-Friday: 9:00 - 22:00 <br />
    Saturday-Sunday: 9:00 - 21:00</span>

    <form className='flex justify-end items-end w-[528] h-[75] '>

        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
           Subject
        </label>
        <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="This is optinal"
        />
    </form>
</div>

{/* message form */}


<form className='flex justify-end items-end w-[528] h-[75] '>

<label htmlFor="email" className="block text-gray-700 font-medium mb-2">
Message
</label>
<input
    type="text"
    id="name"
    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Hi i'd like ask about"
/>
</form>





        </div>
    )
}

export default page
