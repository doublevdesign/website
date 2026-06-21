import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Azeret_Mono, Alfa_Slab_One } from 'next/font/google'
import './globals.css'

const azeretMono = Azeret_Mono({
  variable: '--font-azeret-mono',
  subsets: ['latin'],
})
const alfaSlabOne = Alfa_Slab_One({
  variable: '--font-alfa-slab',
  weight: '400',
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: 'doublevdesign – strategic design',
  description:
    'Strategic design  without the corporate fluff.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${azeretMono.variable} ${alfaSlabOne.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
    
  )
}

