import { ShieldCheck, Award, Lock, Server, Cpu } from "lucide-react"

export interface BrandList {
  image?: string
  lightimg?: string
  name: string
  logoText?: string
  category?: string
}

interface BrandSliderProps {
  brandList?: BrandList[]
  title?: string
}

export default function BrandSlider({
  brandList = [
    {
      name: "NCSA Thailand",
      logoText: "NCSA",
      category: "National Cyber Security",
    },
    {
      name: "Fortinet NSE",
      logoText: "FORTINET",
      category: "Network Security Expert",
    },
    {
      name: "Cisco Networking",
      logoText: "CISCO",
      category: "Cybersecurity & CCNA",
    },
    {
      name: "Huawei ICT Academy",
      logoText: "HUAWEI",
      category: "Cloud & Network Security",
    },
    {
      name: "PSRU Engineering",
      logoText: "PSRU",
      category: "Computer Engineering",
    },
    {
      name: "T-Net Cyber",
      logoText: "T-NET",
      category: "Digital Forensics & Security",
    },
    {
      name: "DropCTF Security",
      logoText: "DropCTF",
      category: "Competitive CTF Platform",
    },
  ],
  title = "CERTIFYING AUTHORITIES, ORGANIZATIONS & COMPETITION PLATFORMS",
}: BrandSliderProps) {
  // Duplicate for seamless infinite marquee loop
  const duplicatedBrands = [...brandList, ...brandList, ...brandList]

  return (
    <div className="w-full py-8 sm:py-12 border-y border-border/60 bg-secondary/20 relative overflow-hidden backdrop-blur-sm">
      {/* Label above slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <p className="text-[11px] font-mono font-semibold uppercase tracking-widest text-muted-foreground flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>{title}</span>
        </p>
      </div>

      {/* Gradients on edge for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="flex shrink-0 items-center gap-6 sm:gap-10 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-card/60 border border-border hover:border-cyan-500/50 hover:bg-card hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group shrink-0"
            >
              {brand.image ? (
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none"
                  }}
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  {idx % 4 === 0 ? (
                    <Award className="w-4 h-4" />
                  ) : idx % 4 === 1 ? (
                    <Lock className="w-4 h-4" />
                  ) : idx % 4 === 2 ? (
                    <Server className="w-4 h-4" />
                  ) : (
                    <Cpu className="w-4 h-4" />
                  )}
                </div>
              )}

              <div className="flex flex-col text-left">
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                  {brand.logoText || brand.name}
                </span>
                {brand.category && (
                  <span className="text-[10px] text-muted-foreground font-sans">
                    {brand.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
