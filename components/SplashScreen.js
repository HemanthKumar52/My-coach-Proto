// Universal Splash Screen Component
function SplashScreen({ onComplete, duration = 3000, showQuote = true }) {
  const [currentQuote, setCurrentQuote] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    // Get a random quote for the splash screen
    if (showQuote && typeof getRandomQuote === 'function') {
      setCurrentQuote(getRandomQuote());
    } else {
      setCurrentQuote("Learning is a journey, not a destination.");
    }

    // Show splash screen for specified duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onComplete, showQuote]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center">
      <div className="text-center text-white max-w-2xl px-6">
        <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
          <div className="icon-graduation-cap text-6xl text-[var(--primary-color)]"></div>
        </div>
        <h1 className="text-4xl font-bold mb-6">MyCoach</h1>
        
        {/* Quote Display in White Text */}
        {showQuote && currentQuote && (
          <div className="mb-4">
            {(() => {
              const parts = currentQuote.split(' - ');
              const quote = parts[0] || currentQuote;
              const author = parts[1] || 'Unknown';
              
              return (
                <div>
                  <p className="text-white text-lg font-medium leading-relaxed italic mb-2">
                    "{quote}"
                  </p>
                  <p className="text-red-100 text-sm font-normal">
                    - {author}
                  </p>
                </div>
              );
            })()}
          </div>
        )}
        
        <p className="text-red-100 text-sm">Your Personal Learning Assistant</p>
        
        {/* Loading animation */}
        <div className="mt-8">
          <div className="inline-flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Universal Page Loader for navigation
function UniversalPageLoader() {
  const [showSplash, setShowSplash] = React.useState(false);

  // Function to show splash screen on page navigation
  window.showSplashOnNavigation = (callback, duration = 3000) => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      if (callback) callback();
    }, duration);
  };

  return showSplash ? (
    <SplashScreen 
      onComplete={() => setShowSplash(false)} 
      duration={3000} 
      showQuote={true} 
    />
  ) : null;
}