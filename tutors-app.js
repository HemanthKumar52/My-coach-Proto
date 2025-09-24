function TutorsApp() {
  const tutors = [
    {
      id: 'mathematics',
      name: 'MathGuru AI',
      subject: 'Mathematics',
      description: 'Advanced mathematics tutor specializing in algebra, geometry, and calculus',
      icon: 'calculator',
      color: 'blue',
      expertise: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
    },
    {
      id: 'english',
      name: 'LinguaBot',
      subject: 'English',
      description: 'Expert in grammar, literature, writing skills, and reading comprehension',
      icon: 'book',
      color: 'green',
      expertise: ['Grammar', 'Literature', 'Writing', 'Reading']
    },
    {
      id: 'science',
      name: 'ScienceWiz AI',
      subject: 'Science',
      description: 'Comprehensive science tutor covering physics, chemistry, and biology',
      icon: 'microscope',
      color: 'purple',
      expertise: ['Physics', 'Chemistry', 'Biology', 'Lab Work']
    },
    {
      id: 'tamil',
      name: 'Tamil Guru',
      subject: 'Tamil',
      description: 'Native Tamil language expert for literature and communication skills',
      icon: 'globe',
      color: 'orange',
      expertise: ['Grammar', 'Literature', 'Poetry', 'Speaking']
    },
    {
      id: 'hindi',
      name: 'Hindi Shikshak',
      subject: 'Hindi',
      description: 'Specialized Hindi tutor focusing on language skills and literature',
      icon: 'message-circle',
      color: 'pink',
      expertise: ['Devanagari', 'Grammar', 'Literature', 'Conversation']
    },
    {
      id: 'general',
      name: 'GenAI Mentor',
      subject: 'General Studies',
      description: 'Comprehensive tutor for general knowledge and objective questions',
      icon: 'brain',
      color: 'indigo',
      expertise: ['GK', 'Current Affairs', 'Logic', 'Reasoning']
    }
  ];

  const handleTutorClick = (tutorId) => {
    alert(`Connecting to ${tutors.find(t => t.id === tutorId)?.name}...`);
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="tutors" onPageChange={(page) => {
          if (page === 'tutors') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">AI Tutors</h1>
              <p className="text-[var(--text-secondary)] text-lg">Connect with specialized AI tutors for personalized learning experiences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {tutors.map(tutor => (
                <div 
                  key={tutor.id}
                  onClick={() => handleTutorClick(tutor.id)}
                  className="tutor-card"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getColorClasses(tutor.color)}`}>
                      <div className={`icon-${tutor.icon} text-2xl`}></div>
                    </div>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Online</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{tutor.name}</h3>
                  <p className="text-sm text-[var(--primary-color)] font-semibold mb-2">{tutor.subject}</p>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{tutor.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tutor.expertise.map(skill => (
                        <span key={skill} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--primary-color)]">Start Learning</span>
                    <div className="icon-arrow-right text-[var(--primary-color)]"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">Tutor Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-clock text-2xl text-blue-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">24/7 Available</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Always ready to help</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-target text-2xl text-green-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Personalized</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Adapts to your pace</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-message-square text-2xl text-purple-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Interactive</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Real-time conversations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-trending-up text-2xl text-orange-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Track Progress</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Monitor your improvement</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('TutorsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TutorsApp />);