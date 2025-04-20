import React from "react"; 

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Badge } from "@/components/ui/badge"; 


const Skills: React.FC = () => { 
    return ( 
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
                        "Shadcn", 
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
                        "Express", 
                        "Sinatra",
                        "SQLite",
                        "PostgreSQL",
                        "MongoDB",
                        "REST APIs",
                        "Node.js",
                        "Pinecone"
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
                      {["Docker",
                        "Git",
                        "GitHub",
                        "Postman",
                        "Firebase",
                        "Excel",
                        "Google Sheets"].map((skill) => (
                        <Badge key={skill} className="bg-pink-100 text-pink-600 hover:bg-pink-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-pink-200 bg-white/80 backdrop-blur">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-pink-600">AI & Low-Code Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                          "OpenAI",
                          "Anthropic",
                          "LlamaParse",
                          "Retool",
                          "Appsmith",
                          "n8n",
                          "Twilio"
                      ].map((skill) => (
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
    )
}

export default Skills; 