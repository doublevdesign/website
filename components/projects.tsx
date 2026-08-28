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
import { motion, AnimatePresence } from "framer-motion"
import type { Messages } from "@/lib/i18n"

import { Caveat } from "next/font/google"
const caveat = Caveat({ subsets: ["latin"], weight: ["600", "700"] })

type Project = Messages["projects"]["items"][number] & {
  image: string
  details: Messages["projects"]["items"][number] & { gallery: string[] }
}

const projectImages: Record<string, string[]> = {
  "graz-city-council": ["/projects/project-two.png", "/projects/project-two-a.png", "/projects/project-two-b.png", "/projects/project-two-c.png", "/projects/project-two-d.png"],
  "auswendig": ["/projects/project-one.png", "/projects/project-one-a.png", "/projects/project-one-b.png", "/projects/project-one-b0.png", "/projects/project-one-c.png"],
  "non-profit-fundraising": ["/projects/project-three.png", "/projects/project-three-a.png", "/projects/project-three-b.png"],
  "clima-festival": ["/projects/project-four.png", "/projects/project-four-b.png", "/projects/project-four-a.png", "/projects/project-four-c.png","/projects/project-four-e.png"],
}

export function Projects({ messages }: { messages: Messages["projects"] }) {
  const projects: Project[] = messages.items.map((item) => ({
    ...item,
    image: projectImages[item.id][0],
    details: { ...item, gallery: projectImages[item.id] },
  }))
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    const updateDesktopState = () => setIsDesktop(mediaQuery.matches)

    updateDesktopState()
    mediaQuery.addEventListener("change", updateDesktopState)
    return () => mediaQuery.removeEventListener("change", updateDesktopState)
  }, [])

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
  const idx = projects.findIndex((p) => p.id === project.id)
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
              {messages.heading}
            </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-background text-pretty">
            {messages.intro}
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
                      key={project.id}
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
                          initial={{ opacity: 0, y: isDesktop ? 8 : 0 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        >

                                <div className="mt-2 sm:mt-5 mb-3 sm:mb-4 flex h-8 sm:h-10 items-center justify-center px-2">
                                  <span className="rounded-full border border-background/20 bg-transparent px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-background">
                                    {project.tag}
                                  </span>
                                </div>

                          {/* IMAGE */}
                          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                            <Image
                              src={project.image}
                              alt={`${project.title} ${messages.projectAlt}`}
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
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          key="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(26,26,26,0.28)] p-6 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeProject()
          }}
        >
          <motion.div
            initial={{ y: 8, opacity: 0, scale: 0.995 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 8, opacity: 0, scale: 0.995 }}
            transition={{ duration: 0.26, ease: "easeOut" }}
            className="relative mx-auto flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-card p-4 sm:p-6 shadow-2xl"
          >

            <button
              className="mb-4 self-end rounded-full border border-border bg-background px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm text-foreground transition hover:bg-muted"
              onClick={closeProject}
            >
              {messages.close}
            </button>

            {/* Content area: use flex for deterministic sizing (stack on mobile, row on md+) */}
            <div className="flex-1 min-h-0 overflow-auto">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 h-full min-h-0">
                <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full md:basis-[55%] flex-none overflow-hidden rounded-3xl bg-muted">
                  <div className="relative w-full h-full">
                    <Image
                      src={selectedProject.details.gallery[galleryIndex]}
                      alt={`${selectedProject.title} ${messages.imageAlt} ${galleryIndex + 1}`}
                      fill
                      loading="eager"
                      quality={75}
                      className="object-cover"
                      sizes="(max-width: 768px) calc(100vw - 3rem), 55vw"
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

                <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 min-h-0 md:basis-[45%] bg-transparent">
                  <div ref={contentRef} className="min-h-0 flex-1 md:overflow-y-auto md:pr-4 overflow-visible">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {selectedProject.tag}
                  </span>

                  <h3 className="text-2xl sm:text-4xl font-heading text-foreground">
                    {selectedProject.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {selectedProject.details.overview}
                  </p>

                  {selectedProject.details.more
                    .split("\n\n")
                    .map((paragraph, i) => {
                      const firstMoreClass = i === 0 ? "mt-3 " : ""
                      return (
                        <p
                          key={i}
                          className={`${firstMoreClass}text-sm sm:text-[0.9375rem] leading-relaxed text-muted-foreground mb-4 last:mb-0`}
                        >
                          {paragraph}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer controls: always visible at bottom of modal */}
            <div className="pt-4 flex items-center justify-between bg-card shrink-0">
              <button onClick={prevProject} className="text-sm text-muted-foreground hover:text-foreground">
                ← {messages.previousProject}
              </button>

              <button onClick={nextProject} className="text-sm text-muted-foreground hover:text-foreground">
                {messages.nextProject} →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
)
}
