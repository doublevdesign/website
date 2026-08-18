"use client"

import { useRef, useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselContext,
  useCarousel,
  useCarouselIndex,
} from "@/components/ui/carousel"

import Image from "next/image"
import { motion } from "framer-motion"

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
    title: "Graz City Council election",
    image: "/projects/project-two.png",
    tagline:
      "Delivering a high-impact campaign under strict Austrian political advertising laws that limit creative freedom and media channels.",
    tag: "political communications",
    details: {
      overview :"Working within strict Austrian political advertising regulations and an established identity system, the challenge was to create a campaign that remained consistent while staying flexible across multiple formats and contexts." ,     
        
      more: `I was responsible for the visual direction and production, translating the existing identity into applications across posters, flyers, stickers, apparel, and a branded cargo bike.

       In cooperation with the campaign team and an external designer, I developed production-ready visuals using Photoshop collage work, AI-supported illustration, and detailed mockups to guide photography and final outputs, ensuring consistency across all applications.`,
      
        
        gallery: [

        "/projects/project-two.png",
        "/projects/project-two-a.png",
        "/projects/project-two-b.png",
        "/projects/project-two-c.png",
      
      ],
    },
  },
    {
    title: "Auswendig Visual Identity",
    image: "/projects/project-one.png",
    tagline:
      "Standing out against competitors in a crowded app market with a clean and unique visual identity.",
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
    title: "Non-Profit Fundraising",
    image: "/projects/project-three.png",
    tagline:
      "Refreshing a long-standing non-profit's fundraising communications without losing the trust and familiarity built over time.",
    tag: "B2B Fundraising",
    details: {
      overview: "The challenge was to create fundraising materials that felt current and engaging while respecting an established visual identity that had seen little development in recent years. Rather than replacing what already existed, the focus was on identifying the elements that still worked and building a more contemporary visual language around them.",
      more:"Working from an older campaign and a corporate design manual dating back to 2005, I developed a poster concept aimed at business audiences, balancing professionalism with the approachable tone expected from a children's crisis hotline. The design established a clearer visual hierarchy and a more contemporary look while remaining recognizably part of the existing brand.",
      gallery: [
        "/projects/project-three.png",
        "/projects/project-three-a.png",
        
      ],
    },
  },
  {
    title: "clim@ festival 23-26",
    image: "/projects/project-four.png",
    tagline: "Challenge: Adapting a visual system to materials across different channels and audiences, while maintaining a cohesive and recognizable brand identity.",
    tag: "Festival Branding",
    details: {
      overview: "Adapting a visual system to marketing materials across different channels with different audiences, while maintaining a cohesive and recognizable brand identity.",
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
  const [currentIndex, setCurrentIndex] = useState(0)
  const { emblaRef, api } = useCarousel()
  const scrollIndex = useCarouselIndex(api)
  const pointerStart = useRef({ x: 0, y: 0 })

  
  const contentRef = useRef<HTMLDivElement | null>(null)

  const openProject = (project: Project) => {
  setSelectedProject(project)
  setGalleryIndex(0)
  const idx = projects.findIndex((p) => p.title === project.title)
  setCurrentIndex(idx)
  
  }

  const modalCleanupRef = useRef<null | (() => void)>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // TEST FLAG: set to true to disable adding the global wheel/touch handlers
    // while you test whether those handlers are blocking native scrolling.
    // Set back to false when done testing.
    const DISABLE_GLOBAL_SCROLL_HANDLERS = false

    // If modal opens and cleanup isn't set, set fixed body and listeners
    if (selectedProject && !modalCleanupRef.current) {
      // Lock background scroll while modal is open without changing layout
      // positioning to avoid visual jump on open/close. Use `overflow: hidden`
      // on body/html so scroll stays in place.
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'

      // No custom wheel/touch handlers needed: Lenis will be stopped while
      // the modal is open and background scroll is locked via overflow.
      modalCleanupRef.current = () => {
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
      }
    }

    // If modal closed and cleanup exists, run it
    if (!selectedProject && modalCleanupRef.current) {
      modalCleanupRef.current()
      modalCleanupRef.current = null
    }
  }, [selectedProject])

  

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

  const nextProject = () => {
    const nextIdx = currentIndex + 1 < projects.length ? currentIndex + 1 : 0
    setCurrentIndex(nextIdx)
    setSelectedProject(projects[nextIdx])
    setGalleryIndex(0) // Reset gallery when switching projects
  }

  const prevProject = () => {
    const prevIdx = currentIndex - 1 >= 0 ? currentIndex - 1 : projects.length - 1
    setCurrentIndex(prevIdx)
    setSelectedProject(projects[prevIdx])
    setGalleryIndex(0) // Reset gallery when switching projects
  }

  return (
  <>
    <section
      id="work"
      className="relative overflow-hidden bg-foreground py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-6xl px-6 z-10">
       <div>
            <h2 className="font-heading text-5xl text-background text-balance sm:text-6xl md:text-9xl">
              selected work
            </h2>

          <p className="mt-4 max-w-3xl font-medium text-lg leading-relaxed text-background text-pretty">
            Design works best when it knows where it's going. These projects began by understanding the goal, then creating the clarity, systems, and visuals needed to move it forward.
          </p>
        </div>
        </div>

        {/* CAROUSEL */}
        <div className="mx-auto mt-14 max-w-[1400px] px-6">
         <CarouselContext.Provider value={{ api }}>
        <div className="group relative">
          <Carousel emblaRef={emblaRef}>
              <CarouselContent>
                {projects.map((project) => {
                  const isActive = scrollIndex === projects.indexOf(project)

                  return (

                    
                    <CarouselItem
                      key={project.title}
                      className="basis-[67.5%] md:basis-[47%] lg:basis-[38%]"
                    >
                      <article
                        className="group relative flex w-full cursor-pointer flex-col opacity-100 hover:z-10"
                        role="button"
                        tabIndex={0}
                        onClick={() => openProject(project)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") openProject(project)
                        }}
                      >
                        <motion.div
                          className={`flex w-full flex-col transition-transform duration-500 delay-150 transform-gpu will-change-transform ${
                            isActive
                              ? "scale-95 hover:scale-100"
                              : "scale-95 hover:scale-98"
                          }`}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >

                            <span className="mt-5 text-center text-xs font-semibold uppercase tracking-widest text-background/90">
                            {project.tag}
                          </span> 

                          <div className="mt-5" />
                          {/* IMAGE */}
                          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                            <Image
                              src={project.image}
                              alt={`${project.title} project`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {isActive && (
                              <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {/* <span className="rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-foreground shadow-sm">
                                  View details
                                </span> */}
                              </div>
                            )}
                          </div>

                          {/* <span className="mt-5 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                            {project.tag}
                          </span> */}

                          {/* <h3 className="mt-2 font-heading text-3xl text-foreground">
                            {project.title}
                          </h3> */}

                          {/* <p className="mt-2 text-base leading-relaxed text-muted-foreground text-pretty">
                            {project.tagline}
                          </p> */}
                        </motion.div>
                      </article>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
               
               
               {/* ARROWS */}
<div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2 md:px-4">

  {/* LEFT BUTTON */}
  <button
    onClick={() => api?.scrollPrev()}
    className="
      pointer-events-auto
      flex h-12 w-12 md:h-14 md:w-14
      items-center justify-center
      rounded-full bg-white
      text-2xl md:text-3xl text-black
      shadow-md
      opacity-0 group-hover:opacity-100
      transition-all duration-500 delay-250
      hover:scale-110
    "
  >
    ‹
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={() => api?.scrollNext()}
    className="
      pointer-events-auto
      flex h-12 w-12 md:h-14 md:w-14
      items-center justify-center
      rounded-full bg-white
      text-2xl md:text-3xl text-black
      shadow-md
      opacity-0 group-hover:opacity-100
      transition-all duration-500 delay-250
      hover:scale-110
    "
  >
    ›
  </button>
</div>
            </Carousel>
         </div>
          </CarouselContext.Provider>
        </div>
      
   
    </section>

    {/* MODAL OUTSIDE SECTION (IMPORTANT) */}
    {selectedProject ? (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-6 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeProject()
        }}
      >
        <div className="relative mx-auto flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-card p-4 sm:p-6 shadow-2xl">

          <button
            className="mb-4 self-end rounded-full border border-border bg-background px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-foreground transition hover:bg-muted"
            onClick={closeProject}
          >
            Close
          </button>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.05fr_0.95fr] grid-rows-[minmax(0,1fr)] flex-1 min-h-0">
            <div className="relative flex items-center justify-center min-h-0 overflow-hidden rounded-3xl bg-muted">
              <div className="relative w-full h-full">
                <Image
                  src={selectedProject.details.gallery[galleryIndex]}
                  alt={`${selectedProject.title} image ${galleryIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              <button
                className="pointer-events-auto absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-lg text-foreground transition hover:bg-background"
                onClick={showPreviousImage}
              >
                ‹
              </button>

              <button
                className="pointer-events-auto absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-3 text-lg text-foreground transition hover:bg-background"
                onClick={showNextImage}
              >
                ›
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 min-h-0 overflow-hidden">
              <div ref={contentRef} className="min-h-0 flex-1 overflow-y-auto">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {selectedProject.tag}
                </span>

                <h3 className="text-2xl sm:text-4xl font-heading text-foreground">
                  {selectedProject.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {selectedProject.details.overview}
                </p>

                {selectedProject.details.more
                  .split("\n\n")
                  .map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between bg-card shrink-0">
                <button onClick={prevProject} className="text-sm text-muted-foreground hover:text-foreground">
                  ← Previous Project
                </button>

                <button onClick={nextProject} className="text-sm text-muted-foreground hover:text-foreground">
                  Next Project →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : null}
  </>
)
}
