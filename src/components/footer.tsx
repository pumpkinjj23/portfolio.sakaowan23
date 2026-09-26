import { Shield, Github, Mail, ArrowUp, ExternalLink } from "lucide-react"
import { portfolioData } from "@/data/portfolioData"

interface FooterProps {
  lang?: "th" | "en"
}

export default function Footer({ lang = "en" }: FooterProps) {
  const p = portfolioData.personal

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border/80 bg-secondary/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="font-mono text-base font-bold text-foreground tracking-tight">
                SAKAOWAN.B // SEC_PORTFOLIO
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans max-w-md leading-relaxed">
              {lang === "th"
                ? "แฟ้มสะสมผลงานความมั่นคงปลอดภัยไซเบอร์และการทดสอบซอฟต์แวร์ โดย สกาววรรณ บูรณะวาทศิลป์ นักศึกษาชั้นปีสุดท้าย วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล มหาวิทยาลัยราชภัฏพิบูลสงคราม"
                : "Cybersecurity & Software Testing Portfolio by Sakaowan Buranavatasin (Jubjang). Final-Year Computer Engineering & Digital Technology Student at PSRU."}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-cyan-400">
              <span>GPAX: 3.78</span>
              <span>•</span>
              <span>MAJOR GPA: 3.88</span>
              <span>•</span>
              <span className="text-emerald-400">STATUS: OPEN FOR WORK</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
              {lang === "th" ? "เมนูด่วน" : "QUICK NAVIGATION"}
            </span>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  // 01. Home & Status
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  // 02. About & Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  // 03. Technical Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  // 04. Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  // 05. CTF & Milestones
                </a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-cyan-400 transition-colors">
                  // 06. 23+ Certificates
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Documents */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
              {lang === "th" ? "เอกสาร & ติดต่อ" : "DOCUMENTS & CONTACT"}
            </span>
            <ul className="space-y-2 text-xs font-mono text-muted-foreground">
              <li>
                <a
                  href={p.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Resume / CV (PDF)</span>
                </a>
              </li>
              <li>
                <a
                  href={p.transcriptPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Official Transcript (3.78)</span>
                </a>
              </li>
              <li>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/pumpkinjj23</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${p.email}`}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">{p.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p>
            © {new Date().getFullYear()} Sakaowan Buranavatasin. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/80 hover:bg-secondary text-foreground transition-colors border border-border"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
