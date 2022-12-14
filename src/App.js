import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { IoMenu, IoLogoGithub } from "react-icons/io5"

import Brandon from "./images/brandon.jpg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from './data';

import BRResume from "./Resume/Brandon's Tech RESUME.pdf"


import { AnimatePresence, motion } from "framer-motion"

function App() {
  
  const [isActive, setIsActive] = useState(false)



  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
        
        {/* Navigation Bar */}
        <nav className='w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center'>
          <div className='w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center'>
            <p className='text-lg text-slate-200 font-medium'>Brandon Rodriguez</p>
            <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
              <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
              ease-in-out'>Home</a>
              <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
              ease-in-out'>About</a>
              <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
              ease-in-out'>Projects</a>
              <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
              ease-in-out'>Contact</a>
              <a 
                href={BRResume}
                className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out' target="_blank">
                  Resume
              </a>
            </div>

            <motion.div
              whileTap={{scale: 0.5}}
              className='block md:hidden ml-auto cursor-pointer'
              onClick={() => setIsActive(!isActive)}
            >
              <IoMenu className='text-2xl text-textBase' />
            </motion.div>

            {isActive && (
              <div 
              className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-center 
              gap-6'>
                <a href='#home' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
                ease-in-out' onClick={() => setIsActive(false)} >Home</a>
                <a href='#about' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
                ease-in-out' onClick={() => setIsActive(false)} >About</a>
                <a href='#projects' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
                ease-in-out' onClick={() => setIsActive(false)} >Projects</a>
                <a href='#contact' className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 
                ease-in-out' onClick={() => setIsActive(false)} >Contact</a>
                <a href={BRResume} className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer 
                border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out' target="_blank" onClick={() => setIsActive(false)} >
                  Resume</a>
              </div>
            )}
          </div>
        </nav>
        
        <div className="relative h-screen w-screen" id="home">
          <Spline scene="https://prod.spline.design/EUlY-HI9cXnaBLJ1/scene.splinecode" />

          <div className='absolute bottom-2 w-full justify-center items-center flex gap-3 invisible md:visible'>
            <div className='shadow-md p-2 flex items-center justify-center bg-zinc-900 rounded-3xl'>
              <p className='text-white'>Move: WASD Keys</p>
            </div>
            <div className='shadow-md p-2 flex items-center justify-center bg-zinc-900 rounded-3xl'>
              <p className='text-white'>Jump: Space Key</p>
            </div>
            <div className='shadow-md p-2 flex items-center justify-center bg-zinc-900 rounded-3xl'>
              <p className='text-white'>Camera: Arrows Keys</p>
            </div>
          </div>
        </div>


        {/* Main Sections */}

        <main className='w-[80%] mt-5'>
          {/* about */}
          <section className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24' 
          id='about'>
            {/* image box */}
            <div className='w-full h-420 flex items-center justify-center'>
              <div className='w-275 h-340 bg-navBar rounded-md relative'>
                <img className='w-fill h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg' 
                  src={Brandon} 
                  alt=''
                />
              </div>
            </div>

            {/* content box */}
            <div className='w-full h-300 flex flex-col items-center justify-center'>
              <p className='text-lg text-navBar text-center'>
                I'm a 21 year-old American <b>frontend software engineer</b> with a strong passion 
                for developing websites with great <b>user experiences.</b> <br/>
                I'm currently working on extremely difficult engineering problems and learning from a 
                team, consisting of some of the most <b>talented</b> and <b>experienced</b> software engineers every day.
              </p>

              <motion.button 
                whileTap={{scale : 0.8}} 
                class="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
              font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 
              hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg 
              hover:dark:shadow-teal-800/80">
                <a href={BRResume} class="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" target="_blank">
                  Resume
                </a>
              </motion.button>
            </div>
          </section>

          {/* Timeline */}
          
          <section className='w-full flex items-center justify-center'>
            <VerticalTimeline>
              {Experience &&
                Experience.map((n) => (
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(21, 24, 31)",
                      color: "#888",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(21, 24, 31)",
                    }}
                    date={n.date}
                    iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">
                      {n.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {n.location}
                    </h4>
                    <p>{n.description}</p>
                  </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </section>
          
          {/* Projects */}
          <section className='flex flex-wrap items-center justify-evenly my-24 gap-4' id='projects'>
          {Projects &&
            Projects.map((n, i) => (
              <motion.div
                key={n.id}
                className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
              >
                <p className="text-lg text-navBar font-medium uppercase">
                  {n.name.length > 25 ? `${n.name.slice(0, 25)}...` : n.name}
                </p>

                <img
                  src={n.imageSrc}
                  className="w-full h-full object-cover rounded-md my-4"
                  alt=""
                />

                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-navBar">
                    Technologies
                    <span className="block text-sm text-navBar">
                      {n.techs.length > 25 ? `${n.techs.slice(0, 25)}...` : n.techs}
                    </span>
                  </p>
                  <a href={n.github} target="_blank">
                    <motion.div whileTap={{ scale: 0.5 }}>
                      <IoLogoGithub className="text-navBar text-3xl cursor-pointer" />
                    </motion.div>
                  </a>
                </div>
              </motion.div>
            ))}
          </section>

          {/* contact */}
          <section id='contact' className='flex flex-col items-center justify-center w-full my-24'>
            <p className='text-2xl text-navBar capitalize'>Follow Me On</p>
            <div className='flex items-center justify-center w-full my-4 flex-wrap gap-4'>
              {SocialLinks &&
                SocialLinks.map((n) => (
                  <motion.a
                    whileTap={{ scale: 0.8 }}
                    href={n.link} target="_blank"
                    key={n.id}
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                  >
                    {n.iconSrc}
                    <p className="text-lg text-navBar">{n.name}</p>
                  </motion.a>
              ))} 
            </div>
          </section>
          
        </main> 
      </div>
    </AnimatePresence>
  );
}

export default App;
