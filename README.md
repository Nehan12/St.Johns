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

###Deployment

This project is built with Next.js and is automatically deployed using Vercel when changes are merged to the main branch.

🔄 Recommended Workflow (Automatic Deployment)

All deployments happen automatically when code is merged into main.

1. Create a feature branch (for changes)
   git checkout -b feature/your-change
2. Make your changes and commit
   git add .
   git commit -m "Add new feature or update content"
3. Push the branch to GitHub
   git push origin feature/your-change
4. Open a Pull Request (PR)
   Go to GitHub
   Open a Pull Request from feature/your-change → main
   Review and approve changes
5. Merge into main

Once merged:

Vercel automatically detects changes
Builds the project
Deploys to production automatically
⚡ What Happens After Merge

After merging to main:

Vercel triggers a new build automatically
No manual deployment is needed
Live site updates within seconds

📝 Blog Update & Newsletter Workflow

This project uses a local blog data file:

scripts/blogData.mjs
✏️ When a New Blog Post is Added
Add or update the blog post in scripts/blogData.mjs
Commit and merge changes to main
The site will automatically deploy via Vercel
📧 Sending the Newsletter (Important Step)

After the deployment is complete, run the newsletter script locally:

npm run newsletter
⚠️ Order of Operations (Very Important)

Always follow this sequence:

Update blog data (blogData.mjs)
Commit & merge to main
Wait for deployment to finish (Vercel)
Run newsletter script:
npm run newsletter
🧠 Why this order matters
Ensures the live website already has the latest blog
Newsletter links point to the correct deployed URL
Prevents sending emails with outdated or broken content
📌 Summary
Blog update → commit & merge → auto deploy
Then manually run:
npm run newsletter

## License

© 2026 Heritage Care Palliative & Wellness Residence. All rights reserved.
