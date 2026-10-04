export interface NavigationItem {
  title: string
  titleTh: string
  href: string
  isActive?: boolean
}

export interface AvatarItem {
  name: string
  team: string
  image: string
  badge?: string
}

export interface BrandItem {
  name: string
  logoText: string
  category: string
  icon?: string
}

export interface ExperienceItem {
  id: string
  role: string
  roleTh: string
  organization: string
  organizationTh: string
  period: string
  periodTh: string
  badge: string
  badgeVariant?: "cyber" | "success" | "secondary"
  description: string
  descriptionTh: string
  highlights: string[]
  highlightsTh: string[]
  icon: string
}

export interface ProjectItem {
  id: string
  title: string
  titleTh: string
  category: string
  categoryTh: string
  role: string
  roleTh: string
  period: string
  description: string
  descriptionTh: string
  tags: string[]
  images: string[]
  badge: string
}

export interface CertItem {
  id: string
  title: string
  titleTh: string
  category: "projects" | "ctf" | "bootcamp" | "course"
  categoryLabel: string
  categoryLabelTh: string
  image: string
  date: string
  badge: string
  issuer: string
  desc: string
  descTh: string
  screenshots?: string[]
}

export interface SkillsCategory {
  id: string
  title: string
  titleTh: string
  countLabel: string
  countLabelTh: string
  icon: string
  skills: string[]
}

