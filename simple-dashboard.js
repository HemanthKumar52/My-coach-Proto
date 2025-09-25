// Simple Dashboard Test
function SimpleDashboard() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    console.log('SimpleDashboard: Checking authentication');
    
    // Simple auth check
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('userData');
    
    console.log('Auth check:', { isLoggedIn, hasUserData: !!userData });
    
    setTimeout(() => {
      if (!isLoggedIn || !userData) {
        console.log('Not authenticated, redirecting to login');
        window.location.href = 'index.html';
        return;
      }
      
      console.log('Authentication successful');
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 500);
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Simple Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center mr-3">
              <div className="icon-graduation-cap text-white text-xl"></div>
            </div>
            <span className="text-xl font-bold text-gray-800">MyCoach</span>
          </div>
          
          <nav className="space-y-2">
            <div className="flex items-center p-3 bg-red-50 text-red-600 rounded-lg">
              <div className="icon-home text-lg mr-3"></div>
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="icon-clock text-lg mr-3"></div>
              <span>History</span>
            </div>
            <div className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <div className="icon-user text-lg mr-3"></div>
              <span>Profile</span>
            </div>
          </nav>
        </div>
        
        {/* Logout Button */}
        <div className="absolute bottom-4 left-4 right-4">
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.href = 'index.html';
            }}
            className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-lg"
          >
            <div className="icon-log-out text-lg mr-3"></div>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome to MyCoach</h1>
                <p className="text-red-100 text-lg mb-4">Your Personal Learning Assistant</p>
                <p className="text-red-200">Dashboard is working! Authentication successful.</p>
              </div>
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="icon-graduation-cap text-6xl text-white"></div>
              </div>
            </div>
          </div>

          {/* Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-book-open text-xl text-blue-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Courses</h3>
              </div>
              <p className="text-gray-600">Explore available courses and start learning.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-user text-xl text-green-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Tutors</h3>
              </div>
              <p className="text-gray-600">Connect with expert tutors for personalized help.</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-target text-xl text-purple-600"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Exam Prep</h3>
              </div>
              <p className="text-gray-600">Prepare for NAPLAN, ICAS, and other exams.</p>
            </div>
          </div>

          {/* Status Message */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="icon-check-circle text-green-500 text-xl mr-3"></div>
              <div>
                <h4 className="text-green-800 font-medium">System Status</h4>
                <p className="text-green-700">Dashboard loaded successfully! All components are working.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SimpleDashboard />);