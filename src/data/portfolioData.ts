import profileImage from '../assets/ahmed_profile.webp';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  technologies: string[];
  role: string;
  context: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  demoAvailable: boolean;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  location: string;
  type: string;
  period: string;
  score?: string;
  hours?: string;
  instructor?: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  track?: string;
  issueDate?: string;
  code?: string;
  score?: string;
  hours?: string;
  details: string;
  courses?: string[];
  capabilities?: string[];
  certificateImage?: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; level: string; verifiedContext?: string }[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subTitle: string;
    headline: string;
    location: string;
    linkedinUrl: string;
    githubUrl: string;
    profileImage: string;
    statusBadge: string;
    aboutSummary: string;
    keyHighlights: { label: string; value: string; subtext: string }[];
    unavailableFields: {
      directEmail: string;
      directPhone: string;
    };
  };
  education: {
    institution: string;
    faculty: string;
    degree: string;
    major: string;
    period: string;
    status: string;
    location: string;
    description: string;
    focusAreas: string[];
  }[];
  experience: ExperienceItem[];
  projects: Project[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  ui: {
    nav: {
      about: string;
      skills: string;
      experience: string;
      projects: string;
      certifications: string;
      education: string;
      contact: string;
    };
    hero: {
      greeting: string;
      classBadge: string;
      viewCertificates: string;
      projectsBtn: string;
      githubBtn: string;
      linkedinBtn: string;
    };
    about: {
      badge: string;
      title: string;
      subtitle: string;
      cardTitle: string;
    };
    skills: {
      badge: string;
      title: string;
      subtitle: string;
      allFilter: string;
      verifiedText: string;
      coreCountSuffix: string;
    };
    experience: {
      badge: string;
      title: string;
      subtitle: string;
      instructorLabel: string;
      highlightsLabel: string;
    };
    projects: {
      badge: string;
      title: string;
      subtitle: string;
      milestonesTitle: string;
      techTitle: string;
      simulatorTitle: string;
      simulatorDesc: string;
      endpointLabel: string;
      filterRoleLabel: string;
      executeBtn: string;
      executingBtn: string;
      resetBtn: string;
      viewProjectBtn: string;
      liveDemoBtn?: string;
      githubBtn?: string;
    };
    certifications: {
      badge: string;
      title: string;
      subtitle: string;
      inspectBtn: string;
      trackLabel: string;
      issuedLabel: string;
      hoursLabel: string;
      responsibilitiesTitle: string;
      curriculumTitle: string;
      modalTitle: string;
      openFullImage: string;
    };
    education: {
      badge: string;
      title: string;
      subtitle: string;
      degreeMajorTitle: string;
      academicFocusTitle: string;
    };
    contact: {
      badge: string;
      title: string;
      subtitle: string;
      detailsTitle: string;
      primaryProfile: string;
      githubRepos: string;
      locationLabel: string;
      copyBtn: string;
      copiedBtn: string;
      openLinkedIn: string;
      openGithub: string;
      privacyTitle: string;
      privacyText: string;
      formTitle: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      successTitle: string;
      successMessage: string;
      sendAnother: string;
    };
    footer: {
      roleSub: string;
      privacyNotice: string;
      rightsReserved: string;
    };
  };
}