export interface PortfolioData {
  personal: any
  targetRoles: { title: string; color: string }[]
  navigationData: NavigationItem[]
  teamAvatars: AvatarItem[]
  brandList: BrandItem[]
  skillsCategories: SkillsCategory[]
  certificates: CertItem[]
  experiences: ExperienceItem[]
  projects: ProjectItem[]
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Sakaowan Buranavatasin",
    nameTh: "นางสาวสกาววรรณ บูรณะวาทศิลป์",
    nickname: "Jubjang",
    nicknameTh: "จุ๊บแจง",
    age: "22",
    ageTh: "22 ปี",
    role: "Cybersecurity & Software Testing",
    roleTh: "ความมั่นคงปลอดภัยไซเบอร์ & การทดสอบซอฟต์แวร์",
    subtitle: "Final-year Computer Engineering Student",
    subtitleTh: "นักศึกษาชั้นปีสุดท้าย สาขาวิชาวิศวกรรมคอมพิวเตอร์",
    university: "Pibulsongkram Rajabhat University (PSRU)",
    universityTh: "มหาวิทยาลัยราชภัฏพิบูลสงคราม (PSRU)",
    faculty: "Engineering and Industrial Technology",
    facultyTh: "คณะเทคโนโลยีอุตสาหกรรม",
    major: "Computer Engineering",
    majorTh: "วิศวกรรมคอมพิวเตอร์",
    gpax: "3.78",
    majorGpa: "3.88",
    email: "Sakaowan.b@psru.ac.th",
    phone: "095-4847-391",
    github: "https://github.com/pumpkinjj23",
    githubUsername: "pumpkinjj23",
    website: "https://pumpkinjj23.github.io/portfolio.sakaowan23/",
    websiteLabel: "portfolio.sakaowan23",
    address: "61/1, Moo 4, Tha Lo Subdistrict, Mueang Phichit District, Phichit 66000, Thailand",
    addressTh: "61/1 หมู่ 4 ตำบลท่าฬ่อ อำเภอเมืองพิจิตร จังหวัดพิจิตร 66000",
    avatar: "images/cyber_avatar.jpg",
    transcriptPdf: "transcript.pdf",
    cvPdf: "CV_Sakaowan.pdf",
    bio: "Final-year Computer Engineering student at Pibulsongkram Rajabhat University (PSRU) with a strong interest in Cybersecurity and Software Testing. Hands-on experience in Network & Web Security, Cryptography, and Digital Forensics through academic projects and CTF competitions. A fast learner with strong analytical and problem-solving skills, able to work effectively both independently and as part of a team. Seeking an internship or entry-level position as a Security Tester, Cybersecurity Intern, Junior Security Engineer, QA Software Tester, or Penetration Tester / IT Security Consultant to apply my technical skills while growing professionally in cybersecurity and software engineering.",
    bioTh: "นักศึกษาชั้นปีสุดท้าย สาขาวิชาวิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยราชภัฏพิบูลสงคราม (PSRU) มีความสนใจอย่างยิ่งในด้านความมั่นคงปลอดภัยไซเบอร์ (Cybersecurity) และการทดสอบซอฟต์แวร์ (Software Testing) มีประสบการณ์จริงในการทดสอบความปลอดภัยเครือข่ายและเว็บ, วิทยาการรหัสลับ (Cryptography) และนิติวิทยาศาสตร์ดิจิทัล (Digital Forensics) ผ่านโครงงานการศึกษาและการแข่งขัน CTF พร้อมเรียนรู้เร็ว มีทักษะการคิดวิเคราะห์และแก้ไขปัญหาที่ดี สามารถทำงานร่วมกับทีมและปฏิบัติงานเดี่ยวได้อย่างมีประสิทธิภาพ กำลังมองหาโอกาสฝึกงานหรือตำแหน่งงานระดับเริ่มต้น ในตำแหน่ง Security Tester, Cybersecurity Intern, Junior Security Engineer, QA Software Tester หรือ Penetration Tester / IT Security Consultant เพื่อนำทักษะด้านเทคนิคมาประยุกต์ใช้และพัฒนาต่อยอดในสายงาน",
  },

  targetRoles: [
    { title: "Security Tester / Cybersecurity Intern", color: "cyan" },
    { title: "Junior Security Engineer", color: "purple" },
    { title: "QA (Quality Assurance) Software Tester", color: "green" },
    { title: "Penetration Tester / IT Security Consultant", color: "amber" },
  ],

  navigationData: [
    { title: "Home", titleTh: "หน้าแรก", href: "#hero", isActive: true },
    { title: "About", titleTh: "เกี่ยวกับฉัน", href: "#about" },
    { title: "Skills", titleTh: "ทักษะ", href: "#skills" },
    { title: "Projects", titleTh: "โครงงาน", href: "#projects" },
    { title: "Experience", titleTh: "ประสบการณ์", href: "#experience" },
    { title: "Certificates", titleTh: "เกียรติบัตร", href: "#certificates" },
    { title: "Contact", titleTh: "ติดต่อ", href: "#contact" },
  ],

  teamAvatars: [
    {
      name: "whereisTheFlag",
      team: "THCTT 2025 & PSRU Hackathon 3",
      image: "images/cyber_avatar.jpg",
      badge: "Team Lead",
    },
    {
      name: "CPE00",
      team: "Thailand Cyber Top Talent 2024",
      image: "images/twitter_post_2.png",
      badge: "Senior Qualifier",
    },
    {
      name: "CPE66",
      team: "Women THCTT 2024",
      image: "images/twitter_post_8.png",
      badge: "Senior Division",
    },
    {
      name: "จจฉายเดี่ยว",
      team: "Women THCTT 2025",
      image: "images/twitter_post_9.png",
      badge: "Solo Competitor",
    },
  ],

  brandList: [
    { name: "NCSA", logoText: "NCSA Thailand", category: "Cyber Agency" },
    { name: "Fortinet", logoText: "Fortinet Training", category: "Security Institute" },
    { name: "Cisco", logoText: "Cisco NetAcad", category: "Networking Academy" },
    { name: "Huawei", logoText: "Huawei ICT Academy", category: "Cloud & Dev" },
    { name: "PSRU", logoText: "PSRU Computer Engineering", category: "University Faculty" },
    { name: "T-Net", logoText: "T-Net Application Security", category: "Security Firm" },
    { name: "DropCTF", logoText: "DropCTF Community", category: "CTF Platform" },
  ],

  skillsCategories: [
    {
      id: "cybersecurity",
      title: "Cybersecurity & Testing",
      titleTh: "ความมั่นคงปลอดภัยไซเบอร์",
      countLabel: "8 skills",
      countLabelTh: "8 ทักษะ",
      icon: "ShieldAlert",
      skills: [
        "Cryptography (RSA, Base64, XOR, Caesar, Hashing)",
        "Burp Suite (Web Security & VAPT)",
        "Digital Forensics (PCAP Traffic & Images)",
        "Wireshark (Packet Inspection)",
        "CyberChef (Data Transformation)",
        "Hashcat (Hash Cracking)",
        "OWASP ZAP (Basic)",
        "CTF & Security Labs",
      ],
    },
    {
      id: "os",
      title: "Operating Systems",
      titleTh: "ระบบปฏิบัติการ",
      countLabel: "3 OS",
      countLabelTh: "3 ระบบ",
      icon: "Terminal",
      skills: ["Kali Linux", "Ubuntu", "Windows 11 / 10"],
    },
    {
      id: "tools",
      title: "Platforms & Tools",
      titleTh: "เครื่องมือ & แพลตฟอร์ม",
      countLabel: "8 tools",
      countLabelTh: "8 เครื่องมือ",
      icon: "Boxes",
      skills: [
        "Burp Suite",
        "Wireshark",
        "CyberChef",
        "Postman",
        "K9",
        "Docker",
        "Git & GitHub",
        "VS Code",
      ],
    },
    {
      id: "programming",
      title: "Programming & Web",
      titleTh: "การเขียนโปรแกรม & การพัฒนาเว็บ",
      countLabel: "7 skills",
      countLabelTh: "7 ทักษะ",
      icon: "Code",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Java",
        "C",
        "Python (Basic)",
        "REST APIs",
      ],
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      titleTh: "ทักษะด้านการทำงาน",
      countLabel: "6 skills",
      countLabelTh: "6 ทักษะ",
      icon: "Users",
      skills: [
        "Problem Solving",
        "Critical Thinking",
        "Teamwork",
        "Communication",
        "Time Management",
        "Continuous Learning",
      ],
    },
    {
      id: "languages",
      title: "Languages",
      titleTh: "ทักษะทางภาษา",
      countLabel: "2 languages",
      countLabelTh: "2 ภาษา",
      icon: "Globe",
      skills: [
        "Thai: Native",
        "English: Intermediate (Technical Reading & Documentation)",
      ],
    },
  ],

  certificates: [
    {
      id: "psru-wallet",
      title: "PSRU Blockchain Digital Wallet for Carbon Credit Points",
      titleTh: "ระบบกระเป๋าเงินดิจิทัลบล็อกเชนสำหรับคะแนนคาร์บอนเครดิต (PSRU Blockchain Digital Wallet)",
      category: "projects",
      categoryLabel: "Web Application Development",
      categoryLabelTh: "พัฒนาเว็บแอปพลิเคชัน (Web Development)",
      image: "images/psru_wallet_screenshot1.png",
      date: "Mar 2026",
      badge: "Frontend Developer",
      issuer: "PSRU University Blockchain Project",
      desc: "Served as a Frontend Developer for the university's blockchain-based digital wallet application. Designed and implemented a responsive, user-friendly interface for managing carbon credit points, ensuring secure integration with the blockchain backend.",
      descTh: "ทำหน้าที่เป็นนักพัฒนาส่วนหน้า (Frontend Developer) พัฒนาระบบกระเป๋าเงินดิจิทัลบนเทคโนโลยีบล็อกเชนของมหาวิทยาลัย เพื่อรองรับการสะสมและแลกเปลี่ยนคะแนนคาร์บอนเครดิต โดยออกแบบส่วนติดต่อผู้ใช้ (UI) ให้สวยงาม ใช้งานง่าย และเชื่อมต่อระบบหลังบ้านอย่างปลอดภัย",
      screenshots: [
        "images/psru_wallet_screenshot1.png",
        "images/psru_wallet_screenshot2.png",
        "images/psru_wallet_screenshot3.png",
        "images/psru_wallet_screenshot4.png",
      ],
    },
    {
      id: "back-to-techno",
      title: "Web Penetration Testing: 'Back to Techno 2026' Faculty Application",
      titleTh: "การทดสอบเจาะระบบเว็บแอปพลิเคชัน 'Back to Techno 2026' ของคณะ",
      category: "projects",
      categoryLabel: "Web Penetration Testing",
      categoryLabelTh: "ทดสอบเจาะระบบ (Web Pentesting)",
      image: "images/backtotechno_cover.png",
      date: "Nov 2025",
      badge: "Faculty Project",
      issuer: "Faculty of Industrial Technology",
      desc: "Conducted web penetration testing (VAPT) for the alumni reunion reservation web application. Identified vulnerabilities using Nikto scanner, intercepted parameters using Burp Suite to audit Access Control vulnerabilities, and verified upload form security.",
      descTh: "ทำการทดสอบเจาะระบบ (Web Pentest) บนระบบจองโต๊ะงานคืนสู่เหย้าศิษย์เก่าของคณะเทคโนโลยีอุตสาหกรรม โดยทำการสแกนช่องโหว่ความเสี่ยงด้วย Nikto และวิเคราะห์ดักจับพารามิเตอร์ Request ด้วย Burp Suite ในการตรวจสอบการควบคุมสิทธิ์เข้าถึง (Access Control) และความปลอดภัยของสลิปชำระเงินก่อนใช้งานจริง",
      screenshots: [
        "images/backtotechno_cover.png",
        "images/backtotechno_seatmap.png",
        "images/backtotechno_form.png",
        "images/backtotechno_nikto.png",
        "images/backtotechno_burp1.png",
        "images/backtotechno_burp2.png",
        "images/backtotechno_burp3.png",
      ],
    },
    {
      id: "r2m-2024",
      title: "Research to Market (R2M) 2024 Competition",
      titleTh: "โครงการเส้นทางสู่นวัตวณิชย์ Research to Market: R2M 2024",
      category: "projects",
      categoryLabel: "Project / Pitching Competition",
      categoryLabelTh: "โครงการ / แข่งขัน Pitching",
      image: "images/twitter_post_9.png",
      date: "30 Oct - 1 Nov 2024",
      badge: "Appreciation Award",
      issuer: "PSRU & Science Park",
      desc: "Participated in the university-level 'Research to Market' (R2M) competition and won the Appreciation Award for presenting commercial feasibility study for research innovations under team Green Nest at PSRU.",
      descTh: "เข้าร่วมโครงการ 'เส้นทางสู่นวัตวณิชย์' (Research to Market: R2M) ระดับมหาวิทยาลัย และได้รับรางวัลชมเชยจากการแข่งขันการนำเสนอแผนความเป็นไปได้ในการนำผลงานวิจัยไปต่อยอดเชิงพาณิชย์ ในนามทีม Green Nest ณ มหาวิทยาลัยราชภัฏพิบูลสงคราม",
    },
    {
      id: "new-regional-startups",
      title: "New Regional Startups (P1) 2024 Entrepreneurship Program",
      titleTh: "โครงการสร้างผู้ประกอบการรายใหม่ในภูมิภาค New Regional Startups (P1) 2024",
      category: "projects",
      categoryLabel: "Project / Pitching Competition",
      categoryLabelTh: "โครงการ / แข่งขัน Pitching",
      image: "images/twitter_post_8.png",
      date: "5-8 Oct 2024",
      badge: "Appreciation Award",
      issuer: "Northern Science Park Network",
      desc: "Participated in the New Regional Startups (P1) entrepreneurship program and won the Appreciation Award in the technology business plan pitching competition under team PETCOLL TECH.",
      descTh: "เข้าร่วมโครงการพัฒนาผู้ประกอบการรายใหม่ในภูมิภาค New Regional Startups (P1) และได้รับรางวัลชมเชยจากการแข่งขัน Pitching แผนธุรกิจเทคโนโลยี ในนามทีม PETCOLL TECH จัดโดยมหาวิทยาลัยราชภัฏพิบูลสงคราม ร่วมกับเครือข่ายอุทยานวิทยาศาสตร์ภาคเหนือ",
    },
    {
      id: "thctt-2025",
      title: "Thailand Cyber Talent 2025",
      titleTh: "การแข่งขัน Thailand Cyber Top Talent 2025",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/Part_2_Senior_Top_Talent_Page177.png",
      date: "30 Aug 2025",
      badge: "NCSA",
      issuer: "National Cyber Security Agency (NCSA)",
      desc: "Participated in the Thailand Cyber Top Talent 2025 competition, Senior Division [Qualifier] as a member of team whereisTheFlag.",
      descTh: "เข้าร่วมการแข่งขัน Thailand Cyber Top Talent 2025 ระดับ SENIOR [Qualifier] ในนามทีม whereisTheFlag",
    },
    {
      id: "thctt-2024",
      title: "Thailand Cyber Top Talent 2024",
      titleTh: "การแข่งขัน Thailand Cyber Top Talent 2024",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/Cert_Senior_THCTT24_Num492.png",
      date: "12 Oct 2024",
      badge: "NCSA",
      issuer: "National Cyber Security Agency (NCSA)",
      desc: "Participated in the Thailand Cyber Top Talent 2024 competition, Senior Division [Qualifier] as a member of team cpe00.",
      descTh: "เข้าร่วมการแข่งขัน Thailand Cyber Top Talent 2024 ระดับ SENIOR [Qualifier] ในนามทีม cpe00",
    },
    {
      id: "women-thctt-2025",
      title: "Women Thailand Cyber Top Talent 2025",
      titleTh: "การแข่งขัน Women Thailand Cyber Top Talent 2025",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/Certificate_จจฉายเดี่ยว_Sakaowan_Buranavatasin.png",
      date: "17 Jan 2026",
      badge: "NCSA & Huawei",
      issuer: "NCSA & Huawei",
      desc: "Participated in the Women Thailand Cyber Top Talent 2025 competition, Senior Division [Qualifier] as a member of team จจฉายเดี่ยว.",
      descTh: "เข้าร่วมการแข่งขัน Women Thailand Cyber Top Talent 2025 ระดับ SENIOR [Qualifier] ในนามทีม จจฉายเดี่ยว",
    },
    {
      id: "women-thctt-2024",
      title: "Women Thailand Cyber Top Talent 2024",
      titleTh: "การแข่งขัน Women Thailand Cyber Top Talent 2024",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/150_SENIOR_Women_CERT_NCSA_Boot_Camp_2024_รุ่น_2.png",
      date: "23 Jan 2025",
      badge: "NCSA",
      issuer: "National Cyber Security Agency (NCSA)",
      desc: "Participated in the Women Thailand Cyber Top Talent 2024 competition, Senior Division [Qualifier] as a member of team CPE66.",
      descTh: "เข้าร่วมการแข่งขัน Women Thailand Cyber Top Talent 2024 ระดับ SENIOR [Qualifier] ในนามทีม CPE66",
    },
    {
      id: "psru-hackathon-3",
      title: "PSRU Cyber Hackathon #3 (2026)",
      titleTh: "การแข่งขัน PSRU Cyber Hackathon #3 (2026)",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/Certificate_นางสาวสกาววรรณ_บูรณะวาทศิลป์_PSRUHACK26_749B4C80_1.png",
      date: "19-21 Mar 2026",
      badge: "PSRU & NCSA",
      issuer: "PSRU & NCSA",
      desc: "Participated in the PSRU Cyber Hackathon #3 advanced workshop (21 hours) as a member of team whereisTheFlag.",
      descTh: "เข้าร่วมการแข่งขันอบรมเชิงปฏิบัติการขั้นสูง (Advanced Level - 21 ชม.) PSRU CYBER HACKATHON#3 ในนามทีม whereisTheFlag",
    },
    {
      id: "psru-hackathon-2",
      title: "PSRU Cyber Hackathon #2 (2024)",
      titleTh: "การแข่งขัน PSRU Cyber Hackathon #2 (2024)",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/Certificate_Hackathon_2.png",
      date: "1-3 Dec 2024",
      badge: "6th Place",
      issuer: "PSRU & NCSA",
      desc: "Participated in the PSRU Cyber Hackathon #2 cybersecurity training and competition (21 hours) and secured 6th place.",
      descTh: "เข้าร่วมการฝึกอบรมและแข่งขันทักษะการรักษาความปลอดภัยไซเบอร์ (21 ชม.) และได้รับรางวัลอันดับที่ 6",
    },
    {
      id: "ncsa-bootcamp-2025",
      title: "Mini CTF - NCSA Boot Camp 2025",
      titleTh: "รองชนะเลิศอันดับ 2 การแข่งขัน Mini CTF - NCSA Boot Camp 2025",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/รองชนะเลิศ_อันดับ_2_การแข่งขัน_CTF_BootCamp_2025_Part3.png",
      date: "28-29 Jun 2025",
      badge: "3rd Place",
      issuer: "NCSA",
      desc: "Won 3rd place (2nd Runner-up) in the Mini CTF competition at NCSA Boot Camp 2025 with team Data Protection Unit (หน่วยป้องกันข้อมูล).",
      descTh: "ได้รับรางวัลรองชนะเลิศอันดับ 2 (อันดับ 3) การแข่งขัน Mini CTF ในบูทแคมป์ NCSA 2025 ในนามทีม หน่วยป้องกันข้อมูล",
    },
    {
      id: "ncsa-bootcamp-2024",
      title: "Mini CTF - NCSA Boot Camp 2024",
      titleTh: "ชนะเลิศอันดับ 2 การแข่งขัน Mini CTF - NCSA Boot Camp 2024",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/twitter_post_2.png",
      date: "14-15 Sep 2024",
      badge: "2nd Place",
      issuer: "NCSA",
      desc: "Won 2nd place (1st Runner-up) in the NCSA Boot Camp 2024 workshop competition as a member of team DYPACK.",
      descTh: "ได้รับรางวัลชนะเลิศอันดับ 2 (รองชนะเลิศอันดับ 1) ในกิจกรรมอบรมสัมมนาเชิงปฏิบัติการ NCSA Boot Camp 2024 ในนามทีม DYPACK",
    },
    {
      id: "wan-lai-ctf",
      title: "Wan Lai CTF Challenge 2026",
      titleTh: "การแข่งขัน Wan Lai CTF Challenge 2026",
      category: "ctf",
      categoryLabel: "CTF Competitions",
      categoryLabelTh: "การแข่งขัน CTF",
      image: "images/cert_19de3dfa80a_1002.png",
      date: "30 Apr 2026",
      badge: "DropCTF",
      issuer: "DropCTF",
      desc: "Awarded Certificate of Achievement for participating in the Wan Lai CTF Challenge 2026 organized by DropCTF.",
      descTh: "ได้รับใบประกาศเกียรติคุณ Certificate of Achievement จากการเข้าร่วมแข่งขัน Wan Lai CTF Challenge 2026 จัดโดย DropCTF",
    },
    {
      id: "secure-software-dev",
      title: "Secure Software Development & Application Security (2026)",
      titleTh: "หลักสูตร Secure Software Development & Application Security",
      category: "bootcamp",
      categoryLabel: "Bootcamps & Workshops",
      categoryLabelTh: "บูทแคมป์ & เวิร์กชอป",
      image: "images/ระบบจัดการการอบรม_1.png",
      date: "27-28 Jun 2026",
      badge: "PSRU & T-Net",
      issuer: "PSRU & T-Net",
      desc: "Completed the hands-on training course on Secure Software Development & Application Security organized by Pibulsongkram Rajabhat University and T-Net.",
      descTh: "ผ่านการอบรมเชิงปฏิบัติการหลักสูตร Secure Software Development & Application Security จัดโดยมหาวิทยาลัยราชภัฏพิบูลสงคราม ร่วมกับ T-Net",
    },
    {
      id: "ctf-bootcamp-batch2",
      title: "CTF Boot Camp Batch 2 (2026)",
      titleTh: "CTF Boot Camp รุ่นที่ 2 (เชียงใหม่)",
      category: "bootcamp",
      categoryLabel: "Bootcamps & Workshops",
      categoryLabelTh: "บูทแคมป์ & เวิร์กชอป",
      image: "images/CTF_Boot_Camp_Batch_2.jpg",
      date: "6-7 Jun 2026",
      badge: "NCSA",
      issuer: "NCSA",
      desc: "Completed the cybersecurity hands-on workshop CTF Boot Camp Batch 2, held at The Grand Chaophraya Nimman Hotel, Chiang Mai.",
      descTh: "ผ่านการอบรมเชิงปฏิบัติการทางไซเบอร์ โครงการกิจกรรม CTF BOOT CAMP รุ่นที่ 2 ณ โรงแรมเดอะ แกรนด์ ชัยพฤกษ์ นิมมาน เชียงใหม่",
    },
    {
      id: "ctf-career-2026",
      title: "CTF Boot Camp & Career Guidance 2026",
      titleTh: "CTF Boot Camp & แนะแนวอาชีพทางด้านความปลอดภัยไซเบอร์ 2026",
      category: "bootcamp",
      categoryLabel: "Bootcamps & Workshops",
      categoryLabelTh: "บูทแคมป์ & เวิร์กชอป",
      image: "images/cert_13852.jpg",
      date: "25-26 Apr 2026",
      badge: "NCSA",
      issuer: "NCSA",
      desc: "Completed the CTF Boot Camp & Cybersecurity Career Guidance workshop for the year 2026.",
      descTh: "ผ่านการอบรมเชิงปฏิบัติการ CTF Boot Camp และแนะแนวอาชีพทางด้านการรักษาความมั่นคงปลอดภัยไซเบอร์ ประจำปี 2569",
    },
    {
      id: "ctf-career-2025",
      title: "CTF Boot Camp & Career Guidance 2025",
      titleTh: "CTF Boot Camp & แนะแนวอาชีพทางด้านความปลอดภัยไซเบอร์ 2025",
      category: "bootcamp",
      categoryLabel: "Bootcamps & Workshops",
      categoryLabelTh: "บูทแคมป์ & เวิร์กชอป",
      image: "images/page_117.png",
      date: "24-25 May 2568",
      badge: "NCSA",
      issuer: "NCSA",
      desc: "Completed the online CTF Boot Camp & Cybersecurity Career Guidance workshop.",
      descTh: "ผ่านการอบรมเชิงปฏิบัติการ CTF Boot Camp และแนะแนวอาชีพทางด้านการรักษาความมั่นคงปลอดภัยไซเบอร์ ผ่านสื่ออิเล็กทรอนิกส์",
    },
    {
      id: "ctf-bootcamp-batch1",
      title: "CTF Boot Camp Batch 1 (2025)",
      titleTh: "CTF Boot Camp รุ่นที่ 1 (พิษณุโลก)",
      category: "bootcamp",
      categoryLabel: "Bootcamps & Workshops",
      categoryLabelTh: "บูทแคมป์ & เวิร์กชอป",
      image: "images/CTF_Cert_Part36.png",
      date: "28-29 Jun 2568",
      badge: "NCSA",
      issuer: "NCSA",
      desc: "Completed the cybersecurity hands-on workshop CTF Boot Camp Batch 1, held at The Imperial Hotel Phitsanulok.",
      descTh: "ผ่านการอบรมเชิงปฏิบัติการทางไซเบอร์ โครงการกิจกรรม CTF BOOT CAMP รุ่นที่ 1 จัดขึ้น ณ โรงแรม ดิ อิมพีเรียล โฮเทล พิษณุโลก",
    },
    {
      id: "fortinet-cyber-3",
      title: "Getting Started in Cybersecurity 3.0",
      titleTh: "Getting Started in Cybersecurity 3.0",
      category: "course",
      categoryLabel: "Technical Courses",
      categoryLabelTh: "คอร์สเรียนไอที",
      image: "images/6843942812SB.png",
      date: "5 Jul 2026",
      badge: "Fortinet",
      issuer: "Fortinet Training Institute",
      desc: "Successfully completed the Getting Started in Cybersecurity 3.0 course by the Fortinet Training Institute.",
      descTh: "สำเร็จการศึกษาหลักสูตร Getting Started in Cybersecurity 3.0 จากสถาบันฝึกอบรมฟอร์ทิเน็ต (Fortinet Training Institute)",
    },
    {
      id: "container-tech",
      title: "Container Technology (Docker & K8s)",
      titleTh: "หลักสูตรเทคโนโลยีคอนเทนเนอร์ (Docker & Kubernetes)",
      category: "course",
      categoryLabel: "Technical Courses",
      categoryLabelTh: "คอร์สเรียนไอที",
      image: "images/certificate.png",
      date: "8-9 Mar 2568",
      badge: "PSRU",
      issuer: "Pibulsongkram Rajabhat University",
      desc: "Completed a 12-hour Container Technology (Docker, Kubernetes) training course for computer engineering students.",
      descTh: "ผ่านการฝึกอบรมหลักสูตร Container Technology (Docker, Kubernetes) สำหรับนักศึกษาวิศวกรรมคอมพิวเตอร์ จำนวน 12 ชั่วโมง",
    },
    {
      id: "cisco-python-1",
      title: "Python Essentials 1",
      titleTh: "หลักสูตร Cisco Python Essentials 1",
      category: "course",
      categoryLabel: "Technical Courses",
      categoryLabelTh: "คอร์สเรียนไอที",
      image: "images/PythonEssentials1Update20251202_29_le4v6w.png",
      date: "2 Dec 2025",
      badge: "Cisco",
      issuer: "Cisco Networking Academy & OpenEDG",
      desc: "Graduated from the fundamental Python Essentials 1 course by Cisco Networking Academy and OpenEDG Python Institute.",
      descTh: "สำเร็จการศึกษาหลักสูตรภาษาไพธอนพื้นฐาน Python Essentials 1 จาก Cisco Networking Academy และ OpenEDG Python Institute",
    },
    {
      id: "huawei-python",
      title: "Python Programming Basics",
      titleTh: "หลักสูตร Huawei Python Programming Basics",
      category: "course",
      categoryLabel: "Technical Courses",
      categoryLabelTh: "คอร์สเรียนไอที",
      image: "images/profile_photo.png",
      date: "2025",
      badge: "Huawei",
      issuer: "Huawei ICT Academy",
      desc: "Successfully completed and received certification in Python Programming Basics from the Huawei ICT Academy.",
      descTh: "สำเร็จการศึกษาและได้รับใบประกาศนียบัตรหลักสูตร Python Programming Basics จากสถาบันเทคโนโลยีหัวเว่ย (Huawei ICT Academy)",
    },
    {
      id: "ncsa-basic-cyber",
      title: "Basic Cybersecurity",
      titleTh: "หลักสูตร Basic Cybersecurity",
      category: "course",
      categoryLabel: "Technical Courses",
      categoryLabelTh: "คอร์สเรียนไอที",
      image: "images/สำเนาของ_certificate_240830_100330.png",
      date: "29 Aug 2024",
      badge: "NCSA",
      issuer: "National Cyber Security Agency (NCSA)",
      desc: "Completed the Basic Cybersecurity course and received an official certification from NCSA.",
      descTh: "ผ่านการเรียนหลักสูตรความปลอดภัยไซเบอร์เบื้องต้น (Basic Cybersecurity) และได้รับใบรับรองอย่างเป็นทางการจาก NCSA",
    },
  ],

  experiences: [
    {
      id: "thctt-2025",
      role: "CTF Team Leader & Security Analyst",
      roleTh: "หัวหน้าทีม CTF & นักวิเคราะห์ความปลอดภัย",
      organization: "Thailand Cyber Top Talent 2025 (whereisTheFlag)",
      organizationTh: "การแข่งขัน Thailand Cyber Top Talent 2025 (ทีม whereisTheFlag)",
      period: "Aug 2025 - Mar 2026",
      periodTh: "ส.ค. 2568 - มี.ค. 2569",
      badge: "NCSA Senior Qualifier",
      badgeVariant: "cyber",
      description: "Led team 'whereisTheFlag' through high-intensity jeopardy-style CTF competitions, analyzing cryptosystems, binary challenges, network packets, and web attack vectors under strict time limits.",
      descriptionTh: "นำทีม 'whereisTheFlag' เข้าร่วมแข่งขัน CTF รูปแบบ Jeopardy วิเคราะห์โจทย์ถอดรหัสลับ (Crypto), ตรวจสอบแพ็กเก็ตเครือข่าย (Wireshark PCAP), และทดสอบช่องโหว่เว็บ (Web Security) ภายใต้การแข่งขันระดับประเทศ",
      highlights: [
        "Cryptographic attacks: Decrypted RSA, XOR, Base64 layered payloads, and Caesar ciphers",
        "Digital Forensics: Extracted hidden data and exfiltrated payloads from Wireshark PCAP files",
        "Web Vulnerabilities: Evaluated OWASP Top 10 vulnerabilities (SQLi, IDOR, XSS, Parameter Tampering)",
      ],
      highlightsTh: [
        "เจาะโจทย์ Cryptography: ถอดรหัสลับ RSA, XOR, Base64 ซ้อนเลเยอร์ และ Hash Cracking",
        "นิติวิทยาศาสตร์ดิจิทัล (Forensics): ดึง Payload ซ่อนรูปและบันทึก Network Session จากไฟล์ PCAP",
        "ความปลอดภัยเว็บ: ตรวจสอบและโจมตีช่องโหว่ OWASP Top 10 (SQLi, IDOR, Parameter Tampering)",
      ],
      icon: "ShieldAlert",
    },
    {
      id: "ncsa-bootcamp-awards",
      role: "CTF Competitor & Award Winner (2nd & 3rd Place)",
      roleTh: "ผู้เข้าแข่งขัน CTF & รางวัลชนะเลิศอันดับ 2 และ 3",
      organization: "NCSA Boot Camp Mini CTF (2024 & 2025)",
      organizationTh: "NCSA Boot Camp Mini CTF ประจำปี 2024 และ 2025",
      period: "Sep 2024 - Jun 2025",
      periodTh: "ก.ย. 2567 - มิ.ย. 2568",
      badge: "Podium Winner",
      badgeVariant: "success",
      description: "Secured 2nd Place in NCSA Boot Camp 2024 (Team DYPACK) and 3rd Place in NCSA Boot Camp 2025 (Team Data Protection Unit) in practical security challenges.",
      descriptionTh: "คว้ารางวัลชนะเลิศอันดับ 2 (ทีม DYPACK ใน NCSA Boot Camp 2024) และรางวัลรองชนะเลิศอันดับ 2 (ทีมหน่วยป้องกันข้อมูล ใน NCSA Boot Camp 2025) ในการแข่งขันทักษะความปลอดภัยเชิงรุกและเชิงรับ",
      highlights: [
        "Solved multi-layer incident response, log analysis, and malware investigation challenges",
        "Collaborated across specialized team roles under real-time simulated attack scenarios",
        "Recognized officially by the National Cyber Security Agency (NCSA)",
      ],
      highlightsTh: [
        "แก้ไขโจทย์ Log Analysis และ Incident Response จำลองเหตุการณ์จริง",
        "ประสานงานทีมเพื่อแบ่งหน้าที่วิเคราะห์ Reverse Engineering, Web และ Forensics",
        "ได้รับเกียรติบัตรและโล่รางวัลรับรองอย่างเป็นทางการจาก สกมช. (NCSA)",
      ],
      icon: "Award",
    },
    {
      id: "solo-ctf-dropctf",
      role: "Solo CTF Security Researcher",
      roleTh: "ผู้เข้าแข่งขันเดี่ยว CTF & ทดสอบเจาะระบบ",
      organization: "DropCTF Wan Lai Challenge & Women THCTT",
      organizationTh: "DropCTF Wan Lai Challenge & Women THCTT (จจฉายเดี่ยว)",
      period: "Jan 2025 - Apr 2026",
      periodTh: "ม.ค. 2568 - เม.ย. 2569",
      badge: "Certificate of Achievement",
      badgeVariant: "cyber",
      description: "Competed individually as 'จจฉายเดี่ยว' across National Women CTF and DropCTF Wan Lai Challenge, solving Web exploitation and Cryptography challenges.",
      descriptionTh: "ลงแข่งขันเดี่ยวในนาม 'จจฉายเดี่ยว' ทั้งในเวที Women Thailand Cyber Top Talent และ DropCTF Wan Lai Challenge โดยร่วมแก้ไขโจทย์ความมั่นคงปลอดภัยในหมวด Web และ Cryptography",
      highlights: [
        "Earned Certificate of Achievement for competing solo in DropCTF Wan Lai Challenge",
        "Specialized in Cookie tampering, JWT exploitation, and hash cracking algorithms",
        "Authored structured writeups and security reproduction documentation",
      ],
      highlightsTh: [
        "ได้รับเกียรติบัตร Certificate of Achievement ในหมวดผู้เข้าแข่งขันเดี่ยว DropCTF Wan Lai Challenge",
        "เชี่ยวชาญการวิเคราะห์และเจาะช่องโหว่ Cookie Tampering, JWT Token และ Hash Algorithms",
        "เขียนเอกสารสรุป Writeup แนวทางแก้โจทย์และมาตรการป้องกันความปลอดภัย",
      ],
      icon: "Flame",
    },
    {
      id: "startup-r2m-leadership",
      role: "Tech Lead & System Architecture Pitcher",
      roleTh: "ผู้นำทีมสายเทคโนโลยี & นำเสนอแผนระบบ",
      organization: "Research to Market (R2M) & Regional Startups (P1)",
      organizationTh: "โครงการ Research to Market (R2M) & New Regional Startups (P1)",
      period: "Oct 2024 - Nov 2024",
      periodTh: "ต.ค. 2567 - พ.ย. 2567",
      badge: "2x Appreciation Awards",
      badgeVariant: "secondary",
      description: "Designed system architecture and pitched tech viability for commercialization in Northern Science Park Network, winning two Appreciation Awards with Green Nest & PETCOLL TECH.",
      descriptionTh: "ออกแบบโครงสร้างสถาปัตยกรรมระบบเทคโนโลยีและนำเสนอความเป็นไปได้เชิงพาณิชย์ต่อเครือข่ายอุทยานวิทยาศาสตร์ภาคเหนือ ได้รับรางวัลชมเชย 2 โครงการ (Green Nest และ PETCOLL TECH)",
      highlights: [
        "Architected scalable cloud workflows and secure user identity management",
        "Communicated complex technical security and software paradigms to business juries",
        "Recognized by Science Park Northern Network for innovation viability",
      ],
      highlightsTh: [
        "วางโครงสร้างระบบคลาวด์และการจัดการสิทธิ์ผู้ใช้งานที่ปลอดภัย",
        "สื่อสารข้อมูลสถาปัตยกรรมซอฟต์แวร์และความปลอดภัยเชิงเทคนิคให้คณะกรรมการเข้าใจง่าย",
        "ได้รับรางวัลชมเชยจากมหาวิทยาลัยและเครือข่ายอุทยานวิทยาศาสตร์",
      ],
      icon: "Rocket",
    },
  ],

  projects: [
    {
      id: "psru-wallet",
      title: "PSRU Blockchain Digital Wallet for Carbon Credit Points",
      titleTh: "ระบบกระเป๋าเงินดิจิทัลบล็อกเชนสำหรับคะแนนคาร์บอนเครดิต (PSRU Digital Wallet)",
      category: "Blockchain & Frontend Security",
      categoryTh: "บล็อกเชน & ความปลอดภัยส่วนหน้า",
      role: "Frontend Developer & Smart Contract Integration",
      roleTh: "นักพัฒนาส่วนหน้า & เชื่อมต่อระบบบล็อกเชน",
      period: "Mar 2026",
      description: "Designed and developed the responsive Web3 interface for the university's carbon credit points wallet. Implemented secure client-side cryptographic key handling, transaction status verification, and token balance queries on the blockchain network.",
      descriptionTh: "ออกแบบและพัฒนาหน้าบ้าน Web3 สำหรับกระเป๋าเงินดิจิทัลเพื่อสะสมและโอนคะแนนคาร์บอนเครดิตของมหาวิทยาลัย จัดการการเชื่อมต่อ Cryptographic Wallet อย่างปลอดภัย และตรวจสอบสถานะธุรกรรมบนเครือข่ายบล็อกเชนแบบ Real-time",
      tags: ["Solidity", "Web3.js", "React", "Tailwind CSS", "Blockchain Security", "Responsive UI"],
      images: [
        "images/psru_wallet_screenshot1.png",
        "images/psru_wallet_screenshot2.png",
        "images/psru_wallet_screenshot3.png",
        "images/psru_wallet_screenshot4.png",
      ],
      badge: "Production Ready",
    },
    {
      id: "back-to-techno",
      title: "Web Penetration Testing: 'Back to Techno 2026' Alumni Portal",
      titleTh: "การทดสอบเจาะระบบเว็บแอปพลิเคชัน 'Back to Techno 2026' ของคณะ",
      category: "Vulnerability Assessment & Web Pentest",
      categoryTh: "การประเมินช่องโหว่ & ทดสอบเจาะระบบเว็บ",
      role: "Security Tester / Vulnerability Assessor",
      roleTh: "ผู้ทดสอบความปลอดภัย / ตรวจสอบช่องโหว่",
      period: "Nov 2025",
      description: "Conducted comprehensive web application security testing for the alumni event reservation portal. Performed automated reconnaissance using Nikto, intercepted HTTP traffic via Burp Suite, probed for Broken Object Level Authorization (BOLA), and audited payment slip upload security.",
      descriptionTh: "ดำเนินกระบวนการทดสอบความปลอดภัยเว็บแอปพลิเคชันระบบจองโต๊ะงานคืนสู่เหย้าศิษย์เก่า โดยใช้ Nikto สแกนช่องโหว่ของเว็บเซิร์ฟเวอร์ และใช้ Burp Suite ดักจับ Request เพื่อทดสอบการควบคุมสิทธิ์เข้าถึง (Access Control / BOLA) และความปลอดภัยของแบบฟอร์มอัปโหลดสลิป",
      tags: ["Burp Suite", "Nikto", "OWASP Top 10", "Access Control Audit", "File Upload Security", "VAPT Report"],
      images: [
        "images/backtotechno_cover.png",
        "images/backtotechno_seatmap.png",
        "images/backtotechno_form.png",
        "images/backtotechno_nikto.png",
        "images/backtotechno_burp1.png",
        "images/backtotechno_burp2.png",
        "images/backtotechno_burp3.png",
      ],
      badge: "Faculty Audited",
    },
    {
      id: "startup-prototypes",
      title: "Green Nest & PETCOLL TECH Startup Prototypes",
      titleTh: "โครงงานนวัตกรรม Green Nest & PETCOLL TECH (R2M & Regional Startups)",
      category: "Software Design & Tech Pitching",
      categoryTh: "ออกแบบซอฟต์แวร์ & การแข่งขัน Startup",
      role: "Tech Architecture & Product Design",
      roleTh: "สถาปัตยกรรมเทคโนโลยี & ออกแบบผลิตภัณฑ์",
      period: "Oct - Nov 2024",
      description: "Engineered scalable digital product architectures for university startup programs (R2M and New Regional Startups P1). Developed interactive wireframes, data flow diagrams, and delivered technical pitching presentations winning dual Appreciation Awards.",
      descriptionTh: "วางผังสถาปัตยกรรมดิจิทัลสำหรับผลิตภัณฑ์นวัตกรรมในโครงการ R2M และ New Regional Startups (P1) จัดทำแบบจำลองระบบ แผนผังข้อมูลความปลอดภัย และนำเสนอแผนต่อคณะกรรมการจนได้รับรางวัลชมเชยระดับภูมิภาค",
      tags: ["System Architecture", "Wireframing", "Product Design", "Security Guidelines", "Pitching"],
      images: [
        "images/twitter_post_8.png",
        "images/twitter_post_9.png",
      ],
      badge: "2x Award Winner",
    },
  ],
}

