function DashboardApp() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [showSplash, setShowSplash] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handlePageChange = React.useCallback((pageId) => {
    console.log('Changing page to:', pageId);
    
    // Handle external redirects
    if (pageId === 'about') {
      window.location.href = 'about.html';
      return;
    }
    if (pageId === 'careers') {
      window.location.href = 'careers.html';
      return;
    }
    if (pageId === 'reports') {
      window.location.href = 'reports.html';
      return;
    }
    if (pageId === 'profile') {
      window.location.href = 'profile.html';
      return;
    }
    // Handle ai-tools and history as internal pages
    if (pageId === 'ai-tools' || pageId === 'history') {
      setCurrentPage(pageId);
      return;
    }
    
    // Handle internal page changes
    setCurrentPage(pageId);
  }, []);

  React.useEffect(() => {
    console.log('DashboardApp: Initializing...');
    
    // Set up authentication for immediate access
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify({name: 'User', email: 'user@example.com'}));
    localStorage.setItem('loginTimestamp', Date.now().toString());
    
    setIsAuthenticated(true);
    
    // Listen for custom navigation events from components
    const handleCustomNavigation = (event) => {
      if (event.detail && event.detail.page) {
        console.log('Custom navigation event:', event.detail.page);
        handlePageChange(event.detail.page);
      }
    };
    
    window.addEventListener('navigate', handleCustomNavigation);
    
    // Make handlePageChange available globally for components
    window.handlePageChange = handlePageChange;
    
    console.log('Dashboard ready - authentication bypassed for testing');
    
    return () => {
      window.removeEventListener('navigate', handleCustomNavigation);
      delete window.handlePageChange;
    };
  }, [handlePageChange]);

  const renderContent = () => {
    console.log('Rendering page:', currentPage);
    
    try {
      switch (currentPage) {
        case 'home':
          console.log('Loading HomePage component...');
          if (typeof HomePage !== 'undefined') {
            return <HomePage />;
          } else {
            console.warn('HomePage component not found');
            return (
              <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">Welcome to MyCoach</h1>
                      <p className="text-red-100 text-lg mb-4">Your Personal Learning Assistant</p>
                      <p className="text-red-200">Empowering students to achieve academic excellence</p>
                    </div>
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="icon-graduation-cap text-6xl text-white"></div>
                    </div>
                  </div>
                </div>

                {/* AI Tools Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
                      <div className="icon-cpu text-2xl text-blue-600"></div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">AI Learning Tools</h2>
                      <p className="text-gray-600">Intelligent assistance for your learning journey</p>
                    </div>
                  </div>
                  
                  {typeof AITools !== 'undefined' ? (
                    <AITools />
                  ) : (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading AI Tools...</p>
                    </div>
                  )}
                </div>

                {/* Courses Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
                      <div className="icon-book-open text-2xl text-green-600"></div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Courses & Tutors</h2>
                      <p className="text-gray-600">Comprehensive learning resources and expert guidance</p>
                    </div>
                  </div>
                  
                  {typeof CoursesAccordion !== 'undefined' ? (
                    <CoursesAccordion />
                  ) : (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading Courses...</p>
                    </div>
                  )}
                </div>

                {/* Exam Prep Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mr-6">
                      <div className="icon-award text-2xl text-purple-600"></div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Exam Preparation</h2>
                      <p className="text-gray-600">Comprehensive study materials and practice tests</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                        <div className="icon-calculator text-xl text-white"></div>
                      </div>
                      <h3 className="font-bold text-blue-800 mb-2">NAPLAN Prep</h3>
                      <p className="text-blue-700 text-sm mb-4">Mathematics, Reading, Writing, Language Conventions</p>
                      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                        Start Practice
                      </button>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                      <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                        <div className="icon-trophy text-xl text-white"></div>
                      </div>
                      <h3 className="font-bold text-green-800 mb-2">ICAS Prep</h3>
                      <p className="text-green-700 text-sm mb-4">International Competitions and Assessments</p>
                      <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
                        Start Practice
                      </button>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                        <div className="icon-award text-xl text-white"></div>
                      </div>
                      <h3 className="font-bold text-purple-800 mb-2">VIC Scholarship</h3>
                      <p className="text-purple-700 text-sm mb-4">Victorian Government School Scholarships</p>
                      <button className="w-full bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors">
                        Start Practice
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <button 
                      onClick={() => window.location.href = 'exam-prep.html'}
                      className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      View All Exam Prep
                    </button>
                  </div>
                </div>
              </div>
            );
          }

        case 'ai-tools':
          console.log('Loading AI Tools page...');
          if (typeof AIToolsPage !== 'undefined') {
            return <AIToolsPage />;
          } else {
            return (
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">AI Learning Tools</h1>
                      <p className="text-blue-100 text-lg mb-4">Intelligent Assistance for Your Learning Journey</p>
                    </div>
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="icon-cpu text-6xl text-white"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  {typeof AITools !== 'undefined' ? (
                    <AITools />
                  ) : (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading AI Tools...</p>
                    </div>
                  )}
                </div>
              </div>
            );
          }

        case 'history':
          console.log('Loading History component...');
          if (typeof History !== 'undefined') {
            return <History />;
          } else {
            return (
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="icon-clock text-2xl text-blue-600"></div>
                </div>
                <h2 className="text-xl font-semibold mb-2">Learning History</h2>
                <p className="text-gray-600">Track your progress and achievements</p>
              </div>
            );
          }

        default:
          return (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
              <p className="text-gray-600">The requested page could not be found.</p>
              <button 
                onClick={() => setCurrentPage('home')}
                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
              >
                Go Home
              </button>
            </div>
          );
      }
    } catch (error) {
      console.error('Error in renderContent:', error);
      return (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-red-800 font-semibold mb-2">Component Error</h2>
          <p className="text-red-600 mb-4">{error.message}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reload Page
          </button>
        </div>
      );
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} duration={3000} showQuote={true} />;
  }

  // Debug log for current page
  console.log('Dashboard rendering with currentPage:', currentPage);

  try {
    return (
      <div className="min-h-screen bg-gray-50 flex" style={{
        '--primary-color': '#dc2626',
        '--secondary-color': '#fef2f2',
        '--accent-color': '#7f1d1d',
        '--text-primary': '#1f2937',
        '--text-secondary': '#6b7280',
        '--background': '#ffffff',
        '--surface': '#f9fafb'
      }}>
        {/* Sidebar */}
        {typeof Sidebar !== 'undefined' ? (
          <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
        ) : (
          <div className="w-64 bg-white shadow-lg h-screen">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-red-600">MyCoach</h2>
            </div>
            <nav className="p-4">
              <div className="space-y-2">
                <button 
                  onClick={() => handlePageChange('home')}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3"
                >
                  <div className="icon-home text-xl"></div>
                  <span>Home</span>
                </button>
                <button 
                  onClick={() => handlePageChange('history')}
                  className="w-full text-left p-3 rounded-lg hover:bg-gray-100 flex items-center space-x-3"
                >
                  <div className="icon-clock text-xl"></div>
                  <span>History</span>
                </button>
              </div>
            </nav>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>

        {/* Common Cat Bot */}
        {typeof CommonCatBot !== 'undefined' && <CommonCatBot />}
      </div>
    );
  } catch (error) {
    console.error('DashboardApp render error:', error);
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-red-800 mb-4">Dashboard Error</h1>
          <p className="text-red-600 mb-4">{error.message}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
          >
            Reload Application
          </button>
        </div>
      </div>
    );
  }
}

// Initialize the app
console.log('Initializing DashboardApp...');
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<DashboardApp />);
console.log('DashboardApp rendered successfully!');