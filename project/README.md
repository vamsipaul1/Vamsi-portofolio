# Vamsi Rangumudri - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for both mobile and desktop devices
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Modern UI/UX**: Clean, professional design with glassmorphism effects
- **Contact Form**: Interactive contact form with validation
- **Certification System**: Display professional certifications with verification links
- **Project Showcase**: Beautiful project gallery with detailed modals
- **Skills & Experience**: Comprehensive skills and internship experience sections

## 📱 Responsiveness

The website is fully responsive and optimized for:
- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1280px+)

## 🎯 How to Add Your Certifications

### 1. Update the Certifications Array

Edit `components/CertificationsSection.tsx` and add your certifications to the `certifications` array:

```typescript
{
  id: 8, // Unique ID
  title: 'Your Certification Title',
  issuer: 'Issuing Organization',
  date: 'Month Year',
  credentialId: 'YOUR-CREDENTIAL-ID',
  description: 'Brief description of what this certification covers',
  logo: '🎓', // Emoji or icon
  color: 'from-purple-500 to-pink-500', // Tailwind gradient classes
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  verifyUrl: 'https://verification-link.com' // Link to verify the certificate
}
```

### 2. Update Statistics

Don't forget to update the stats section:

```typescript
const stats = [
  { number: '8+', label: 'Certifications' }, // Update count
  { number: '4', label: 'Cloud Platforms' },
  { number: '25+', label: 'Verified Skills' }, // Update skills count
  { number: '100%', label: 'Up to Date' }
];
```

### 3. Verification Links

For each certification, provide a valid verification URL:
- **AWS**: https://aws.amazon.com/verification
- **Google Cloud**: https://cloud.google.com/certification/verify
- **Microsoft**: https://www.microsoft.com/en-us/learning/certificate-verification.aspx
- **Coursera**: https://www.coursera.org/account/accomplishments/verify
- **Custom**: Use the official verification page for your certification provider

## 📧 Contact Form Instructions

### For Visitors (How to Send Messages)

1. **Fill out the form** in the "Let's Connect" section
2. **Required fields**:
   - Full Name
   - Email Address
   - Subject
   - Message
3. **Click "Send Message"** to submit
4. **Wait for confirmation** - you'll receive an alert with response details

### For You (How to Respond)

When someone sends a message through the contact form:

1. **Check your email** - messages are sent to `vamsi.rangumudri.dev@gmail.com`
2. **Response time**: Aim to respond within 24-48 hours
3. **Response methods**:
   - Reply directly to the email
   - Use the contact information in the form
   - Connect through social media links

### Setting Up Email Functionality

To make the contact form actually send emails:

1. **Option 1: Email Service Integration**
   - Use services like SendGrid, Mailgun, or AWS SES
   - Update the `handleSubmit` function to call your email API

2. **Option 2: Backend API**
   - Create a backend endpoint (Node.js/Express, Python/Flask, etc.)
   - Update the form to POST to your API endpoint

3. **Option 3: Form Service**
   - Use services like Formspree, Netlify Forms, or GetForm
   - Update the form action to point to your form service

## 🛠️ Technical Details

### Built With
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

### File Structure
```
components/
├── Header.tsx              # Navigation header
├── HeroSection.tsx         # Landing section
├── AboutSection.tsx        # About me section
├── ProjectsSection.tsx     # Projects showcase
├── InternshipsSection.tsx  # Work experience
├── CertificationsSection.tsx # Certifications
├── SkillsSection.tsx       # Skills & expertise
├── ContactSection.tsx      # Contact form & info
└── Footer.tsx              # Footer section
```

### Customization

#### Colors & Themes
- Primary: Red gradient (`from-red-600 to-red-700`)
- Secondary: Blue/Purple gradients
- Background: White to gray gradients
- Update `tailwind.config.ts` for global color changes

#### Animations
- Hover effects on cards and buttons
- Scroll-triggered animations
- Floating background elements
- Customize in individual component files

#### Layout
- Responsive grid systems
- Mobile-first approach
- Breakpoint-based adjustments
- Glassmorphism effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Build command: `npm run build`, publish directory: `.next`
- **AWS Amplify**: Connect GitHub repository
- **Railway**: Deploy with GitHub integration

## 📱 Mobile Optimization

The website includes:
- Touch-friendly buttons and interactions
- Optimized spacing for mobile devices
- Responsive typography scaling
- Mobile-first navigation
- Optimized image loading

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

## 📞 Support

For questions or issues:
- **Email**: vamsi.rangumudri.dev@gmail.com
- **LinkedIn**: [Vamsi Rangumudri](https://www.linkedin.com/in/vamsi-rangumudri)
- **GitHub**: [vamsipaul1](https://github.com/vamsipaul1/my-auth-app.git)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to update the contact form to actually send emails by integrating with an email service or backend API before deploying to production.
