'use client'

import { useDarkMode } from '../context/DarkModeContext'
import Image from 'next/image'

const experiences = [
  {
    company: 'Sciglob Instruments and Services - NASA GFSC',
    position: 'Software Engineer',
    location: 'Columbia, Maryland',
    period: 'November 2024 - Present',
    description: 'Making the data acquisition, processing and storage pipeline for the NASA, GFSC ongoing project PANDORA.',
    logo: '/images/sciglob.jpg',
    link: 'https://sciglob.com'
  },
  {
    company: '407 Associates',
    position: 'Data Analyst & Developer',
    location: 'Laurel, Maryland',
    period: 'April 2024 - November 2024',
    description: 'Development of a custom web application for the company to manage their resources and projects.',
    logo: '/images/407.jpg',
    link: 'https://407associates.com'
  },
  {
    company: 'University of Maryland Baltimore County',
    position: 'Graduate Student Assistant',
    location: 'Baltimore, Maryland',
    period: 'January 2023 - December 2023',
    description: 'Worked as a Grader and Teaching Assistant for the University of Maryland Baltimore County. Developed a custom web application for the professors to manage students assignments and grades.',
    logo: '/images/umbc.jpg',
    link: 'https://umbc.edu'
  },
  {
    company: 'Tata Consultancy Services',
    position: 'System Engineer',
    location: 'Bangalore, India',
    period: 'June 2020 — August 2022',
    description: 'Developed a custom pipeline for the client(Albertsons Co.) to maintain their inventory and orders.',
    logo: '/images/tcs.jpg',
    link: 'https://tcs.com'
  }
]

export default function WorkExperience() {
  const { isDarkMode } = useDarkMode()

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-green-800"></div>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-green-700 z-10"></div>
            
            {/* Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
              <div className="p-4 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold dark:text-white text-gray-800">{exp.position}</h3>
                </div>
                <h4 className="text-lg font-semibold dark:text-white text-gray-800 mb-1">{exp.company}</h4>
                <p className="text-sm dark:text-gray-300 text-gray-600 mb-2">{exp.location}</p>
                <p className="dark:text-white text-gray-800 mb-2">{exp.description}</p>
                <p className="text-sm font-medium dark:text-green-400 text-blue-600">{exp.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 