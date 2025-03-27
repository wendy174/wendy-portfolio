"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/data/projects"

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const totalProjects = projects.length
  const projectsPerPage = 1 // Changed to show just 1 project

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Just to trigger a re-render when window size changes
      setCurrentIndex((prev) => {
        const maxStartIndex = Math.max(0, totalProjects - projectsPerPage)
        return Math.min(prev, maxStartIndex)
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [totalProjects, projectsPerPage])

  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + projectsPerPage >= totalProjects ? 0 : prevIndex + projectsPerPage
      return newIndex
    })

    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex - projectsPerPage < 0
          ? Math.max(0, Math.floor((totalProjects - 1) / projectsPerPage) * projectsPerPage)
          : prevIndex - projectsPerPage
      return newIndex
    })

    setTimeout(() => setIsAnimating(false), 500)
  }

  const currentProject = projects[currentIndex]

  const hasGithubUrl = currentProject.githubUrl; 

  return (
    <div className="w-full relative">
      {/* Previous Button */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 rounded-full border-pink-200 hover:bg-pink-100 shadow-md h-12 w-12 md:h-14 md:w-14 transition-all duration-300 hover:scale-110"
        aria-label="Previous project"
        disabled={isAnimating}
      >
        <ChevronLeft className="h-6 w-6 text-pink-600" />
      </Button>

      {/* Single Project Layout - Now Larger */}
      <div className="px-8 md:px-16 transition-all duration-500">
        <Card
          key={currentProject.id}
          className="overflow-hidden border-pink-200 bg-white/80 backdrop-blur flex flex-col md:flex-row max-w-5xl mx-auto transform transition-all duration-300 hover:shadow-lg hover:border-pink-300"
        >
          <div className="md:w-1/2">
            <div className="relative h-[350px] md:h-[500px] overflow-hidden">
              <div className="absolute inset-0 p-3">
                <div className="w-full h-full rounded-md overflow-hidden border-2 border-pink-100">
                  <img
                    src={currentProject.image || "/placeholder.svg?height=600&width=800"}
                    alt={currentProject.title}
                    className="object-contain w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col">
            <CardHeader className="pb-2 pt-6">
              <CardTitle className="text-3xl text-pink-600">{currentProject.title}</CardTitle>
              <CardDescription className="text-lg mt-2">{currentProject.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-pink-600 mb-3">Key Features:</h4>
                  <ul className="list-disc pl-6 space-y-3 text-base text-muted-foreground">
                    {currentProject.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-base font-medium text-pink-600 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-pink-100 text-pink-600 hover:bg-pink-200 text-sm py-1 px-3">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between mt-auto border-t border-pink-100 pt-6">
              { hasGithubUrl && 
                  <Button
                  variant="outline"
                  size="lg"
                  className="text-pink-600 border-pink-200 hover:bg-pink-50 transition-colors"
                  >
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" /> GitHub
                  </a>
                  </Button>
              }

              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 transition-colors ml-auto">
                <a
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-5 w-5" /> Demo
                </a>
              </Button>
            </CardFooter>
          </div>
        </Card>
      </div>

      {/* Next Button */}
      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 rounded-full border-pink-200 hover:bg-pink-100 shadow-md h-12 w-12 md:h-14 md:w-14 transition-all duration-300 hover:scale-110"
        aria-label="Next project"
        disabled={isAnimating}
      >
        <ChevronRight className="h-6 w-6 text-pink-600" />
      </Button>

      {/* Page Indicator */}
      <div className="flex justify-center mt-10 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-pink-600 w-8" : "bg-pink-200 hover:bg-pink-300"
            }`}
            aria-label={`Go to project ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </div>
  )
}




