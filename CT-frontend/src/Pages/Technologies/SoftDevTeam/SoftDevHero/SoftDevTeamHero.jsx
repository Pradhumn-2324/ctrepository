import React from 'react'
import softwareDevTeam from '../../../HomePage/Component/assets/serviceWeOffer/softwareDevTeam.png'
const SoftDevTeamHero = () => {
  return (
    <div className='w-[100vw] h-[100vh]'>
      <div className='w-full h-[100vh]'>
        <div className='w-[100vw] h-full relative' style={{ backgroundImage: `url(${softwareDevTeam})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
          <div className='w-[100%] h-[100%] absolute top-0 left-0 bg-black opacity-[0.7] flex flex-col justify-center items-start box-border px-3 gap-[46px] md:justify-evenly md:items:center'>
            <div className='flex flex-col gap-[50px] w-[100%]'>
              <h2 className='text-3xl font-semibold text-white w-[50%] ms-[110px]  md:ms-[20px] md:w-[90%] md:text-[24px]' style={{ fontFamily: 'Montserrat' }}>Software Development Teams</h2>
              <p className='text-xl font-normal md:text-[16px] text-white text-left ms-[110px] w-[60%] md:w-[90%] md:ms-[20px]' style={{ fontFamily: 'Poppins' }}>Outsource your software development needs to us for a high-performing team that elevates your business. We provide cost-effective software development teams, eliminating the challenges of in-house management. Our experts in frontend, backend, QA, DevOps, etc., offer cutting-edge solutions.</p>
            </div>
            <button className="relative overflow-hidden text-white border border-current w-[fit-content] px-3 py-1 ms-[110px] group border-b-2 text-[20px] md:px-4 md:ms-[20px] md:text-[16px] text-[20px]">
              <span className="absolute inset-0 bg-gradient-to-r from-[#7CE0FF] via-[#A598FF] to-[#C462FF] transition-width duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10">Connect With Our Experts <span className="font-bold">&rarr;</span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoftDevTeamHero