import { useState } from "react"
import { Award, Search, Calendar, Building, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { portfolioData, type CertItem } from "@/data/portfolioData"

interface CertificatesSectionProps {
  lang?: "th" | "en"
  onSelectCert: (cert: CertItem) => void
}

export default function CertificatesSection({
  lang = "en",
  onSelectCert,
}: CertificatesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const certs = portfolioData.certificates

  const categories = [
    { id: "all", label: "All Credentials", labelTh: "ทั้งหมด (23+ ใบ)" },
    { id: "ctf", label: "CTF Competitions", labelTh: "การแข่งขัน CTF" },
    { id: "projects", label: "Projects & VAPT", labelTh: "โครงงาน & ทดสอบระบบ" },
    { id: "bootcamp", label: "Bootcamps", labelTh: "บูทแคมป์ & เวิร์กชอป" },
    { id: "course", label: "Courses", labelTh: "คอร์สเรียนไอที" },
  ]

  const filteredCerts = certs.filter((cert) => {
    const matchesCategory =
      activeCategory === "all" || cert.category === activeCategory

    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      cert.title.toLowerCase().includes(q) ||
      cert.titleTh.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q) ||
      cert.badge.toLowerCase().includes(q)

    return matchesCategory && matchesSearch
  })

  return (
    <section id="certificates" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "เกียรติบัตรและใบรับรอง" : "CREDENTIALS & CERTIFICATIONS"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "เกียรติบัตรและใบประกาศนียบัตร" : "Certified Achievements & Badges"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === "th"
              ? `รวมใบประกาศนียบัตรและเกียรติบัตรที่ผ่านการรับรองมากกว่า ${certs.length} รายการ จาก NCSA, Fortinet, Cisco, Huawei และ PSRU`
              : `Verified repository of ${certs.length}+ official certifications issued by NCSA, Fortinet, Cisco, Huawei, and PSRU.`}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500 text-black shadow-md shadow-cyan-500/20"
                      : "bg-card border border-border text-foreground hover:border-cyan-400 hover:bg-secondary"
                  }`}
                >
                  {lang === "th" ? cat.labelTh : cat.label}
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              placeholder={lang === "th" ? "ค้นหาเกียรติบัตร..." : "Search credentials..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs bg-card border-border rounded-xl font-mono text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-6">
          <span>
            {lang === "th"
              ? `แสดง ${filteredCerts.length} จากทั้งหมด ${certs.length} รายการ`
              : `Showing ${filteredCerts.length} of ${certs.length} verified records`}
          </span>
          <span className="hidden sm:inline text-cyan-600 dark:text-cyan-400 font-semibold">
            Click any certificate to expand details
          </span>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <Card
              key={cert.id}
              onClick={() => onSelectCert(cert)}
              className="bg-card/80 border-border/80 backdrop-blur-md hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between overflow-hidden"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] bg-black/40 overflow-hidden border-b border-border">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80"
                  }}
                />
                <div className="absolute top-2.5 left-2.5">
                  <Badge variant="cyber" className="text-[10px] shadow-md">
                    {cert.badge}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Inspect Credential
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block">
                    {lang === "th" ? cert.categoryLabelTh : cert.categoryLabel}
                  </span>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-cyan-500 transition-colors line-clamp-2">
                    {lang === "th" ? cert.titleTh : cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-foreground/80 font-medium">
                  <span className="truncate max-w-[140px] flex items-center gap-1">
                    <Building className="w-3 h-3 text-cyan-500 shrink-0" />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 shrink-0 text-foreground/75">
                    <Calendar className="w-3 h-3 text-purple-500" />
                    {cert.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
