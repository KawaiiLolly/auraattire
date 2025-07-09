import React, { useContext, useState } from 'react'
import Title from '../component/Title'
import CartTotal from '../component/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-5 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* LEFT SIDE */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'Delivery'} text2={'Information'} />

        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City ' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
        </div>
        <div className="flex gap-3">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='PINCODE' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />


      </div>
      {/* RIGHT SIDE */}
      <div className="mt-8">
        <div className="mt-8 min-w-90">
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'Payment'} text2={'Method'} />
          {/* PAYMENT METHOD */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-500">
              <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-500 ${method === 'stripe' ? 'bg-green-300' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-500">
              <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-500 ${method === 'razorpay' ? 'bg-green-300' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer border-gray-500">
              <p className={`min-w-3.5 h-3.5 border rounded-full border-gray-500 ${method === 'cod' ? 'bg-green-300' : ''}`}></p>
              <p className='text-gray-800 text-sm text-medium mx-4'>Cash on Delivery</p>
            </div>
          </div>
          <div className="w-full text-end mt-9">
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-14 py-3 text-sm'>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
