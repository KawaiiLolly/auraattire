import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItems from './ProductItems'
const BestSeller = () => {
    const { products } = useContext(ShopContext)
    console.log("Products in BestSeller:", products)
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && Array.isArray(products)) {
            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        }
    }, []);


    return (
        <div>
            <div className="my-10">
                <div className="text-center text-3x1 py-8">
                    <Title text1='Best' text2='Sellers' />
                    <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint tempore quibusdam error quam recusandae?</p>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {
                    bestSeller.map((item, index) => (
                        <ProductItems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                    ))
                }
            </div>
        </div>
    )
}

export default BestSeller
