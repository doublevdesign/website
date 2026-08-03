import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { Statement } from "@/components/statement"
import { ContactFooter } from "@/components/contact-footer"
import { BackgroundDecor } from "@/components/background-decor"

export default function Page() {
  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden">
        {/* <BackgroundDecor /> */}

        <Hero />
        <Philosophy />
        <Projects />
        <Statement />
        <ContactFooter />
      </main>
    </>
  )
}

