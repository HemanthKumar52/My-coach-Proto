function AboutApp() {
  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="about" onPageChange={(page) => {
          if (page === 'about') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[var(--primary-color)] mb-4">About MyCoach</h1>
              <p className="text-xl text-[var(--text-secondary)]">Revolutionizing Education Through AI-Powered Learning</p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <div className="icon-heart text-2xl text-[var(--primary-color)]"></div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  To democratize quality education by providing personalized, AI-driven learning experiences that adapt to each student's unique needs, learning style, and pace. We believe every student deserves access to world-class educational support.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <div className="icon-eye text-2xl text-blue-600"></div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  To become the leading platform for exam preparation and academic excellence, empowering students worldwide to achieve their educational goals and unlock their full potential through innovative technology.
                </p>
              </div>
            </div>

            {/* Why MyCoach */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Why Choose MyCoach?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="icon-check text-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Learning</h3>
                    <p className="text-red-100">AI adapts to your learning style and progress</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="icon-check text-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Expert Content</h3>
                    <p className="text-red-100">Curriculum designed by education professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="icon-check text-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Progress Tracking</h3>
                    <p className="text-red-100">Detailed analytics and performance insights</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="icon-check text-sm"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-red-100">Always available when you need help</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">How MyCoach Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-user-plus text-3xl text-[var(--primary-color)]"></div>
                  </div>
                  <h3 className="font-semibold mb-2">1. Create Profile</h3>
                  <p className="text-[var(--text-secondary)]">Tell us about your academic goals and learning preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-brain text-3xl text-green-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">2. AI Assessment</h3>
                  <p className="text-[var(--text-secondary)]">Our AI analyzes your strengths and creates personalized plans</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-trophy text-3xl text-purple-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">3. Achieve Goals</h3>
                  <p className="text-[var(--text-secondary)]">Follow your personalized path to academic success</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Learning?</h2>
              <p className="text-[var(--text-secondary)] mb-6">Join thousands of students who have improved their academic performance with MyCoach</p>
              <button 
                onClick={() => window.location.href = 'dashboard.html'}
                className="bg-[var(--primary-color)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[var(--accent-color)] transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('AboutApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AboutApp />);