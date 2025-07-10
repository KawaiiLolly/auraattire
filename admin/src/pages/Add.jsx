import React from 'react'
import { assets } from '../assets/assets'
const Add = () => {
    return (
        <form>
            <div className='flex flex-col w-full items-start gap-3'>
                <p className='mb-2'>Upload Images</p>
                <div className='flex gap-2'>
                    <label htmlFor="image1">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className='w-40' src={assets.upload_area} alt="" />
                        <input type="file" id="image4" hidden />
                    </label>
                </div>
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Name</p>
                <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here your product name' required />
            </div>

            <div className='w-full'>
                <p className='mb-2'>Product Description</p>
                <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write description' required />
            </div>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-8 w-full'>
                {/* Product Category */}
                <div className='w-full sm:w-auto'>
                    <label className='block mb-2 font-medium text-gray-700' htmlFor='category'>
                        Product Category
                    </label>
                    <select
                        id='category'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md'
                    >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                {/* Product Sub-Category */}
                <div className='w-full sm:w-auto'>
                    <label className='block mb-2 font-medium text-gray-700' htmlFor='subCategory'>
                        Product Sub-Category
                    </label>
                    <select
                        id='subCategory'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md'
                    >
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Winterwear">Winterwear</option>
                    </select>
                </div>

                {/* Product Price */}
                <div className='w-full sm:w-auto'>
                    <label className='block mb-2 font-medium text-gray-700' htmlFor='price'>
                        Product Price
                    </label>
                    <input
                        id='price'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md sm:w-[120px]'
                        type="number"
                        placeholder='25'
                    />
                </div>
            </div>



        </form>
    )
}

export default Add
