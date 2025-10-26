import { Navbar } from 'app/components/nav'
import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import Image from 'next/image'
// import duckGif from 'app/images/dancing-duck-danse.gif'

export default function Page() {
  return (
    <section className='font-[Futura]'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className="text-6xl tracking-tighter">
          projects
        </h1>
        <Image className='size-32 shadow-lg filter backdrop-blur-sm align' src='/images/dancing-duck-danse.gif' alt='' width={300} height={300} />
      </div>
      <Navbar />
        <p className='text-m text-gray-400'>This is a list of projects that I feel are actually finished, and have bothered to publish: </p>
        <div className='grid gap-6 text-xl'>
            <div className='grid gap-2 mt-6'>
              <div>
                <h3 className='text-2xl font-bold text-gray-50'>Eurosearcher</h3>
              </div>
              <div className='grid md:grid-cols-2 gap-2'>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Frameworks</h4>
                  <p className='text-gray-400'>React, Flask</p>
                </div>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Technologies</h4>
                  <p className='text-gray-400'>Tailwind CSS, PostgreSQL, AWS Lambda</p>
                </div>
              </div>
              <div className='flex items-center gap-4 mt-4'>
                <div className="flex items-center gap-4">
                  <Link className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50" href='https://github.com/CarsenKennedy/EU4-flask-api'>
                    <SiGithub size={20} />
                    <span>View on GitHub</span>
                  </Link>
                  <Link className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50" href='https://carsenkennedy.github.io/EU4-React/'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <hr className='my-1 opacity-20'></hr>
            <div className='grid gap-2 mt-2'>
              <div>
                <h3 className='text-2xl font-bold text-gray-50'>This Website</h3>
              </div>
              <div className='grid md:grid-cols-2 gap-2'>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Frameworks</h4>
                  <p className='text-gray-400'>React, Next.js</p>
                </div>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Technologies</h4>
                  <p className='text-gray-400'>TypeScript, Tailwind CSS, MDX, Vercel</p>
                </div>
              </div>
              <div className='flex items-center gap-4 mt-4'>
                <div className="flex items-center gap-4">
                  <Link className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50" href='https://github.com/0xYezi/portfolio-website'>
                    <SiGithub size={20} />
                    <span>View on GitHub</span>
                  </Link>
                  <Link className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-50" href='https://yezi.dev'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </div>
            <hr className='my-1 opacity-20'></hr>
            <div className='grid gap-2 mt-2'>
              <div>
                <h3 className='text-2xl font-bold text-gray-50'>Homelab</h3>
              </div>
              <div className='grid md:grid-cols-2 gap-2'>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Frameworks</h4>
                  <p className='text-gray-400'>N/A</p>
                </div>
                <div>
                  <h4 className='font-medium mb-1 text-gray-400'>Technologies</h4>
                  <p className='text-gray-400'>Proxmox, Docker</p>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}