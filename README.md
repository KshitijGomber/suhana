# Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a modern pink-themed design, smooth animations, professional layout, and advanced UI/UX for showcasing experience in talent acquisition and business development.

---

## 🚀 Major Features (Update)

- **Modern, Compact UI**: All sections (Hero, About, Experience, Education, Coursework, Extracurricular, Gallery, Contact) are visually balanced, compact, and mobile-friendly
- **Lenis Smooth Scrolling**: Ultra-smooth, buttery scrolling experience across all devices
- **Framer Motion Animations**: Scroll-triggered, reversible, and responsive animations
- **Sticky Header Navigation**: Accurate active section detection, smooth offset navigation, and mobile menu
- **Contact Form**: Fully functional, with EmailJS integration and responsive status feedback
- **Download Resume**: Prominent, animated download button
- **Vercel Analytics & Speed Insights**: Integrated for real-time analytics and performance monitoring
- **Performance Optimizations**: Touch-action fixes, viewport height handling, and scroll performance improvements

---

## 🛠️ Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. **Open your browser**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

```
suhana-portfolio/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── ...
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## ✨ Notable Technologies
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lenis** (smooth scroll)
- **Lucide React** (icons)
- **Vercel Analytics & Speed Insights**

---

## 🧑‍💻 Customization
- **Content**: Edit your info in `src/components/` (About, Experience, etc.)
- **Contact Form**: Configure EmailJS in `src/components/Contact.tsx` and your `.env` file
- **Images**: Place in `public/` or update paths in components
- **Colors/Theme**: Edit `tailwind.config.js` and `index.css`

---

## 📧 Contact Form Setup (EmailJS)
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service, template, and get your public key
3. Add these to your `.env` file as:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Restart the dev server after editing `.env`

---

## 📊 Analytics & Speed Insights
- **@vercel/analytics**: Already integrated in `App.tsx` as `<Analytics />`
- **@vercel/speed-insights**: Already integrated in `App.tsx` as `<SpeedInsights />`
- Deploy to Vercel for full analytics and performance data

---

## 🐛 Troubleshooting
- **Scroll not smooth?** Ensure Lenis is installed and not conflicting with other scroll libraries
- **Contact form not working?** Check EmailJS config and `.env` variables
- **Build errors?** Run `npm run lint` and fix any issues

---

## 📄 License
MIT License
---

**Built with ❤️ by Kshitij Gomber**