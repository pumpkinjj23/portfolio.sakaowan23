import {
  User,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Github,
  FileText,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolioData"

interface AboutSectionProps {
  lang?: "th" | "en"
}

export default function AboutSection({ lang = "en" }: AboutSectionProps) {
  const p = portfolioData.personal

  return (
    <section id="about" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "ข้อมูลส่วนตัวและการศึกษา" : "ABOUT & EDUCATION"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "รู้จัก สกาววรรณ (จุ๊บแจง)" : "Meet Sakaowan Buranavatasin"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === "th"
              ? "พร้อมทุ่มเททักษะด้านความปลอดภัยทางไซเบอร์และการทดสอบระบบ เพื่อสร้างคุณค่าให้แก่องค์กร"
              : "Dedicated to building secure digital ecosystems and elevating software reliability."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-card/70 border-border/80 backdrop-blur-md overflow-hidden relative group">
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 border-b border-border/50" />

              <CardContent className="pt-12 p-6 relative">
                {/* Profile Picture & Online Indicator */}
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <img
                    src={p.avatar}
                    alt={p.name}
                    className="w-full h-full rounded-2xl object-cover border-2 border-cyan-400 shadow-xl shadow-cyan-500/20 group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>

                <div className="text-center space-y-1 mb-6">
                  <h3 className="text-lg font-bold text-foreground">
                    {lang === "th" ? p.nameTh : p.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold">
                    {lang === "th" ? `ชื่อเล่น: ${p.nicknameTh} | อายุ ${p.ageTh}` : `Nickname: ${p.nickname} | Age ${p.age}`}
                  </p>
                  <p className="text-xs text-foreground/80 pt-1 font-medium">
                    {lang === "th" ? p.roleTh : p.role}
                  </p>
                </div>

                {/* GPA Highlight Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
                    <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 block uppercase font-bold">
                      Overall GPAX
                    </span>
                    <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                      {p.gpax}
                    </span>
                    <span className="text-[10px] text-foreground/80 block font-medium">
                      PSRU Honor Track
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-center">
                    <span className="text-[10px] font-mono text-purple-700 dark:text-purple-300 block uppercase font-bold">
                      Major GPA
                    </span>
                    <span className="text-2xl font-black text-purple-600 dark:text-purple-400 font-mono">
                      {p.majorGpa}
                    </span>
                    <span className="text-[10px] text-foreground/80 block font-medium">
                      Comp Engineering
                    </span>
                  </div>
                </div>

                {/* Contact List */}
                <div className="space-y-2.5 text-xs text-muted-foreground pt-2 border-t border-border">
                  <a
                    href={`mailto:${p.email}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-secondary transition-colors text-foreground group/c"
                  >
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="font-mono text-xs truncate">{p.email}</span>
                  </a>

                  <a
                    href={`tel:${p.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
                  >
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs">{p.phone}</span>
                  </a>

                  <div className="flex items-start gap-2.5 p-2 rounded-lg text-muted-foreground">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-relaxed">
                      {lang === "th" ? p.addressTh : p.address}
                    </span>
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="font-mono text-xs">{p.githubUsername}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 grid grid-cols-2 gap-2.5">
                  <a
                    href={p.cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-xs font-mono gap-1.5 h-9">
                      <FileText className="w-3.5 h-3.5" />
                      CV (PDF)
                    </Button>
                  </a>
                  <a
                    href={p.transcriptPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full text-xs font-mono border-border hover:border-cyan-500/50 gap-1.5 h-9"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                      TRANSCRIPT
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Bio, Education, Target Roles */}
          <div className="lg:col-span-7 space-y-6">
            {/* Professional Summary */}
            <Card className="bg-card/70 border-border/80 backdrop-blur-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-cyan-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === "th" ? "สรุปความเชี่ยวชาญ" : "PROFESSIONAL PROFILE"}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground font-sans">
                  {lang === "th" ? p.bioTh : p.bio}
                </p>
              </CardContent>
            </Card>

            {/* Education Milestone Card */}
            <Card className="bg-card/70 border-border/80 backdrop-blur-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-purple-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>{lang === "th" ? "ประวัติการศึกษา" : "EDUCATION HISTORY"}</span>
                </div>

                <div className="p-4 rounded-xl bg-secondary/50 border border-border/70 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-foreground text-sm">
                      {lang === "th" ? p.universityTh : p.university}
                    </span>
                    <Badge variant="cyber" className="text-[10px] w-fit">
                      2022 - PRESENT (Final Year)
                    </Badge>
                  </div>

                  <p className="text-xs text-muted-foreground">
                    {lang === "th" ? p.facultyTh : p.faculty} •{" "}
                    <span className="text-foreground font-semibold">
                      {lang === "th" ? p.majorTh : p.major}
                    </span>
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                    <div>
                      <span>GPAX: </span>
                      <strong className="text-cyan-400">{p.gpax}</strong>
                    </div>
                    <div>
                      <span>Major GPA: </span>
                      <strong className="text-purple-400">{p.majorGpa}</strong>
                    </div>
                    <div className="text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>First Class Honors Track</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Target Career Roles */}
            <Card className="bg-card/70 border-border/80 backdrop-blur-md">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-emerald-400">
                  <Award className="w-4 h-4" />
                  <span>{lang === "th" ? "ตำแหน่งงานเป้าหมายที่สนใจ" : "TARGET ROLES & POSITIONS"}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {portfolioData.targetRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-secondary/40 border border-border/60 hover:border-cyan-500/40 hover:bg-secondary/70 transition-colors flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-xs font-semibold text-foreground">
                        {role.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
