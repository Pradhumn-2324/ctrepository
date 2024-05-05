import React, { useState } from 'react'
import './techTools.css'
const TechTools = () => {
    const reliableTool = [ {
        title: "Performance testing tools", stack: [{
            name: "", logos: [
                require('../../../../../assets/Services/QA/tools/Testing/meter.png'),
                require('../../../../../assets/Services/QA/tools/Testing/saleforce.png'),
                require('../../../../../assets/Services/QA/tools/Testing/sp.png'),
                require('../../../../../assets/Services/QA/tools/Testing/testingTools1.png'),
                require('../../../../../assets/Services/QA/tools/Testing/vscode.png'),
               
            ]}]
    }, 
{
    title: "Security testing tools", stack: [{
        name: "Technologies", logos: [
            require('../../../../../assets/Services/QA/tools/securityTesting/acunetics.png'),
            require('../../../../../assets/Services/QA/tools/securityTesting/hcl.png'),
            require('../../../../../assets/Services/QA/tools/securityTesting/metaspoilt.png'),
            require('../../../../../assets/Services/QA/tools/securityTesting/nesus.png'),
            require('../../../../../assets/Services/QA/tools/securityTesting/wireShark.png'),
      
        ]
    }]
},

{
    title: "CI/CD tools", stack: [{
        name: "Technologies", logos: [
            require('../../../../../assets/Services/QA/tools/CiCD/UFT.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/ci_cd.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/ci_tools1.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/fmbt.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/jankien.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/jmeter.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/postman.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/protracter.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/quickTest.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/ranorex.png'),
            require('../../../../../assets/Services/QA/tools/CiCD/xcTest.png'),
           
      
        ]
    }]
},

{
    title: "Test management and defect tracking software", stack: [{
        name: "Technologies", logos: [
            require('../../../../../assets/Services/QA/tools/TestManagement/acunetix.png'),
            require('../../../../../assets/Services/QA/tools/TestManagement/burpsuit.png'),
            require('../../../../../assets/Services/QA/tools/TestManagement/cloudFare.png'),
            require('../../../../../assets/Services/QA/tools/TestManagement/nessuse.png'),
            require('../../../../../assets/Services/QA/tools/TestManagement/redsign.png'),
            // require('../../../../../assets/Services/QA/tools/TestManagement/teamViewer.png'),
          
           
      
        ]
    }]
},

];


    return (
        <div className='w-[100vw] h-[60vh] bg-[black] text-[white] box-border overflow-y-auto pb-[40px]'>
            <div className='w-[85%] md:w-[100%] bg-[#141414] mx-auto text-[white] flex flex-wrap justify-between md:flex-col md:overflow-x-hidden'>
                {reliableTool.map((items, i) => {
                    return (
                        <div className='w-[100%] border-b border-[#303030] py-4'>
                            <h2 className='text-[20px] font-medium ms-3 md:ms-4 md:text-[14px] w-[100%]'>{items.title}</h2>
                            <div className= 'flex w-[100%] gap-x-[100px] flex-wrap gap-y-[40px]'>{items.stack.map((item, i) => {
                                return (
                                    <div className='px-5 pt-3' key={i} >
                                        <h3 className='text-[13px]'>{item.name}</h3>
                                        <div className='flex gap-[20px] mt-2 md:gap-[10px]'>
                                            {item.logos.map((logo, i) => {
                                                return (
                                                    <div className='w-[55px] md:w-[47px] h-[50px]'>
                                                        <img src={logo} alt="" className='h-[100%] w-[100%]' />
                                                    </div>
                                                )
                                            })}
                                            <div className='w-[55px] md:w-[47px] bg-[#000000] h-[53px] md:h-[47px] border border-[white] flex items-center justify-center text-[10px] cursor-pointer'> See All</div>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )
                })
                }

            </div>
        </div>
    )
}

export default TechTools
