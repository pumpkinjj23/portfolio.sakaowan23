import HeroSection, { type AvatarList } from "@/components/ui/hero-01-utils/hero"
import Header, { type NavigationSection } from "@/components/ui/hero-01-utils/header"
import BrandSlider, { type BrandList } from "@/components/ui/hero-01-utils/brand-slider"

interface AgencyHeroSectionProps {
  navigationData?: NavigationSection[]
  avatarList?: AvatarList[]
  brandList?: BrandList[]
  lang?: "th" | "en"
  onToggleLang?: () => void
  theme?: "dark" | "light"
  onToggleTheme?: () => void
}

export default function AgencyHeroSection({
  navigationData = [
    {
      title: "Home",
      href: "#hero",
      isActive: true,
    },
    {
      title: "About us",
      href: "#about",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Certificates",
      href: "#certificates",
    },
  ],
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
      team: "DropCTF Solo Rank #11",
    },
  ],
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
  lang = "en",
  onToggleLang,
  theme = "dark",
  onToggleTheme,
}: AgencyHeroSectionProps) {
  return (
    <div className="relative w-full">
      <Header
        navigationData={navigationData}
        lang={lang}
        onToggleLang={onToggleLang}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
      <main>
        <HeroSection avatarList={avatarList} lang={lang} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  )
}