export const PORTFOLIO_DATA_EN: PortfolioData = {
  personal: {
    name: "Ahmed Marei",
    title: "Aspiring Vulnerability Analyst & Penetration Tester",
    subTitle: "Vulnerability Analyst & Penetration Tester (DEPI) • Network Reconnaissance & Offensive Security",
    headline: "Computer & Control Engineer at El Shorouk Academy (Class of 2027) and graduate of DEPI Round 5 (MCIT Egypt) in Infrastructure & Security. Specialized in Network, Web Application, and Android Penetration Testing following the Mastercard security framework, along with hands-on network reconnaissance and port scanning methodologies.",
    location: "Cairo / El Shorouk, Egypt",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-marei-m",
    githubUrl: "https://github.com/mar3iiiiii",
    profileImage: profileImage,
    statusBadge: "Open to Cybersecurity Internships & Junior Roles",
    aboutSummary: `I am a Computer & Control Engineer at El Shorouk Academy (Class of 2027) focused on vulnerability analysis, penetration testing, and offensive security.

I am a graduate of Round 5 of the Digital Egypt Pioneers Initiative (DEPI - under the Ministry of Communications and Information Technology, MCIT Egypt) in the Infrastructure & Security track as a Vulnerability Analyst and Penetration Tester. Through DEPI, I conducted hands-on assessments across Network Penetration Testing, Web Application Security, and Android Penetration Testing adhering to the industry-standard Mastercard security testing framework, alongside Prompt Engineering and professional reporting under instructor Rawan Waheed.

To deepen my offensive security and reconnaissance capabilities, I completed the specialized Port Scanning module under instructor Hossam Shady — mastering network reconnaissance, SYN stealth and version scanning, service banner enumeration, and attack surface mapping for Red Teaming, Bug Hunting, and Ethical Hacking engagements.`,
    keyHighlights: [
      { label: "Security Track", value: "DEPI Round 5", subtext: "Infrastructure & Security (MCIT)" },
      { label: "Offensive Module", value: "Port Scanning", subtext: "Reconnaissance & Enumeration" },
      { label: "Security Framework", value: "Mastercard Standard", subtext: "Network & App Pen-Testing" },
      { label: "Academic Standing", value: "Class of 2027", subtext: "Computer & Control Engineering" }
    ],
    unavailableFields: {
      directEmail: "Kept private on LinkedIn (contact form enabled)",
      directPhone: "Kept private on LinkedIn for privacy"
    }
  },

  education: [
    {
      institution: "El Shorouk Academy",
      faculty: "Higher Institute of Engineering",
      degree: "Bachelor of Science in Engineering",
      major: "Computer and Control Engineering",
      period: "2023 – 2027",
      status: "In Progress (Class of 2027)",
      location: "El Shorouk City, Cairo, Egypt",
      description: "Rigorous engineering curriculum integrating computer networking, operating systems, digital hardware systems, computer architecture, algorithms, and secure system fundamentals.",
      focusAreas: ["Computer Networks", "Operating Systems", "Digital Systems", "Computer Architecture"]
    }
  ],

  experience: [
    {
      id: "depi-mcit",
      organization: "Digital Egypt Pioneers Initiative (DEPI) — MCIT Egypt",
      role: "Vulnerability Analyst & Penetration Tester Trainee (DEPI Round 5)",
      location: "Cairo, Egypt",
      type: "National Initiative (MCIT Egypt)",
      period: "Round 5 Graduate",
      instructor: "Rawan Waheed (Professional Readiness)",
      description: "Selective nationwide initiative by Egypt's Ministry of Communications and Information Technology (MCIT) specializing in the Infrastructure & Security Track (Vulnerability Analyst & Penetration Tester) combined with rigorous professional career engineering.",
      achievements: [
        "Infrastructure & Security Track: Studied and performed Network, Web Application, and Android Penetration Testing following the Mastercard security testing framework.",
        "Vulnerability Remediation & Reporting: Executed security audits, covering tracks, and delivering detailed vulnerability reports with actionable remediation advice for developers.",
        "Applied AI & Modern Tools: Completed coursework in Prompt Engineering and modern security testing toolchains.",
        "Capstone Projects: Completed hands-on security capstones evaluating application and network segment vulnerabilities.",
        "Professional Career Readiness: Trained in technical storytelling, ATS CV optimization, and freelancing under instructor Rawan Waheed."
      ],
      skills: ["Vulnerability Analysis", "Network Penetration Testing", "Web Application Security", "Android Pen-Testing", "Mastercard Framework", "Prompt Engineering", "Security Reporting"]
    },
    {
      id: "port-scanning-training",
      organization: "Offensive Security & Reconnaissance Training",
      role: "Trainee — Port Scanning & Network Reconnaissance",
      location: "Cairo, Egypt",
      type: "Specialized Offensive Security Training",
      period: "Completed 2026",
      instructor: "Hossam Shady",
      description: "Intensive offensive security training module focusing on host discovery, network reconnaissance methodologies, advanced port scanning, and service enumeration within ethical hacking and red teaming contexts.",
      achievements: [
        "Mastered host discovery and network reconnaissance to map live assets across target subnets.",
        "Conducted stealth SYN scanning, TCP connect scanning, and UDP scanning using advanced probing flags.",
        "Enumerated open ports, extracted service banners, and accurately identified running daemon versions.",
        "Pinpointed exposed and misconfigured services for Red Teaming, Penetration Testing, and Bug Hunting workflows."
      ],
      skills: ["Network Reconnaissance", "Port Scanning", "Service Enumeration", "Identifying Open Ports", "Exposed Services Discovery", "Red Teaming", "Bug Hunting", "Ethical Hacking"]
    }
  ],

  projects: [
    {
      id: "depi-penetration-testing-assessment",
      title: "Integrated Network & Application Penetration Testing Assessment",
      category: "Network & Application Pen-Testing",
      role: "Vulnerability Analyst & Penetration Tester",
      context: "DEPI Round 5 Capstone (MCIT Egypt)",
      status: "Mastercard Security Framework",
      description: "Comprehensive penetration testing and vulnerability assessment conducted across diverse network segments and application endpoints following the Mastercard security testing framework. Encompasses active reconnaissance, vulnerability scanning, attack surface analysis, and actionable remediation reporting for engineering teams.",
      details: [
        "Network Segment Testing: Executed structured reconnaissance and vulnerability assessments across internal and perimeter network segments adhering to Mastercard testing guidelines.",
        "Web Application Assessment: Identified injection vulnerabilities, authentication flaws, and configuration weaknesses across target web endpoints.",
        "Mobile & Android Testing: Evaluated Android application attack surfaces and client-side security postures.",
        "Remediation & Reporting: Authored technical vulnerability findings and remediation guidance with severity ratings and developer mitigation steps."
      ],
      technologies: ["Network Pen-Testing", "Web Security", "Android Pen-Testing", "Vulnerability Assessment", "Mastercard Framework", "Prompt Engineering", "Security Reporting"],
      demoAvailable: true
    },
    {
      id: "network-reconnaissance-port-scanning",
      title: "Network Reconnaissance & Attack Surface Mapping",
      category: "Offensive Security & Reconnaissance",
      role: "Security Researcher & Bug Hunter",
      context: "Port Scanning Module (Instructor: Hossam Shady)",
      status: "Ethical Hacking & Red Teaming",
      description: "Practical network reconnaissance and host enumeration laboratory simulating real-world Red Teaming and Bug Hunting engagements. Utilizes advanced port scanning methodologies to detect active hosts, enumerate open ports, identify service banners, and map exposed vulnerabilities.",
      details: [
        "Port Scanning Methodologies: Executed SYN stealth scans (-sS), TCP connect scans, UDP scans, and service version detection (-sV).",
        "Service & OS Enumeration: Analyzed banner responses and network protocol behaviors to identify running services, daemon versions, and target operating systems.",
        "Attack Surface Discovery: Mapped exposed management interfaces, unauthenticated endpoints, and outdated daemon services.",
        "Bug Hunting & Red Teaming Integration: Applied reconnaissance intelligence to build structured attack graphs and pinpoint initial access vectors."
      ],
      technologies: ["Port Scanning", "Network Reconnaissance", "Service Enumeration", "Red Teaming", "Bug Hunting", "Ethical Hacking", "Attack Surface Mapping"],
      demoAvailable: false
    }
  ],

  skills: [
    {
      category: "Vulnerability Analysis & Assessment",
      description: "Vulnerability identification, severity scoring, and developer remediation plans under the Mastercard framework",
      skills: [
        { name: "Vulnerability Assessment", level: "DEPI Track", verifiedContext: "Mastercard Security Standards" },
        { name: "Vulnerability Remediation Guidance", level: "DEPI Track", verifiedContext: "Developer Mitigation Strategies" },
        { name: "Security Risk Scoring", level: "DEPI Track", verifiedContext: "Severity & Impact Evaluation" },
        { name: "Attack Surface Analysis", level: "Proficient", verifiedContext: "Asset Exposure Mapping" },
        { name: "Prompt Engineering for Security", level: "DEPI Track", verifiedContext: "AI-Augmented Security Workflows" }
      ]
    },
    {
      category: "Penetration Testing & Ethical Hacking",
      description: "Offensive security testing across network segments, web applications, and mobile environments",
      skills: [
        { name: "Network Penetration Testing", level: "DEPI Track", verifiedContext: "Mastercard Framework Testing" },
        { name: "Web Application Pen-Testing", level: "DEPI Track", verifiedContext: "OWASP & Endpoint Testing" },
        { name: "Android Penetration Testing", level: "DEPI Track", verifiedContext: "Mobile App Security Assessment" },
        { name: "Red Teaming Methodologies", level: "Offensive", verifiedContext: "Adversary Simulation Concepts" },
        { name: "Bug Hunting Techniques", level: "Offensive", verifiedContext: "Target Recon & Vulnerability Discovery" }
      ]
    },
    {
      category: "Network Reconnaissance & Port Scanning",
      description: "Active host discovery, advanced port scanning, and service banner enumeration (Hossam Shady module)",
      skills: [
        { name: "Network Reconnaissance", level: "Specialized", verifiedContext: "Active Host & Topology Discovery" },
        { name: "Port Scanning Methodologies", level: "Specialized", verifiedContext: "SYN Stealth, TCP & UDP Scanning" },
        { name: "Service Enumeration", level: "Specialized", verifiedContext: "Banner Grabbing & Daemon Versioning" },
        { name: "Identifying Open Ports", level: "Specialized", verifiedContext: "State & Protocol Filtering" },
        { name: "Exposed Services Discovery", level: "Specialized", verifiedContext: "Attack Surface Mapping" }
      ]
    },
    {
      category: "Core Engineering & Systems",
      description: "Engineering foundation in computer networks, operating system internals, and digital architecture",
      skills: [
        { name: "Computer & Control Engineering", level: "Academic Core", verifiedContext: "El Shorouk Academy Curriculum" },
        { name: "Computer Networks & Protocols", level: "Core Foundation", verifiedContext: "TCP/IP, Routing & Switching" },
        { name: "Operating Systems & Linux", level: "Proficient", verifiedContext: "Linux CLI, Permissions & Internals" },
        { name: "Digital Systems & Architecture", level: "Academic Core", verifiedContext: "Hardware & System Logic" },
        { name: "Git & Version Control", level: "Proficient", verifiedContext: "Code & Configuration Management" }
      ]
    },
    {
      category: "Professional Practice & Reporting",
      description: "Technical storytelling, structured security documentation, and global career readiness",
      skills: [
        { name: "Penetration Testing Reporting", level: "DEPI Track", verifiedContext: "Structured Global Delivery" },
        { name: "Covering Tracks & Integrity", level: "DEPI Track", verifiedContext: "Security Posture Verification" },
        { name: "Technical Presentation", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" },
        { name: "Personal Branding & Positioning", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" },
        { name: "ATS-Optimized Communication", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-depi",
      name: "Digital Egypt Pioneers Initiative (DEPI) — Round 5",
      issuer: "Ministry of Communications and Information Technology (MCIT)",
      track: "Infrastructure & Security — Vulnerability Analyst and Penetration Tester",
      issueDate: "Round 5 Graduate",
      score: "Technical & Readiness Graduate",
      details: "Comprehensive national cybersecurity program under MCIT Egypt qualifying graduates as Vulnerability Analysts & Penetration Testers capable of executing network security tests within the framework set by Mastercard, testing diverse network segments, providing vulnerability remediation guidance to developers, and reporting penetration tests across global teams.",
      capabilities: [
        "Ensuring network security tests are conducted within the framework set by Mastercard.",
        "Appropriate usage of security test cases & tools across various network segment types.",
        "Providing guidance to developer teams on remediating identified application vulnerabilities.",
        "Delivering structured penetration test reporting while coordinating with global teams."
      ],
      courses: [
        "Prompt Engineering",
        "Fundamentals of Networking & Prerequisites",
        "Network Penetration Testing",
        "Web Application Penetration Testing",
        "Android Penetration Testing",
        "Capstone Project (Network & App Security)",
        "Covering Tracks & Reporting",
        "Capstone Project (Integrated Assessment)"
      ],
      tags: ["DEPI", "MCIT", "Vulnerability Analyst", "Penetration Testing", "Mastercard Framework", "Network Security", "Web Security", "Android Pen-Testing", "Prompt Engineering", "Security Reporting"]
    },
    {
      id: "cert-port-scanning",
      name: "Port Scanning Module",
      issuer: "Hossam Shady",
      track: "Red Teaming, Ethical Hacking, Penetration Testing & Bug Hunting",
      issueDate: "Completed 2026",
      score: "Verified Module",
      details: "Specialized offensive security training module focusing on advanced network reconnaissance, port scanning techniques, active host discovery, service enumeration, banner grabbing, and identifying open ports and exposed services.",
      capabilities: [
        "Conducting stealth and comprehensive network reconnaissance across target hosts.",
        "Identifying open ports, service versions, and protocol vulnerabilities.",
        "Service enumeration and banner analysis for initial attack vector identification.",
        "Mapping exposed attack surfaces in Red Teaming and Bug Hunting assessments."
      ],
      courses: [
        "Network Reconnaissance Foundations",
        "Port Scanning Techniques & Flags",
        "Service & Version Enumeration",
        "Identifying Open Ports & Exposed Services",
        "Red Teaming & Ethical Hacking Scenarios",
        "Bug Hunting Target Reconnaissance"
      ],
      tags: ["Port Scanning", "Hossam Shady", "Red Teaming", "Ethical Hacking", "Penetration Testing", "Bug Hunting", "Network Reconnaissance", "Service Enumeration"]
    }
  ],

  ui: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      certifications: "Certifications",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      classBadge: "El Shorouk Academy (Class of '27)",
      viewCertificates: "View Security Credentials",
      projectsBtn: "Security Assessments",
      githubBtn: "GitHub",
      linkedinBtn: "LinkedIn"
    },
    about: {
      badge: "Security Profile",
      title: "About Me",
      subtitle: "Solid engineering foundation in Computer & Control Engineering, reinforced with verified credentials in Vulnerability Analysis, Penetration Testing (DEPI), and Offensive Reconnaissance.",
      cardTitle: "Cybersecurity Profile"
    },
    skills: {
      badge: "Offensive & Defensive Security Toolkit",
      title: "Security Skills & Competencies",
      subtitle: "Organized across vulnerability analysis, penetration testing, network reconnaissance, and core engineering foundations.",
      allFilter: "All",
      verifiedText: "100% Verified",
      coreCountSuffix: "core competencies"
    },
    experience: {
      badge: "Cybersecurity Training & Track",
      title: "Security Training & Traineeships",
      subtitle: "Hands-on cybersecurity traineeships with national technology initiatives and specialized offensive security modules.",
      instructorLabel: "Instructor(s):",
      highlightsLabel: "Key Highlights & Outcomes:"
    },
    projects: {
      badge: "Hands-on Security Work",
      title: "Security Assessments & Reconnaissance Labs",
      subtitle: "Hands-on penetration testing assessments following the Mastercard framework and advanced network reconnaissance labs.",
      milestonesTitle: "Assessment Scope & Methodologies",
      techTitle: "Security Domains & Tools",
      simulatorTitle: "Interactive Network Recon & Port Scanner",
      simulatorDesc: "Select scan parameters and target host to simulate stealth SYN scanning, service banner enumeration, and attack surface detection.",
      endpointLabel: "Scan Profile & Flags:",
      filterRoleLabel: "Target Host / Segment:",
      executeBtn: "Launch Reconnaissance Scan",
      executingBtn: "Probing Target & Enumerating Ports...",
      resetBtn: "Reset Scanner",
      viewProjectBtn: "Explore Assessment",
      liveDemoBtn: "Live Simulator",
      githubBtn: "Security Lab"
    },
    certifications: {
      badge: "Official Security Credentials",
      title: "Verified Cybersecurity Certifications",
      subtitle: "Official credentials verified from the Ministry of Communications and Information Technology (DEPI) and specialized offensive security training.",
      inspectBtn: "Inspect Credential",
      trackLabel: "Track:",
      issuedLabel: "Issued:",
      hoursLabel: "Duration:",
      responsibilitiesTitle: "Key Responsibilities & Competencies:",
      curriculumTitle: "Curriculum Modules",
      modalTitle: "Official Credential Viewer",
      openFullImage: "Open full image in new tab"
    },
    education: {
      badge: "Academic Foundation",
      title: "Higher Education",
      subtitle: "Rigorous undergraduate engineering studies providing strong foundations in computer networks, operating systems, and digital architecture.",
      degreeMajorTitle: "Degree & Major",
      academicFocusTitle: "Academic Focus"
    },
    contact: {
      badge: "Direct Security Connect",
      title: "Get In Touch",
      subtitle: "Interested in discussing vulnerability assessments, penetration testing opportunities, or internships? Reach out today.",
      detailsTitle: "Contact Details",
      primaryProfile: "Primary Professional Profile",
      githubRepos: "GitHub Profile & Code Repositories",
      locationLabel: "Location",
      copyBtn: "Copy",
      copiedBtn: "Copied",
      openLinkedIn: "Open in LinkedIn",
      openGithub: "Visit GitHub Profile",
      privacyTitle: "Verified Public Records",
      privacyText: "Direct email and phone numbers are kept confidential on LinkedIn to safeguard privacy. You can connect securely via the contact form or directly through LinkedIn messaging.",
      formTitle: "Send a Direct Message",
      nameLabel: "Your Name",
      namePlaceholder: "John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Security Role / Internship / Inquiry",
      messageLabel: "Message",
      messagePlaceholder: "Hello Ahmed, I saw your cybersecurity portfolio and would like to discuss...",
      submitBtn: "Deliver Message",
      successTitle: "Message Sent Successfully!",
      successMessage: "Thank you for reaching out to Ahmed Marei. For immediate inquiries, you can also send a direct InMail message on LinkedIn.",
      sendAnother: "Send another message"
    },
    footer: {
      roleSub: "Computer & Control Engineering • Aspiring Vulnerability Analyst & Penetration Tester",
      privacyNotice: "Built strictly from verified records (Zero synthetic filler).",
      rightsReserved: "All rights reserved."
    }
  }
};

export const PORTFOLIO_DATA_AR: PortfolioData = {
  personal: {
    name: "أحمد مرعي",
    title: "محلل ثغرات أمنية ومختبر اختراق",
    subTitle: "محلل ثغرات ومختبر اختراق (DEPI) • استطلاع الشبكات والأمن الهجومي",
    headline: "مهندس حاسبات وتحكم بأكاديمية الشروق (دفعة 2027) وخريج الدفعة الخامسة من مبادرة رواد مصر الرقمية (DEPI - وزارة الاتصالات) في مسار أمن البنية التحتية. متخصص في اختبار اختراق الشبكات وتطبيقات الويب والأندرويد وفق معيار ماستركارد، بالإضافة إلى استطلاع الشبكات وفحص المنافذ وتعداد الخدمات المكشوفة.",
    location: "القاهرة / مدينة الشروق، مصر",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-marei-m",
    githubUrl: "https://github.com/mar3iiiiii",
    profileImage: profileImage,
    statusBadge: "متاح لفرص التدريب والوظائف المبتدئة في الأمن السيبراني",
    aboutSummary: `أنا مهندس حاسبات وتحكم بأكاديمية الشروق (دفعة 2027)، أركز بشكل كامل على تحليل الثغرات الأمنية، واختبار الاختراق، والأمن الهجومي.

خريج الدفعة الخامسة من مبادرة رواد مصر الرقمية (DEPI) التابعة لوزارة الاتصالات وتكنولوجيا المعلومات المصرية (MCIT) في مسار أمن البنية التحتية كمحلل ثغرات أمنية ومختبر اختراق (Vulnerability Analyst & Penetration Tester). تدربت من خلال المبادرة على تنفيذ اختبارات اختراق الشبكات، وأمن تطبيقات الويب، واختبار اختراق تطبيقات الأندرويد وفق إطار العمل الأمني المعتمد من ماستركارد (Mastercard)، بالإضافة إلى إعداد التقارير الأمنية وخطط المعالجة البرمجية تحت إشراف المدربة روان وحيد.

لتعزيز مهارات الاستطلاع والأمن الهجومي، أتممت دراسة وحدة فحص المنافذ (Port Scanning Module) تحت إشراف المدرب حسام شادي — حيث أتقنت استطلاع الشبكات، وفحص المنافذ الخفي، وتعداد إصدارات الخدمات، وتحديد المنافذ المفتوحة والخدمات المكشوفة دعماً لعمليات الفرق الحمراء (Red Teaming)، واصطياد الثغرات (Bug Hunting)، والقرصنة الأخلاقية.`,
    keyHighlights: [
      { label: "مسار الأمن السيبراني", value: "مبادرة DEPI الدفعة 5", subtext: "أمن البنية التحتية (وزارة الاتصالات)" },
      { label: "الأمن الهجومي", value: "فحص المنافذ والاستطلاع", subtext: "تعداد الخدمات والمنافذ المكشوفة" },
      { label: "معيار الاختبار الأمني", value: "إطار عمل ماستركارد", subtext: "اختراق الشبكات وتطبيقات الويب" },
      { label: "المستوى الأكاديمي", value: "دفعة 2027", subtext: "هندسة الحاسبات والتحكم" }
    ],
    unavailableFields: {
      directEmail: "محفوظ بشكل خاص لضمان الخصوصية (نموذج المراسلة متاح)",
      directPhone: "محفوظ بشكل خاص لضمان الخصوصية"
    }
  },

  education: [
    {
      institution: "أكاديمية الشروق",
      faculty: "المعهد العالي للهندسة",
      degree: "بكالوريوس الهندسة",
      major: "هندسة الحاسبات والتحكم",
      period: "2023 – 2027",
      status: "قيد الدراسة (دفعة 2027)",
      location: "مدينة الشروق، القاهرة، مصر",
      description: "منهج هندسي متقدم يجمع بين شبكات الحاسب، ونظم التشغيل، والأنظمة الرقمية، ومعمارية الحاسب، وهياكل البيانات والخوارزميات، وأسس حماية الأنظمة.",
      focusAreas: ["شبكات الحاسب والبروتوكولات", "نظم التشغيل والأنظمة المضمنة", "الأنظمة والدوائر الرقمية", "معمارية الحاسبات والمعالجات"]
    }
  ],

  experience: [
    {
      id: "depi-mcit",
      organization: "مبادرة رواد مصر الرقمية (DEPI) — وزارة الاتصالات وتكنولوجيا المعلومات",
      role: "متدرب في تحليل الثغرات واختبار الاختراق (الدفعة الخامسة)",
      location: "القاهرة، مصر",
      type: "مبادرة قومية متخصصة (وزارة الاتصالات المصرية)",
      period: "خريج الدفعة الخامسة",
      instructor: "أ. روان وحيد (التأهيل الاحترافي والوظيفي)",
      description: "مبادرة وطنية نخبوية من وزارة الاتصالات وتكنولوجيا المعلومات المصرية، تخصص مسار أمن البنية التحتية (محلل ثغرات أمنية ومختبر اختراق) مع تدريب مكثف على المهارات الوظيفية الاحترافية.",
      achievements: [
        "مسار البنية التحتية والأمان: دراسة وتطبيق اختبارات اختراق الشبكات وتطبيقات الويب وتطبيقات الأندرويد وفق معيار ماستركارد المعتمد عالمياً.",
        "معالجة الثغرات والتوثيق الأمني: تنفيذ عمليات التدقيق الأمني، وإخفاء الأثر الأمني (Covering Tracks)، وتقديم تقارير ثغرات تفصيلية مع خطط علاج برمجية للمطورين.",
        "الذكاء الاصطناعي والأدوات الحديثة: دراسة هندسة الأوامر (Prompt Engineering) ومنظومة أدوات الفحص المتقدمة.",
        "مشاريع التخرج العملية: إنجاز مشاريع تخرج تطبيقية لفحص ثغرات الأنظمة وشبكات الاتصال المعزولة.",
        "التأهيل الوظيفي الاحترافي: إتقان بناء العلامة المهنية، وصياغة السيرة الذاتية المتوافقة مع أنظمة ATS، وممارسات العمل الحر تحت إشراف المدربة روان وحيد."
      ],
      skills: ["تحليل الثغرات", "اختبار اختراق الشبكات", "أمن تطبيقات الويب", "اختبار اختراق الأندرويد", "معيار ماستركارد", "هندسة الأوامر", "إعداد التقارير الأمنية"]
    },
    {
      id: "port-scanning-training",
      organization: "التدريب التخصصي في الأمن الهجومي واستطلاع الشبكات",
      role: "متدرب — فحص المنافذ واستطلاع الشبكات",
      location: "القاهرة، مصر (تدريب مكثف)",
      type: "وحدة تدريبية متخصصة في الأمن الهجومي",
      period: "إتمام عام 2026",
      instructor: "المدرب: حسام شادي",
      description: "وحدة تدريبية مكثفة تركز على المنهجيات الأساسية والمتقدمة لفحص منافذ الشبكة، واكتشاف الأجهزة النشطة، وتعداد الخدمات، ورسم مساحات الهجوم ضمن سياقات القرصنة الأخلاقية واصطياد الثغرات.",
      achievements: [
        "إتقان استطلاع الشبكات واكتشاف الأجهزة النشطة لرسم خريطة الأصول عبر نطاقات الشبكة المستهدفة.",
        "تنفيذ فحوصات SYN الخفية، وفحوصات TCP، وفحوصات UDP باستخدام معايير فحص متقدمة.",
        "تعداد المنافذ المفتوحة، واستخراج بصمات الخدمات، وتحديد إصدارات البرمجيات بدقة.",
        "تحديد الخدمات المكشوفة والمعرضة للخطر دعماً لعمليات الفرق الحمراء (Red Teaming)، واختبار الاختراق، واصطياد الثغرات (Bug Hunting)."
      ],
      skills: ["استطلاع الشبكات", "فحص المنافذ", "تعداد الخدمات", "تحديد المنافذ المفتوحة", "كشف الخدمات المكشوفة", "Red Teaming", "Bug Hunting", "القرصنة الأخلاقية"]
    }
  ],

  projects: [
    {
      id: "depi-penetration-testing-assessment",
      title: "تقييم واختبار اختراق تكاملي للشبكات وتطبيقات الويب",
      category: "اختبار اختراق الشبكات والتطبيقات",
      role: "محلل ثغرات ومختبر اختراق",
      context: "مشروع تخرج الدفعة الخامسة بمبادرة DEPI (وزارة الاتصالات)",
      status: "وفق معيار ماستركارد الأمني",
      description: "تقييم أمني شامل واختبار اختراق عملي عبر قطاعات شبكية متنوعة وتطبيقات متعددة وفق إطار العمل المعتمد من ماستركارد. يشمل الاستطلاع النشط، وفحص الثغرات، وتحليل مساحات الهجوم، وتقديم تقارير معالجة قابلة للتنفيذ لفرق التطوير.",
      details: [
        "فحص قطاعات الشبكة: تنفيذ عمليات استطلاع وتقييم أمني منظم للشبكات الداخلية وشبكات المحيط وفق إرشادات ماستركارد.",
        "فحص تطبيقات الويب: تحديد ثغرات الحقن، وضعف آليات المصادقة، والتهيئة الخاطئة في نقاط النهاية لتطبيقات الويب.",
        "فحص تطبيقات الأندرويد: تدقيق مساحات الهجوم لتطبيقات الهاتف المحمول وتقييم أمان طبقة العميل.",
        "المعالجة والتقارير: صياغة تقارير ثغرات تقنية مفصلة بتصنيف مستويات الخطورة وإرشادات الإصلاح للمطورين."
      ],
      technologies: ["اختبار اختراق الشبكات", "أمن الويب", "اختبار اختراق الأندرويد", "تقييم الثغرات", "معيار ماستركارد", "هندسة الأوامر", "التقارير الأمنية"],
      demoAvailable: true
    },
    {
      id: "network-reconnaissance-port-scanning",
      title: "استطلاع الشبكات وتخطيط مساحات الهجوم (Attack Surface Mapping)",
      category: "الأمن الهجومي واستطلاع الشبكات",
      role: "باحث أمني وصائد ثغرات",
      context: "دورة فحص المنافذ (المدرب: حسام شادي)",
      status: "القرصنة الأخلاقية والفرق الحمراء (Red Teaming)",
      description: "معمل تطبيقي لاستطلاع الشبكات وتعداد الأنظمة يحاكي مهام الفرق الحمراء (Red Teaming) واصطياد الثغرات (Bug Hunting). يعتمد على منهجيات متقدمة لفحص المنافذ لكشف الأجهزة النشطة، وحصر الخدمات المكشوفة، وتحديد بصمات البرمجيات.",
      details: [
        "منهجيات فحص المنافذ: تنفيذ فحوصات SYN الخفية (-sS)، وفحوصات TCP، واكتشاف إصدارات الخدمات (-sV).",
        "تعداد الخدمات وبصمات الأنظمة: تحليل استجابات البانر وسلوك البروتوكولات للتعرف على الخدمات النشطة وأنظمة التشغيل.",
        "كشف مساحات الهجوم: حصر واجهات الإدارة المكشوفة، والمنافذ المفتوحة بدون مصادقة، والخدمات القديمة.",
        "التكامل مع الفرق الحمراء واصطياد الثغرات: توظيف معلومات الاستطلاع لبناء مسارات الهجوم وتحديد منافذ النفاذ الأولية."
      ],
      technologies: ["فحص المنافذ", "استطلاع الشبكات", "تعداد الخدمات", "Red Teaming", "Bug Hunting", "القرصنة الأخلاقية", "تخطيط مساحات الهجوم"],
      demoAvailable: false
    }
  ],

  skills: [
    {
      category: "تقييم وتحليل الثغرات الأمنية",
      description: "اكتشاف الثغرات، وتقييم الخطورة، وإرشادات الإصلاح البرمجي للمطورين وفق معيار ماستركارد",
      skills: [
        { name: "تقييم وتحليل الثغرات الأمنية", level: "مسار DEPI", verifiedContext: "معايير ماستركارد للاختبار الأمني" },
        { name: "إرشادات معالجة الثغرات للمطورين", level: "مسار DEPI", verifiedContext: "استراتيجيات العلاج البرمجي" },
        { name: "تقييم وتصنيف المخاطر الأمنية", level: "مسار DEPI", verifiedContext: "تقييم الأثر ومستوى الخطورة" },
        { name: "تحليل مساحات الهجوم (Attack Surface)", level: "متقن", verifiedContext: "تخطيط الأصول المكشوفة" },
        { name: "هندسة الأوامر للأمن السيبراني", level: "مسار DEPI", verifiedContext: "أدوات الفحص المعززة بالذكاء الاصطناعي" }
      ]
    },
    {
      category: "اختبار الاختراق والقرصنة الأخلاقية",
      description: "فحص واختبار أمان قطاعات الشبكة، وتطبيقات الويب، وبيئات الهاتف المحمول",
      skills: [
        { name: "اختبار اختراق الشبكات", level: "مسار DEPI", verifiedContext: "فحص قطاعات الشبكة بمعيار ماستركارد" },
        { name: "اختبار اختراق تطبيقات الويب", level: "مسار DEPI", verifiedContext: "فحص ثغرات OWASP ونقاط النهاية" },
        { name: "اختبار اختراق تطبيقات الأندرويد", level: "مسار DEPI", verifiedContext: "التدقيق الأمني لتطبيقات الموبايل" },
        { name: "منهجيات الفرق الحمراء (Red Teaming)", level: "هجومي", verifiedContext: "مفاهيم محاكاة المهاجم" },
        { name: "تقنيات اصطياد الثغرات (Bug Hunting)", level: "هجومي", verifiedContext: "استطلاع الأهداف واكتشاف الثغرات" }
      ]
    },
    {
      category: "استطلاع الشبكات وفحص المنافذ",
      description: "اكتشاف الأجهزة النشطة، وفحص المنافذ المتقدم، وتعداد بصمات الخدمات (دورة حسام شادي)",
      skills: [
        { name: "استطلاع الشبكات (Reconnaissance)", level: "تخصصي", verifiedContext: "اكتشاف الأجهزة وتخطيط الطوبولوجيا" },
        { name: "منهجيات فحص المنافذ (Port Scanning)", level: "تخصصي", verifiedContext: "فحص SYN الخفي، وفحوصات TCP وUDP" },
        { name: "تعداد الخدمات (Service Enumeration)", level: "تخصصي", verifiedContext: "استخراج البانر وبصمات الإصدارات" },
        { name: "تحديد المنافذ المفتوحة وحالتها", level: "تخصصي", verifiedContext: "تصفية الحالات والبروتوكولات" },
        { name: "كشف الخدمات المكشوفة المعرضة للخطر", level: "تخصصي", verifiedContext: "رسم مساحات الهجوم" }
      ]
    },
    {
      category: "الهندسة والأنظمة الأساسية",
      description: "الأساس الأكاديمي الهندسي في شبكات الحاسوب، ونظم التشغيل، والدوائر والأنظمة الرقمية",
      skills: [
        { name: "هندسة الحاسبات والتحكم", level: "أساس هندسي", verifiedContext: "منهج أكاديمية الشروق الهندسي" },
        { name: "شبكات الحاسب وبروتوكولاتها", level: "أساس تخصصي", verifiedContext: "TCP/IP، التوجيه والتبديل" },
        { name: "نظم التشغيل وبيئة لينكس", level: "متقن", verifiedContext: "أوامر لينكس، الصلاحيات وأنوية الأنظمة" },
        { name: "الأنظمة والدوائر الرقمية ومعمارية الحاسب", level: "أساس هندسي", verifiedContext: "عتاد الحاسوب والمنطق الرقمي" },
        { name: "Git وإدارة الإصدارات البرمجية", level: "متقن", verifiedContext: "إدارة ومزامنة الأكواد والأدوات" }
      ]
    },
    {
      category: "الممارسة المهنية والتقارير الأمنية",
      description: "العرض الفني ورواية القصة التقنية، وتوثيق الفحوصات الأمنية، والتأهيل المهني العالمي",
      skills: [
        { name: "إعداد تقارير اختبار الاختراق المهيكلة", level: "مسار DEPI", verifiedContext: "تسليم عالمي مهيكل للتقارير" },
        { name: "إخفاء الأثر الأمني وتكامل السجلات", level: "مسار DEPI", verifiedContext: "التحقق من الوضع الأمني بعد الفحص" },
        { name: "العرض الفني ورواية القصة التقنية", level: "معتمد", verifiedContext: "خريج الدفعة الخامسة (MCIT)" },
        { name: "بناء العلامة المهنية والشخصية", level: "معتمد", verifiedContext: "خريج الدفعة الخامسة (MCIT)" },
        { name: "التواصل الفني المتوافق مع أنظمة ATS", level: "معتمد", verifiedContext: "خريج الدفعة الخامسة (MCIT)" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-depi",
      name: "مبادرة رواد مصر الرقمية (DEPI) — الدفعة الخامسة",
      issuer: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT)",
      track: "أمن البنية التحتية — محلل ثغرات أمنية ومختبر اختراق",
      issueDate: "خريج الدفعة الخامسة",
      score: "خريج المسار التقني والتأهيلي",
      details: "برنامج قومي شامل تحت مظلة وزارة الاتصالات وتكنولوجيا المعلومات لتأهيل محللي ثغرات ومختبري اختراق قادرين على تنفيذ اختبارات أمان الشبكات وفق إطار عمل ماستركارد، واختبار شرائح الشبكات المتنوعة، وتوجيه فرق المطورين لعلاج الثغرات، وتقديم تقارير فحص احترافية لفرق العمل الدولية.",
      capabilities: [
        "ضمان إجراء اختبارات أمان الشبكات في إطار العمل المحدد من ماستركارد.",
        "الاستخدام الاحترافي لحالات وأدوات الاختبار الأمني عبر مختلف قطاعات الشبكات.",
        "تقديم إرشادات برمجية دقيقة لفرق التطوير لمعالجة الثغرات البرمجية المكتشفة.",
        "إعداد وتسليم تقارير اختبار الاختراق المهيكلة والتنسيق الفعال مع الفرق العالمية."
      ],
      courses: [
        "هندسة الأوامر (Prompt Engineering)",
        "أساسيات الشبكات والمتطلبات التمهيدية",
        "اختبار اختراق الشبكات (Network Pen-Testing)",
        "اختبار اختراق تطبيقات الويب (Web App Pen-Testing)",
        "اختبار اختراق تطبيقات الأندرويد (Android Pen-Testing)",
        "مشروع التخرج الأمني (أمن الشبكات والتطبيقات)",
        "إخفاء الأثر الأمني وإعداد التقارير (Reporting)",
        "مشروع التخرج التكاملي للتقييم الأمني"
      ],
      tags: ["DEPI", "وزارة الاتصالات", "محلل ثغرات", "اختبار اختراق", "معيار ماستركارد", "أمن الشبكات", "أمن الويب", "أندرويد", "هندسة الأوامر", "التقارير الأمنية"]
    },
    {
      id: "cert-port-scanning",
      name: "دورة فحص المنافذ (Port Scanning Module)",
      issuer: "المدرب: حسام شادي",
      track: "الفرق الحمراء، القرصنة الأخلاقية، اختبار الاختراق، واصطياد الثغرات",
      issueDate: "إتمام عام 2026",
      score: "وحدة تدريبية مكتملة ومحققة",
      details: "وحدة تدريبية متخصصة في الأمن الهجومي تغطي استطلاع الشبكات المتقدم، وتقنيات فحص المنافذ، واكتشاف الأجهزة النشطة، وتعداد الخدمات، والتقاط البانر، وتحديد المنافذ المفتوحة والخدمات المكشوفة.",
      capabilities: [
        "تنفيذ استطلاع شبكي خفي وشامل عبر الأجهزة والشبكات المستهدفة.",
        "تحديد المنافذ المفتوحة وإصدارات الخدمات والثغرات المرتبطة بالبروتوكولات.",
        "تعداد الخدمات وتحليل البانر لتحديد مسارات النفاذ الأولي للهجوم.",
        "رسم مساحات الهجوم المكشوفة في مهام الفرق الحمراء واصطياد الثغرات."
      ],
      courses: [
        "أسس ومنهجيات استطلاع الشبكات (Network Reconnaissance)",
        "تقنيات ومعاملات فحص المنافذ (Port Scanning Flags)",
        "تعداد الخدمات والإصدارات (Service & Version Enumeration)",
        "تحديد المنافذ المفتوحة والخدمات المكشوفة",
        "سيناريوهات الفرق الحمراء والقرصنة الأخلاقية",
        "استطلاع أهداف اصطياد الثغرات (Bug Hunting)"
      ],
      tags: ["فحص المنافذ", "حسام شادي", "Red Teaming", "القرصنة الأخلاقية", "اختبار الاختراق", "Bug Hunting", "استطلاع الشبكات", "تعداد الخدمات"]
    }
  ],

  ui: {
    nav: {
      about: "عن المهندس",
      skills: "المهارات",
      experience: "الخبرات",
      projects: "المشاريع",
      certifications: "الشهادات",
      education: "التعليم",
      contact: "تواصل معي"
    },
    hero: {
      greeting: "مرحباً، أنا",
      classBadge: "أكاديمية الشروق (دفعة '27)",
      viewCertificates: "عرض شهادات الأمن السيبراني",
      projectsBtn: "التقييمات الأمنية",
      githubBtn: "جيت هاب",
      linkedinBtn: "لينكد إن"
    },
    about: {
      badge: "الملف المهني والأمني",
      title: "نبذة عني",
      subtitle: "أساس أكاديمي راسخ في هندسة الحاسبات والتحكم، معزز باعتمادات معتمدة في تحليل الثغرات واختبار الاختراق (DEPI) واستطلاع الشبكات الهجومي.",
      cardTitle: "الملخص المهني والأمني"
    },
    skills: {
      badge: "منظومة المهارات الهجومية والدفاعية",
      title: "المهارات والكفاءات الأمنية",
      subtitle: "منظمة ومقسمة عبر تحليل الثغرات، واختبار الاختراق، واستطلاع الشبكات، والأساس الهندسي والأنظمة.",
      allFilter: "الكل",
      verifiedText: "100% موثقة ومؤكدة",
      coreCountSuffix: "كفاءات أساسية"
    },
    experience: {
      badge: "المحطات والتدريبات الأمنية",
      title: "التدريبات والخبرات العملية",
      subtitle: "برامج تدريبية احترافية عملية في الأمن السيبراني مع كبرى المبادرات القومية والدورات الهجومية المتخصصة.",
      instructorLabel: "المدرب/المشرف:",
      highlightsLabel: "أبرز الإنجازات والمخرجات:"
    },
    projects: {
      badge: "الأعمال والتقييمات الأمنية",
      title: "التقييمات ومعامل الفحص العملية",
      subtitle: "تقييمات واختبارات اختراق عملية وفق معيار ماستركارد ومعامل استطلاع وفحص الشبكات المتقدمة.",
      milestonesTitle: "نطاق الفحص والمنهجيات المطبقة",
      techTitle: "المجالات والأدوات الأمنية",
      simulatorTitle: "محاكي تفاعلي لاستطلاع وفحص منافذ الشبكة",
      simulatorDesc: "اختر معايير الفحص والهدف لمحاكاة فحص المنافذ الخفي، وتعداد إصدارات الخدمات، وكشف مساحات الهجوم المكشوفة.",
      endpointLabel: "نوع الفحص ومعاملات الفحص (Flags):",
      filterRoleLabel: "الهدف وشريحة الشبكة المستهدفة:",
      executeBtn: "بدء فحص واستطلاع الشبكة",
      executingBtn: "جاري فحص الهدف وتعداد المنافذ...",
      resetBtn: "إعادة ضبط المحاكي",
      viewProjectBtn: "معاينة التقييم ↗",
      liveDemoBtn: "المحاكي التفاعلي",
      githubBtn: "معمل الفحص"
    },
    certifications: {
      badge: "الشهادات والاعتمادات الأمنية",
      title: "الشهادات الأمنية المعتمدة",
      subtitle: "شهادات رسمية وموثقة من وزارة الاتصالات وتكنولوجيا المعلومات (مبادرة DEPI) والتدريب التخصصي في الأمن الهجومي.",
      inspectBtn: "معاينة الشهادة والاعتماد",
      trackLabel: "المسار:",
      issuedLabel: "تاريخ الإصدار:",
      hoursLabel: "المدة:",
      responsibilitiesTitle: "المسؤوليات والكفاءات الرئيسية:",
      curriculumTitle: "المقررات والوحدات التدريبية",
      modalTitle: "معاينة الوثيقة الرسمية",
      openFullImage: "فتح الصورة الكاملة في نافذة جديدة"
    },
    education: {
      badge: "الخلفية الأكاديمية",
      title: "التعليم العالي",
      subtitle: "دراسة هندسية شاملة في مبادئ الهندسة، وشبكات الحاسب، ونظم التشغيل، والأنظمة الرقمية.",
      degreeMajorTitle: "الدرجة العلمية والتخصص",
      academicFocusTitle: "التركيز الأكاديمي"
    },
    contact: {
      badge: "تواصل أمني مباشر",
      title: "تواصل معي",
      subtitle: "مهتم بالنقاشات التقنية في تحليل الثغرات، أو فرص التدريب العملي في الأمن السيبراني؟ يسعدني تواصلك.",
      detailsTitle: "بيانات التواصل",
      primaryProfile: "الملف المهني الرئيسي",
      githubRepos: "حساب GitHub ومستودعات الكود",
      locationLabel: "الموقع الجغرافي",
      copyBtn: "نسخ",
      copiedBtn: "تم النسخ",
      openLinkedIn: "فتح في لينكد إن",
      openGithub: "زيارة حساب GitHub",
      privacyTitle: "سجلات عامة موثقة",
      privacyText: "البريد الإلكتروني ورقم الهاتف محفوظان بشكل خاص على لينكد إن لحماية الخصوصية. يمكنك التواصل بأمان عبر نموذج المراسلة أو عبر رسائل لينكد إن المباشرة.",
      formTitle: "إرسال رسالة مباشرة",
      nameLabel: "الاسم الكريم",
      namePlaceholder: "الاسم بالكامل",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "example@domain.com",
      subjectLabel: "الموضوع",
      subjectPlaceholder: "فرصة تدريب / توظيف / استفسار أمني",
      messageLabel: "الرسالة",
      messagePlaceholder: "مرحباً أحمد، اطلعت على ملفك في الأمن السيبراني وأود مناقشة...",
      submitBtn: "إرسال الرسالة",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successMessage: "شكراً لتواصلك مع المهندس أحمد مرعي. للاستفسارات العاجلة، يمكنك أيضاً إرسال رسالة مباشرة عبر لينكد إن.",
      sendAnother: "إرسال رسالة أخرى"
    },
    footer: {
      roleSub: "هندسة الحاسبات والتحكم • محلل ثغرات أمنية ومختبر اختراق",
      privacyNotice: "مبني بدقة واستناداً إلى السجلات المعتمدة الرسمية.",
      rightsReserved: "جميع الحقوق محفوظة."
    }
  }
};

// Default export for compatibility
export const PORTFOLIO_DATA = PORTFOLIO_DATA_EN;

export const getPortfolioData = (lang: 'en' | 'ar'): PortfolioData => {
  return lang === 'ar' ? PORTFOLIO_DATA_AR : PORTFOLIO_DATA_EN;
};
