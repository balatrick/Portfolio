import React from 'react'
import { Element } from 'react-scroll'
import Project from '../Project/Project'
import "./projectContainer.css"

const ProjectContainer = () => {

    const projects = [
        {
            img:"https://content.api.citibank.com/v1/files/aegcb/digital/styles/convert_webp/public/styles/crop_desktop/public/images/2022/picture1_2.jpg.webp",
            title: "CitiBank",
            desc: "i have completed citbank pages in arabic. ", 
            link: "Www.citibank.ae",
        },
        {
            img:"https://th.bing.com/th/id/OIP.CzKR8qCBEI1YmwOT_ND38gHaEs?w=310&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "the Federal",
            desc: "restructuring in federal staic pages creation in 100+ pages",
            link: "www.the federal.com",
        },
        {
            img:"https://th.bing.com/th?id=ORMS.f0cc87fcd40877e112a85358a2058674&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
            title: "Image Audit",
            desc: "This project MVC controller. i have working in .net Ui developing", 
            link: "www.google.com",
        },
        {
            img:"https://th.bing.com/th/id/OIP.zze_iIn9c4wtlSynspehZQHaDt?w=297&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title: "SRM ",
            desc: "SRM college Admission open pages creation", 
            link: "https://www.srmonline.in/lp/srm-online-mba.html?msclkid=641fdfa522591f33c74bbb75573f8943&&utm_source=bing&utm_medium=brand-phrase-tn&utm_campaign=brand-phrase-tn-ser-ctw-pr-srm_mba&adgroup_id=1264439311618932&campaign_id=686438605&Keyword=mba%20srm%20university&placement=&msclkid=641fdfa522591f33c74bbb75573f8943"
        },
        {
            img:"https://th.bing.com/th?id=ORMS.ab8d82aa5b0fd8117ab8f868bd25cde9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
            title: "Facebook",
            desc: "lorem sdkjsfh nsdnfksbjfbjsdbfj  sbfjsdbjfbsjbdfjbsdjfbs sjdfbjsdbjfb", 
            link: "www.google.com"
        },
        {
            img:"https://th.bing.com/th?id=ORMS.ab8d82aa5b0fd8117ab8f868bd25cde9&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0",
            title: "Facebook",
            desc: "lorem sdkjsfh nsdnfksbjfbjsdbfj  sbfjsdbjfbsjbdfjbsdjfbs sjdfbjsdbjfb", 
            link: "www.google.com"
        },
        {
            img:"https://media.licdn.com/dms/image/C5103AQGKtUSmXQoEXg/profile-displayphoto-shrink_400_400/0/1531050178441?e=1697068800&v=beta&t=Fugw_L_Og-CnirVylIGj_rVv0W75pW-5_zP0XALAH_Y",
            title: "Pixl banda brand studio",
            desc: "lorem sdkjsfh nsdnfksbjfbjsdbfj  sbfjsdbjfbsjbdfjbsdjfbs sjdfbjsdbjfb", 
            link: "www.google.com"
        },
    ]


    return (
    <Element className="projectContainer" id="project">

    <h1>Projects</h1>    
    <p>Hera are some which: i have done for making live of people easy</p>
    <div className='projectContainer__project'>
    {
        projects.map((project, index)=>{
            return (
               <Project
                 key={index}
                  img={project.img}
                   title={project.title}
                    desc={project.desc}
                     link={project.link}>

              </Project>
            )
        })
    }
    </div>
    </Element>
  )
}


export default ProjectContainer
