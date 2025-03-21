import React from "react"; 
import { Button } from "@/components/ui/button"; 


const Header: React.FC = () => { 
    return ( 
        <header className="sticky top-0 z-40 w-full border-b border-pink-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium transition-colors hover:text-pink-600">
              About
            </a>
            <a href="#skills" className="text-sm font-medium transition-colors hover:text-pink-600">
              Skills
            </a>
            <a href="#projects" className="text-sm font-medium transition-colors hover:text-pink-600">
              Projects
            </a>
            <a href="#experience" className="text-sm font-medium transition-colors hover:text-pink-600">
              Experience
            </a>
            <a href="#education" className="text-sm font-medium transition-colors hover:text-pink-600">
              Education
            </a>
            <a href="#contact" className="text-sm font-medium transition-colors hover:text-pink-600">
              Contact
            </a>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button className="bg-pink-600 hover:bg-pink-700" size="sm">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </header>
    )
}


export default Header; 