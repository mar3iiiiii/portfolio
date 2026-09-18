import profileImage from '../assets/ahmed_profile.jpg';
import ntiCertImage from '../assets/certificates/nti_itida_fullstack_php.png';
import huaweiCertImage from '../assets/certificates/huawei_cloud_computing.png';

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

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ahmed Marei",
    title: "Computer & Control Engineer",
    subTitle: "Full Stack Web Developer (PHP/MySQL) • Cloud Associate (Huawei HCIA) • Vulnerability Analyst & Penetration Tester (DEPI)",
    headline: "Computer and Control Engineer at El Shorouk Academy (Class of 2027) with verified expertise in Full Stack Web Development (NTI & ITIDA 95%), Cloud Computing (Huawei HCIA), and Infrastructure & Security (DEPI Vulnerability Analyst & Penetration Tester).",
    location: "Cairo / El Shorouk, Egypt",
    linkedinUrl: "https://www.linkedin.com/in/ahmed-marei-m",
    githubUrl: "https://github.com/mar3iiiiii",
    profileImage: profileImage,
    statusBadge: "Open to Practical Training & Internships",
    aboutSummary: `I am a Computer and Control Engineer at El Shorouk Academy (Class of 2027) focused on building secure full-stack web applications, scalable cloud computing architectures, and conducting infrastructure security assessments.

I hold an official Summer Training Certificate in Full Stack Web Development using PHP from the National Telecommunication Institute (NTI) & ITIDA, completing 120 hours (90 technical + 30 freelancing) with an outstanding 95% final score. Additionally, I am certified in HCIA-Cloud Computing V5.5 by Huawei ICT Academy, mastering computing virtualization, distributed storage, and cloud infrastructure operations.

Furthermore, I am a graduate of Round 5 of the Digital Egypt Pioneers Initiative (DEPI - under MCIT Egypt) in the Infrastructure & Security track as a Vulnerability Analyst and Penetration Tester — specializing in Network, Web Application, and Android Penetration Testing, security testing under the Mastercard framework, Prompt Engineering, and professional career readiness under instructor Rawan Waheed.`,
    keyHighlights: [
      { label: "Academic Standing", value: "Class of 2027", subtext: "El Shorouk Academy" },
      { label: "Full Stack (NTI/ITIDA)", value: "95% Final Score", subtext: "120 Hrs (90 Tech + 30 Freelance)" },
      { label: "Huawei ICT Academy", value: "HCIA-Cloud V5.5", subtext: "Code: 20260917000498" },
      { label: "DEPI Track", value: "Vulnerability Analyst", subtext: "InfraStructure & Security Track" }
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
      description: "Comprehensive engineering curriculum combining control systems, digital electronics, computer architecture, algorithms, database systems, and networking."
    }
  ],

  experience: [
    {
      id: "nti-php-fullstack",
      organization: "National Telecommunication Institute (NTI) & ITIDA",
      role: "Trainee — Full Stack Web Development using PHP",
      location: "Cairo, Egypt",
      type: "Intensive Summer Training (120 Hours)",
      period: "02 August – 27 August 2026",
      score: "95% Final Score",
      hours: "120 Total Hours (90 Technical + 30 Freelancing)",
      description: "Completed an intensive 120-hour professional summer training course jointly certified by ITIDA and NTI, mastering end-to-end full-stack web engineering and digital freelancing.",
      achievements: [
        "Achieved an outstanding 95% final evaluation score (ID: 325230).",
        "Engineered full-stack applications with PHP backend, MySQL relational databases, session auth, and responsive UI.",
        "Completed 30 dedicated hours in freelancing, client communication, and project delivery under ITIDA guidance.",
        "Jointly signed by Eng. Ahmed El Zaher (ITIDA CEO) and Prof. Ahmed Khattab (NTI Director)."
      ],
      skills: ["PHP", "MySQL", "Full Stack Development", "REST APIs", "JavaScript", "HTML5/CSS3", "Freelancing"]
    },
    {
      id: "huawei-cloud",
      organization: "Huawei ICT Academy (华为ICT学院)",
      role: "Certified Trainee — HCIA-Cloud Computing V5.5",
      location: "Cairo, Egypt",
      type: "Official Huawei Academy Certification",
      period: "Issued September 17, 2026",
      score: "Certified (Passed Exam)",
      description: "Successfully completed the study and examination for HCIA-Cloud Computing V5.5 Course, verifying expertise in enterprise virtualization and cloud infrastructure.",
      achievements: [
        "Mastered computing virtualization concepts (CPU, Memory, and I/O virtualization).",
        "Configured virtualized storage pools, distributed architectures, and virtual network switching.",
        "Studied Huawei cloud computing solutions and enterprise resource scheduling.",
        "Officially verified with Certificate Code: 20260917000498."
      ],
      skills: ["Cloud Computing", "Virtualization", "Cloud Storage", "Virtual Networking", "HCIA-Cloud", "Infrastructure"]
    },
    {
      id: "depi-mcit",
      organization: "Digital Egypt Pioneers Initiative (DEPI) — MCIT Egypt",
      role: "Vulnerability Analyst & Penetration Tester Trainee (DEPI Round 5)",
      location: "Cairo, Egypt",
      type: "National Initiative (Rowad Misr El Raqmeya - MCIT)",
      period: "Round 5 Graduate",
      instructor: "Rawan Waheed (Professional Readiness)",
      description: "Selective nationwide initiative by Egypt's Ministry of Communications and Information Technology (MCIT) specializing in the Infrastructure & Security Track (Vulnerability Analyst & Penetration Tester) combined with rigorous professional career engineering.",
      achievements: [
        "Infrastructure & Security Track: Studied and performed Network, Web Application, and Android Penetration Testing following industry frameworks (Mastercard security testing standard).",
        "Vulnerability Remediation & Reporting: Executed security audits, covering tracks, and delivering detailed vulnerability reports with actionable remediation advice for developers.",
        "Applied AI & Modern Tools: Completed coursework in Prompt Engineering and modern testing toolchains.",
        "Capstone Projects: Completed hands-on security capstones evaluating application and network segment vulnerabilities.",
        "Professional Career Readiness: Certified in Personal Branding, Technical Storytelling, ATS CV Optimization, and Upwork Freelancing under instructor Rawan Waheed."
      ],
      skills: ["Vulnerability Analysis", "Network Penetration Testing", "Web Application Security", "Android Pen-Testing", "Prompt Engineering", "Security Reporting", "Personal Branding", "Upwork Freelancing"]
    }
  ],

  projects: [
    {
      id: "fullstack-php-app",
      title: "Full-Stack Web Management Platform",
      category: "Full Stack Web Development",
      role: "Full Stack Developer",
      context: "NTI & ITIDA Summer Training Capstone (120 Hours)",
      status: "Completed & Certified (95% Score)",
      description: "An end-to-end full-stack web application designed with PHP, MySQL, and modern frontend styling. Implements user authentication, secure role-based session control, complete database CRUD operations, and sanitized RESTful data flow.",
      details: [
        "Backend Architecture: Built clean, structured PHP backend logic with secure password hashing, prepared SQL statements, and session management.",
        "Relational Database: Designed normalized MySQL schemas with foreign keys, index optimization, and relational joins.",
        "Responsive Client Interface: Developed responsive views using HTML5, CSS3, and JavaScript for seamless interaction across mobile and desktop devices.",
        "Freelance-Ready Standards: Adhered to ITIDA quality guidelines for client deliverability, input validation, and code maintainability."
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs", "Apache", "Git"],
      demoAvailable: true
    },
    {
      id: "cloud-virtualization-lab",
      title: "Cloud Infrastructure & Virtualization Architecture",
      category: "Cloud Computing & Systems",
      role: "Cloud Associate",
      context: "Huawei ICT Academy — HCIA-Cloud Computing V5.5",
      status: "Certified (Code: 20260917000498)",
      description: "Architectural blueprint and configuration of an enterprise virtualized cloud datacenter, covering compute hypervisors, distributed SAN/NAS virtual storage, and software-defined network isolation.",
      details: [
        "Hypervisor Virtualization: Designed VM resource pools with automated CPU shares and dynamic memory allocation.",
        "Storage Virtualization: Configured logical volume managers, thin provisioning, and snapshot mechanisms for high data durability.",
        "Virtual Networking: Implemented virtual switches, VLAN segmentation, and gateway routing for multi-tenant isolation."
      ],
      technologies: ["Huawei Cloud", "HCIA-Cloud V5.5", "Virtualization", "Distributed Storage", "Virtual Networking"],
      demoAvailable: false
    }
  ],

  skills: [
    {
      category: "Full Stack Web Development",
      description: "End-to-end web architectures, server-side programming, and relational data management",
      skills: [
        { name: "PHP (Core & OOP)", level: "Advanced", verifiedContext: "NTI & ITIDA 95% Certified" },
        { name: "MySQL / Relational Databases", level: "Advanced", verifiedContext: "Database Schema & Query Design" },
        { name: "RESTful API Integration", level: "Proficient", verifiedContext: "Server-Client Data Exchange" },
        { name: "Authentication & Sessions", level: "Proficient", verifiedContext: "Secure Login & Role Control" },
        { name: "JavaScript / DOM", level: "Proficient", verifiedContext: "Client-side Interactivity" },
        { name: "HTML5 & Modern CSS3", level: "Proficient", verifiedContext: "Responsive UI Design" }
      ]
    },
    {
      category: "Cloud Computing & Virtualization",
      description: "Certified enterprise cloud architecture, hypervisors, and storage pools",
      skills: [
        { name: "HCIA-Cloud Computing V5.5", level: "Certified", verifiedContext: "Huawei ICT Academy Certified" },
        { name: "Compute Virtualization", level: "Proficient", verifiedContext: "CPU & Memory Resource Scheduling" },
        { name: "Virtual Storage & SAN/NAS", level: "Proficient", verifiedContext: "Storage Pools & Provisioning" },
        { name: "Virtual Networking & VLANs", level: "Proficient", verifiedContext: "Virtual Switching & Network Isolation" },
        { name: "Cloud Infrastructure Operations", level: "Proficient", verifiedContext: "Huawei Cloud Architecture" }
      ]
    },
    {
      category: "Engineering & Core Systems",
      description: "Academic foundation in control engineering, algorithms, and computing hardware",
      skills: [
        { name: "Computer & Control Engineering", level: "Academic Core", verifiedContext: "El Shorouk Academy Curriculum" },
        { name: "Digital Logic & Systems", level: "Academic Core", verifiedContext: "Hardware & Control Foundations" },
        { name: "Algorithms & Data Structures", level: "Academic Core", verifiedContext: "Engineering Problem Solving" },
        { name: "Git & Version Control", level: "Proficient", verifiedContext: "Codebase Collaboration" }
      ]
    },
    {
      category: "Infrastructure & Cybersecurity (DEPI Track)",
      description: "DEPI Round 5 Track: Vulnerability Analyst and Penetration Tester (MCIT Egypt)",
      skills: [
        { name: "Network Penetration Testing", level: "DEPI Track", verifiedContext: "Mastercard Framework Segment Testing" },
        { name: "Web Application Pen-Testing", level: "DEPI Track", verifiedContext: "OWASP & Application Vulnerabilities" },
        { name: "Android Penetration Testing", level: "DEPI Track", verifiedContext: "Mobile Application Security Audit" },
        { name: "Vulnerability Assessment", level: "DEPI Track", verifiedContext: "Mastercard Security Standards" },
        { name: "Prompt Engineering", level: "DEPI Track", verifiedContext: "AI-Augmented Security & Tooling" },
        { name: "Covering Tracks & Reporting", level: "DEPI Track", verifiedContext: "Security Documentation & Remediation" }
      ]
    },
    {
      category: "Professional & Freelancing Skills",
      description: "Dedicated 30 hours of ITIDA freelancing training plus MCIT DEPI Round 5 graduation",
      skills: [
        { name: "ITIDA Freelance Practice (30 Hrs)", level: "Certified (95%)", verifiedContext: "Summer Training Course" },
        { name: "Personal Branding & Positioning", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" },
        { name: "Technical Presentation & Storytelling", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" },
        { name: "ATS-Friendly CV Optimization", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" },
        { name: "Upwork & Client Communications", level: "Certified", verifiedContext: "DEPI Round 5 (MCIT)" }
      ]
    }
  ],

  certifications: [
    {
      id: "cert-nti-php",
      name: "Full Stack Web Development using PHP",
      issuer: "National Telecommunication Institute (NTI) & ITIDA",
      issueDate: "27 August 2026",
      score: "95% Final Score",
      hours: "120 Total Hours (90 Technical + 30 Freelancing)",
      code: "ID: 325230",
      details: "Official Summer Training Certificate in Full Stack Web Development using PHP (02 to 27 August 2026). Jointly awarded with ITIDA and signed by Eng. Ahmed El Zaher (ITIDA CEO) and Prof. Ahmed Khattab (NTI Director).",
      certificateImage: ntiCertImage,
      tags: ["PHP", "MySQL", "Full Stack", "ITIDA", "NTI", "95% Score", "Freelancing"]
    },
    {
      id: "cert-huawei-cloud",
      name: "HCIA-Cloud Computing V5.5 Course",
      issuer: "Huawei ICT Academy (华为ICT学院)",
      issueDate: "17 September 2026",
      score: "Certificate of Completion",
      code: "Code: 20260917000498",
      details: "Official Certificate of Completion for successfully finishing the study and examination of HCIA-Cloud Computing V5.5 Course, verifying expertise in enterprise virtualization, storage pools, and cloud operations.",
      certificateImage: huaweiCertImage,
      tags: ["Huawei", "HCIA", "Cloud Computing", "Virtualization", "Infrastructure"]
    },
    {
      id: "cert-depi",
      name: "Digital Egypt Pioneers Initiative (DEPI) — Round 5",
      issuer: "Ministry of Communications and Information Technology (MCIT)",
      track: "Infrastructure & Security — Vulnerability Analyst and Penetration Tester",
      issueDate: "Round 5 Graduate",
      score: "Technical & Readiness Graduate",
      details: "Comprehensive national program under MCIT Egypt qualifying graduates as Vulnerability Analysts & Penetration Testers capable of executing network security tests within the framework set by Mastercard, testing diverse network segments, providing vulnerability remediation guidance to developers, and reporting penetration tests across global teams.",
      capabilities: [
        "Ensuring network security tests are conducted within the framework set by Mastercard.",
        "Appropriate usage of security test cases & tools across various network segment types.",
        "Providing guidance to developer teams on remediating identified application vulnerabilities.",
        "Delivering structured penetration test reporting while coordinating with global teams."
      ],
      courses: [
        "Prompt Engineering",
        "Fundamentals of Networking & prerequisites",
        "Network Penetration Testing",
        "Web Application Penetration Testing",
        "Android Penetration Testing",
        "Capstone Project (Network & App Security)",
        "Covering Tracks & Reporting",
        "Capstone Project (Integrated Assessment)"
      ],
      tags: ["DEPI", "MCIT", "Vulnerability Analyst", "Penetration Testing", "Mastercard Framework", "Network Security", "Web Security", "Android Pen-Testing", "Prompt Engineering", "Personal Branding"]
    }
  ]
};
