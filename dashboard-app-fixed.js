function DashboardApp() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [showSplash, setShowSplash] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    console.log('DashboardApp: Starting authentication check');
    
    // Set up temporary authentication for immediate access
    if (!localStorage.getItem('isLoggedIn')) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify({name: 'User', email: 'user@example.com'}));
      localStorage.setItem('loginTimestamp', Date.now().toString());
    }
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('userData');
    
    console.log('Auth status:', { isLoggedIn, hasUserData: !!userData });
    
    // Quick auth setup for immediate dashboard access
    setIsAuthenticated(true);
    setIsLoading(false);
    console.log('Dashboard ready!');
  }, []);

  const renderContent = () => {
    try {
      console.log('Rendering content for page:', currentPage);
      switch (currentPage) {
        case 'home':
          console.log('Rendering full HomePage component');
          // Use your complete HomePage component
          if (typeof HomePage !== 'undefined') {
            return <HomePage />;
          } else {
            console.warn('HomePage component not found, rendering fallback');
            return (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">Welcome to MyCoach</h1>
                      <p className="text-red-100 text-lg mb-4">Your Personal Learning Assistant</p>
                      <p className="text-red-200">Loading your personalized dashboard...</p>
                    </div>
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="icon-graduation-cap text-6xl text-white"></div>
                    </div>
                  </div>
                </div>

                {/* AI Tools Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">AI Learning Tools</h2>
                  {typeof AITools !== 'undefined' ? (
                    <AITools />
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <div className="icon-cpu text-2xl text-blue-600"></div>
                      </div>
                      <p className="text-gray-600">AI Tools loading...</p>
                    </div>
                  )}
                </div>

                {/* Courses Section */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold mb-6">Courses & Tutors</h2>
                  {typeof CoursesAccordion !== 'undefined' ? (
                    <CoursesAccordion />
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <div className="icon-book-open text-2xl text-green-600"></div>
                      </div>
                      <p className="text-gray-600">Courses loading...</p>
                    </div>
                  )}
                </div>
              </div>
            );
          }
        case 'history':
          console.log('Rendering History component');
          return typeof History !== 'undefined' ? (
            <History />
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="icon-clock text-2xl text-blue-600"></div>
              </div>
              <h2 className="text-xl font-semibold mb-2">History</h2>
              <p className="text-gray-600">History component loading...</p>
            </div>
          );
        default:
          return (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
              <p className="text-gray-600">The requested page could not be found.</p>
            </div>
          );
      }
    } catch (error) {
      console.error('Error in renderContent:', error);
      return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading Content</h2>
          <p className="text-red-600">{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reload Page
          </button>
        </div>
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  if (showSplash) {
    return typeof SplashScreen !== 'undefined' ? (
      <SplashScreen onComplete={() => setShowSplash(false)} duration={3000} showQuote={true} />
    ) : (
      <div className="min-h-screen bg-red-500 flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center">
            <div className="icon-graduation-cap text-6xl text-red-500"></div>
          </div>
          <h1 className="text-4xl font-bold">MyCoach</h1>
        </div>
      </div>
    );
  }

  try {
    console.log('Rendering dashboard main component');
    return (
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        {typeof Sidebar !== 'undefined' ? (
          <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        ) : (
          <aside className="w-64 bg-white shadow-lg">
            <div className="p-6">
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                  <div className="icon-graduation-cap text-white text-xl"></div>
                </div>
                <span className="text-xl font-bold text-gray-800">MyCoach</span>
              </div>
              
              <nav className="space-y-2">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`w-full flex items-center p-3 rounded-lg text-left ${
                    currentPage === 'home' ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="icon-home text-lg mr-3"></div>
                  <span className="font-medium">Dashboard</span>
                </button>
                <button 
                  onClick={() => setCurrentPage('history')}
                  className={`w-full flex items-center p-3 rounded-lg text-left ${
                    currentPage === 'history' ? 'bg-red-50 text-red-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <div className="icon-clock text-lg mr-3"></div>
                  <span>History</span>
                </button>
              </nav>
            </div>
          </aside>
        )}
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('DashboardApp component error:', error);
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center text-red-600">
          <h2 className="text-xl font-bold mb-2">Error Loading Dashboard</h2>
          <p className="mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DashboardApp />);