function Sidebar({ currentPage, onPageChange }) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'about', label: 'About Us', icon: 'info' },
    { id: 'careers', label: 'Careers', icon: 'briefcase' },
    { id: 'app-details', label: 'Profile Info', icon: 'smartphone' },
    { id: 'exam-prep', label: 'Exam Prep', icon: 'book-open' },
    { id: 'tutors', label: 'Tutors', icon: 'users' },
    { id: 'profile', label: 'Profile Details', icon: 'user' },
    { id: 'reports', label: 'Reports', icon: 'chart-bar' }
  ];

  try {
    return (
      <aside className="w-64 bg-white shadow-lg h-screen sticky top-0" data-name="sidebar" data-file="components/Sidebar.js">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
              <div className="icon-graduation-cap text-xl text-white"></div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--primary-color)]">MyCoach</h2>
              <p className="text-xs text-[var(--text-secondary)]">Learning Assistant</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="p-4 space-y-2">
          {menuItems.map(item => (
            <div
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`nav-item cursor-pointer flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md ${
                currentPage === item.id 
                  ? 'bg-[var(--primary-color)] text-white shadow-lg' 
                  : 'text-[var(--text-primary)] hover:bg-gray-50 hover:text-[var(--primary-color)]'
              }`}
            >
              <div className={`icon-${item.icon} text-xl transition-transform duration-300 ${
                currentPage === item.id ? 'scale-110' : 'hover:scale-110'
              }`}></div>
              <span className="font-medium transition-all duration-300">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-[var(--primary-color)] to-blue-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
              <div className="icon-user text-sm text-white"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-300">Student</p>
              <p className="text-xs text-[var(--text-secondary)] transition-colors duration-300">Level 1</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md">
              <div className="icon-settings text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors duration-300"></div>
            </button>
          </div>
        </div>
      </aside>
    );
  } catch (error) {
    console.error('Sidebar component error:', error);
    return null;
  }
}
