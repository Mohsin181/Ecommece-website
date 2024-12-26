import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <div>

            <div>
                <Image src={"/img17.png"} alt='img17' width={1440} height={314}></Image>

            </div>

            <div className="flex flex-col gap-4">
  <h2 className="text-2xl font-bold">Billing Details</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input type="text" placeholder="First Name" className="border p-2 rounded-md" />
    <input type="text" placeholder="Last Name" className="border p-2 rounded-md" />
    <input type="text" placeholder="Company Name (Optional)" className="border p-2 rounded-md" />
    <input type="text" placeholder="Country / Region" className="border p-2 rounded-md" />
    <input type="text" placeholder="Street Address" className="border p-2 rounded-md" />
    <input type="text" placeholder="Town / City" className="border p-2 rounded-md" />
    <input type="text" placeholder="Province" className="border p-2 rounded-md" />
    <input type="text" placeholder="Zip Code" className="border p-2 rounded-md" />
    <input type="text" placeholder="Phone" className="border p-2 rounded-md" />
    <input type="text" placeholder="Email Address" className="border p-2 rounded-md" />
  </div>
</div>

<div className="bg-white p-6 rounded-md shadow-lg">
  <h2 className="text-2xl font-bold mb-4">Product</h2>
  <div className="flex justify-between mb-2">
    <span>Asgard Sofa x 1</span>
    <span>Rs. 250,000.00</span>
  </div>
  <hr className="my-4" />
  <div className="flex justify-between mb-2">
    <span>Subtotal</span>
    <span>Rs. 250,000.00</span>
  </div>
  <div className="flex justify-between mb-4">
    <span>Total</span>
    <span className="font-bold">Rs. 250,000.00</span>
  </div>
  <button className="w-full bg-blue-600 text-white py-2 rounded-md">Place Order</button>
</div>



            

        </div>
    )
}

export default page
