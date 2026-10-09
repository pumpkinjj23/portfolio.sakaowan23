"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Shield, Terminal, Menu, Moon, Sun, Globe, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolioData"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export interface NavigationSection {
  title: string
  href: string
  isActive?: boolean
}

interface HeaderProps {
  navigationData?: NavigationSection[]
  lang?: "th" | "en"
  onToggleLang?: () => void
  theme?: "dark" | "light"
  onToggleTheme?: () => void
}

export default function Header({
  navigationData = [
    { title: "Home", href: "#hero", isActive: true },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Experience", href: "#experience" },
    { title: "Certificates", href: "#certificates" },
  ],
  lang = "en",
  onToggleLang,
  theme = "dark",
  onToggleTheme,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("#hero")
  const isClickScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ScrollSpy to track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setScrolled(scrollPos > 20)

      // If user recently clicked a link, don't let ScrollSpy override active state during animation
      if (isClickScrollingRef.current) return

      // If scrolled to near bottom, highlight the last section
      if (
        window.innerHeight + scrollPos >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection(navigationData[navigationData.length - 1].href)
        return
      }

      // If near top, highlight home
      if (scrollPos < 120) {
        setActiveSection("#hero")
        return
      }

      // Calculate current active section by real document coordinates
      const checkThreshold = scrollPos + 160
      const sections = navigationData.map((item) => item.href.replace("#", ""))

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const docTop = element.getBoundingClientRect().top + window.scrollY
          if (checkThreshold >= docTop) {
            setActiveSection(`#${sectionId}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navigationData])

  // Smooth scroll handler with offset for sticky navbar
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    setActiveSection(href)
    setIsOpen(false)

    // Lock ScrollSpy temporarily while smooth scrolling
    isClickScrollingRef.current = true
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false
    }, 900)

    const sectionId = href.replace("#", "")
    const targetElement = document.getElementById(sectionId)

    if (targetElement) {
      const navOffset = 80
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - navOffset

      window.scrollTo({
        top: href === "#hero" ? 0 : Math.max(0, targetPosition),
        behavior: "smooth",
      })

      window.history.replaceState(null, "", href)
    } else if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-xl shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
            <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse border-2 border-background" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm sm:text-base font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition-colors">
              SAKAOWAN.B
            </span>
            <span className="text-[11px] text-muted-foreground font-sans hidden sm:block">
              {lang === "th" ? "วิศวกรรมความมั่นคงปลอดภัยไซเบอร์" : "Cybersecurity & Software Testing"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation with Animated Sliding Active Pill */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-secondary/80 border border-border/80 backdrop-blur-md relative">
          {navigationData.map((item) => {
            const isActive = activeSection === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs lg:text-sm font-semibold rounded-full transition-colors duration-200 z-10 ${
                  isActive
                    ? "text-black dark:text-slate-950 font-bold"
                    : "text-foreground/80 hover:text-foreground hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full shadow-md shadow-cyan-500/30 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}
                <span>{item.title}</span>
              </a>
            )
          })}
        </nav>

        {/* Controls (Theme, Language, Mobile Menu, CV Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          {onToggleLang && (
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 text-xs font-mono font-bold rounded-lg border border-border bg-card text-foreground hover:border-cyan-500/40 hover:bg-secondary transition-all flex items-center gap-1.5"
              title="Toggle Language (TH/EN)"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-500" />
              <span>{lang.toUpperCase()}</span>
            </button>
          )}

          {/* Theme Toggle */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-border bg-card text-foreground hover:border-cyan-500/40 hover:bg-secondary transition-all"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-blue-500" />
              )}
            </button>
          )}

          {/* Quick CV Download */}
          <a
            href={portfolioData.personal.cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-xs font-mono gap-1.5 font-bold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV.PDF</span>
            </Button>
          </a>

          {/* Mobile Drawer Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="w-5 h-5 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background/95 backdrop-blur-xl border-l border-border flex flex-col justify-between">
                <div>
                  <SheetHeader className="text-left pb-6 border-b border-border">
                    <SheetTitle className="font-mono text-cyan-500 flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      <span>NAVIGATION_MENU</span>
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground font-sans">
                      Sakaowan Buranavatasin (Jubjang)
                    </p>
                  </SheetHeader>

                  <div className="flex flex-col gap-2 mt-6">
                    {navigationData.map((item) => {
                      const isActive = activeSection === item.href
                      return (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                            isActive
                              ? "bg-cyan-500 text-black font-bold shadow-md shadow-cyan-500/20"
                              : "text-foreground hover:bg-secondary hover:text-cyan-500"
                          }`}
                        >
                          <span>{item.title}</span>
                          <span className="text-xs font-mono opacity-75">→</span>
                        </a>
                      )
                    })}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col gap-3">
                  <a
                    href={portfolioData.personal.cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-mono text-xs gap-2">
                      <Download className="w-4 h-4" />
                      DOWNLOAD CV (PDF)
                    </Button>
                  </a>
                  <a
                    href="transcript.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full text-xs font-mono font-bold gap-2">
                      <ExternalLink className="w-3.5 h-3.5" />
                      TRANSCRIPT (3.78)
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
