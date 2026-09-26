import { X, ExternalLink } from "lucide-react"

interface ImageLightboxProps {
  imageUrl: string | null
  title?: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageLightbox({
  imageUrl,
  title,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  if (!isOpen || !imageUrl) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[95vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 text-white text-xs font-mono">
          <span className="truncate pr-4">{title || "Artifact Preview"}</span>
          <div className="flex items-center gap-2">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Display */}
        <div className="rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-black/80 max-h-[85vh]">
          <img
            src={imageUrl}
            alt={title || "Preview"}
            className="w-full h-full max-h-[85vh] object-contain"
          />
        </div>
      </div>
    </div>
  )
}
