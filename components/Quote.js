function Quote({ text, show }) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (show && text) {
      // Typewriter effect
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    } else {
      setDisplayText('');
      setCurrentIndex(0);
    }
  }, [text, show, currentIndex]);

  try {
    return (
      <div 
        className={`transition-all duration-1000 transform ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        data-name="quote" 
        data-file="components/Quote.js"
      >
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-4 -left-4 text-4xl text-white opacity-30">
            <div className="icon-quote"></div>
          </div>
          
          <blockquote className="text-lg italic text-white leading-relaxed font-light text-center relative z-10">
            "{displayText}"
            <span className="animate-pulse">|</span>
          </blockquote>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-2 -right-2 w-8 h-8 border-2 border-white opacity-20 rounded-full"></div>
          <div className="absolute -top-2 -right-4 w-4 h-4 bg-white opacity-30 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Quote component error:', error);
    return null;
  }
}