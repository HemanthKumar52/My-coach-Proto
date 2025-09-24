# MyCoach - Personal Learning Assistant

A comprehensive web application designed to provide personalized learning experiences for students preparing for various examinations.

## Features

### Core Functionality
- **Authentication System**: Multi-modal login (Google, Apple, Guest)
- **Personal Profile Setup**: Multi-step form for collecting user information
- **Dashboard Navigation**: Comprehensive sidebar with all major sections
- **Loading Experience**: Philosophical quotes during app transitions

### Main Sections
1. **Home**: Introduction and overview of MyCoach platform
2. **About Us**: Detailed mission, vision, and platform information
3. **Exam Preparation**: Support for NAPLAN, ICAS, VIC Scholarship, and VIC Selective exams
4. **AI Tutors**: Subject-specific AI tutoring for Mathematics, English, Science, Tamil, Hindi
5. **Profile Management**: User dashboard with gamification elements
6. **Reports**: Comprehensive academic performance analytics
7. **Application Details**: User profile management and settings
8. **Careers**: Career guidance and opportunities

## Technical Architecture

### Frontend Stack
- **React 18**: Component-based UI development
- **TailwindCSS**: Utility-first styling with custom red theme
- **Lucide Icons**: Comprehensive icon system
- **Multi-Page Application (MPA)**: Separate HTML files for different sections

### Design System
- **Primary Color**: Red theme (#dc2626)
- **Typography**: Inter font family
- **Components**: Reusable card, button, and navigation components
- **Responsive Design**: Mobile-first approach

### File Structure
```
├── index.html (Landing/Auth page)
├── dashboard.html (Main dashboard)
├── personal-details.html (Profile setup)
├── about.html (About us page)
├── exam-prep.html (Exam preparation)
├── app.js (Main application logic)
├── components/
│   ├── Sidebar.js (Navigation sidebar)
│   ├── HomePage.js (Dashboard home content)
│   ├── Loading.js (Loading screen with quotes)
│   └── Quote.js (Quote display component)
└── utils/
    └── quotes.js (Philosophy quotes collection)
```

## User Flow

1. **Splash Screen**: MyCoach logo display (2 seconds)
2. **Authentication**: Google/Apple SSO or guest login
3. **Loading**: Random philosophical quotes (3 seconds)
4. **Profile Setup**: Multi-step form for personal details
5. **Dashboard**: Main navigation hub with sidebar
6. **Feature Access**: Exam prep, tutors, reports, and more

## Development Notes

- All components include proper error handling with try-catch blocks
- Responsive design ensuring mobile compatibility
- Consistent red theme throughout the application
- Hover effects and smooth transitions for enhanced UX
- Proper semantic HTML and accessibility considerations

## Future Enhancements

- Integration with real assessment APIs
- Advanced AI tutoring capabilities
- Real-time progress tracking
- Parent/teacher dashboard
- Mobile application development
- Offline study mode
- Collaborative study groups
- Advanced analytics and reporting
- Multi-language support expansion
- Voice interaction capabilities

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Copyright

© 2025 MyCoach. All rights reserved.
