function DashboardApp() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [showSplash, setShowSplash] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    // Temporary bypass for testing - REMOVE LATER
    // Set temporary authentication for testing
    if (!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify({name: 'Test User', email: 'test@example.com'}));
      localStorage.setItem('loginTimestamp', Date.now().toString());
    }
    
    // Strict authentication check
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('userData');
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    
    // Check if login is valid and recent (within last 30 minutes)
    const isRecentLogin = loginTimestamp && (Date.now() - parseInt(loginTimestamp)) < 1800000; // 30 minutes
    
    if (!isLoggedIn || !userData || !loginTimestamp || !isRecentLogin) {
      // Clear any invalid authentication data
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData');
      localStorage.removeItem('loginTimestamp');
      window.location.href = 'index.html';
      return;
    }
    
    setIsAuthenticated(true);
    
    // Check if this is a fresh login (within last 5 seconds)
    const isFreshLogin = loginTimestamp && (Date.now() - parseInt(loginTimestamp)) < 5000;
    
    // Show splash screen for 3 seconds, but skip if it's a fresh login from another page
    if (!isFreshLogin) {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      // Skip splash for fresh logins
      setShowSplash(false);
    }
  }, []);

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} duration={3000} showQuote={true} />;
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'history':
        return <History />;
      case 'about':
        window.location.href = 'about.html';
        return null;
      case 'careers':
        window.location.href = 'careers.html';
        return null;
      case 'app-details':
        window.location.href = 'app-details.html';
        return null;
      case 'exam-prep':
        window.location.href = 'exam-prep.html';
        return null;
      case 'tutors':
        window.location.href = 'tutors.html';
        return null;
      case 'profile':
        window.location.href = 'profile.html';
        return null;
      case 'reports':
        window.location.href = 'reports.html';
        return null;
      default:
        return <HomePage />;
    }
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DashboardApp />);