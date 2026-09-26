import { X, Calendar, Building, Maximize2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { CertItem } from "@/data/portfolioData"

interface CertificateModalProps {
  cert: CertItem | null
  isOpen: boolean
  onClose: () => void
  lang?: "th" | "en"
  onPreviewImage?: (imgUrl: string, title: string) => void
}

export default function CertificateModal({
  cert,
  isOpen,
  onClose,
  lang = "en",
  onPreviewImage,
}: CertificateModalProps) {
  if (!isOpen || !cert) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-background/95 border border-border rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-secondary border border-border transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyber">{cert.badge}</Badge>
            <span className="text-xs font-mono text-muted-foreground">
              {lang === "th" ? cert.categoryLabelTh : cert.categoryLabel}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">
            {lang === "th" ? cert.titleTh : cert.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-1">
            <span className="flex items-center gap-1">
              <Building className="w-3.5 h-3.5 text-cyan-400" />
              {cert.issuer}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {cert.date}
            </span>
          </div>
        </div>

        {/* Certificate Primary Image */}
        <div className="rounded-xl overflow-hidden border border-border bg-black/50 shadow-inner group relative">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full max-h-[420px] object-contain mx-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80"
            }}
          />
          <button
            onClick={() =>
              onPreviewImage &&
              onPreviewImage(
                cert.image,
                lang === "th" ? cert.titleTh : cert.title
              )
            }
            className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/50 text-cyan-400 text-xs font-mono flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Full Size</span>
          </button>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-foreground block">
            CREDENTIAL / DETAILS:
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground font-sans">
            {lang === "th" ? cert.descTh : cert.desc}
          </p>
        </div>

        {/* Screenshots if available */}
        {cert.screenshots && cert.screenshots.length > 0 && (
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold text-foreground block">
              ADDITIONAL ARTIFACTS / EVIDENCE ({cert.screenshots.length}):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {cert.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    onPreviewImage &&
                    onPreviewImage(
                      s,
                      `${lang === "th" ? cert.titleTh : cert.title} (Evidence ${idx + 1})`
                    )
                  }
                  className="rounded-lg overflow-hidden border border-border bg-black/40 aspect-video cursor-pointer hover:border-cyan-400 transition-all"
                >
                  <img
                    src={s}
                    alt={`Evidence ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Close footer */}
        <div className="pt-4 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-secondary hover:bg-secondary/80 text-foreground border border-border"
          >
            Close Viewer
          </Button>
        </div>
      </div>
    </div>
  )
}
