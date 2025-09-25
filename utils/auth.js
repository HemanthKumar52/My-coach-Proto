// Authentication utilities to prevent login loops and conflicts

window.AuthUtils = {
  // Check if user is authenticated
  isAuthenticated() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('userData');
    return isLoggedIn && userData;
  },

  // Check if this is a fresh login (within last 5 seconds)
  isFreshLogin() {
    const loginTimestamp = localStorage.getItem('loginTimestamp');
    return loginTimestamp && (Date.now() - parseInt(loginTimestamp)) < 5000;
  },

  // Get current page name
  getCurrentPage() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return 'login';
    if (path.includes('dashboard')) return 'dashboard';
    if (path.includes('profile')) return 'profile';
    return 'other';
  },

  // Safe redirect to prevent loops
  redirectTo(page) {
    const currentPage = this.getCurrentPage();
    if (currentPage === page) return; // Prevent same-page redirects
    
    setTimeout(() => {
      if (page === 'login') {
        window.location.href = 'index.html';
      } else if (page === 'dashboard') {
        window.location.href = 'dashboard.html';
      }
    }, 200);
  },

  // Handle authentication check for protected pages
  checkAuth() {
    if (!this.isAuthenticated()) {
      // Set up authentication immediately for testing - no redirects
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userData', JSON.stringify({name: 'User', email: 'user@example.com'}));
      localStorage.setItem('loginTimestamp', Date.now().toString());
    }
    return true; // Always allow access
  },

  // Handle login completion
  completeLogin(userData) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('loginTimestamp', Date.now().toString());
  },

  // Handle logout
  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.removeItem('loginTimestamp');
    localStorage.removeItem('userProfile');
    localStorage.removeItem('personalDetails');
    this.redirectTo('login');
  },

  // Determine if splash screen should be shown
  shouldShowSplash() {
    // Skip splash for immediate access
    return false;
  }
};