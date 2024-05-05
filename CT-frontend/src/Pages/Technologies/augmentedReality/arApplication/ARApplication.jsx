import React from 'react'

const ARApplication = () => {
  return (
    <div className='w-[100vw] bg-[#000000] text-white py-[60px]'>
    <div className='w-[85%] mx-[110px]'>
        <h1 className='font-bold text-3xl mb-[20px]'>How We Achieve Visual and Content Consistency in AR Applications</h1>
        <p className='text-[14px] font-semibold mb-[60px]'>The biggest challenges in any AR app development process are associated with object/scene recognition, occlusion, and content creation & maintenance. We skillfully handle all these tasks and provide content-rich and reliable AR solutions.</p>
    </div>
    <div className='w-[85%] flex flex-wrap justify-between mx-[110px]'>
        <div className='w-[32.5%] h-[240px] bg-[#FF6868] box-border p-[15px]'>
            <h4 className='text-[18px] font-bold'>Content implementation</h4>
            <p className='text-[14px] font-normal mt-[15px]'>Whether you want an app that augments reality with 3D models or with overlaying textual data, we offer all-round assistance in implementing your AR app’s content. Our designers create detailed 3D models based on photos, illustrations or even rough sketches, while UI/UX experts plan the layout of the augmenting data to make it display conveniently on any mobile device.</p>
        </div>
        <div className='w-[32.5%] h-[240px] bg-[#1777BC] box-border p-[15px]'>
            <h4 className='text-[18px] font-bold'>Regular content updates</h4>
            <p className='text-[14px] font-normal mt-[15px]'>It’s only natural for your app’s metadata, 3D model database or pool of images for auto-recognition to require changes and expansion over time. As we always look forward to steady and long-term cooperation, we offer a continuous update of your app’s content and help your app grow along with your business.</p>
        </div>
        <div className='w-[32.5%] h-[240px] bg-[#E751FF] box-border p-[15px]'>
            <h4 className='text-[18px] font-bold'>Scene understanding and occlusion</h4>
            <p className='text-[14px] font-normal mt-[15px]'>We make sure that your app precisely recognizes scenes and objects in various conditions and places 3D models with realistic occlusion. The learning of our object/scene recognition and depth perception algorithms doesn’t end with the release: while apps are being used, they gather new data that we tap in our update packages to make the apps even smarter.</p>
        </div>
    </div>
</div>
  )
}

export default ARApplication