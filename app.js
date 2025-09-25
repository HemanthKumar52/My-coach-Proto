class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// OTP Verification Component
function OTPVerification({ loginMethod, contact, onVerify, onBack }) {
  const [otp, setOtp] = React.useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = React.useState(30);
  const [canResend, setCanResend] = React.useState(false);

  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length === 6) {
      onVerify(otpCode);
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    setCanResend(false);
    // Simulate resending OTP
    console.log('Resending OTP to:', contact);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <button 
        type="button"
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
      >
        <div className="icon-arrow-left"></div>
        <span>Back</span>
      </button>

      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="icon-smartphone text-2xl text-green-600"></div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Verify OTP</h3>
        <p className="text-gray-600">
          We've sent a 6-digit code to your {loginMethod === 'email' ? 'email' : 'mobile number'}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {loginMethod === 'email' ? contact : `***-***-${contact.slice(-4)}`}
        </p>
      </div>

      {/* OTP Input */}
      <div className="flex justify-center space-x-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none transition-colors duration-300"
            maxLength={1}
          />
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={otp.join('').length !== 6}
        className="w-full group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl py-4 px-6 font-semibold transition-all duration-500 hover:from-green-600 hover:to-green-700 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
        </div>
        <span className="relative z-10">Verify OTP</span>
      </button>

      {/* Resend OTP */}
      <div className="text-center">
        {canResend ? (
          <button
            type="button"
            onClick={handleResend}
            className="text-red-500 hover:text-red-600 font-medium transition-colors duration-300 hover:underline"
          >
            Resend OTP
          </button>
        ) : (
          <p className="text-gray-500">
            Resend OTP in <span className="font-medium text-red-500">{resendTimer}s</span>
          </p>
        )}
      </div>
    </form>
  );
}

