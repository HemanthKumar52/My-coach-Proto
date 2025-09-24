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

// LoginForm Component with Animated Graphics
function LoginForm({ loginMethod, onLogin, onBack }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginMethod === 'email') {
      onLogin(email, password);
    } else {
      onLogin(mobile, password);
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

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl py-4 px-6 font-semibold transition-all duration-500 hover:from-red-600 hover:to-red-700 hover:shadow-lg transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!(email || mobile) || !password}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full opacity-30 animate-pulse"></div>
        </div>
        <span className="relative z-10">Sign In</span>
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

  React.useEffect(() => {
    // Show splash screen for 5 seconds with quotes
    const timer = setTimeout(() => {
      setCurrentView('auth');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (method) => {
    setIsLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setUser({ name: 'Student', email: 'student@example.com' });
      setIsLoading(false);
      // Redirect to dashboard after successful login
      window.location.href = 'dashboard.html';
    }, 1000);
  };

  const handleEmailLogin = (email, password) => {
    setIsLoading(true);
    // Simulate email/password authentication
    setTimeout(() => {
      setUser({ name: 'Student', email: email });
      setIsLoading(false);
      window.location.href = 'dashboard.html';
    }, 1500);
  };

  const handleGuestLogin = () => {
    setUser({ name: 'Guest', email: null });
    window.location.href = 'personal-details.html';
  };

  try {
    if (currentView === 'splash') {
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center" data-name="splash" data-file="app.js">
          <div className="text-center text-white">
            <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
              <div className="icon-graduation-cap text-6xl text-[var(--primary-color)]"></div>
            </div>
            <h1 className="text-4xl font-bold mb-2">MyCoach</h1>
            <p className="text-red-100">Your Personal Learning Assistant</p>
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
                      onBack={() => setShowLoginForm(false)}
                    />
                  </div>
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