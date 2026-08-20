# Juno Digital Services - Codebase Guide & Documentation

This document serves as the single source of truth for the codebase, architecture, design system, and deployment workflows of the Juno Digital website. Refer to this guide whenever you are modifying, optimizing, or enhancing the website.

---

## 1. Project Overview & Tech Stack

Juno Digital Services is a modern landing page for a specialized **restaurant digital growth partner**. The site features high-performance UI components, smooth animations, modern typography, glassmorphism design elements, and interactive sections.

### Technology Stack
*   **Core Framework**: React 19 (v19.1.1)
*   **Build Tool & Dev Server**: Vite 7 (v7.1.2)
*   **Styling & Design System**: 
    *   **Material UI (MUI) v7** (v7.3.1) - Used for structural components, theme providers, input fields, icons, and theme configuration.
    *   **Tailwind CSS v4** (v4.1.12) - Configured for styling utilities and post-processing.
    *   **Emotion CSS-in-JS** (v11.14.x) - Backs the MUI styling engine (`styled` API and `CacheProvider`).
*   **Routing**: React Router DOM (v7.8.0) - Integrated in `main.tsx` but unused in current single-page layout.
*   **Language**: TypeScript 5 (v5.9.2) - Strict mode enabled.

---

## 2. Directory Structure

```text
junoDigital-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment configuration
├── dist/                       # Production build output directory (generated on build)
├── src/
│   ├── components/             # Reusable UI Section components
│   │   ├── AboutSection.tsx    # "About Juno" section detailing experience and Pune/Nagpur/Maharashtra coverage
│   │   ├── CaseStudiesSection.tsx # "Case Studies" (Schezwan Express) and restaurant owner testimonials slider
│   │   ├── ContactSection.tsx  # Inquiries form with dropdown select for inquiry types, and locations details
│   │   ├── DifferenceSection.tsx # Regional value prop ("Juno Difference") for non-metro cities
│   │   ├── Footer.tsx          # Nav links, tagline, locations, and brand descriptors
│   │   ├── HeroSection.tsx     # Landing layout with culinary photo background and restaurant values
│   │   ├── Navigation.tsx      # Desktop header with sticky glassmorphism & mobile drawer
│   │   ├── OperatingModelSection.tsx # Roadmap flow (Understand -> Build -> Launch -> Optimise -> Grow)
│   │   ├── PackagesSection.tsx # Restaurant Growth Packages (01 Get Online, 02 Get Growing, 03 Get Ahead) & AT A GLANCE comparison table
│   │   ├── ProblemSection.tsx  # Highlights common restaurant challenges (listings, menu updates, photography, etc.)
│   │   ├── ServicesSection.tsx # 5 structured services (Get Online, Look Better, Sell Better, Get Discovered, Grow Smarter)
│   │   ├── WhoWeWorkWithSection.tsx # Client categories grid (Restaurants, QSRs, Cafés, Cloud Kitchens, etc.)
│   │   └── WhyJunoSection.tsx  # Pillars: Restaurant Understanding, Food-Tech Expertise, Hands-On Execution
│   ├── custom.d.ts             # TypeScript asset import definitions (.png, .svg, etc.)
│   ├── index.css               # Global stylesheets, fonts, custom keyframe animations
│   ├── main.tsx                # React DOM entry point wrapping App in Router & StrictMode
│   ├── App.tsx                 # Main application structure, layouts & ThemeProvider
│   ├── theme.ts                # Centralized MUI theme configuration (colors, custom components override)
│   └── *.png, *.svg            # Logotypes and image assets
├── App.junodigital.tsx         # Alternative/Backup App component definition
├── deploy.js                   # Node-based build validator & reporter
├── index.html                  # HTML entry point (references Poppins & Material Icons)
├── junoDarkMode.html           # Archive/Legacy static HTML Tailwind v2 prototype
├── postcss.config.js           # PostCSS configuration for Tailwind CSS v4 processing
├── tailwind.config.js          # Tailwind content paths configuration
├── tsconfig.json               # Main TypeScript compiler configuration
├── tsconfig.node.json          # Node environment TypeScript references
└── vite.config.ts              # Vite configurations (defines base path for deployment)
```

---

## 3. Design System & Theme Configuration ([`src/theme.ts`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/theme.ts))

