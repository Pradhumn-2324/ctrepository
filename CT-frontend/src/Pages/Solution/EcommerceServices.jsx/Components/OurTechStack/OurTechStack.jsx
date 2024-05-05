import React, { useState } from 'react'
import './techStack.css'
const OurTechStack = () => {
    const reliableTool = [{
        title: "Web Development",
        stack: [{
            name: "Backend",
            logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/backend/java.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/backend/go.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/backend/nodejs.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/backend/php.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/backend/python.png')
            ]
        },
        {
            name: "FrontEnd", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/frontendLogo/react.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/frontendLogo/js.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/frontendLogo/html.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/frontendLogo/css.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/frontendLogo/angular.png'),
            ]
        }
        ]

    }, {
        title: "Mobile", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Mobiles/android.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Mobiles/flutter.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Mobiles/ios.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Mobiles/pwa.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Mobiles/reactjs.png'),

            ]
        }]
    }, {
        title: "Desktop", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/desktop/c++.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/desktop/c#.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/desktop/obj-c.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/desktop/python.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/desktop/swift.png')
            ]
        }]
    }, {
        title: "Platform", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/platform/dynamic365.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/platform/adobeCommerse.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/platform/powerBi.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/platform/salesForce.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/platform/serviceNow.png'),
                // require('../assets/reliableTech/platform/sharePoint.png'),
                // require('../assets/reliableTech/platform/Rectangle34440.png')
            ]
        }]
    }, {
        title: "Cloud", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/cloud/Azure.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/cloud/aws.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/cloud/digitalOcean.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/cloud/googleCloud.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/cloud/rackspace.png'),

            ]
        }]
    }, {
        title: "Relational Database / Data Storage", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/relational_database/azureDynamic.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/relational_database/mysql.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/relational_database/oracle.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/relational_database/postgreSQL.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/relational_database/sqlServer.png')
            ]
        }]
    }, {
        title: "Big Data", stack: [{
            name: "", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/big_data/Rectangle34440.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/big_data/azurCloud.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/big_data/azureBlub.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/big_data/azureDataLake.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/big_data/canssandra.png')
            ]
        }]
    }, {
        title: "Machine Learning", stack: [{
            name: "Programming Language", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/matalab.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/programming1.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/rProgramming.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/sas.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/programm_laung/spss.png'),

            ]
        },
        {
            name: "Frameworks", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/framworks/caffe.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        },
        {
            name: "Libraries", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/gensim.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/skikit_learn.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/spacy.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/spark.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/libraries/tensorFlow.png'),

            ]
        },

        {
            name: "cloud Service", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aiML.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        }]
    }, {
        title: "Devops", stack: [{
            name: "Containerization", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Containerization/box.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Containerization/docker.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Containerization/kubernetes.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Containerization/mesos.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Containerization/openshift.png'),


            ]
        }, {
            name: "Automation", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Automation/ansible.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Automation/chef.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Automation/puppet.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Automation/saltStack.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Automation/terraform.png'),
            ]
        }, {
            name: "CI/CD Tools", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/CICDTools/CI_CD.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/CICDTools/awsDevTools.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/CICDTools/azureDevops.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/CICDTools/googlCloud.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/CICDTools/jenkins.png'),

            ]
        }, {
            name: "Monitoring", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Monitoring/elasicsSearch.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Monitoring/grafana.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Monitoring/nagios.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Monitoring/prometheus.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/devops/Monitoring/zabbix.png'),

            ]
        },]
    }, {
        title: "Test automation tools", stack: [{
            name: "Technologies", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Testautomationtools/Technologies/Protractor.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Testautomationtools/Technologies/appium.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Testautomationtools/Technologies/fmbt.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Testautomationtools/Technologies/jmeter.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/Testautomationtools/Technologies/postman.png')

            ]
        }]
    }, {
        title: "Information security", stack: [{
            name: "Technologies", logos: [
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/informationTEch/nessus.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/informationTEch/Rectangle34437.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/informationTEch/acunetix.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/informationTEch/burpSuite.png'),
                require('../../../../../Pages/HomePage/Component/assets/reliableTech/informationTEch/cloudFlare.png'),
            ]
        }]
    }];


    return (
        <div className='w-[100vw] h-[60vh] bg-[black] text-[white] box-border overflow-y-auto pb-[40px]'>
            <div className='w-[85%] md:w-[100%] bg-[#141414] mx-auto text-[white] flex flex-wrap justify-between md:flex-col md:overflow-x-hidden'>
                {reliableTool.map((items, i) => {
                    return (
                        <div className={items.stack.length > 1 ? 'w-[100%] border-b border-[#303030] py-4' : 'w-[50%] border-b border-[#303030] py-4 md:w-[100%]'}>
                            <h2 className='text-[20px] font-medium ms-3 md:ms-4 md:text-[14px] w-[100%]'>{items.title}</h2>
                            <div className={items.stack.length > 1 ? 'flex w-[100%] gap-x-[100px] flex-wrap gap-y-[40px]' : 'flex w-[100%]'}>{items.stack.map((item, i) => {
                                return (
                                    <div className='px-5 pt-3' key={i} >
                                        <h3 className='text-[13px]'>{item.name}</h3>
                                        <div className='flex gap-[20px] mt-2 md:gap-[10px]'>
                                            {item.logos.map((logo, i) => {
                                                return (
                                                    <div className='w-[55px] md:w-[47px]'>
                                                        <img src={logo} alt="" />
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

export default OurTechStack
