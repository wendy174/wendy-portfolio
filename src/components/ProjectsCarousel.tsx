"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"


type Project = {
  id: number
  title: string
  description: string
  image: string
  bullets: string[]
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

interface ProjectCarouselProps {
  projects: Project[]
}

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalProjects = projects.length
  const projectsPerPage = 3

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + projectsPerPage >= totalProjects ? 0 : prevIndex + projectsPerPage))
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - projectsPerPage < 0
        ? Math.floor((totalProjects - 1) / projectsPerPage) * projectsPerPage
        : prevIndex - projectsPerPage,
    )
  }

  const currentPageProjects = projects.slice(currentIndex, Math.min(currentIndex + projectsPerPage, totalProjects))

  return (
    <div className="w-full relative">
      {/* Previous Button */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full border-pink-200 hover:bg-pink-100 shadow-md h-12 w-12 md:h-14 md:w-14"
        aria-label="Previous projects"
      >
        <ChevronLeft className="h-6 w-6 text-pink-600" />
      </Button>

      {/* Projects */}
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 px-10">
        {currentPageProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden border-pink-200 bg-white/80 backdrop-blur">
            <div className="aspect-video relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-pink-600">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {project.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-pink-600 border-pink-200 hover:bg-pink-50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button className="bg-pink-600 hover:bg-pink-700">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Next Button */}
      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full border-pink-200 hover:bg-pink-100 shadow-md h-12 w-12 md:h-14 md:w-14"
        aria-label="Next projects"
      >
        <ChevronRight className="h-6 w-6 text-pink-600" />
      </Button>
    </div>
  )
}


