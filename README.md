# MyCoach Proto

A personal learning assistant application with enhanced login animations and interactive UI components.

## Features

- Enhanced login page with water droplet animations
- 5-second loading screen with rotating philosophical quotes
- Interactive sidebar with hover effects and transitions
- Profile management with badges and activity tracking
- Multiple learning modules (Dashboard, Exam Prep, Tutors, Reports)

## Technologies Used

- HTML5
- CSS3 with Tailwind CSS
- JavaScript (ES6+)
- React (via CDN)
- Lucide Icons

## Local Development

1. Clone the repository
2. Run `npm install` (optional, for development server)
3. Run `npx serve -s . -p 8000` or simply open `index.html` in a browser
4. Navigate to `http://localhost:8000`

## Deployment

This project is configured for deployment on Vercel as a static site.

## Project Structure

```
├── index.html              # Main entry point
├── app.js                  # Main application logic
├── components/             # React components
│   ├── HomePage.js
│   ├── Loading.js
│   ├── Quote.js
│   └── Sidebar.js
├── utils/                  # Utility functions
│   └── quotes.js
└── [module]-app.js         # Individual page applications
```