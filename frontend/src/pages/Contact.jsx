import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'Contact'} text2={'Us'} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className='w-1/4 md:max-w-[480]px' src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl'>Our Store</p>
          <p className='text-gray-500'>fdsfsdfsf <br /> fjdskfjdskfsd ADDRESS</p>
          <p className='text-gray-500'>TELE PHOEN NUMBER : <br /> EMAIL AT : FJDKSFJSDKFJDSKFLJDSKF <br /></p>
          <p className='font-semibold text-xl text-gray-500'>Careers at Forever</p>
          <p className='text-gray-500'>Lear more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transistion-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact
