"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import ProjectCard from "@/components/ui/project-card"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const projects = [
    {
      title: "PlaceIt",
      description: "A platform that streamlines the process of renting empty spaces for space owners and business owners to earn potential income.",
      date: "Dec 2024",
      techStack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript", "HTML", "CSS", "jQuery"],
      demoUrl: "https://www.placeit.pro/",
      codeUrl: "https://github.com/Perod122/Capstone-Place_IT",
    },
    {
      title: "Shopperod – E-Commerce Website",
      description: "Built with PERN stack",
      date: "May 2024",
      techStack: ["PostgreSQL", "Express", "React", "Node", "Tailwind CSS", "JavaScript", "Framer-motion", "ShadCN"],
      demoUrl: "https://shopperod.onrender.com/",
      codeUrl: "https://github.com/Perod122/Shopperod",
    },
    {
      title: "SinkIt",
      description: "Built a Sinking Fund management system to help streamline payment tracking and improve record-keeping efficiency",
      date: "Jun 2024",
      techStack: ["PostgreSQL", "NextJS", "React", "Node", "Tailwind CSS", "TypeScript", "Framer-motion", "ShadCN"],
      demoUrl: "https://sink-it.vercel.app/",
      codeUrl: "https://github.com/Perod122/SinkIt",
    },
    {
      title: "Help DeskTicketing System",
      description: "Collaborated as a 5-member team in the Alliance Jumpstart Program 2024, with each member contributing individually to the project's success",
      date: "Dec 2024",
      techStack: ["C#", ".NET", "JavaScript", "CSS", "MSSQL", "Razor Blade"],
      demoUrl: "https://github.com/Amaquin26/HelpDeskTicketingSystem_Group3/",
      codeUrl: "https://github.com/Amaquin26/HelpDeskTicketingSystem_Group3",
    },
  ]

  return (
    <section id="projects" className="py-10 relative scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Some of my recent work" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 200}ms` : "0ms",
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              date={project.date}
              techStack={project.techStack}
              demoUrl={project.demoUrl}
              codeUrl={project.codeUrl}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
