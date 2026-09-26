import { useState, useEffect } from "react"
import { Shield, Terminal, Menu, Moon, Sun, Globe, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/80 backdrop-blur-md">
          {navigationData.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                item.isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-cyan-500/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Controls (Theme, Language, Mobile Menu, CV Button) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switch */}
          {onToggleLang && (
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg border border-border bg-secondary/40 text-foreground hover:border-cyan-500/40 hover:bg-secondary transition-all flex items-center gap-1.5"
              title="Toggle Language (TH/EN)"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang.toUpperCase()}</span>
            </button>
          )}

          {/* Theme Toggle */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-border bg-secondary/40 text-foreground hover:border-cyan-500/40 hover:bg-secondary transition-all"
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
            href="CV_Sakaowan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 text-cyan-400 dark:text-cyan-300 text-xs font-mono gap-1.5"
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
                    <SheetTitle className="font-mono text-cyan-400 flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      <span>NAVIGATION_MENU</span>
                    </SheetTitle>
                    <p className="text-xs text-muted-foreground font-sans">
                      Sakaowan Buranavatasin (Jubjang)
                    </p>
                  </SheetHeader>

                  <div className="flex flex-col gap-2 mt-6">
                    {navigationData.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-cyan-400 text-foreground flex items-center justify-between"
                      >
                        <span>{item.title}</span>
                        <span className="text-xs font-mono text-muted-foreground opacity-60">→</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex flex-col gap-3">
                  <a
                    href="CV_Sakaowan.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold font-mono text-xs gap-2">
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
                    <Button variant="outline" className="w-full text-xs font-mono gap-2">
                      <ExternalLink className="w-3.5 h-3.5" />
                      VIEW TRANSCRIPT (3.78)
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
