import { useState } from "react"
import {
  FolderGit2,
  ChevronRight,
  Maximize2,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolioData"

interface ProjectsSectionProps {
  lang?: "th" | "en"
  onSelectImage?: (imgUrl: string, title: string) => void
}

export default function ProjectsSection({
  lang = "en",
  onSelectImage,
}: ProjectsSectionProps) {
  const [activeProject, setActiveProject] = useState<string>("psru-wallet")
  const projects = portfolioData.projects

  const current = projects.find((p) => p.id === activeProject) || projects[0]

  return (
    <section id="projects" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "โครงงานและผลงานจริง" : "FEATURED PROJECTS & AUDITS"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "ผลงานการพัฒนา & การทดสอบระบบ" : "Engineering & Security Projects"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === "th"
              ? "โครงงานพัฒนาเว็บแอปพลิเคชันบล็อกเชน การทดสอบเจาะระบบเว็บแอปพลิเคชัน และโครงการนวัตกรรมธุรกิจ"
              : "Real-world implementations in blockchain frontend, web penetration audits, and university startup ventures."}
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {projects.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(proj.id)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between ${
                activeProject === proj.id
                  ? "bg-secondary border-cyan-500/60 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                  : "bg-card/50 border-border hover:border-border/80 hover:bg-secondary/40"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge
                    variant={activeProject === proj.id ? "cyber" : "secondary"}
                    className="text-[10px]"
                  >
                    {proj.badge}
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {proj.period}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-foreground line-clamp-1">
                  {lang === "th" ? proj.titleTh : proj.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {lang === "th" ? proj.categoryTh : proj.category}
                </p>
              </div>

              <div className="pt-3 flex items-center text-xs font-mono text-cyan-400 font-semibold gap-1">
                <span>{lang === "th" ? "ดูรายละเอียด" : "Inspect Case Study"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </button>
          ))}
        </div>

        {/* Active Project Detail View */}
        <Card className="bg-card/80 border-border/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          <CardContent className="p-6 sm:p-8 space-y-8">
            {/* Header info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-border">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="cyber">{current.badge}</Badge>
                  <span className="text-xs font-mono text-muted-foreground">
                    {lang === "th" ? current.categoryTh : current.category}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-xs font-mono text-cyan-400">
                    {lang === "th" ? current.roleTh : current.role}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  {lang === "th" ? current.titleTh : current.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="outline" className="font-mono text-xs">
                  {current.period}
                </Badge>
              </div>
            </div>

            {/* Description */}
            <div className="text-sm leading-relaxed text-muted-foreground font-sans">
              <p>{lang === "th" ? current.descriptionTh : current.description}</p>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-foreground block">
                TECHNOLOGY & METHODOLOGY STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {current.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-secondary/80 border border-border text-[11px] font-mono text-cyan-400 dark:text-cyan-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots Gallery Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-foreground flex items-center gap-2">
                  <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>PROJECT ARTIFACTS & EVIDENCE SCREENSHOTS</span>
                </span>
                <span className="text-[11px] text-muted-foreground font-mono">
                  Click image to expand
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {current.images.map((img, iIdx) => (
                  <div
                    key={iIdx}
                    onClick={() =>
                      onSelectImage &&
                      onSelectImage(
                        img,
                        `${lang === "th" ? current.titleTh : current.title} (Image ${iIdx + 1})`
                      )
                    }
                    className="group relative rounded-xl overflow-hidden border border-border bg-black/40 aspect-video cursor-pointer hover:border-cyan-400 hover:shadow-lg transition-all"
                  >
                    <img
                      src={img}
                      alt={`Artifact ${iIdx + 1}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80"
                      }}
                    />
                    <div className="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-lg bg-black/80 text-cyan-400 text-xs font-mono flex items-center gap-1.5 shadow-md">
                        <Maximize2 className="w-3.5 h-3.5" />
                        Preview
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
