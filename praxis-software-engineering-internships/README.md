# Praxis — Software Engineering Internship Platform

A clean, modern public-facing website for a software engineering internship organization. Built with React, TypeScript, and Tailwind CSS. Designed to be completely static, fast, accessible, and ready for deployment to Cloudflare Pages.

---

## 1. Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Architecture**: Static Single-Page Application (Zero external database or paid services for v1)
- **Deployment Target**: Cloudflare Pages (free static hosting)

---

## 2. Project Structure

```
├── public/
│   ├── _redirects                     # Cloudflare Pages SPA rewrite rule
│   └── images/
│       ├── hero/
│       │   └── hero-team.webp         # 16:9 hero section photograph
│       ├── learn/
│       │   └── developer-coding.webp  # 4:3 developer coding photograph
│       ├── projects/
│       │   └── code-review.webp       # 16:9 peer code review photograph
│       ├── about/
│       │   └── team-office.webp       # 4:3 engineering office photograph
│       └── internships/
│           ├── software-development.svg
│           ├── ai-engineering.svg
│           ├── web-development.svg
│           ├── automation.svg
│           ├── data-analytics.svg
│           └── qa-testing.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── ImageSlot.tsx          # Resilient image slot with missing file fallback
│   │   │   └── SEO.tsx                # Dynamic document title & meta tags
│   │   ├── internships/
│   │   │   └── InternshipCard.tsx     # Reusable data-driven internship card
│   │   └── layout/
│   │       ├── Header.tsx             # Top bar contract (Wordmark + Nav links + CTA)
│   │       └── Footer.tsx             # Quiet footer with track links & copyright
│   ├── context/
│   │   └── RouterContext.tsx          # Client-side router with deep-link support
│   ├── data/
│   │   └── internships.ts             # Central source of truth for all internship tracks
│   ├── pages/
│   │   ├── HomePage.tsx               # Hero, Learn by Building, Tracks, Process preview
│   │   ├── InternshipsPage.tsx        # Filterable catalog (Area, Level, Duration, Mode)
│   │   ├── InternshipDetailPage.tsx   # Dynamic track breakdown & journey timeline
│   │   ├── HowItWorksPage.tsx         # Detailed 5-stage process & FAQs
│   │   ├── ProjectsSkillsPage.tsx     # Project categories & core engineering habits
│   │   ├── AboutPage.tsx              # 4 core principles & mentoring structure
│   │   ├── ApplyPage.tsx              # Structured application form with validation
│   │   └── NotFoundPage.tsx           # 404 handler
│   ├── types/
│   │   └── index.ts                   # Strict TypeScript definitions
│   ├── App.tsx                        # Root layout orchestrator
│   ├── main.tsx                       # React DOM entrypoint
│   └── index.css                      # Tailwind CSS entry
```

---

## 3. Local Development

### Prerequisites
- Node.js 18+
- npm or pnpm

### Setup Commands
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Build artifacts are placed in the `/dist` directory.

---

## 4. Image Placement Guide for the Website Owner

All photographs and technical illustrations are loaded from predictable static paths inside `/public/images/`.

### Exact File Paths & Recommended Dimensions

| Target Section | Static File Path | Recommended Dimensions | Recommended Aspect Ratio |
| :--- | :--- | :--- | :--- |
| **Hero Section** | `public/images/hero/hero-team.webp` | 2400 × 1350 px | 16:9 |
| **Learn by Building** | `public/images/learn/developer-coding.webp` | 2000 × 1300 px | ~3:2 or 4:3 |
| **Projects & Skills** | `public/images/projects/code-review.webp` | 2400 × 1350 px | 16:9 |
| **About Us** | `public/images/about/team-office.webp` | 2000 × 1300 px | ~3:2 or 4:3 |
| **Software Development** | `public/images/internships/software-development.svg` | Vector SVG | 4:3 |
| **AI Engineering** | `public/images/internships/ai-engineering.svg` | Vector SVG | 4:3 |
| **Web Development** | `public/images/internships/web-development.svg` | Vector SVG | 4:3 |
| **Automation & Tooling** | `public/images/internships/automation.svg` | Vector SVG | 4:3 |
| **Data & Analytics** | `public/images/internships/data-analytics.svg` | Vector SVG | 4:3 |
| **QA & Testing** | `public/images/internships/qa-testing.svg` | Vector SVG | 4:3 |

### How to Replace Images
1. Obtain the desired image (e.g., from your photographer, team archive, or Unsplash/Pexels).
2. Convert or save the image in `.webp` format (or `.svg` for track illustrations).
3. Place the file in the exact path listed in the table above, replacing the existing file.
4. Keep the exact filename.
5. Reload the website. The UI automatically displays your new image. If an asset is ever missing, `ImageSlot` will render a resilient dev fallback container instead of a broken image box.

---

## 5. How to Add or Modify an Internship

All internship track data is centralized in `src/data/internships.ts`. You do **not** need to create new React components to add a track.

To add a new track:
1. Open `src/data/internships.ts`.
2. Add a new object to the `INTERNSHIPS` array:
   ```ts
   {
     id: 'mobile-eng',
     slug: 'mobile-engineering',
     title: 'Mobile Engineering Internship',
     category: 'Software Development',
     shortDescription: 'Build native and cross-platform mobile apps with automated test suites.',
     duration: '10 Weeks',
     workMode: 'Remote',
     level: 'Intermediate',
     status: 'Open for Applications',
     technologies: ['React Native', 'TypeScript', 'Jest', 'Git'],
     illustrationPath: '/images/internships/software-development.svg',
     overview: '...',
     responsibilities: [...],
     skillsGained: [...],
     expectedDeliverables: [...],
     requirements: [...],
     timeline: [...]
   }
   ```
3. Save the file. The new track immediately appears in:
   - The Home page curriculum section
   - The `/internships` filterable catalog
   - The `/internships/mobile-engineering` dynamic detail route
   - The `/apply` track selection dropdown

---

## 6. Deployment to Cloudflare Pages

This website is statically pre-rendered and compatible with Cloudflare Pages free tier.

### Method 1: Git Integration (Recommended)
1. Push this repository to GitHub.
2. In the Cloudflare Dashboard, navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select this repository.
4. Configure build settings:
   - **Framework preset**: `None` or `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**.
6. Cloudflare Pages will build the site and deploy it to a free `*.pages.dev` domain.

### SPA Client Routing Note
The `public/_redirects` file is pre-configured with:
```
/* /index.html 200
```
This ensures that deep links (e.g. `https://yoursite.pages.dev/internships/ai-engineering` or `/apply`) resolve cleanly to the SPA router without HTTP 404 errors.

---

## 7. Form Submission Integration

In the current v1 static release, the application form on `/apply` performs full client-side schema validation (required fields, email format, GitHub URL verification, statement length) and provides an exportable JSON payload.

To connect this form to an external endpoint (e.g., Cloudflare Workers, Airtable, Formspree, or your custom REST API):
1. In `src/pages/ApplyPage.tsx`, locate the `handleSubmit` method.
2. Replace the local staging block with a `fetch('/api/applications', { method: 'POST', body: JSON.stringify(formData) })` call.
3. Handle the response and display the confirmation screen.
