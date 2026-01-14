# Portfolio - Next.js Conversion

This is a Next.js conversion of the HTML portfolio page for Alex Rivera.

## 🎨 Features

- ✅ Dark mode enabled by default
- ✅ Responsive design with Tailwind CSS
- ✅ Glassmorphism effects on navigation and cards
- ✅ Smooth hover animations on project cards
- ✅ Material Icons integration
- ✅ Inter font from Google Fonts
- ✅ Optimized images using Next.js Image component

## 📋 Prerequisites

**Important:** This project requires **Node.js version 20.9.0 or higher**.

Your current Node version is 18.20.8, which is not compatible with Next.js 16.

### Upgrading Node.js

You can upgrade Node.js using one of these methods:

#### Option 1: Using NVM (Node Version Manager) - Recommended

```bash
# Install or update to Node 22 (latest LTS)
nvm install 22
nvm use 22
```

#### Option 2: Using n

```bash
# Install n globally
sudo npm install -g n

# Install Node 22
sudo n 22
```

#### Option 3: Download from nodejs.org

Visit [nodejs.org](https://nodejs.org/) and download Node.js v22.x LTS

## 🚀 Getting Started

Once you have Node.js >= 20.9.0 installed:

```bash
# Navigate to the project directory
cd nextjs-portfolio

# Install dependencies (if not already done)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
nextjs-portfolio/
├── src/
│   └── app/
│       ├── globals.css      # Global styles and Tailwind config
│       ├── layout.tsx        # Root layout with fonts
│       └── page.tsx          # Main portfolio page
├── public/
│   ├── project-1.png        # Dashboard project image
│   ├── project-2.png        # Mobile app project image
│   ├── project-3.png        # E-commerce project image
│   └── project-4.png        # Productivity app project image
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Customization

### Colors

The project uses a cyan primary color (#22a8c3). You can change this in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#22a8c3", // Change this to your preferred color
}
```

### Images

Replace the placeholder images in the `public/` directory with your actual project images. The images should maintain a 16:10 aspect ratio for best results.

### Content

Edit `src/app/page.tsx` to update:
- Your name and title
- Project descriptions
- Testimonials
- Contact information

## 🏗️ Building for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All styling from the original HTML has been preserved
- The glassmorphism effects work best on darker backgrounds
- Material Icons are loaded from Google Fonts CDN
- Images are optimized using Next.js's Image component for better performance

## 🔧 Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Inter Font** - Google Fonts
- **Material Symbols** - Icon library
