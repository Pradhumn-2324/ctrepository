import React, { useState } from 'react'
import './techTools.css'
const TechTools = () => {
    const reliableTool = [{
        title: "Web Development",
        stack: [{
            name: "Backend",
            logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/backend/java.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/backend/go.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/backend/nodejs.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/backend/php.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/backend/python.png')
            ]
        },
        {
            name: "FrontEnd", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/frontendLogo/react.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/frontendLogo/angular.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/frontendLogo/css.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/frontendLogo/html.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/frontendLogo/js.png'),
            ]
        }
        ]

    }, {
        title: "Mobile", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Mobiles/android.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Mobiles/flutter.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Mobiles/ios.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Mobiles/pwa.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Mobiles/reactjs.png'),

            ]
        }]
    }, {
        title: "Desktop", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/desktop/c++.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/desktop/c#.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/desktop/obj-c.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/desktop/python.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/desktop/swift.png')
            ]
        }]
    }, {
        title: "Platform", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/platform/Rectangle34440.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/platform/adobeCommerse.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/platform/dynamic365.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/platform/powerBi.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/platform/salesForce.png'),
                // require('../assets/reliableTech/platform/sharePoint.png'),
                // require('../assets/reliableTech/platform/Rectangle34440.png')
            ]
        }]
    }, {
        title: "Cloud", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/cloud/Azure.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/cloud/aws.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/cloud/digitalOcean.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/cloud/googleCloud.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/cloud/rackspace.png'),

            ]
        }]
    }, {
        title: "Relational Database / Data Storage", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/azureDynamic.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/mysql.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/oracle.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/postgreSQL.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/sqlServer.png')
            ]
        }]
    }, {
        title: "Big Data", stack: [{
            name: "", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/azureDynamic.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/mysql.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/oracle.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/postgreSQL.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/relational_database/sqlServer.png'),
        
            ]
        }]
    }, {
        title: "Machine Learning", stack: [{
            name: "Programming Language", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/programm_laung/matalab.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/programm_laung/programming1.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/programm_laung/rProgramming.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/programm_laung/sas.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/programm_laung/spss.png'),
            
              

            ]
        },
        {
            name: "Frameworks", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/framworks/caffe.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/framworks/keras.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/framworks/mahout.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/framworks/mframwork.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/framworks/openCV.png')
                
            ]
        },
        {
            name: "Libraries", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/libraries/gensim.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/libraries/skikit_learn.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/libraries/spacy.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/libraries/spark.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/libraries/tensorFlow.png')
             

            ]
        },

        {
            name: "cloud Service", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/cloud_Service/aiML.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/machin_learning/cloud_Service/oracle.png'),
          
            ]
        }]
    }, {
        title: "Devops", stack: [{
            name: "Containerization", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Containerization/box.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Containerization/docker.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Containerization/kubernetes.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Containerization/mesos.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Containerization/openshift.png'),
            ]
        }, {
            name: "Automation", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Automation/ansible.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Automation/chef.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Automation/puppet.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Automation/saltStack.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Automation/terraform.png'),
            ]
        }, {
            name: "CI/CD Tools", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/CICDTools/CI_CD.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/CICDTools/awsDevTools.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/CICDTools/azureDevops.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/CICDTools/googlCloud.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/CICDTools/jenkins.png'),

            ]
        }, {
            name: "Monitoring", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Monitoring/elasicsSearch.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Monitoring/grafana.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Monitoring/nagios.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Monitoring/prometheus.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/devops/Monitoring/zabbix.png'),
              

            ]
        },]
    }, {
        title: "Test automation tools", stack: [{
            name: "Technologies", logos: [
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/Protractor.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/appium.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/fmbt.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/jmeter.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/postman.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/quicktest.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/ranorex.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/se.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/test1.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/unifiedFunctionTesting.png'),
                require('../../../../../assets/ByClientType/StartUpDev/Solution/reliableTech/Testautomationtools/Technologies/xcTest.png'),
                

            ]
        }]
    }, ];


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

export default TechTools
