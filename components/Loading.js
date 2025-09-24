function Loading() {
  const [currentQuote, setCurrentQuote] = React.useState('');
  const [showQuote, setShowQuote] = React.useState(false);
  const [quoteIndex, setQuoteIndex] = React.useState(0);

  React.useEffect(() => {
    // Get random quote
    const quote = getRandomQuote();
    setCurrentQuote(quote);
    
    // Show quote after 1 second
    const showTimer = setTimeout(() => {
      setShowQuote(true);
    }, 1000);

    // Cycle through quotes every 2 seconds
    const quoteInterval = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % 3);
      const newQuote = getRandomQuote();
      setCurrentQuote(newQuote);
    }, 2000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(quoteInterval);
    };
  }, []);

  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center relative overflow-hidden" data-name="loading" data-file="components/Loading.js">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-white opacity-5 rounded-full animate-ping"></div>
        </div>

        <div className="text-center text-white relative z-10 max-w-lg mx-auto px-8">
          {/* Enhanced Logo */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-1000 hover:scale-110">
              <div className="icon-graduation-cap text-6xl text-red-500 animate-pulse"></div>
            </div>
            {/* Ripple Effect */}
            <div className="absolute inset-0 w-32 h-32 mx-auto border-4 border-white opacity-30 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-40 h-40 mx-auto border-2 border-white opacity-20 rounded-full animate-pulse"></div>
          </div>
          
          {/* Enhanced Title */}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
            MyCoach
          </h1>
          <p className="text-xl text-red-100 mb-8 font-light">Your Personal Learning Assistant</p>
          
          {/* Enhanced Loading Spinner */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-2 border-red-300 border-b-transparent rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
            </div>
          </div>

          {/* Enhanced Quote Display */}
          <div className="min-h-[100px] flex items-center justify-center">
            <div className={`transition-all duration-1000 transform ${showQuote ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 shadow-xl">
                <Quote text={currentQuote} show={showQuote} />
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="mt-8">
            <p className="text-red-100 text-lg font-medium animate-pulse">
              Preparing your learning experience...
            </p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Loading component error:', error);
    return null;
  }
}