// LoginForm Component with Animated Graphics
function LoginForm({ loginMethod, onLogin, onBack, onSendOTP }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const [useOTP, setUseOTP] = React.useState(false);
  const [currentQuote, setCurrentQuote] = React.useState(null);

  // Load a motivational quote for login
  React.useEffect(() => {
    if (window.getRandomQuote) {
      const quote = window.getRandomQuote();
      setCurrentQuote(quote);
    } else {
      // Fallback quote
      setCurrentQuote({ 
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (useOTP) {
      // Send OTP instead of direct login
      const contact = loginMethod === 'email' ? email : mobile;
      onSendOTP(loginMethod, contact);
    } else {
      // Traditional password login
      if (loginMethod === 'email') {
        onLogin(email, password);
      } else {
        onLogin(mobile, password);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Back Button */}
      <button 
        type="button"
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
      >
        <div className="icon-arrow-left"></div>
        <span>Back</span>
      </button>

      {/* Motivational Quote */}
      {currentQuote && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            <div className="icon-quote w-5 h-5 text-blue-500 mt-1 flex-shrink-0"></div>
            <div>
              <p className="text-sm italic text-gray-700 leading-relaxed">{currentQuote.text}</p>
              {currentQuote.author && (
                <p className="text-xs text-gray-500 mt-2">— {currentQuote.author}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Email/Mobile Input */}
      <div className="relative group">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {loginMethod === 'email' ? 'Email Address' : 'Mobile Number'}
        </label>
        <div className="relative">
          <input
            type={loginMethod === 'email' ? 'email' : 'tel'}
            value={loginMethod === 'email' ? email : mobile}
            onChange={(e) => loginMethod === 'email' ? setEmail(e.target.value) : setMobile(e.target.value)}
            className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-white hover:border-gray-300"
            placeholder={loginMethod === 'email' ? 'Enter your email' : 'Enter your mobile number'}
            required
          />
          <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-red-500 ${(email || mobile) ? 'text-red-500' : ''}`}>
            <div className={`icon-${loginMethod === 'email' ? 'mail' : 'smartphone'} text-lg`}></div>
          </div>
          
          {/* Animated Graphic for Email */}
          {loginMethod === 'email' && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transition-all duration-500 ${email ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                <div className={`absolute inset-0 border-2 border-blue-400 rounded-full animate-ping transition-all duration-500 ${email ? 'scale-110 opacity-60' : 'scale-0 opacity-0'}`}></div>
              </div>
            </div>
          )}

          {/* Animated Graphic for Mobile */}
          {loginMethod === 'mobile' && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded transition-all duration-500 ${mobile ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
                <div className={`absolute inset-0 border-2 border-green-400 rounded animate-pulse transition-all duration-500 ${mobile ? 'scale-110 opacity-60' : 'scale-0 opacity-0'}`}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Login Method Toggle */}
      <div className="flex items-center justify-center space-x-4 py-4">
        <button
          type="button"
          onClick={() => setUseOTP(false)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            !useOTP 
              ? 'bg-red-500 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Password Login
        </button>
        <button
          type="button"
          onClick={() => setUseOTP(true)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
            useOTP 
              ? 'bg-green-500 text-white shadow-md' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          OTP Login
        </button>
      </div>

      {!useOTP && (
        <>
          {/* Password Input */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-all duration-300 bg-white hover:border-gray-300"
                placeholder="Enter your password"
                required
              />
              <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-300 group-hover:text-red-500 ${password ? 'text-red-500' : ''}`}>
                <div className="icon-lock text-lg"></div>
              </div>
              
              {/* Show/Hide Password Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                <div className={`icon-${showPassword ? 'eye-off' : 'eye'} text-lg`}></div>
              </button>

              {/* Animated Security Graphic */}
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-8 h-8 relative">
                  <div className={`absolute inset-0 transition-all duration-500 ${password ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <div className="w-full h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                      <div className="icon-shield text-xs text-purple-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {useOTP && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-2">
            <div className="icon-smartphone text-green-600"></div>
            <span className="font-medium text-green-800">OTP Verification</span>
          </div>
          <p className="text-sm text-green-700">
            Click "Send OTP" to receive a verification code on your {loginMethod === 'email' ? 'email' : 'mobile number'}.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full group relative overflow-hidden text-white rounded-xl py-4 px-6 font-semibold transition-all duration-500 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
          useOTP 
            ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' 
            : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
        }`}
        disabled={!(email || mobile) || (!useOTP && !password)}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
        </div>
        <span className="relative z-10">
          {useOTP ? 'Send OTP' : 'Sign In'}
        </span>
      </button>

      {/* Forgot Password Link */}
      <div className="text-center">
        <button
          type="button"
          className="text-red-500 hover:text-red-600 font-medium transition-colors duration-300 hover:underline"
        >
          Forgot your password?
        </button>
      </div>
    </form>
  );
}

function App() {
  const [currentView, setCurrentView] = React.useState('splash');
  const [isLoading, setIsLoading] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [loginMethod, setLoginMethod] = React.useState('email');
  const [showOTPVerification, setShowOTPVerification] = React.useState(false);
  const [otpContact, setOtpContact] = React.useState('');
  const [currentQuote, setCurrentQuote] = React.useState('');

  React.useEffect(() => {
    // Only run authentication check on login page
    if (window.AuthUtils && window.AuthUtils.getCurrentPage() !== 'login') {
      return;
    }

    // Get a random quote for the splash screen first
    if (typeof getRandomQuote === 'function') {
      setCurrentQuote(getRandomQuote());
    } else {
      setCurrentQuote("Learning is a journey, not a destination.");
    }

    // Show splash screen for 3 seconds with motivational quotes as requested
    const timer = setTimeout(() => {
      // Check if user is already logged in after splash screen
      if (window.AuthUtils && window.AuthUtils.isAuthenticated()) {
        // User is already logged in, redirect to dashboard
        window.AuthUtils.redirectTo('dashboard');
      } else {
        // Show auth screen
        setCurrentView('auth');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (method) => {
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      const userData = { name: 'Student', email: 'student@example.com', loginMethod: method };
      setUser(userData);
      // Store login data and redirect to test dashboard
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('loginTimestamp', Date.now().toString());
      setIsLoading(false);
      // Redirect to main dashboard
      setTimeout(() => window.location.href = 'dashboard.html', 300);
    }, 1000);
  };

  const handleEmailLogin = (email, password) => {
    setIsLoading(true);
    // Simulate email/password authentication
    setTimeout(() => {
      const userData = { name: 'Student', email: email, loginMethod: 'email' };
      setUser(userData);
      // Store login data and redirect to test dashboard
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('loginTimestamp', Date.now().toString());
      setIsLoading(false);
      // Redirect to main dashboard
      setTimeout(() => window.location.href = 'dashboard.html', 300);
    }, 1500);
  };

  const handleSendOTP = (method, contact) => {
    setIsLoading(true);
    // Simulate sending OTP
    setTimeout(() => {
      setOtpContact(contact);
      setShowOTPVerification(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleVerifyOTP = (otpCode) => {
    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      const userData = { name: 'Student', email: otpContact, loginMethod: 'otp' };
      setUser(userData);
      // Use AuthUtils for consistent login handling
      if (window.AuthUtils) {
        window.AuthUtils.completeLogin(userData);
        setIsLoading(false);
        window.AuthUtils.redirectTo('dashboard');
      } else {
        // Fallback if AuthUtils not loaded
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userData', JSON.stringify(userData));
        localStorage.setItem('loginTimestamp', Date.now().toString());
        setIsLoading(false);
        setTimeout(() => window.location.href = 'dashboard.html', 300);
      }
    }, 1000);
  };

  const handleGuestLogin = () => {
    const guestData = { name: 'Guest', email: null, loginMethod: 'guest' };
    setUser(guestData);
    // Store login data and redirect to test dashboard
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(guestData));
    localStorage.setItem('loginTimestamp', Date.now().toString());
    // Redirect to dashboard
    setTimeout(() => window.location.href = 'dashboard.html', 300);
  };

  try {
    if (currentView === 'splash') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center" data-name="splash" data-file="app.js">
          <div className="text-center text-white max-w-2xl px-6">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="icon-graduation-cap text-6xl text-[var(--primary-color)]"></div>
            </div>
            <h1 className="text-4xl font-bold mb-6">MyCoach</h1>
            
            {/* Quote Display in White Text */}
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

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50" data-name="auth" data-file="app.js">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            {/* Welcome Header */}
            <div className="text-center mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="icon-graduation-cap text-4xl text-white"></div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent mb-2">Welcome Back!</h1>
              <p className="text-lg text-gray-600">Sign in to continue your learning journey</p>
            </div>

            {/* Authentication Card */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 backdrop-blur-sm">
              
              {!showLoginForm ? (
                <>
                  {/* Social Login Buttons */}
                  <div className="space-y-4 mb-6">
                    {/* Google Button with Water Droplet Effect */}
                    <button 
                      onClick={() => handleLogin('google')}
                      className="w-full group relative overflow-hidden flex items-center justify-center space-x-3 bg-white border-2 border-gray-200 rounded-xl py-4 px-6 transition-all duration-500 hover:border-blue-400 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-pulse"></div>
                      </div>
                      <div className="icon-chrome text-2xl text-blue-500 z-10"></div>
                      <span className="font-semibold text-gray-700 z-10">Sign in with Google</span>
                    </button>

                    {/* Apple Button with Water Droplet Effect */}
                    <button 
                      onClick={() => handleLogin('apple')}
                      className="w-full group relative overflow-hidden flex items-center justify-center space-x-3 bg-black border-2 border-gray-800 rounded-xl py-4 px-6 transition-all duration-500 hover:border-gray-600 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
                      </div>
                      <div className="icon-apple text-2xl text-white z-10"></div>
                      <span className="font-semibold text-white z-10">Sign in with Apple</span>
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center my-8">
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                    <span className="px-6 text-gray-500 font-medium bg-white">OR</span>
                    <div className="flex-1 border-t-2 border-gray-200"></div>
                  </div>

                  {/* Email/Mobile Login Options */}
                  <div className="space-y-4">
                    <button 
                      onClick={() => setShowLoginForm(true)}
                      className="w-full group relative overflow-hidden flex items-center justify-center space-x-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl py-4 px-6 transition-all duration-500 hover:from-red-600 hover:to-red-700 hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
                      </div>
                      <div className="icon-mail text-xl z-10"></div>
                      <span className="font-semibold z-10">Continue with Email</span>
                    </button>

                    <button 
                      onClick={() => { setLoginMethod('mobile'); setShowLoginForm(true); }}
                      className="w-full group relative overflow-hidden flex items-center justify-center space-x-3 bg-white border-2 border-red-500 text-red-500 rounded-xl py-4 px-6 transition-all duration-500 hover:bg-red-500 hover:text-white hover:shadow-lg transform hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
                      </div>
                      <div className="icon-smartphone text-xl z-10"></div>
                      <span className="font-semibold z-10">Login with Mobile</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {!showOTPVerification ? (
                    <>
                      {/* Login Form */}
                      <div className="space-y-6">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-800">
                            {loginMethod === 'email' ? 'Sign In with Email' : 'Sign In with Mobile'}
                          </h3>
                        </div>

                        <LoginForm 
                          loginMethod={loginMethod}
                          onLogin={handleEmailLogin}
                          onSendOTP={handleSendOTP}
                          onBack={() => setShowLoginForm(false)}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* OTP Verification */}
                      <div className="space-y-6">
                        <OTPVerification
                          loginMethod={loginMethod}
                          contact={otpContact}
                          onVerify={handleVerifyOTP}
                          onBack={() => {
                            setShowOTPVerification(false);
                            setOtpContact('');
                          }}
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Footer Links */}
              {!showLoginForm && (
                <div className="mt-8 text-center space-y-4">
                  <div className="text-center">
                    <button className="text-red-500 hover:text-red-600 font-medium transition-colors duration-300 hover:underline">
                      Forgot your credentials?
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <span>Not a registered user?</span>
                    <button className="text-red-500 hover:text-red-600 font-semibold transition-colors duration-300 hover:underline">
                      Register here
                    </button>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <button 
                      onClick={handleGuestLogin}
                      className="text-gray-500 hover:text-gray-700 font-medium transition-colors duration-300"
                    >
                      Continue as Guest
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);