import React from 'react'
import { Styles } from '../utils/style'
import { Projects } from '../constants'
import Tilt from 'react-parallax-tilt'
import { TiSocialGithub } from 'react-icons/ti'
import {SiNetlify} from 'react-icons/si'

function Project() {
  return (
    <div>
      <div className='flex-row items-center pl-5 justify-center pt-3 ' id='Project'>
        <span className={Styles.sectionHeadText}>
            Projects
        </span>
        <hr className='w-[35%]'></hr>

        <div className={Styles.sectionText}>
            Following projects showcases my skills and experience through real-world examples of my work.Completed an intensive program covering front-end and back-end development using HTML, CSS, JavaScript, Node. js and React. Developed and deployed multiple web applications, demonstrating proficiency in full-stack development.
        </div>

      </div>

      <div className='flex flex-wrap p-8 justify-evenly items-center'>
        {Projects.map((project) =>(
            <Tilt key={project.name} className='w-[300px] h-[500px] flex flex-col  justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900'>

            <div>
                <div className='flex justify-center items-center mb-3'>

                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                <a href={project.source_deploy_link} target='blank'>
                    <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>
                </a>
                    
                </div>

                <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center'>
                <a href={project.source_code_link} target='blank'>
                    <TiSocialGithub className="text-3xl font-bold text-violet-600"></TiSocialGithub>
                </a>
                    
                </div>




                  </div>

                  <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl '/>

                <div className='text-2xl text-violet-600 font-extrabold text-center'>
                   {project.name}
                </div>

                <div className='text-center'>
                    <span className='text-orange-500'>
                        {project.description}
                    </span>
                   </div>
            </div>

            </Tilt>
        )
        )}
      </div>



    </div>
  )
}

export default Project
