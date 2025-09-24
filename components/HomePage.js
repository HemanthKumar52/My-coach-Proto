function HomePage() {
  try {
    return (
      <div className="space-y-8" data-name="homepage" data-file="components/HomePage.js">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to MyCoach</h1>
              <p className="text-red-100 text-lg mb-4">Your Personal Learning Assistant</p>
              <p className="text-red-200">Empowering students to achieve academic excellence through personalized learning experiences</p>
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="icon-graduation-cap text-6xl text-white"></div>
            </div>
          </div>
        </div>

        {/* What is MyCoach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <div className="icon-target text-xl text-[var(--primary-color)]"></div>
              </div>
              <h2 className="text-xl font-semibold">Our Purpose</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              MyCoach is designed to provide personalized learning experiences for students preparing for various examinations. 
              Our AI-powered tutors adapt to your learning style and pace, ensuring optimal academic performance.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <div className="icon-lightbulb text-xl text-blue-600"></div>
              </div>
              <h2 className="text-xl font-semibold">Smart Learning</h2>
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Experience adaptive learning technology that identifies your strengths and weaknesses, 
              providing customized study plans and practice materials for maximum efficiency.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-users text-2xl text-green-600"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">10K+</h3>
            <p className="text-[var(--text-secondary)]">Students</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-book-open text-2xl text-purple-600"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">500+</h3>
            <p className="text-[var(--text-secondary)]">Lessons</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-trophy text-2xl text-yellow-600"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">95%</h3>
            <p className="text-[var(--text-secondary)]">Success Rate</p>
          </div>

          <div className="card text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="icon-clock text-2xl text-[var(--primary-color)]"></div>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">24/7</h3>
            <p className="text-[var(--text-secondary)]">Support</p>
          </div>
        </div>

        {/* Getting Started */}
        <div className="card bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Ready to Start Learning?</h2>
            <p className="text-[var(--text-secondary)] mb-6">
              Explore our exam preparation modules, connect with AI tutors, and track your progress
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => window.location.href = 'exam-prep.html'}
                className="bg-[var(--primary-color)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--accent-color)] transition-colors"
              >
                Start Exam Prep
              </button>
              <button 
                onClick={() => window.location.href = 'tutors.html'}
                className="border-2 border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--primary-color)] hover:text-white transition-colors"
              >
                Meet AI Tutors
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    return null;
  }
}