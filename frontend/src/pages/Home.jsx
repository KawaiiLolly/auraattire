import React from 'react'
import Hero from '../component/Hero'
import LatestCollections from '../component/LatestCollections'
import BestSeller from '../component/BestSeller'
import OurPolicy from '../component/OurPolicy'
import NewsLetterBox from '../component/NewsLetterBox'
const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollections/>
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
