# St. John's Palliative & Wellness Residence Website

A professional website for St. John's Palliative & Wellness Residence, a premium care facility in Sri Lanka providing compassionate palliative and long-term residential care.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Multi-page Structure**: Separate pages for Home, About, Services, and Contact
- **Blue Theme**: Professional blue color scheme throughout
- **Hero Section**: Full-screen landing page with background image support
- **Interactive Navigation**: Sticky navigation with mobile menu
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Clean, professional design with smooth transitions

## Pages

### Home Page (`/`)
- Hero section with landing image background
- Quick overview of services
- Call-to-action buttons
- Simplified content focusing on first impressions

### About Page (`/about`)
- Detailed information about the facility
- Core values and commitment
- Team information
- Why choose St. John's

### Services Page (`/services`)
- Comprehensive service offerings
- Palliative care services
- Long-term residential care
- Additional services and amenities

### Contact Page (`/contact`)
- Contact information and location
- Interactive contact form
- Visiting hours and emergency contact
- Map placeholder for future integration

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   └── Navigation.tsx
└── globals.css
```

## Customization

### Adding the Landing Image
Replace the placeholder `public/landing.jpg` with your actual facility image. The image should be:
- High resolution (1920x1080 or higher)
- Optimized for web (JPEG format recommended)
- Professional quality showing the facility

### Updating Contact Information
Edit the contact details in `src/app/contact/page.tsx`:
- Phone numbers
- Email addresses
- Physical address
- Visiting hours

### Modifying Content
All content can be easily updated by editing the respective page files in the `src/app/` directory.

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

## License

© 2024 St. John's Palliative & Wellness Residence. All rights reserved.