function CareersApp() {
  const careerPaths = [
    { name: 'Engineering', icon: 'cog', description: 'Build the future with technology', subjects: ['Mathematics', 'Physics', 'Chemistry'] },
    { name: 'Medicine', icon: 'heart-pulse', description: 'Heal and care for others', subjects: ['Biology', 'Chemistry', 'Physics'] },
    { name: 'Business', icon: 'briefcase', description: 'Lead organizations to success', subjects: ['Mathematics', 'Economics', 'English'] },
    { name: 'Arts & Design', icon: 'palette', description: 'Express creativity and beauty', subjects: ['Art', 'English', 'History'] },
    { name: 'Science Research', icon: 'microscope', description: 'Discover new knowledge', subjects: ['Physics', 'Chemistry', 'Mathematics'] },
    { name: 'Education', icon: 'graduation-cap', description: 'Shape future generations', subjects: ['Psychology', 'English', 'Education'] }
  ];

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="careers" onPageChange={(page) => {
          if (page === 'careers') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Career Guidance</h1>
              <p className="text-[var(--text-secondary)] text-lg">Explore career paths and discover your potential</p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Future Starts Here</h2>
              <p className="text-red-100 mb-6">Discover career paths that align with your interests and academic strengths. Our AI-powered career guidance helps you make informed decisions about your future.</p>
              <button className="bg-white text-[var(--primary-color)] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Take Career Assessment
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {careerPaths.map((career, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <div className={`icon-${career.icon} text-2xl text-[var(--primary-color)]`}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{career.name}</h3>
                  <p className="text-[var(--text-secondary)] mb-4">{career.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.subjects.map(subject => (
                        <span key={subject} className="text-xs bg-[var(--secondary-color)] text-[var(--primary-color)] px-2 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full text-[var(--primary-color)] font-medium hover:bg-[var(--secondary-color)] py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Career Support Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-compass text-2xl text-blue-600"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Career Assessment</h4>
                  <p className="text-[var(--text-secondary)] text-sm">Discover your strengths and interests</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-users text-2xl text-green-600"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Mentorship</h4>
                  <p className="text-[var(--text-secondary)] text-sm">Connect with industry professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-book-open text-2xl text-purple-600"></div>
                  </div>
                  <h4 className="font-semibold mb-2">Skill Development</h4>
                  <p className="text-[var(--text-secondary)] text-sm">Build relevant career skills</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('CareersApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CareersApp />);