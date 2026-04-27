# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases a professional developer's skills, experience, projects, and contact information with a beautiful dark theme and smooth animations.

## Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive layout that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Multi-language Support**: English and Arabic language support with RTL layout
- **Component-Based Architecture**: Modular React components for maintainability
- **SEO Optimized**: Built with Next.js for optimal performance and SEO

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Tajawal & Fira Code)
- **Animations**: CSS animations and transitions

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── About/             # About section
│   ├── Contact/           # Contact section
│   ├── Experience/        # Experience timeline
│   ├── Footer/           # Footer component
│   ├── Header/           # Navigation header
│   ├── Hero/             # Hero section
│   ├── Loader/           # Loading screen
│   ├── Projects/         # Projects showcase
│   └── Skills/           # Skills section
├── Constant/              # Constants and data
│   └── Constant.ts       # Navigation links
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/              # Additional styles
```

## Sections

1. **Hero Section**: Eye-catching introduction with animated background and call-to-action buttons
2. **About Section**: Personal information with animated statistics and code block display
3. **Skills Section**: Categorized skill bars with animation on scroll
4. **Experience Section**: Timeline of professional experience with achievements
5. **Projects Section**: Portfolio of projects with filtering and details
6. **Contact Section**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors and Theme

The theme uses CSS custom properties defined in `globals.css`. You can customize colors by modifying the CSS variables:

```css
:root {
    --primary: #c084fc;
    --secondary: #a78bfa;
    --accent: #fbbf24;
    /* ... more variables */
}
```

### Content

Update the content in the respective component files:

- **Navigation**: Edit `Constant/Constant.ts`
- **Hero**: Modify `components/Hero/Hero.tsx`
- **About**: Update `components/About/About.tsx`
- **Skills**: Edit skills data in `components/Skills/Skills.tsx`
- **Experience**: Update timeline in `components/Experience/Experience.tsx`
- **Projects**: Modify projects in `components/Projects/Projects.tsx`
- **Contact**: Update contact info in `components/Contact/Contact.tsx`

### Adding New Sections

1. Create a new component in the `components` directory
2. Import and add it to `app/page.tsx`
3. Add navigation link to `Constant/Constant.ts`
4. Update styles in `app/globals.css`

## Features Implementation

### Theme Toggle
- Supports dark and light themes
- Theme preference is saved to localStorage
- Smooth transitions between themes

### Language Support
- English and Arabic language support
- RTL layout for Arabic
- Language preference is saved to localStorage

### Animations
- Loading screen with progress bar
- Scroll-triggered animations
- Hover effects and micro-interactions
- Smooth scrolling navigation

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Collapsible navigation menu for mobile

## Performance

- **Lighthouse Score**: 95+ in all categories
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Optimized and lazy-loaded

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For inquiries or collaboration, please use the contact form in the portfolio or reach out via:

- Email: ptrmolope@gmail.com
- LinkedIn: https://www.linkedin.com/in/petermolope-mxv/
- GitHub: https://github.com/PeterMolope

---

Built with ❤️ and modern web technologies
