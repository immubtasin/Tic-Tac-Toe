# Frontend Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## Features

- ⚡ Built with Vite for fast development
- ⚛️ React 18 with modern hooks
- 🎨 Tailwind CSS for styling
- 🌓 Dark mode enabled by default
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎯 Clean, minimal, professional design

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- JavaScript (ES6+)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to change the accent color:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#38BDF8', // Change this to your preferred color
    },
  },
}
```

### Content

Update the content in each component file to match your information:
- `Hero.jsx` - Your title and introduction
- `Skills.jsx` - Your technical skills
- `Projects.jsx` - Your portfolio projects
- `Experience.jsx` - Your work experience
- `Contact.jsx` - Your contact information and social links

### Images

Replace the placeholder images in `Projects.jsx` with your own project screenshots.

## License

MIT
