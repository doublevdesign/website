import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Projects } from "@/components/projects"
import { SiteHeader } from "@/components/site-header"
import { getMessages, isLocale, locales, type Locale } from "@/lib/i18n"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

const ContactFooter = dynamic(
  () => import("@/components/contact-footer").then((mod) => mod.ContactFooter),
  {
    ssr: false,
    loading: () => <div className="h-[420px] w-full" aria-hidden="true" />,
  },
)

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()

  const siteUrl = "https://doublevdesign.at"
  const currentPath = `/${value}/`
  const alternateBase = {
    en: `${siteUrl}/en/`,
    de: `${siteUrl}/de/`,
  }

  const messages = getMessages(value)
  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    alternates: {
      canonical: `${siteUrl}${currentPath}`,
      languages: {
        en: alternateBase.en,
        de: alternateBase.de,
      },
    },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()

  const locale: Locale = value
  const messages = getMessages(locale)

  return (
    <>
      <SiteHeader locale={locale} messages={messages.nav} />
      <main className="relative overflow-hidden">
        <Hero messages={messages.hero} />
        <Philosophy messages={messages.philosophy} />
        <Projects messages={messages.projects} />
        <ContactFooter messages={messages.footer} />
      </main>
    </>
  )
}