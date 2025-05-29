"use client"

import { useState, useEffect } from "react"
import SectionHeading from "@/components/ui/section-heading"
import AchievementCard from "@/components/ui/achievement-card"
import { cn } from "@/lib/utils"
import { ShieldCheck, TicketCheck } from "lucide-react"
import { GraduationCapIcon, NetworkIcon } from "lucide-react"

export default function Achievements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const achievements = [
      {
        icon: <GraduationCapIcon className="h-5 w-5 text-teal-400" />,
        title: "Bachelor of Science in Information Technology 2021 - 2025",
        description: "University of Cebu - Main Campus",
      },
    {
        icon: <TicketCheck className="h-5 w-5 text-teal-400" />,
        title: "PhilNITS IP Exam Passer October 2024",
        description: "IT Passport (IP) certification in Information Technology knowledge and workplace applications.",
      },
      {
        icon: <ShieldCheck className="h-5 w-5 text-teal-400" />,
        title: "Introduction to Cybersecurity",
        description: "Cybersecurity Fundamentals certification from Cisco Networking Academy.",
      },
      {
        icon: <NetworkIcon className="h-5 w-5 text-teal-400" />,
        title: "CCNA: Switching, Routing and Wireless Essentials Certificate",
        description: "Switching, Routing and Wireless Essentials certification from Cisco Networking Academy.",
      },
  ]

  return (
    <section id="achievements" className="py-20 relative scroll-mt-16">
      <SectionHeading title="Achievements" subtitle="Recognition and accomplishments" />

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={cn(
              "opacity-0 transform translate-y-8 transition-all duration-700",
              mounted && "opacity-100 translate-y-0",
            )}
            style={{
              transitionDelay: mounted ? `${index * 150}ms` : "0ms",
            }}
          >
            <AchievementCard icon={achievement.icon} title={achievement.title} description={achievement.description} />
          </div>
        ))}
      </div>
    </section>
  )
}
