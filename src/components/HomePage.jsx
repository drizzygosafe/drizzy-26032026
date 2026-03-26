import React from 'react'
import Navbar from './Navbar'
import Offer from './Offer'
import Hero from './Hero'
import Why from './Why'
import How from './How'
import Testimonials from './Testimonial'
import FAQ from './Faq'
import Driver from './Driver'
import DownloadSection from './Dowload'
import Footer from './Footer'
import DrizzyPreview from './CurriculumSection'
import CurriculumSection from './CurriculumSection'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white">
        <Navbar />
        <br></br>
        <div className="mt-11.5">
          <Offer />
        </div>
        <div className="mt-[-50px] md:mt-[-100px]">
        <Hero />
        </div>
        <Why />
      </div>
      <CurriculumSection/>
      <How />
      <Testimonials />
      <FAQ />
      <Driver />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default HomePage