The website uses a strict **Dark Mode** palette with custom typography and component-level style overrides.

### Color Palette
*   **Backgrounds**:
    *   Default Background: Black (`#000000`)
    *   Paper Surface: Dark Grey/Blue (`#111827`)
*   **Accents & Primaries**:
    *   Primary (Green): `#10B981` (Main), `#34D399` (Light), `#059669` (Dark)
    *   Secondary (Orange/Yellow): `#F59E0B` (Main), `#FBBF24` (Light), `#D97706` (Dark)
*   **Text colors**:
    *   Primary Text: `#FFFFFF`
    *   Secondary Text: `#9CA3AF`

### Typography
*   **Font Families**: `'Poppins', 'Space Grotesk', -apple-system, sans-serif`
    *   Headings (`h1`, `h2`, `h3`): **Space Grotesk** for clean, futuristic headings.
    *   Body & Controls (`body1`, `body2`, `button`): **Poppins** for optimal readability.

### Component Overrides
To maintain consistent styling, the MUI Theme modifies standard components:
1.  **`MuiButton`**:
    *   Border radius: `50px` (pill shape).
    *   Transitions: Smooth `cubic-bezier(0.4, 0, 0.2, 1)`.
    *   Hover effects: Light vertical translate (`-2px`) and primary colored glow.
2.  **`MuiCard`**:
    *   Visual style: Semi-transparent paper background (`rgba(17, 24, 39, 0.8)`), heavy backdrop filter blur (`20px`), and a subtle white border (`rgba(255, 255, 255, 0.1)`).
    *   Hover effects: Elevation translate (`-8px`), primary border spotlight, and shadow depth.
3.  **`MuiTextField`**:
    *   Visual style: Dark input background (`rgba(31, 41, 55, 0.8)`), backdrop filter blur, and custom borders on hover/focus.

---

## 4. Global Styles & Animations ([`src/index.css`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/index.css))

The website integrates standard utility classes and customized CSS keyframe animations.

### Custom Scrollbar
Styled with a gradient thumb (`#10B981` to `#F59E0B`) and a translucent dark track.

### Keyframe Animations
*   `pulse`: Used for loading status overlays.
*   `float` / `floatSlow` / `floatGentle`: Performs vertical translations and optional rotations for decorative background shapes.
*   `fadeIn` / `fadeInUp` / `fadeInLeft` / `fadeInRight`: Custom viewport entry animations with varying translations.
*   `scaleIn`: Scale scaling entry.

### Utility Classes
*   `.glass`: Glassmorphism surface container.
*   `.glass-light`: Highly translucent glass containers.
*   `.gradient-text`: Text mask using a green-to-orange gradient.

---

## 5. UI Section Components (`src/components/`)

### 1. Navigation ([`Navigation.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/Navigation.tsx))
*   **Sticky Header**: Adjusts background transparency when scrolled (`window.scrollY > 50`).
*   **Logo Asset**: Uses [darkThemeLogo.png](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/darkThemeLogo.png). Width locked to `104px` and height to `80px`.
*   **Mobile Drawer**: Sliding right drawer menu containing navigation anchors (`#services`, `#operating-model`, `#why-juno`, `#case-studies`, `#about`, `#contact`).

### 2. Hero Section ([`HeroSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/HeroSection.tsx))
*   **Background Layer**: Combines standard dark gradients with a custom Unsplash chef/kitchen culinary image overlay (applied with `0.1` opacity via a `::before` pseudo-element).
*   **Floating Elements**: Three decorative circles that float asynchronously using offset delays (`0s`, `2s`, `4s`).
*   **Main Call to Action**: Headline "We help restaurants grow in the digital age.", followed by a sub-header, inline supporting keywords, and buttons ("Grow My Restaurant" and "Explore Our Services").

### 3. Difference Section ([`DifferenceSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/DifferenceSection.tsx))
*   **Value Proposition**: Emphasizes non-metro expansion into Nagpur, Pune, and Maharashtra.
*   **Visual Elements**: Dynamic icons outlining beyond-metros mapping, food-tech know-how, and local execution.

### 4. Problem Section ([`ProblemSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/ProblemSection.tsx))
*   **Challenges Listing**: Bullet cards describing listings, menus, photography, campaigns, and tracking challenges.
*   **Extension Banner**: Highlighted CTA card marking Juno's role as an extension of the restaurant's team.

