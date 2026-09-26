import {
  Briefcase,
  ShieldAlert,
  Award,
  Flame,
  Rocket,
  CheckCircle2,
  Calendar,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/data/portfolioData"

interface ExperienceSectionProps {
  lang?: "th" | "en"
}

export default function ExperienceSection({
  lang = "en",
}: ExperienceSectionProps) {
  const experiences = portfolioData.experiences

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-cyan-400" />
      case "Award":
        return <Award className="w-5 h-5 text-amber-400" />
      case "Flame":
        return <Flame className="w-5 h-5 text-rose-400" />
      case "Rocket":
        return <Rocket className="w-5 h-5 text-purple-400" />
      default:
        return <Briefcase className="w-5 h-5 text-cyan-400" />
    }
  }

  return (
    <section id="experience" className="relative py-20 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === "th" ? "ประสบการณ์การแข่งขันและกิจกรรม" : "COMPETITION & FIELD EXPERIENCE"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {lang === "th" ? "ประสบการณ์แข่งขัน CTF & โครงงาน" : "Cybersecurity & Leadership Milestones"}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === "th"
              ? "ผลงานการแข่งขัน Capture The Flag ระดับประเทศ กิจกรรมบูทแคมป์ และการนำเสนอแผนนวัตกรรม"
              : "Track record of national CTF tournaments, intensive security bootcamps, and technical leadership."}
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-background border-2 border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-md">
                {getIcon(exp.icon)}
              </div>

              {/* Experience Card */}
              <Card className="bg-card/70 border-border/80 backdrop-blur-md group-hover:border-cyan-500/40 group-hover:shadow-xl group-hover:shadow-cyan-500/5 transition-all">
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                        {lang === "th" ? exp.roleTh : exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                        {lang === "th" ? exp.organizationTh : exp.organization}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant={exp.badgeVariant || "cyber"}>
                        {exp.badge}
                      </Badge>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {lang === "th" ? exp.periodTh : exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground font-sans">
                    {lang === "th" ? exp.descriptionTh : exp.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2">
                    {(lang === "th" ? exp.highlightsTh : exp.highlights).map(
                      (h, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-foreground/90 font-sans"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
