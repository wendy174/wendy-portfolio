import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Heart, Code, Briefcase, GraduationCap } from "lucide-react"
import { ProjectCarousel } from "@/components/project-carousel"
import profile from './assets/profile.jpeg'; 
import cat from './assets/cat.webp'; 



// Project data
const projects = [
  {
    id: 1,
    title: "Messaging Platform",
    description:
      "A messaging platform built with Retool and Twilio, enabling individualized or bulk messaging and phone number information lookups",
    image: "/images/project-1.jpg",
    bullets: [
      "Facilitates bulk messaging, automated calls, and conference hosting",
      "Enables contact management within the Retool interface",
      "Leveraged Retool Workflows to retrieve carrier, name, and address details",
    ],
    technologies: ["Retool", "Twilio", "JavaScript"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Gift Boutique",
    description:
      "Online marketplace that delivers a user-friendly interface for customers to explore and purchase unique gifts",
    image: "/images/project-2.jpg",
    bullets: [
      "Crafted a full stack application using React, Ruby on Rails, and Material UI",
      "Employed Firebase's authentication for secure login experience",
      "Ensured high scalability using AWS EC2 and Docker for containerization",
    ],
    technologies: ["React", "Ruby on Rails", "Material UI", "Firebase"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "Asian Bites",
    description:
      "Comprehensive guide to finding the best Asian restaurants with reviews from a community of food enthusiasts",
    image: "/images/project-3.jpg",
    bullets: [
      "Designed and implemented a full stack application and RESTful API",
      "Utilized native rails validations and error handling for security",
      "Enabled secure password hashing and salting with bcrypt",
    ],
    technologies: ["Node.js", "React", "Ruby on Rails", "RESTful API"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 4,
    title: "YesChef",
    description: "Full stack application that enables users to browse, search and save recipes",
    image: "/images/yeschef.jpg",
    bullets: [
      "Applied agile methodologies to collaborate with a team of 3 members in the development of a scalable recipe application using React and Sinatra",
      "Constructed a robust filter functionality which allows users to refine recipe search results based on cooking difficulty, cooking time, and cuisine preferences",
      "Heightened user interaction by enabling users to indicate their likes and dislikes for recipes, fostering a more personalized experience",
    ],
    technologies: ["React", "Sinatra", "JavaScript"],
    githubUrl: "https://github.com/wendy174/YesChef",
    demoUrl: "https://www.loom.com/share/ff887918a7c44384894fdfd4be11ee49",
  },
  {
    id: 5,
    title: "XKCD Comic",
    description: "Front end application that enables users to explore a diverse collection of 20+ comics",
    image: "/images/xkcd.jpg",
    bullets: [
      "Elevated user interaction by creating a platform that allows user to favorite comics, share comics, and engage in comment threads",
      "Enhanced user engagement by providing a dedicated page to showcase their favorite comics",
      "Designed an intuitive interface for browsing and discovering new comics",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/wendy174/XKCDComic",
    demoUrl: "https://github.com/wendy174/XKCDComic/blob/main/comic.png",
  },
]

export default function Home() {

  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
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

      <main className="flex flex-col items-center">
        {/* Hero Section */}
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
                    <a href="https://docs.google.com/document/d/1UDAqAEMpvZ7AbyWASgQ_s1xICGX0czrb5e5MFTVtY_g/edit?usp=sharing" target="_blank" className="flex items-center gap-1" rel="noreferrer">
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

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">About Me</div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Hello, I'm Wendy!</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a passionate Software Engineer and Solution Engineer with expertise in both front-end and back-end
                  technologies. I love creating intuitive and engaging user experiences while ensuring robust and
                  scalable backend solutions.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <div className="flex justify-center">
                  <div className="relative h-[400px] w-[400px] overflow-hidden rounded-2xl border-4 border-pink-200 shadow-lg">
                    <img src={cat} alt="About me" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="grid gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                        <Heart className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">Passionate</h3>
                        <p className="text-sm text-muted-foreground">
                          About creating intuitive and engaging user experiences
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                        <Code className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">Full Stack Developer</h3>
                        <p className="text-sm text-muted-foreground">
                          Experienced in both front-end and back-end technologies
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-semibold">Professional Background</h3>
                        <p className="text-sm text-muted-foreground">
                          Unique blend of pharmacy and software engineering expertise
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
                My Skills
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Technical Expertise</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are the technologies and tools I work with.
                </p>
              </div>
              <div className="mx-auto w-full max-w-5xl py-12">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-pink-600">Front-End</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "JavaScript",
                          "React",
                          "HTML5",
                          "CSS3",
                          "Bootstrap",
                          "Material UI",
                          "Tailwind",
                          "Retool",
                          "Appsmith",
                        ].map((skill) => (
                          <Badge key={skill} className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-pink-600">Back-End</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Ruby on Rails",
                          "Sinatra",
                          "SQLite",
                          "PostgreSQL",
                          "MongoDB",
                          "REST APIs",
                          "Node.js",
                          "Firebase",
                        ].map((skill) => (
                          <Badge key={skill} className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-pink-600">Tools</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {["Docker", "Git", "GitHub", "Postman", "Twilio", "Excel", "Google Sheets"].map((skill) => (
                          <Badge key={skill} className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="#projects"
                className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                aria-label="Go to Projects section"
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

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
                My Projects
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Featured Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects.
                </p>
              </div>
              <div className="mx-auto w-full max-w-5xl py-12">
                <ProjectCarousel projects={projects} />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="#experience"
                className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                aria-label="Go to Experience section"
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

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
                Work Experience
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Professional Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional experience and career path.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl py-12">
                <div className="space-y-8">
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-pink-600">Floater Pharmacist</CardTitle>
                          <CardDescription>Kinney Drugs, Burlington, VT</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">December 2021 – Present</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>
                          Recommended and executed prescription system that increased efficiency by 12% and reduced
                          errors by 8%
                        </li>
                        <li>
                          Coordinated with HR to aid in recruiting and training of 7 newly hired pharmacy technicians
                          and 2 pharmacists that boosted performance and efficiency by 16%
                        </li>
                        <li>
                          Led community outreach activities to promote pharmacy growth by 20% by providing immunizations
                          and diabetes awareness services
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-pink-600">Staff Pharmacist</CardTitle>
                          <CardDescription>CVS, Morrisville, VT</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">October 2021 - December 2021</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>
                          Verified and dispensed prescriptions with 98% accuracy leading to 85% customer satisfaction
                          rate
                        </li>
                        <li>
                          Collaborated with prescribers to validate prescriptions and address concerns regarding
                          patient's medical histories, resulting in a 10% increase in growth
                        </li>
                        <li>
                          Managed the preparation and distribution of over 1500 prescriptions weekly, resulting in a 20%
                          increase in customer retention
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="#education"
                className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                aria-label="Go to Education section"
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

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
                Education
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Academic Background</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My educational journey and qualifications.
                </p>
              </div>
              <div className="mx-auto w-full max-w-3xl py-12">
                <div className="space-y-8">
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-pink-600">Flatiron School</CardTitle>
                          <CardDescription>Software Engineering Immersive Program</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">March 2023</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">
                            Intensive program focused on full-stack web development, including JavaScript, React, Ruby
                            on Rails, and more.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-pink-600">
                            Albany College of Pharmacy and Health Sciences
                          </CardTitle>
                          <CardDescription>Doctor of Pharmacy</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">Colchester, VT</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">
                            Comprehensive pharmacy education with focus on pharmaceutical sciences and patient care.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-pink-200 bg-white/80 backdrop-blur">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-pink-600">Saint Michael's College</CardTitle>
                          <CardDescription>Bachelor of Science (B.S) in Biology | Minor in Chemistry</CardDescription>
                        </div>
                        <div className="text-sm text-muted-foreground mt-2 md:mt-0">Colchester, VT</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm text-muted-foreground">
                            Strong foundation in biological sciences and chemistry with laboratory research experience.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <a
                href="#contact"
                className="p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all"
                aria-label="Go to Contact section"
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-600 mb-4">
                Get In Touch
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-pink-600">Contact Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let's work together!
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                <Card className="border-pink-200 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-pink-600">Contact Information</CardTitle>
                    <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">Email</p>
                          <a
                            href="mailto:mizukilee@gmail.com"
                            className="text-sm text-muted-foreground hover:text-pink-600"
                          >
                            mizukilee@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <Linkedin className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">LinkedIn</p>
                          <a href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                            linkedin.com/in/wendyyeung
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                          <Github className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">GitHub</p>
                          <a href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                            github.com/wendyyeung
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-pink-200 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-pink-600">Send Me a Message</CardTitle>
                    <CardDescription>I'll get back to you as soon as possible.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="grid gap-4">
                      <div className="grid gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-pink-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-pink-200 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-pink-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full bg-pink-600 hover:bg-pink-700">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-pink-200 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wendy Yeung. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-pink-600">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-pink-600">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mizukilee@gmail.com" className="text-muted-foreground hover:text-pink-600">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <a
        href="#"
        className="fixed bottom-6 right-6 p-3 rounded-full bg-pink-600 text-white shadow-lg hover:bg-pink-700 transition-all z-50"
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </a>
    </div>
  )
}

