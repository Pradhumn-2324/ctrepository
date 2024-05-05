import React from 'react'

const Innovation = () => {
    const innovationData = [{ title: "Preventive equipment maintenance", points: ["Remote monitoring of equipment performance metrics and early detection of potential malfunctioning. Prevents equipment breakage and production interruptions."] }, { title: "Remote operation of machinery", points: ["Automating manual actions based on commands sent from control apps to actuators. Applicable to simple actions like switching on/off, opening/closing, and complicated industrial processes, like robotic order picking."] }, { title: "Environmental monitoring", points: ["Measuring the required environmental metrics (temperature, humidity, pollution, CO2 level, etc.). Helps check the compliance of asset storage and transportation, monitor operation conditions for industrial equipment and at human workplaces, understand the environmental impact of processes."] }, { title: "Optimization of energy", points: ["Automated control over the intensity of energy utilization depending on the outside conditions. Applicable to personal (home lights) and public (street lights) surroundings."] }, { title: "Hands-off inventory management", points: ["Remote tracking of assets’ geoposition and movements. Instant indication of low stock."] }, { title: "Remote health monitoring", points: ["Analyzing vital signs measured by wearable devices and informing a supervising doctor on deviations from normal levels. An advanced level of telehealth."] }, { title: "Video surveillance and real-time", points: ["Instant detection of abnormal behavior within the area under surveillance. Used for crime prevention, early fire detection, traffic incident alerts."] }, { title: "Product quality management", points: ["Monitoring product parameters and process compliance during manufacturing."] }, { title: "Connected transport", points: ["Real-time monitoring of cargo in transit to verify its quality and validate the compliance with transportation requirements."] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Driving IoT Innovation across Industries</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Internet of Things (IoT) services help elaborate your idea of IoT adoption and set up secure technology infrastructure for advanced data tasks.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    innovationData.map((item, index) => {
                        return (
                            <div className='w-[32.5%] h-[180px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[15px] px-[15px] box-border' key={index}>
                                <h2 className='text-xl font-bold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[12px] pl-[20px]'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li key={i}>{point}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Innovation