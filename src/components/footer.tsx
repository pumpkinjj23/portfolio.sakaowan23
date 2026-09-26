"use client"

import { useState } from "react"
import {
  Shield,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  Copy,
  Check,
  Send,
  MessageSquare,
  FileText,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolioData"

interface FooterProps {
  lang?: "th" | "en"
}

export default function Footer({ lang = "en" }: FooterProps) {
  const p = portfolioData.personal
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text)
    if (type === "email") {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  return (
    <footer
      id="contact"
      className="relative border-t border-border/80 bg-card/90 pt-16 pb-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "ช่องทางการติดต่อ & ข้อมูล" : "CONTACT & GET IN TOUCH"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "ติดต่อเพื่อร่วมงาน / สัมภาษณ์ฝึกงาน" : "Connect & Career Opportunities"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
            {lang === "th"
              ? "พร้อมเปิดรับโอกาสฝึกงานและร่วมงานในตำแหน่ง Security Tester, QA Software Tester, Junior Security Engineer"
              : "Open for internship opportunities, junior security roles, and QA software testing positions."}
          </p>
        </div>

        {/* Main Grid: 2 Balanced Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-border/80">
          {/* Left Column (7 cols): Brand & Direct Contact Interactive Boxes */}
          <div className="lg:col-span-7 space-y-4">
            {/* Brand Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <span className="font-mono text-base font-bold text-foreground tracking-tight block">
                  SAKAOWAN BURANAVATASIN
                </span>
                <span className="text-xs text-muted-foreground font-sans">
                  {lang === "th" ? "วิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล (PSRU)" : "Computer Engineering & Digital Technology (PSRU)"}
                </span>
              </div>
            </div>

            {/* Email Contact Box */}
            <div className="p-4 rounded-xl bg-secondary/60 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase block">
                    {lang === "th" ? "อีเมลทางการ" : "DIRECT EMAIL"}
                  </span>
                  <a
                    href={`mailto:${p.email}`}
                    className="text-xs sm:text-sm font-mono font-bold text-foreground hover:text-cyan-500 transition-colors truncate block"
                  >
                    {p.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(p.email, "email")}
                  className="p-2 rounded-lg bg-card hover:bg-card/80 border border-border text-foreground transition-colors"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <a href={`mailto:${p.email}`}>
                  <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-mono text-xs gap-1.5 h-8">
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === "th" ? "ส่งอีเมล" : "Mail"}</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Phone Contact Box */}
            <div className="p-4 rounded-xl bg-secondary/60 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase block">
                    {lang === "th" ? "เบอร์โทรศัพท์" : "DIRECT PHONE"}
                  </span>
                  <a
                    href={`tel:${p.phone.replace(/[^0-9]/g, "")}`}
                    className="text-xs sm:text-sm font-mono font-bold text-foreground hover:text-emerald-500 transition-colors block"
                  >
                    {p.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => copyToClipboard(p.phone, "phone")}
                  className="p-2 rounded-lg bg-card hover:bg-card/80 border border-border text-foreground transition-colors"
                  title="Copy Phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
                <a href={`tel:${p.phone.replace(/[^0-9]/g, "")}`}>
                  <Button variant="outline" size="sm" className="font-bold font-mono text-xs gap-1.5 h-8 border-border hover:border-emerald-400">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{lang === "th" ? "โทรออก" : "Call"}</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Documents & Social Links */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono font-bold text-foreground uppercase tracking-wider block">
              {lang === "th" ? "เอกสาร & ช่องทางออนไลน์" : "DOCUMENTS & LINKS"}
            </span>
            <ul className="space-y-2.5 text-xs font-mono text-muted-foreground">
              <li>
                <a
                  href={p.cvPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors flex items-center gap-2.5 p-3 rounded-xl bg-secondary/50 border border-border text-foreground font-semibold hover:border-cyan-500/40"
                >
                  <FileText className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Download Resume / CV (PDF)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-muted-foreground" />
                </a>
              </li>
              <li>
                <a
                  href={p.transcriptPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors flex items-center gap-2.5 p-3 rounded-xl bg-secondary/50 border border-border text-foreground font-semibold hover:border-cyan-500/40"
                >
                  <Sparkles className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Official Transcript (GPAX 3.78)</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-muted-foreground" />
                </a>
              </li>
              <li>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-500 transition-colors flex items-center gap-2.5 p-3 rounded-xl bg-secondary/50 border border-border text-foreground font-semibold hover:border-cyan-500/40"
                >
                  <Github className="w-4 h-4 text-foreground shrink-0" />
                  <span className="truncate">github.com/{p.githubUsername}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto text-muted-foreground" />
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-secondary/30 border border-border/60 text-muted-foreground text-xs">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-2 leading-relaxed">{lang === "th" ? p.addressTh : p.address}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <p className="font-medium">
            © {new Date().getFullYear()} Sakaowan Buranavatasin. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors border border-border font-semibold shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
