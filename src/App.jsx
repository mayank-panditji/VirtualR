import { useState } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import FeatureSection from './Components/FeatureSection'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Navbar/>
 <div className='max-w-7xl mx-auto pt-20 px-6'>
  <HeroSection/>
  <FeatureSection/>
  <Workflow/>
  <Pricing/>
  <Testimonials/>
  <Footer/>
 </div>
    </>
  )
}

export default App
