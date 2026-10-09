import { useState, useEffect } from "react"
import {
  Shield,
  Terminal,
  FileText,
  Award,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Cpu,
  Fingerprint,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolioData"

export interface AvatarList {
  image: string
  name?: string
  team?: string
  badge?: string
}

interface HeroSectionProps {
  avatarList?: AvatarList[]
  lang?: "th" | "en"
}

export default function HeroSection({
  avatarList = [
    {
      image: "images/cyber_avatar.jpg",
      name: "whereisTheFlag",
      team: "THCTT 2025 Lead",
    },
    {
      image: "images/twitter_post_2.png",
      name: "CPE00",
      team: "Cyber Top Talent 2024",
    },
    {
      image: "images/twitter_post.png",
      name: "CPE66",
      team: "Finalist Team",
    },
    {
      image: "images/cat_avatar.png",
      name: "จจฉายเดี่ยว",
      team: "DropCTF Solo Competitor",
    },
  ],
  lang = "en",
}: HeroSectionProps) {
  const [terminalTab, setTerminalTab] = useState<"sec" | "skills" | "gpa">("sec")
  const [typedText, setTypedText] = useState("")
  const fullCommand = "nmap -sV -sC -T4 --script vuln target.psru.ac.th"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setTypedText(fullCommand.slice(0, index))
      index++
      if (index > fullCommand.length) {
        clearInterval(timer)
      }
    }, 45)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Top Status & Verification Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-xs font-mono">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>
                {lang === "th"
                  ? "พร้อมรับการฝึกงาน / เริ่มต้นทำงานทันที"
                  : "OPEN FOR INTERNSHIP / ENTRY LEVEL"}
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                GPAX 3.78
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {lang === "th" ? (
                  <>
                    ปกป้องระบบดิจิทัล &{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      ทดสอบซอฟต์แวร์
                    </span>{" "}
                    สู่มาตรฐานสากล
                  </>
                ) : (
                  <>
                    Engineering Resilient{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                      Cybersecurity
                    </span>{" "}
                    & Software Systems
                  </>
                )}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl font-sans pt-2">
                {lang === "th" ? (
                  <>
                    <strong className="text-foreground">นางสาวสกาววรรณ บูรณะวาทศิลป์ (จุ๊บแจง)</strong> — นักศึกษาชั้นปีสุดท้าย วิศวกรรมคอมพิวเตอร์ ม.ราชภัฏพิบูลสงคราม (PSRU) เกียรตินิยม GPAX 3.78 / Major 3.88 เชี่ยวชาญการทดสอบเจาะระบบ (Web Pentest), วิทยาการรหัสลับ (Cryptography) และนิติวิทยาศาสตร์ไซเบอร์
                  </>
                ) : (
                  <>
                    <strong className="text-foreground">Sakaowan Buranavatasin (Jubjang)</strong> — Final-Year Computer Engineering Student at PSRU (GPAX 3.78 / Major 3.88). Specialized in Web Security, Cryptography, CTF Competitions & Security QA Testing.
                  </>
                )}
              </p>
            </div>

            {/* Target Role Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge variant="cyber" className="text-xs py-1 px-3">
                🛡️ Security Tester / Intern
              </Badge>
              <Badge variant="cyber" className="text-xs py-1 px-3">
                ⚙️ Junior Security Engineer
              </Badge>
              <Badge variant="cyber" className="text-xs py-1 px-3">
                🧪 QA Software Tester
              </Badge>
              <Badge variant="cyber" className="text-xs py-1 px-3">
                🔍 Penetration Tester
              </Badge>
            </div>

            {/* CTF Teams / Avatar Stack with Trust Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-secondary/40 border border-border/80 rounded-2xl p-3.5 sm:p-4 backdrop-blur-md w-full sm:w-auto">
              <div className="flex -space-x-3 overflow-hidden">
                {avatarList.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar.image}
                    alt={avatar.name || `Avatar ${idx}`}
                    className="inline-block h-11 w-11 rounded-full ring-2 ring-background border border-cyan-500/40 object-cover hover:scale-110 hover:z-10 transition-transform shadow-md"
                    title={`${avatar.name} - ${avatar.team}`}
                    onError={(e) => {
                      // Fallback image if local path has issue
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    }}
                  />
                ))}
              </div>
              <div className="text-xs">
                <div className="font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>4x Competitive CTF Team Player</span>
                </div>
                <p className="text-muted-foreground text-[11px] font-mono">
                  whereisTheFlag • CPE00 • CPE66 • จจฉายเดี่ยว
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black dark:text-slate-950 font-bold px-6 h-11 rounded-xl shadow-lg shadow-cyan-500/25 gap-2">
                  <span>{lang === "th" ? "ดูผลงานโครงงาน" : "Explore Projects"}</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </a>

              <a
                href={portfolioData.personal.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-border hover:border-cyan-500/50 hover:bg-cyan-500/10 h-11 px-5 rounded-xl font-mono text-xs gap-2"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>DOWNLOAD CV</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </Button>
              </a>

              <a href="#certificates" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  className="w-full sm:w-auto text-muted-foreground hover:text-foreground h-11 px-4 text-xs font-mono gap-1.5"
                >
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>23+ CERTIFICATES</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Terminal Simulation */}
          <div className="lg:col-span-5 w-full">
            <div className="relative group">
              {/* Outer Glow Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-2xl bg-card/90 border border-border/80 backdrop-blur-xl shadow-2xl overflow-hidden font-mono">
                {/* Terminal Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-secondary/80 border-b border-border text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
                    <span className="ml-2 text-muted-foreground font-semibold flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      jubjang@security-core: ~
                    </span>
                  </div>

                  {/* Terminal Tabs */}
                  <div className="flex items-center gap-1 bg-background/60 p-0.5 rounded-lg border border-border/50 text-[11px]">
                    <button
                      onClick={() => setTerminalTab("sec")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        terminalTab === "sec"
                          ? "bg-cyan-500 text-black font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      AUDIT
                    </button>
                    <button
                      onClick={() => setTerminalTab("skills")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        terminalTab === "skills"
                          ? "bg-cyan-500 text-black font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      STACK
                    </button>
                    <button
                      onClick={() => setTerminalTab("gpa")}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        terminalTab === "gpa"
                          ? "bg-cyan-500 text-black font-bold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      METRICS
                    </button>
                  </div>
                </div>

                {/* Terminal Body */}
                <div className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed space-y-3 min-h-[310px] bg-background/50">
                  {terminalTab === "sec" && (
                    <div className="space-y-2 animate-fadeIn">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-cyan-400 font-bold">$</span>
                        <span className="text-foreground">{typedText}</span>
                        <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                      </div>
                      <div className="pt-2 text-muted-foreground space-y-1">
                        <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>[+] PORT 443/TCP OPEN (TLS 1.3 / OWASP Verified)</span>
                        </div>
                        <div className="text-cyan-400 flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5" />
                          <span>[+] CRYPTO: AES-256-GCM / SHA-256 / ECC RSA</span>
                        </div>
                        <div className="text-purple-400 flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5" />
                          <span>[+] BLOCKCHAIN: PSRU Wallet Contract Deployed</span>
                        </div>
                        <div className="text-amber-400 flex items-center gap-1.5">
                          <Fingerprint className="w-3.5 h-3.5" />
                          <span>[+] FORENSICS: Volatility 3 & Wireshark PCAP Ready</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-border/60 text-[11px] text-muted-foreground flex justify-between">
                        <span>SECURITY STATE: SECURED</span>
                        <span className="text-emerald-400">STATUS: READY_FOR_DEPLOY</span>
                      </div>
                    </div>
                  )}

                  {terminalTab === "skills" && (
                    <div className="space-y-2.5 animate-fadeIn">
                      <div className="text-cyan-400 font-bold">
                        // CORE SECURITY & DEV TOOLSET
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-secondary/60 border border-border/60">
                          <span className="text-foreground font-semibold block">🛡️ Security Tools</span>
                          <span className="text-muted-foreground">Wireshark, Burp Suite, Nmap, Metasploit</span>
                        </div>
                        <div className="p-2 rounded bg-secondary/60 border border-border/60">
                          <span className="text-foreground font-semibold block">💻 Languages</span>
                          <span className="text-muted-foreground">Python, JS, TS, Solidity, PHP, SQL</span>
                        </div>
                        <div className="p-2 rounded bg-secondary/60 border border-border/60">
                          <span className="text-foreground font-semibold block">🧪 QA & Testing</span>
                          <span className="text-muted-foreground">Selenium, Postman, Jest, Black/White Box</span>
                        </div>
                        <div className="p-2 rounded bg-secondary/60 border border-border/60">
                          <span className="text-foreground font-semibold block">☁️ Cloud & OS</span>
                          <span className="text-muted-foreground">Kali Linux, Ubuntu, Docker, AWS/GCP</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {terminalTab === "gpa" && (
                    <div className="space-y-3 animate-fadeIn">
                      <div className="text-cyan-400 font-bold">
                        // ACADEMIC & MERIT SCORECARD
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                          <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                            3.78
                          </div>
                          <div className="text-[10px] text-muted-foreground font-mono mt-1">
                            OVERALL GPAX (PSRU)
                          </div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30">
                          <div className="text-2xl sm:text-3xl font-black text-purple-400">
                            3.88
                          </div>
                          <div className="text-[10px] text-muted-foreground font-mono mt-1">
                            MAJOR GPA (COMP ENG)
                          </div>
                        </div>
                      </div>
                      <div className="text-[11px] text-muted-foreground leading-normal p-2 rounded bg-secondary/50 border border-border/50 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>High First-Class Honors Track in Computer Engineering</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
