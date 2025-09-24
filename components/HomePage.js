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

        {/* Exam Prep Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
              <div className="icon-book-open text-2xl text-blue-600"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Exam Preparation</h2>
              <p className="text-[var(--text-secondary)]">Comprehensive study materials and practice tests</p>
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
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Exam Prep
            </button>
          </div>
        </div>

        {/* Tutors Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-green-100">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mr-6">
              <div className="icon-users text-2xl text-green-600"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">AI Tutors</h2>
              <p className="text-[var(--text-secondary)]">Personalized learning with AI-powered tutoring</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border border-red-200 text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-calculator text-xl text-white"></div>
              </div>
              <h3 className="font-bold text-red-800 mb-2">Math Tutor</h3>
              <p className="text-red-700 text-sm mb-4">Algebra, Geometry, Statistics</p>
              <button className="w-full bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600 transition-colors text-sm">
                Start Session
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-book text-xl text-white"></div>
              </div>
              <h3 className="font-bold text-blue-800 mb-2">English Tutor</h3>
              <p className="text-blue-700 text-sm mb-4">Reading, Writing, Grammar</p>
              <button className="w-full bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Start Session
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-microscope text-xl text-white"></div>
              </div>
              <h3 className="font-bold text-purple-800 mb-2">Science Tutor</h3>
              <p className="text-purple-700 text-sm mb-4">Physics, Chemistry, Biology</p>
              <button className="w-full bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-purple-600 transition-colors text-sm">
                Start Session
              </button>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200 text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="icon-globe text-xl text-white"></div>
              </div>
              <h3 className="font-bold text-yellow-800 mb-2">Language Tutor</h3>
              <p className="text-yellow-700 text-sm mb-4">Multiple Languages</p>
              <button className="w-full bg-yellow-500 text-white py-2 px-3 rounded-lg hover:bg-yellow-600 transition-colors text-sm">
                Start Session
              </button>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.href = 'tutors.html'}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Meet All Tutors
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    return null;
  }
}