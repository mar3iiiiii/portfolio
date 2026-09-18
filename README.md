# Ahmed Marei — Modern Engineering & Developer Portfolio

A modern, fast, responsive personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, grounded strictly in verified information extracted from Ahmed Marei's official LinkedIn profile (`https://www.linkedin.com/in/ahmed-marei-m`).

---

## Key Highlights

- **100% Fact-Grounded**: Every credential, academic timeline, track, grade (NTI 96%), and project is extracted from the real LinkedIn profile.
- **Tech-Oriented Aesthetics**: Custom developer aesthetic with dark/light mode toggle, subtle cyber glow effects, and responsive layout.
- **Live Interactive Project Widget**: Includes an interactive **Network Intrusion Detection System (NIDS)** packet anomaly simulator where visitors can experiment with packet rate, SYN flag ratios, and port scanning risks to observe the ML detection pipeline.
- **Modular Data Architecture**: All personal information, credentials, education, and project records are centralized in `src/data/portfolioData.ts` for effortless updates.

---

## Project Structure

```
portfolio-ahmed-marei/
├── public/
│   └── ahmed_profile.jpg          # Verified profile photo
├── src/
│   ├── assets/                    # Static assets & logos
│   ├── components/                # Modular UI components
│   │   ├── Navbar.tsx             # Glassmorphic header with theme switcher
│   │   ├── Hero.tsx               # Introduction, photo, status & CTA buttons
│   │   ├── About.tsx              # Verified engineering background summary
│   │   ├── Skills.tsx             # Filterable skills categorized by domain
│   │   ├── Experience.tsx         # Career & training timeline (DEPI, NTI, Huawei)
│   │   ├── Projects.tsx           # Featured NIDS project with interactive simulator
│   │   ├── Certifications.tsx     # NTI (96%), DEPI Round 5, and ML credentials
│   │   ├── Education.tsx          # El Shorouk Academy (Class of 2027)
│   │   ├── Contact.tsx            # Interactive message form & LinkedIn connect
│   │   └── Footer.tsx             # Footer with source verification guarantee
│   ├── context/
│   │   └── ThemeContext.tsx       # Dark/Light mode provider with persistence
│   ├── data/
│   │   └── portfolioData.ts       # Single source of truth for all content
│   ├── App.tsx                    # Main app layout
│   ├── main.tsx                   # React root entrypoint
│   └── index.css                  # Tailwind directives and custom scrollbars
├── index.html                     # SEO metadata, OpenGraph tags & Inter fonts
├── package.json                   # Dependencies and build scripts
├── tailwind.config.js             # Theme tokens and custom animations
├── tsconfig.json                  # TypeScript compiler options
└── vite.config.ts                 # Vite bundler configuration
```

---

## How to Run Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
Generates an optimized static bundle in the `dist/` folder.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Customization & Updating Links

To customize links (e.g. add your personal GitHub repository URL or custom email), simply edit:
```
src/data/portfolioData.ts
```
All changes will automatically reflect across the entire site!