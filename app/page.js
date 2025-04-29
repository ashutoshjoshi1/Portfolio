'use client'

import { useState, useEffect } from 'react'
import Switch from 'react-switch'
import Image from 'next/image'
import WorkExperience from './components/WorkExperience'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LightModeAnimation from './components/LightModeAnimation'
import AboutMeAnimation from './components/AboutMeAnimation'
import { useDarkMode } from './context/DarkModeContext'
import { TypeAnimation } from 'react-type-animation'

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()
  const [isHRMode, setIsHRMode] = useState(!isDarkMode)

  // Sync HR mode with dark mode
  useEffect(() => {
    setIsHRMode(!isDarkMode)
  }, [isDarkMode])

  const handleModeChange = (checked) => {
    setIsHRMode(checked)
    // If HR mode is being turned on, we want light mode (isDarkMode = false)
    // If HR mode is being turned off, we want dark mode (isDarkMode = true)
    if (checked !== !isDarkMode) {
      toggleDarkMode()
    }
  }

  return (
    <main className={`relative min-h-screen ${isDarkMode ? 'bg-[#111] pattern-circuit-board-green-800/10' : 'bg-white'}`}>
      <AboutMeAnimation />
      <div className="relative z-10">
        {/* Header Section with Mode Switcher */}
        <div className="bg-blue-600 transition-all duration-200 ease-in dark:bg-green-700">
          <div className="flex flex-col items-center p-8">
            <div className="flex flex-col">
              <div className="self-center">
                <div className="flex items-center space-x-4">
                  <p className="text-white font-medium">IT Mode</p>
                  <Switch
                    onChange={handleModeChange}
                    checked={isHRMode}
                    onColor="#008800"
                    offColor="#008800"
                    height={28}
                    width={56}
                    uncheckedIcon={false}
                    checkedIcon={false}
                  />
                  <p className="text-white font-medium">HR Mode</p>
                </div>
              </div>
              <div className="relative mt-20 flex flex-1 flex-col items-center justify-center self-center pt-0 md:mt-16 md:items-start md:pt-5 lg:mt-24">
                <span className="absolute mx-auto hidden w-full select-none bg-white bg-clip-text py-4 text-center text-2xl font-extrabold text-transparent blur-md sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl dark:flex">
                  Hello, I'm Ashutosh Joshi
                </span>
                <h1 className="relative flex h-auto w-full flex-1 select-auto items-center bg-white bg-clip-text py-4 text-center text-2xl font-extrabold text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
                  <TypeAnimation
                    sequence={[
                      'Hello, I\'m Ashutosh Joshi',
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ marginTop: '-1px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className="fill-blue-600 transition-all duration-200 ease-in dark:fill-green-700" d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,208C1120,203,1280,149,1360,122.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>

        {/* About Me Section */}
        <section id="about" className="min-h-[80vh] flex items-center justify-center -mt-64">
          <div className="container mx-auto relative">
            <LightModeAnimation />
            <div className="mb-2 flex flex-col justify-center relative">
              <div>
                <h2 className="pointer-events-none absolute inset-x-0 mx-auto hidden w-fit select-none bg-white bg-clip-text px-2 text-center text-2xl font-extrabold text-transparent blur-md transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:flex">
                  About Me
                </h2>
                <h2 className="mb-10 px-2 text-center text-2xl font-bold transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:text-white text-gray-800">
                  About Me
                </h2>
              </div>
              <div className="flex justify-center self-center px-3">
                <div className="flex max-w-5xl flex-col items-center lg:flex-row">
                  <div className="flex flex-1 items-center">
                    <p className="text-center transition-all duration-200 ease-in lg:text-right dark:text-white text-gray-800">
                      I'm a software engineer with a passion for learning new technologies. I'm always looking to improve my skills. Performance and maintainability are some of my biggest concerns regarding software development.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-1 lg:ml-16 lg:mt-0">
                    <div className="flex rounded-full border-8 border-gray-900 transition-all duration-200 ease-in dark:border-green-700 overflow-hidden">
                      <Image
                        src="/Portfolio/images/ashu.jpeg"
                        alt="Picture of Ashutosh"
                        width={300}
                        height={300}
                        className="size-72 rounded-full border-gray-900 transition dark:border-green-500 object-cover scale-125 translate-x-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="min-h-[80vh]">
          <div className="container mx-auto relative">
            <div className="mt-0">
              <div>
                <h2 className="pointer-events-none absolute inset-x-0 mx-auto hidden w-fit select-none bg-white bg-clip-text px-2 text-center text-2xl font-extrabold text-transparent blur-md transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:flex">
                  Work Experience
                </h2>
                <h2 className="mb-8 px-2 text-center text-2xl font-bold transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:text-white text-gray-800">
                  Work Experience
                </h2>
              </div>
              <WorkExperience />
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="min-h-[80vh] mt-32">
          <div className="container mx-auto relative">
            <div className="mt-0">
              <div>
                <h2 className="pointer-events-none absolute inset-x-0 mx-auto hidden w-fit select-none bg-white bg-clip-text px-2 text-center text-2xl font-extrabold text-transparent blur-md transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:flex">
                  Tools and technologies I love
                </h2>
                <h2 className="mb-8 px-2 text-center text-2xl font-bold transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:text-white text-gray-800">
                  Tools and technologies I love
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center py-5">
                <Technologies />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-[80vh] -mt-96 mb-0 pb-0">
          <div className="container mx-auto relative">
            <div className="mt-0 mb-0 pb-0">
              <div>
                <h2 className="pointer-events-none absolute inset-x-0 mx-auto hidden w-fit select-none bg-white bg-clip-text px-2 text-center text-2xl font-extrabold text-transparent blur-md transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:flex">
                  My Projects
                </h2>
                <h2 className="mb-8 px-2 text-center text-2xl font-bold transition-all duration-200 ease-in sm:text-3xl md:text-4xl dark:text-white text-gray-800">
                  My Projects
                </h2>
              </div>
              <div className="mb-0 pb-0">
                <Projects />
              </div>
              <div className="flex justify-center gap-6 mt-12 mb-0">
                <a 
                  href="/Portfolio/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-green-700 dark:hover:bg-green-800 animate-pulse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
                <a 
                  href="tel:+15513446092" 
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-green-700 dark:hover:bg-green-800 animate-pulse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone
                </a>
                <a 
                  href="mailto:ashutxsh.jxshi@gmail.com" 
                  className="flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg dark:bg-green-700 dark:hover:bg-green-800 animate-pulse"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer className="mt-0 -mt-[320rem] mb-0 pb-0" />
    </main>
  )
} 