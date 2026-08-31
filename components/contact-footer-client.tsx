"use client"

import dynamic from "next/dynamic"

const ContactFooterClient = dynamic(
  () => import("@/components/contact-footer").then((mod) => mod.ContactFooter),
  {
    ssr: false,
    loading: () => <div className="h-[420px] w-full" aria-hidden="true" />,
  },
)

export default function ContactFooterLoader({
  messages,
}: {
  messages: Parameters<typeof import("@/components/contact-footer").ContactFooter>[0]["messages"]
}) {
  return <ContactFooterClient messages={messages} />
}
