import { useState, useEffect } from "react"
import AgencyHeroSection from "@/components/ui/hero-01"
import CyberCanvas from "@/components/cyber-canvas"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import CertificatesSection from "@/components/certificates-section"
import CertificateModal from "@/components/certificate-modal"
import ImageLightbox from "@/components/image-lightbox"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { portfolioData, type CertItem } from "@/data/portfolioData"

export default function App() {
  const [lang, setLang] = useState<"th" | "en">("en")
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [selectedCert, setSelectedCert] = useState<CertItem | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{
    url: string
    title: string
  } | null>(null)

  // Initialize theme and language from localStorage / system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("jubjang-theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme("dark")
    }

    const savedLang = localStorage.getItem("jubjang-lang") as "th" | "en" | null
    if (savedLang) {
      setLang(savedLang)
    }
  }, [])

  // Synchronize theme with DOM
  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
      root.setAttribute("data-theme", "dark")
    } else {
      root.classList.remove("dark")
      root.setAttribute("data-theme", "light")
    }
    localStorage.setItem("jubjang-theme", theme)
  }, [theme])

  // Global smooth scroll handler for all anchor links (#hero, #about, #skills, #projects, etc.)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!target) return

      const href = target.getAttribute("href")
      if (!href || href === "#") return

      const sectionId = href.replace("#", "")
      const el = document.getElementById(sectionId)
      if (el) {
        e.preventDefault()
        const navOffset = 75
        const targetTop =
          el.getBoundingClientRect().top + window.scrollY - navOffset
        window.scrollTo({
          top: href === "#hero" ? 0 : Math.max(0, targetTop),
          behavior: "smooth",
        })
        window.history.replaceState(null, "", href)
      } else if (href === "#hero") {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  const toggleLanguage = () => {
    setLang((prev) => (prev === "th" ? "en" : "th"))
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const handleOpenLightbox = (imgUrl: string, title: string) => {
    setLightboxImage({ url: imgUrl, title })
  }

  // Navigation items translated based on active language
  const navigationData = portfolioData.navigationData.map((item) => ({
    title: lang === "th" ? item.titleTh : item.title,
    href: item.href,
    isActive: item.isActive,
  }))

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-cyan-500 selection:text-black font-sans">
      {/* Background Interactive Cyber Canvas */}
      <CyberCanvas theme={theme} />

      {/* Hero Section Component (Requested Agency Hero) */}
      <AgencyHeroSection
        navigationData={navigationData}
        avatarList={portfolioData.teamAvatars}
        brandList={portfolioData.brandList}
        lang={lang}
        onToggleLang={toggleLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <div className="relative z-10">
        <AboutSection lang={lang} />
        <SkillsSection lang={lang} />
        <ProjectsSection
          lang={lang}
          onSelectImage={handleOpenLightbox}
        />
        <ExperienceSection lang={lang} />
        <CertificatesSection
          lang={lang}
          onSelectCert={(cert) => setSelectedCert(cert)}
        />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </div>

      {/* Modals & Lightbox */}
      <CertificateModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        lang={lang}
        onPreviewImage={handleOpenLightbox}
      />

      <ImageLightbox
        imageUrl={lightboxImage?.url || null}
        title={lightboxImage?.title}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  )
}