### 5. Services Section ([`ServicesSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/ServicesSection.tsx))
*   **Growth Services**: Highlights *Get Online, Look Better, Sell Better, Get Discovered, Grow Smarter*.
*   **Details**: Provides sub-checklists for onboarding, photography, engineering, campaigns, and analytics.

### 6. Operating Model Section ([`OperatingModelSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/OperatingModelSection.tsx))
*   **Workflow Roadmap**: Displays **Understand -> Build -> Launch -> Optimise -> Grow** steps.
*   **Responsive Flow**: Horizontal timeline steps on desktop and styled vertical blocks on mobile.

### 7. Why Juno Section ([`WhyJunoSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/WhyJunoSection.tsx))
*   **Core Pillars**: Cards outlining Restaurant Understanding, Food-Tech Expertise, and Hands-On Execution.

### 8. Case Studies Section ([`CaseStudiesSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/CaseStudiesSection.tsx))
*   **Schezwan Express Study**: High-impact metrics showing order metrics (181 to 3300+), pricing positioning, and platform presence.
*   **Slider Layout**: Existing client testimonials (Mohammed Bhol, Bipin Pande, Ambati Rayudu) rendered as a slider/carousel at the bottom of the section.

### 9. Who We Work With Section ([`WhoWeWorkWithSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/WhoWeWorkWithSection.tsx))
*   **Client Categories**: Cards outlining targeted markets (Restaurants, QSRs, Cafés, Cloud Kitchens, Multi-Outlet Brands, Emerging F&B Brands).

### 10. About Section ([`AboutSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/AboutSection.tsx))
*   **Visual Assets**: Displays a culinary team collaboration image from Unsplash.
*   **Branding & Core Info**: Highlights organizational background and Pune, Nagpur, Maharashtra coverage.

### 11. Contact Section ([`ContactSection.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/ContactSection.tsx))
*   **Form Structure**: Form fields containing Name, Email, Inquiry type (dropdown select), and message details.
*   **Feedback System**: Employs React states to control form submissions, outputs state JSON in console, and fires a feedback **Snackbar (success Alert)** that dismisses after 6 seconds.

### 12. Footer ([`Footer.tsx`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/src/components/Footer.tsx))
*   **Structure**: Brand details, tagline, locations (Nagpur | Pune | Maharashtra), and full navigation links.

---

## 6. Build, Deployment & CI/CD Pipeline

The project is configured for static web hosting on GitHub Pages at:
👉 **`https://swavedooja.github.io/junoDigital`**

### Scripts Overview (`package.json`)
*   `npm run dev`: Starts the local Vite dev server.
*   `npm run build`: Compiles TypeScript rules (`tsc`) and compiles Vite production assets.
*   `npm run deploy:check`: Evaluates current build metrics using `deploy.js`.
*   `npm run deploy`: Builds the client and forces a direct push command to deployment repositories.

### CI/CD Workflow ([`.github/workflows/deploy.yml`](file:///c:/Swapnil/2026%20Projects/junoDigital-main/.github/workflows/deploy.yml))
A GitHub Actions workflow is triggered on pushes to the `main` branch:
1.  Checks out the codebase.
2.  Installs Node.js & dependencies (`npm ci`).
3.  Executes the production build (`npm run build`).
4.  Uploads the contents of the `./dist` folder as an artifact.
5.  Deploys the static workspace content directly to GitHub Pages.

---

## 7. Guidelines for Modifying & Enhancing the Website

When implementing new features or making adjustments to the layout, keep the following principles in mind:

### UI & Styling Practices
*   **MUI styled-components convention**: Declare style overrides using the `styled()` utility from `@mui/material/styles` at the top of component files to avoid inline styling mess.
*   **MUI v7 Grid Layouts**: Standard MUI v7 Grid is CSS Grid-based. Use the `size` prop (e.g. `size={{ xs: 12, md: 6 }}`) instead of deprecated `item` and individual breakpoints.
*   **Responsiveness**: Utilize theme breakpoints (e.g. `theme.breakpoints.down('md')`) and conditional styling inside components to ensure layout layouts remain fluid.
*   **Theme Tokens**: Do not hardcode hex codes or fonts. Reference values directly from the MUI theme object.
