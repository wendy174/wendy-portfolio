import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Heart, Code, Briefcase, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-pink-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <a href="#" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-pink-600">WENDY YEUNG</span>
            </a>
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
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-pink-200">Wendy Yeung</span>
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">Software Engineer & Solution Engineer</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-white text-pink-600 hover:bg-pink-100">
                    <a href="#projects">View My Work</a>
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                  <img src="/images/profile.jpg" alt="Profile" className="object-cover w-full h-full" />
                </div>
              </div>
            </div>
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
                    <img src="/images/about-me.jpg" alt="About me" className="object-cover w-full h-full" />
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
              <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-1 lg:grid-cols-3">
                <Card className="overflow-hidden border-pink-200 bg-white/80 backdrop-blur">
                  <div className="aspect-video relative">
                    <img src="/images/project-1.jpg" alt="Messaging Platform" className="object-cover w-full h-full" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-pink-600">Messaging Platform</CardTitle>
                    <CardDescription>
                      A messaging platform built with Retool and Twilio, enabling individualized or bulk messaging and
                      phone number information lookups
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Facilitates bulk messaging, automated calls, and conference hosting</li>
                      <li>Enables contact management within the Retool interface</li>
                      <li>Leveraged Retool Workflows to retrieve carrier, name, and address details</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Retool</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Twilio</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">JavaScript</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                      <a href="#" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <a href="#" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden border-pink-200 bg-white/80 backdrop-blur">
                  <div className="aspect-video relative">
                    <img src="/images/project-2.jpg" alt="Gift Boutique" className="object-cover w-full h-full" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-pink-600">Gift Boutique</CardTitle>
                    <CardDescription>
                      Online marketplace that delivers a user-friendly interface for customers to explore and purchase
                      unique gifts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Crafted a full stack application using React, Ruby on Rails, and Material UI</li>
                      <li>Employed Firebase's authentication for secure login experience</li>
                      <li>Ensured high scalability using AWS EC2 and Docker for containerization</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">React</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Ruby on Rails</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Material UI</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Firebase</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                      <a href="#" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <a href="#" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="overflow-hidden border-pink-200 bg-white/80 backdrop-blur">
                  <div className="aspect-video relative">
                    <img src="/images/project-3.jpg" alt="Asian Bites" className="object-cover w-full h-full" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-pink-600">Asian Bites</CardTitle>
                    <CardDescription>
                      Comprehensive guide to finding the best Asian restaurants with reviews from a community of food
                      enthusiasts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Designed and implemented a full stack application and RESTful API</li>
                      <li>Utilized native rails validations and error handling for security</li>
                      <li>Enabled secure password hashing and salting with bcrypt</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Node.js</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">React</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">Ruby on Rails</Badge>
                      <Badge className="bg-pink-100 text-pink-600 hover:bg-pink-200">RESTful API</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                      <a href="#" className="flex items-center gap-1">
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    </Button>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <a href="#" className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
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
    </div>
  )
}

