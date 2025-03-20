import React from "react";
import { Heart, Pill, Laptop, Sparkles } from "lucide-react";
import AboutBadge from "./AboutBadge"; // Importing the fixed badge component
import cat from '../assets/cat.webp'; 

const About: React.FC = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {/* About Me Header */}
          <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
            About Me
          </div>

          {/* Intro Text */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">
              Hello, I'm Wendy!
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a software engineer with a background in pharmacy, currently looking for a Solution Engineering
              role where I can combine my technical skills with problem-solving to create impactful solutions. 
              In my free time, I build demos, experiment with no-code low-code platforms, and explore new tech trends. 
              Whether it's optimizing systems, integrating APIs, or creating something from scratch, I enjoy 
              the challenge of bringing ideas to life. If you'd like to connect or collaborate, feel free to reach out!
            </p>
          </div>

          {/* Grid Layout for Image & Badges */}
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[400px] overflow-hidden rounded-2xl border-4 border-pink-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-pink-300">
                <img src={cat} alt="About me" className="object-cover w-full h-full" />
              </div>
            </div>

            {/* Badges Section */}
            <div className="flex flex-col justify-center space-y-">
              <div className="grid">
                <AboutBadge
                  icon={<Heart className="h-6 w-6" />}
                  title="Passionate Problem Solver"
                  description="Dedicated to creating intuitive solutions that address real-world challenges"
                />
                <AboutBadge
                  icon={<Pill className="h-6 w-6" />}
                  title="Healthcare Background"
                  description="Unique perspective from pharmacy experience that informs my technical solutions"
                />
                <AboutBadge
                  icon={<Laptop className="h-6 w-6" />}
                  title="Full Stack Developer"
                  description="Experienced in both front-end and back-end technologies"
                />
                <AboutBadge
                  icon={<Sparkles className="h-6 w-6" />}
                  title="AI & No-Code Enthusiast"
                  description="Exploring emerging technologies to create accessible and efficient solutions"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <div className="flex justify-center mt-8">
          <a
            href="#skills"
            className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
            aria-label="Go to Skills section"
          >
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
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
