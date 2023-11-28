import React from 'react'
import Textimony from './Textimony'

const Testimonies = () => {
  return (
    <main class="max-w-screen m-0 min-h-screen bg-testimony-background-primary">
    <div class=" w-full mx-auto py-14 sm:px-0 px-2">
      <div class="w-full">
        <h1 class="font-bold text-center text-4xl font-dmsans ">Our blessed client & Advertisers said about us!!! 😍</h1>
      </div>
      <div class="">
        <div class="flex overflow-hidden gap-8 mb-10 py-20 lg:py-20 will-change-transform ">
          <div class="flex items-center gap-8 animate-marquee-slower ">
            
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
          </div>
          <div class="flex items-center gap-8 animate-marquee-slower">
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            <Textimony/>
            
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default Testimonies