import React from 'react'

const MLMethods = () => {
    const methodsData = [{ title: "Non-neural-network machine learning", points: ["Supervised learning algorithms, such as decision trees, linear regression, logistic regression, support vector machines.","Unsupervised learning algorithms: K-means clustering, hierarchical clustering, etc.","Reinforcement learning methods, including Q-learning, SARSA, temporal differences method."] }, { title: "Neural networks, including deep learning", points: ["Convolutional and recurrent neural networks (including LSTM and GRU)","Autoencoders (VAE, DAE, SAE, etc.).","Generative adversarial networks (GANs)","Deep Q-Networks (DQNs)","Feed-forward neural networks, including Bayesian deep learning"] }]
    return (
        <div className='w-[85vw] mx-[110px] py-[60px]'>
            <div className='w-[100%] mb-[30px]'>
                <h1 className='font-bold text-3xl'>Machine Learning Methods We Rely On</h1>
                <p className='text-[14px] font-semibold mt-[20px]'>Empowering Innovations: Leveraging state-of-the-art machine learning techniques, we at CT harness the power of data-driven insights to drive transformative solutions and unlock unprecedented opportunities for our clients.</p>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between'>
                {
                    methodsData.map((item, index) => {
                        return (
                            <div className='w-[49%] h-[220px] border border-[#fffff] mt-[20px] shadow-[4px] flex flex-col gap-[10px] pt-[20px] px-[20px] box-border' key={index}>
                                <h2 className='text-xl font-semibold pl-[10px]'>{item.title}</h2>
                                <ul className='list-disc text-[14px] pl-[30px] font-normal'>
                                    {
                                        item.points.map((point, i) => {
                                            return (
                                                <li>{point}</li>
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

export default MLMethods