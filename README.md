# Nico Cabral - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant and keyboard navigable
- **TypeScript**: Fully typed for better development experience

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error boundary
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   └── sections/         # Page sections
├── data/                 # Static data
├── lib/                  # Utilities & config
└── types/                # TypeScript types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nicocabral/my-portfolio.git
cd my-portfolio
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

## 🔧 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the main branch.

Manual deployment:
```bash
npm run deploy
```

## 📝 Customization

### Personal Information

Update your personal information in:
- `lib/config.ts` - Site configuration
- `data/experience.ts` - Work experience
- `data/skills.ts` - Technical skills
- `data/projects.ts` - Portfolio projects

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Individual component files

### Images

- Profile picture: `public/images/profile.jpg`
- Project images: Update URLs in `data/projects.ts`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

- **Email**: [contact@nicocabral.dev](mailto:contact@nicocabral.dev)
- **LinkedIn**: [linkedin.com/in/nicocabral](https://linkedin.com/in/nicocabral)
- **GitHub**: [github.com/nicocabral](https://github.com/nicocabral)

---

Built with ❤️ by Nico Cabral
