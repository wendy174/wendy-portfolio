import React from "react"; 
import { Button } from "@/components/ui/button"; 
import profile from '../assets/profile.jpeg'; 

const Hero: React.FC = () => { 
    return ( 
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-purple-500/70"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none text-left">
                    Hi, I'm <span className="text-pink-200">Wendy Yeung</span>
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl text-left">Open to Solution Engineer Opportunities</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-pink-600 hover:bg-pink-100">
                    <a href="#projects">View My Work</a>
                  </Button>
                  <Button className="bg-pink-200 text-pink-800 hover:bg-pink-300">
                    <a href="https://docs.google.com/document/d/1kta2oF36xkM4cp67sHv6F4wlkMwYyEf6zoI7nR7Vw0s/edit?usp=sharing" target="_blank" className="flex items-center gap-1" rel="noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-file-text"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" x2="8" y1="13" y2="13" />
                        <line x1="16" x2="8" y1="17" y2="17" />
                        <line x1="10" x2="8" y1="9" y2="9" />
                      </svg>
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img src={profile} alt="Profile" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Go to About section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>
          </div>
        </section>
    )

}

export default Hero; 