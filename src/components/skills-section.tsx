import { useState } from "react"
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  Boxes,
  Users,
  Globe,
  ShieldAlert,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioData } from "@/data/portfolioData"

interface SkillsSectionProps {
  lang?: "th" | "en"
}

export default function SkillsSection({ lang = "en" }: SkillsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const categories = portfolioData.skillsCategories

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />
      case "Terminal":
        return <Terminal className="w-5 h-5 text-emerald-400" />
      case "Boxes":
        return <Boxes className="w-5 h-5 text-purple-400" />
      case "Code":
        return <Code className="w-5 h-5 text-blue-400" />
      case "Users":
        return <Users className="w-5 h-5 text-amber-400" />
      case "Globe":
        return <Globe className="w-5 h-5 text-indigo-400" />
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />
    }
  }

  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((c) => c.id === activeCategory)

  return (
    <section id="skills" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "ทักษะและความเชี่ยวชาญ" : "TECHNICAL MATRIX"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "ทักษะด้านเทคนิค & การทดสอบ" : "Core Technical & Testing Skills"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === "th"
              ? "ครอบคลุมความปลอดภัยไซเบอร์ การทดสอบเจาะระบบ การพัฒนาซอฟต์แวร์ และเครื่องมือระดับมืออาชีพ"
              : "Comprehensive matrix covering offensive/defensive cybersecurity, software development, QA methodologies and platforms."}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                : "bg-card border border-border text-foreground hover:border-cyan-400 hover:bg-secondary"
            }`}
          >
            {lang === "th" ? "ทั้งหมด (All Categories)" : "All Categories (6 Domains)"}
          </button>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                    : "bg-card border border-border text-foreground hover:border-cyan-400 hover:bg-secondary"
                }`}
              >
                {lang === "th" ? cat.titleTh : cat.title}
              </button>
            )
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className="bg-card/80 border-border/80 backdrop-blur-md hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-border/60">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30">
                    {getIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {lang === "th" ? category.titleTh : category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono font-medium">
                      {lang === "th" ? category.countLabelTh : category.countLabel}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500/15 transition-all text-xs font-mono text-foreground font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
