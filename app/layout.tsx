import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HiResalesTalent - iGCT Global Cloud Telephony Solutions",
  description:
    "Transform your enterprise communications with iGCT. Reduce costs by 40%, scale globally across 150+ countries with enterprise-grade cloud telephony solutions.",
  keywords: "cloud telephony, voice solutions, global calling, B2B sales tools, enterprise communications",
  authors: [{ name: "HiResalesTalent Solutions" }],
  openGraph: {
    title: "HiResalesTalent - iGCT Global Cloud Telephony Solutions",
    description:
      "Transform your enterprise communications with iGCT. Reduce costs by 40%, scale globally across 150+ countries.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiResalesTalent - iGCT Global Cloud Telephony Solutions",
    description:
      "Transform your enterprise communications with iGCT. Reduce costs by 40%, scale globally across 150+ countries.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HiResalesTalent Solutions",
              description: "Enterprise cloud telephony solutions provider",
              url: "https://hiresalestalent.com",
              logo: "https://hiresalestalent.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-512-555-0123",
                contactType: "customer service",
                areaServed: "US",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Boulevard",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78701",
                addressCountry: "US",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
