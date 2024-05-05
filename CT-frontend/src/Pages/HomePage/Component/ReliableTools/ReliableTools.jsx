import React, { useState } from 'react'
import './reliableTool.css'
const ReliableTools = () => {
    const reliableTool = [{
        title: "Web Development",
        stack: [{
            name: "Backend",
            logos: [
                require('../assets/reliableTech/backend/java.png'),
                require('../assets/reliableTech/backend/go.png'),
                require('../assets/reliableTech/backend/nodejs.png'),
                require('../assets/reliableTech/backend/php.png'),
                require('../assets/reliableTech/backend/python.png')
            ]
        },
        {
            name: "FrontEnd", logos: [
                require('../assets/reliableTech/frontendLogo/react.png'),
                require('../assets/reliableTech/frontendLogo/js.png'),
                require('../assets/reliableTech/frontendLogo/html.png'),
                require('../assets/reliableTech/frontendLogo/css.png'),
                require('../assets/reliableTech/frontendLogo/angular.png'),
            ]
        }
        ]

    }, {
        title: "Mobile", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/Mobiles/android.png'),
                require('../assets/reliableTech/Mobiles/flutter.png'),
                require('../assets/reliableTech/Mobiles/ios.png'),
                require('../assets/reliableTech/Mobiles/pwa.png'),
                require('../assets/reliableTech/Mobiles/reactjs.png'),

            ]
        }]
    }, {
        title: "Desktop", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/desktop/c++.png'),
                require('../assets/reliableTech/desktop/c#.png'),
                require('../assets/reliableTech/desktop/obj-c.png'),
                require('../assets/reliableTech/desktop/python.png'),
                require('../assets/reliableTech/desktop/swift.png')
            ]
        }]
    }, {
        title: "Platform", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/platform/dynamic365.png'),
                require('../assets/reliableTech/platform/adobeCommerse.png'),
                require('../assets/reliableTech/platform/powerBi.png'),
                require('../assets/reliableTech/platform/salesForce.png'),
                require('../assets/reliableTech/platform/serviceNow.png'),
            ]
        }]
    }, {
        title: "Cloud", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/cloud/Azure.png'),
                require('../assets/reliableTech/cloud/aws.png'),
                require('../assets/reliableTech/cloud/digitalOcean.png'),
                require('../assets/reliableTech/cloud/googleCloud.png'),
                require('../assets/reliableTech/cloud/rackspace.png'),
            ]
        }]
    }, {
        title: "Relational Database / Data Storage", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/relational_database/azureDynamic.png'),
                require('../assets/reliableTech/relational_database/mysql.png'),
                require('../assets/reliableTech/relational_database/oracle.png'),
                require('../assets/reliableTech/relational_database/postgreSQL.png'),
                require('../assets/reliableTech/relational_database/sqlServer.png')
            ]
        }]
    }, {
        title: "Big Data", stack: [{
            name: "", logos: [
                require('../assets/reliableTech/big_data/Rectangle34440.png'),
                require('../assets/reliableTech/big_data/azurCloud.png'),
                require('../assets/reliableTech/big_data/azureBlub.png'),
                require('../assets/reliableTech/big_data/azureDataLake.png'),
                require('../assets/reliableTech/big_data/canssandra.png')
            ]
        }]
    }, {
        title: "Machine Learning", stack: [{
            name: "Programming Language", logos: [
                require('../assets/reliableTech/machin_learning/programm_laung/matalab.png'),
                require('../assets/reliableTech/machin_learning/programm_laung/programming1.png'),
                require('../assets/reliableTech/machin_learning/programm_laung/rProgramming.png'),
                require('../assets/reliableTech/machin_learning/programm_laung/sas.png'),
                require('../assets/reliableTech/machin_learning/programm_laung/spss.png'),
            ]
        },
        {
            name: "Frameworks", logos: [
                require('../assets/reliableTech/machin_learning/framworks/caffe.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        },
        {
            name: "Libraries", logos: [
                require('../assets/reliableTech/machin_learning/libraries/gensim.png'),
                require('../assets/reliableTech/machin_learning/libraries/skikit_learn.png'),
                require('../assets/reliableTech/machin_learning/libraries/spacy.png'),
                require('../assets/reliableTech/machin_learning/libraries/spark.png'),
                require('../assets/reliableTech/machin_learning/libraries/tensorFlow.png'),
            ]
        },

        {
            name: "cloud Service", logos: [
                require('../assets/reliableTech/machin_learning/cloud_Service/aiML.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/amazonSagaMaker.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/aml.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/azML.png'),
                require('../assets/reliableTech/machin_learning/cloud_Service/oracle.png')
            ]
        }]
    }, {
        title: "Devops", stack: [{
            name: "Containerization", logos: [
                require('../assets/reliableTech/devops/Containerization/box.png'),
                require('../assets/reliableTech/devops/Containerization/docker.png'),
                require('../assets/reliableTech/devops/Containerization/kubernetes.png'),
                require('../assets/reliableTech/devops/Containerization/mesos.png'),
                require('../assets/reliableTech/devops/Containerization/openshift.png'),
            ]
        }, {
            name: "Automation", logos: [
                require('../assets/reliableTech/devops/Automation/ansible.png'),
                require('../assets/reliableTech/devops/Automation/chef.png'),
                require('../assets/reliableTech/devops/Automation/puppet.png'),
                require('../assets/reliableTech/devops/Automation/saltStack.png'),
                require('../assets/reliableTech/devops/Automation/terraform.png'),
            ]
        }, {
            name: "CI/CD Tools", logos: [
                require('../assets/reliableTech/devops/CICDTools/CI_CD.png'),
                require('../assets/reliableTech/devops/CICDTools/awsDevTools.png'),
                require('../assets/reliableTech/devops/CICDTools/azureDevops.png'),
                require('../assets/reliableTech/devops/CICDTools/googlCloud.png'),
                require('../assets/reliableTech/devops/CICDTools/jenkins.png'),
            ]
        }, {
            name: "Monitoring", logos: [
                require('../assets/reliableTech/devops/Monitoring/elasicsSearch.png'),
                require('../assets/reliableTech/devops/Monitoring/grafana.png'),
                require('../assets/reliableTech/devops/Monitoring/nagios.png'),
                require('../assets/reliableTech/devops/Monitoring/prometheus.png'),
                require('../assets/reliableTech/devops/Monitoring/zabbix.png'),
            ]
        },]
    }, {
        title: "Test automation tools", stack: [{
            name: "Technologies", logos: [
                require('../assets/reliableTech/Testautomationtools/Technologies/Protractor.png'),
                require('../assets/reliableTech/Testautomationtools/Technologies/appium.png'),
                require('../assets/reliableTech/Testautomationtools/Technologies/fmbt.png'),
                require('../assets/reliableTech/Testautomationtools/Technologies/jmeter.png'),
                require('../assets/reliableTech/Testautomationtools/Technologies/postman.png')
            ]
        }]
    }, {
        title: "Information security", stack: [{
            name: "Technologies", logos: [
                require('../assets/reliableTech/informationTEch/nessus.png'),
                require('../assets/reliableTech/informationTEch/Rectangle34437.png'),
                require('../assets/reliableTech/informationTEch/acunetix.png'),
                require('../assets/reliableTech/informationTEch/burpSuite.png'),
                require('../assets/reliableTech/informationTEch/cloudFlare.png'),
            ]
        }]
    }];


    return (
        <div className='w-[100vw] h-[60vh] bg-[black] text-[white] box-border overflow-y-auto pb-[40px]'>
            <div className='w-[85%] md:w-[100%] bg-[#141414] mx-auto text-[white] flex flex-wrap justify-between md:flex-col md:overflow-x-hidden'>
                {reliableTool.map((items, i) => {
                    return (
                        <div key={i} className={items.stack.length > 1 ? 'w-[100%] border-b border-[#303030] py-4' : 'w-[50%] border-b border-[#303030] py-4 md:w-[100%]'}>
                            <h2 className='text-[20px] font-medium ms-3 md:ms-4 md:text-[14px] w-[100%]'>{items.title}</h2>
                            <div className={items.stack.length > 1 ? 'flex w-[100%] gap-x-[100px] flex-wrap gap-y-[40px]' : 'flex w-[100%]'}>
                                {items.stack.map((item, j) => (
                                    <div key={j} className='px-5 pt-3'>
                                        <h3 className='text-[13px]'>{item.name}</h3>
                                        <div className='flex gap-[20px] mt-2 md:gap-[10px]'>
                                            {item.logos.map((logo, k) => (
                                                <div key={k} className='w-[55px] md:w-[47px]'>
                                                    <img src={logo} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                    )
                })}


            </div >
        </div >
    )
}

export default ReliableTools
