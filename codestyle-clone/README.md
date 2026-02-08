# CODE STYLE Clone

A modern, responsive website clone inspired by CODE STYLE (https://codestyle-web.com/), built with Next.js and Tailwind CSS.

## Features

- **Hero Section**: Minimalist design with traditional design works tagline
- **Works Section**: Grid layout showcasing construction projects
- **Blog Section**: Latest blog posts in card format
- **Instagram Section**: Social media integration
- **Concept Section**: Company philosophy and approach
- **Service Section**: Comprehensive service offerings
- **Responsive Design**: Mobile-friendly layout
- **Modern Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd codestyle-clone
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
codestyle-clone/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── HeroSection.tsx  # Hero section
│   ├── WorksSection.tsx # Works portfolio
│   ├── BlogSection.tsx  # Blog posts
│   ├── InstagramSection.tsx # Instagram feed
│   ├── ConceptSection.tsx # Concept/About
│   ├── ServiceSection.tsx # Services
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing

## License

This is a demonstration project for educational purposes.