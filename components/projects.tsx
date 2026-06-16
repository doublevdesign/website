"use client"

import { useState, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselTopNav,
  CarouselBottomNav,
  CarouselContext,
  useCarousel,
} from "@/components/ui/carousel"

import Image from "next/image"
import { Underline } from "@/components/doodles"

type Project = {
  title: string
  image: string
  tagline: string
  tag: string
  details: {
    overview: string
    more: string
    gallery: string[]
  }
}

const projects: Project[] = [
  {
    title: "Auswendig Visual Identity",
    image: "/projects/project-one.png",
    tagline:
      "Challenge: Standing out against competitors in a crowded app market with a clean and unique visual identity.",
    tag: "Branding and UI Design",
    details: {
      overview:
        "A full identity system built to feel modern, tactile, and unmistakably memorable across packaging, web, and social.",
      more:
        "This project included exploration of color, motion, and messaging to position Auswendig as a premium but playful brand.",
      gallery: [
        "/projects/project-one.png",
        "/projects/project-one-a.png",
        "/projects/project-one-b.png",
        "/projects/project-one-c.png",
      ],
    },
  },
  {
    title: "Graz City Council election",
    image: "/projects/project-two.png",
    tagline:
      "Challenge: Delivering a high-impact campaign under strict Austrian political advertising laws that limit creative freedom and media channels.",
    tag: "political communications",
    details: {
      overview:
        "A campaign visual system created to deliver trust, urgency, and clarity across print, outdoor, and digital channels.",
      more:
        "This project prioritized accessibility and strong typography to support multilingual messaging and voter engagement.",
      gallery: [
        "/projects/project-two.png",
        "/projects/project-two-a.png",
        "/projects/project-two-b.png",
        "/projects/project-two-c.png",
      ],
    },
  },
  {
    title: "Non-Profit Fundraising",
    image: "/projects/project-three.png",
    tagline:
      "Challenge: Addressing businesses to increase donations and support for a children's helpline, while maintaining a professional and approachable image.",
    tag: "B2B Fundraising",
    details: {
      overview:
        "A campaign toolkit designed to make donation asks feel warm, credible, and easy to share.",
      more:
        "The work included message framing, visual storytelling, and a toolkit for offline and online donor outreach.",
      gallery: [
        "/projects/project-three.png",
        "/projects/project-three-a.png",
        "/projects/project-three-b.png",
        "/projects/project-three-c.png",
      ],
    },
  },
  {
    title: "clim@ festival 23-26",
    image: "/projects/project-four.png",
    tagline: "Challenge: Adapting a visual system to materials across different channels and audiences, while maintaining a cohesive and recognizable brand identity.",
    tag: "Festival Branding",
    details: {
      overview: "Challenge: Adapting a visual system to marketing materials across different channels with different audiences, while maintaining a cohesive and recognizable brand identity.",
      more:
        "",
      gallery: [
        "/projects/project-four.png",
        "/projects/project-four-a.png",
        "/projects/project-four-b.png",
        "/projects/project-four-c.png",
      ],
    },
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const { emblaRef, api } = useCarousel()
  const pointerStart = useRef({ x: 0, y: 0 })

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setGalleryIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setGalleryIndex(0)
  }

  const showPreviousImage = () => {
    if (!selectedProject) return
    setGalleryIndex((index) =>
      index === 0 ? selectedProject.details.gallery.length - 1 : index - 1,
    )
  }

  const showNextImage = () => {
    if (!selectedProject) return
    setGalleryIndex((index) =>
      index === selectedProject.details.gallery.length - 1 ? 0 : index + 1,
    )
  }

  return (
    <section id="work" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-heading text-5xl text-foreground text-balance sm:text-6xl md:text-7xl">
          Selected Work
        </h2>

        <Underline aria-hidden="true" className="mt-3 h-4 w-56 text-pink" />

        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A few projects where honest strategy made the difference.
        </p>

        {/* CAROUSEL WRAPPER */}
        <div className="relative mt-14 w-full">
          <CarouselContext.Provider value={{ api }}>
            <CarouselTopNav />
            <Carousel emblaRef={emblaRef}>
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem
                    key={project.title}
                    className="basis-[75%] md:basis-[52%] lg:basis-[42%]"
                  >
                    <article
                      className="group relative cursor-pointer flex w-full flex-col overflow-hidden rounded-t-3xl transition-transform duration-300 transform-gpu hover:scale-[1.02] hover:z-10"
                      role="button"
                      tabIndex={0}
                      onClick={() => openProject(project)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") openProject(project)
                      }}
                    >
                    
                    {/* IMAGE */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-t-3xl bg-muted">
                      <Image
                        src={project.image}
                        alt={`${project.title} project`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground shadow-sm">
                          View details
                        </span>
                      </div>
                    </div>

                  
                    <span className="mt-5 text-xs font-semibold uppercase tracking-widest text-primary">
                      {project.tag}
                    </span>

                    <h3 className="mt-2 font-heading text-3xl text-foreground">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">
                      {project.tagline}
                    </p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            </Carousel>
            <CarouselBottomNav />
          </CarouselContext.Provider>

          {selectedProject ? (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
            >
              <div className="relative mx-auto flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-card p-4 sm:p-6 shadow-2xl">
                <button
                  className="mb-4 self-end rounded-full border border-border bg-background px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-foreground transition hover:bg-muted"
                  onClick={closeProject}
                >
                  Close
                </button>

                <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                    <Image
                      src={selectedProject.details.gallery[galleryIndex]}
                      alt={`${selectedProject.title} image ${galleryIndex + 1}`}
                      width={900}
                      height={1200}
                      className="h-full w-full object-cover"
                    />
                    <button
                      className="pointer-events-auto absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-lg text-foreground transition hover:bg-background"
                      onClick={showPreviousImage}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      className="pointer-events-auto absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-lg text-foreground transition hover:bg-background"
                      onClick={showNextImage}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 px-4 py-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      <span>{selectedProject.title}</span>
                      <span>
                        {galleryIndex + 1} / {selectedProject.details.gallery.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:gap-4 overflow-y-auto pr-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {selectedProject.tag}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-heading text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {selectedProject.details.overview}
                    </p>
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {selectedProject.details.more}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}