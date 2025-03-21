import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge"; 
import { Github, Linkedin, Mail, GraduationCap } from "lucide-react"; 
import { ProjectCarousel } from "@/components/ProjectsCarousel"; 
import About from './components/About.tsx'; 
import Header from './components/Header.tsx'; 
import Hero from './components/Hero.tsx'; 
import projects from '../src/data/projects.json'; 
import Skills from './components/Skills.tsx'; 


export default function Home() {  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">

      <Header />

      <main className="flex flex-col items-center">
          <Hero />
          <About />
          <Skills />

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

