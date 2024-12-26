import React from 'react';
import Image from "next/image";

const RoomInspiration = () => {
  return (
    <div>
      <section className=" space-y-10 flex flex-col md:flex-row items-center bg-gray-50 py-10 px-6">
        {/* Left side content */}
        <div className="max-w-md md:mr-6">
          <h2 className="font-bold text-3xl bg-[#FCF8F3] text-gray-800 mb-4">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6">
            Our designer already made a lot of beautiful prototypes of rooms that inspire you.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
            Explore more
          </button>
        </div>

        {/* Right side images */}
        <div className="flex space-x-4">
          {/* First image */}
          <Image
            src="/img9.png"
            alt="img9"
            width={404}
            height={582}
            className="w-80 h-80 rounded-lg object-cover shadow-lg"
          />
          {/* Second image */}
          <Image
            src="/img10.png"
            alt="img10"
            width={404}
            height={582}
            className="w-80 h-80 rounded-lg object-cover shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default RoomInspiration;
