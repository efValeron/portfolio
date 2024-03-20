import "../globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: [ "latin" ] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Next Generation Portfolio"
}

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${process.env.NODE_ENV === "development" ? "debug-screens" : ""} flex flex-col`}>
    {children}
    </body>
    </html>
  )
}
