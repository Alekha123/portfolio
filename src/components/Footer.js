import React from 'react'
import {GrGithub, GrLinkedinOption, GrMail, GrSolidPhoneCall} from 'react-icons/gr'
import {BiSolidPhoneCall} from 'react-icons/bi'

function Footer() {
  return (
    <div>
      <div className='w-[screen] bg-black  flex flex-row p-2 gap-40 flex-wrap'>
    

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='https://www.linkedin.com/in/alekha-moharana' target='blank' className='text-lg flex flex-row text-violet-300'>

            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <GrLinkedinOption className='text-white'></GrLinkedinOption>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'> Linkedin</span>

            </a>
        </div>


        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='alekhamoharana8@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300'>

            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <GrMail className='text-white'></GrMail>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'>alekhamoharana8@gmail.com</span>


            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='//' target='blank' className='text-lg flex flex-row text-violet-300'>

            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <BiSolidPhoneCall className='text-white'></BiSolidPhoneCall>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'> +91 9348995532</span>


            </a>
        </div>

        <div className='flex flex-row p-2 flex-wrap justify-around'>
            <a href='https://github.com/Alekha123' target='blank' className='text-lg flex flex-row text-violet-300'>

            <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'>
                <GrGithub className='text-white'></GrGithub>
            </div>
            <span className='text-white ml-1 mt-[0.1rem]'> GitHub</span>


            </a>
        </div>


      </div>
    </div>
  )
}

export default Footer
