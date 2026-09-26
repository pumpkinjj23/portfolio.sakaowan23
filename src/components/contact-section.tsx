import { useState } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { portfolioData } from "@/data/portfolioData"

interface ContactSectionProps {
  lang?: "th" | "en"
}

export default function ContactSection({ lang = "en" }: ContactSectionProps) {
  const p = portfolioData.personal
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [sentSuccess, setSentSuccess] = useState(false)

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formState.email || !formState.message) return
    const subject = encodeURIComponent(`Inquiry from ${formState.name || "Portfolio Visitor"}`)
    const body = encodeURIComponent(`${formState.message}\n\nFrom: ${formState.name} (${formState.email})`)
    window.open(`mailto:${p.email}?subject=${subject}&body=${body}`, "_blank")
    setSentSuccess(true)
    setTimeout(() => setSentSuccess(false), 4000)
  }

  return (
    <section id="contact" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "ช่องทางการติดต่อ" : "GET IN TOUCH & CONTACT"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "ติดต่อเพื่อร่วมงาน / สัมภาษณ์ฝึกงาน" : "Connect & Career Inquiries"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-medium">
            {lang === "th"
              ? "พร้อมเปิดรับโอกาสฝึกงานและร่วมงานในตำแหน่ง Security Tester, QA Software Tester, Junior Security Engineer หรือ Pentester"
              : "Open for internship opportunities, junior security roles, QA testing positions, and security consulting."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Action Cards */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <Card className="bg-card/80 border-border/80 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all">
              <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase block">
                      {lang === "th" ? "อีเมลทางการ" : "OFFICIAL EMAIL"}
                    </span>
                    <a
                      href={`mailto:${p.email}`}
                      className="text-sm sm:text-base font-mono font-bold text-foreground hover:text-cyan-500 transition-colors truncate block"
                    >
                      {p.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => copyToClipboard(p.email, "email")}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  <a href={`mailto:${p.email}`}>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold font-mono text-xs gap-1.5 h-9">
                      <Send className="w-3.5 h-3.5" />
                      <span>{lang === "th" ? "ส่งอีเมล" : "Send Email"}</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-card/80 border-border/80 backdrop-blur-md hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all">
              <CardContent className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold text-muted-foreground uppercase block">
                      {lang === "th" ? "เบอร์โทรศัพท์" : "PHONE NUMBER"}
                    </span>
                    <a
                      href={`tel:${p.phone.replace(/[^0-9]/g, "")}`}
                      className="text-sm sm:text-base font-mono font-bold text-foreground hover:text-emerald-500 transition-colors block"
                    >
                      {p.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => copyToClipboard(p.phone, "phone")}
                    className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  <a href={`tel:${p.phone.replace(/[^0-9]/g, "")}`}>
                    <Button variant="outline" size="sm" className="font-bold font-mono text-xs gap-1.5 h-9 border-border hover:border-emerald-400">
                      <Phone className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{lang === "th" ? "โทรออก" : "Call Now"}</span>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* GitHub & Location Cards in Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-card/80 border-border/80 backdrop-blur-md">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <Github className="w-5 h-5 text-purple-400" />
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-cyan-400 flex items-center gap-1 font-mono"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase block">
                    GITHUB REPOSITORY
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-foreground hover:text-purple-400 truncate block"
                  >
                    github.com/{p.githubUsername}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-card/80 border-border/80 backdrop-blur-md">
                <CardContent className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <MapPin className="w-5 h-5 text-rose-400" />
                    <span className="text-[10px] font-mono text-muted-foreground font-semibold">PSRU / Phichit</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase block">
                    {lang === "th" ? "ที่อยู่ / พื้นที่ปฏิบัติงาน" : "LOCATION / RESIDENCE"}
                  </span>
                  <p className="text-xs text-foreground font-sans line-clamp-2">
                    {lang === "th" ? p.addressTh : p.address}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Quick Message Form & Status */}
          <div className="lg:col-span-6">
            <Card className="bg-card/80 border-border/80 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span>{lang === "th" ? "ส่งข้อความติดต่อโดยตรง" : "Send a Direct Message"}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans">
                    {lang === "th"
                      ? "กรอกข้อมูลด้านล่างเพื่อเปิดส่งอีเมลไปยัง Sakaowan.b@psru.ac.th โดยตรง"
                      : "Fill in the fields below to launch a direct email to Sakaowan.b@psru.ac.th."}
                  </p>
                </div>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-foreground block">
                      {lang === "th" ? "ชื่อของคุณ / องค์กร" : "Your Name / Company"}
                    </label>
                    <Input
                      type="text"
                      placeholder={lang === "th" ? "เช่น บริษัท Tech จำกัด / ผู้จัดการฝ่ายบุคคล" : "e.g. Acme Security Ltd. / HR Manager"}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-secondary/50 border-border text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-foreground block">
                      {lang === "th" ? "อีเมลติดต่อกลับ *" : "Your Contact Email *"}
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-secondary/50 border-border text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-foreground block">
                      {lang === "th" ? "รายละเอียดข้อความ / ตำแหน่งงานที่ต้องการเสนอ *" : "Message / Role Details *"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={lang === "th" ? "ระบุรายละเอียดงาน วันเริ่มงาน หรือข้อซักถาม..." : "Write your message, project scope or interview details..."}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-md border border-input bg-secondary/50 px-3 py-2 text-xs font-sans text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-bold font-mono text-xs h-10 gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === "th" ? "ส่งข้อความไปยังอีเมล (SEND EMAIL)" : "SEND MESSAGE VIA EMAIL"}</span>
                  </Button>

                  {sentSuccess && (
                    <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono text-center font-bold animate-fadeIn">
                      ✓ Email client opened successfully!
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
