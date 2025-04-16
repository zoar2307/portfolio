import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const OutfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"]
})

const OvoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"]
})

export const metadata = {
  title: "Zohar Yevelkin | Full Stack & Frontend Developer",
  description: "Portfolio of Zohar Yevelkin, a Full Stack & Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my projects, skills, and services.",
  keywords: [
    "Zohar Yevelkin",
    "Full Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Portfolio"
  ],
  authors: [{ name: "Zohar Yevelkin" }],
  creator: "Zohar Yevelkin",
  openGraph: {
    title: "Zohar Yevelkin | Full Stack & Frontend Developer",
    description: "Explore the portfolio of Zohar Yevelkin, showcasing projects built with React, Next.js, and more.",
    url: "https://zoharyev.com",
    siteName: "Zohar Yevelkin Portfolio",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Zohar Yevelkin | Full Stack & Frontend Developer",
    description: "Discover projects and services by Zohar Yevelkin, specializing in modern web development."
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${OutfitFont.className} ${OvoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
