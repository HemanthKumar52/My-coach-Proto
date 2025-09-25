function HomePage() {
  const [examCurrentIndex, setExamCurrentIndex] = React.useState(0);
  const [tutorCurrentIndex, setTutorCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const examTypes = [
    {
      id: 'naplan',
      name: 'NAPLAN',
      description: 'National Assessment Program - Literacy and Numeracy',
      color: 'blue',
      grades: 'Years 3, 5, 7, 9',
      subjects: ['Reading', 'Writing', 'Language Conventions', 'Numeracy']
    },
    {
      id: 'icas',
      name: 'ICAS',
      description: 'International Competitions and Assessments for Schools',
      color: 'green',
      grades: 'Years 2-12',
      subjects: ['Mathematics', 'English', 'Science', 'Digital Technologies']
    },
    {
      id: 'vic-scholarship',
      name: 'VIC Scholarship',
      description: 'Victorian Government School Scholarship Program',
      color: 'purple',
      grades: 'Year 9 Entry',
      subjects: ['Mathematics', 'English', 'General Ability']
    },
    {
      id: 'vic-selective',
      name: 'VIC Selective',
      description: 'Victorian Selective School Entrance Exam',
      color: 'orange',
      grades: 'Year 9 Entry',
      subjects: ['Mathematics', 'Reading Comprehension', 'Numerical Reasoning']
    },
    {
      id: 'hsc-prep',
      name: 'HSC Prep',
      description: 'Higher School Certificate Preparation',
      color: 'red',
      grades: 'Year 12',
      subjects: ['Advanced Mathematics', 'English Advanced', 'Sciences']
    }
  ];

  const tutors = [
    {
      id: 'mathematics',
      name: 'MathGuru AI',
      subject: 'Mathematics',
      color: 'blue',
      expertise: 'Algebra, Geometry, Calculus',
      specialties: ['Problem Solving', 'Step-by-step Solutions', 'Practice Tests']
    },
    {
      id: 'english',
      name: 'LinguaBot',
      subject: 'English',
      color: 'green',
      expertise: 'Grammar, Literature, Writing',
      specialties: ['Essay Writing', 'Reading Comprehension', 'Creative Writing']
    },
    {
      id: 'science',
      name: 'ScienceWiz AI',
      subject: 'Science',
      color: 'purple',
      expertise: 'Physics, Chemistry, Biology',
      specialties: ['Lab Experiments', 'Theory Explanations', 'Visual Learning']
    },
    {
      id: 'tamil',
      name: 'Tamil Guru',
      subject: 'Tamil',
      color: 'orange',
      expertise: 'Grammar, Literature, Poetry',
      specialties: ['Classical Literature', 'Modern Tamil', 'Cultural Context']
    },
    {
      id: 'hindi',
      name: 'Hindi Shikshak',
      subject: 'Hindi',
      color: 'pink',
      expertise: 'Grammar, Literature, Conversation',
      specialties: ['Devanagari Script', 'Poetry', 'Conversation Practice']
    }
  ];

  const nextExam = () => {
    setExamCurrentIndex((prevIndex) => (prevIndex + 1) % examTypes.length);
  };

  const prevExam = () => {
    setExamCurrentIndex((prevIndex) => (prevIndex - 1 + examTypes.length) % examTypes.length);
  };

  const nextTutor = () => {
    setTutorCurrentIndex((prev) => (prev + 1) % tutors.length);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!isAutoPlaying) return;
    
    const examInterval = setInterval(() => {
      setExamCurrentIndex((prev) => (prev + 1) % examTypes.length);
    }, 3000); // Move every 3 seconds
    
    const tutorInterval = setInterval(() => {
      setTutorCurrentIndex((prev) => (prev + 1) % tutors.length);
    }, 3500); // Slightly different timing for variety
    
    return () => {
      clearInterval(examInterval);
      clearInterval(tutorInterval);
    };
  }, [isAutoPlaying, examTypes.length, tutors.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const prevTutor = () => {
    setTutorCurrentIndex((prevIndex) => (prevIndex - 1 + tutors.length) % tutors.length);
  };

  const getExamCardPosition = (index) => {
    const diff = index - examCurrentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(examTypes.length - 1)) return 'right';
    if (diff === -1 || diff === examTypes.length - 1) return 'left';
    return 'hidden';
  };

  const getTutorCardPosition = (index) => {
    const diff = index - tutorCurrentIndex;
    if (diff === 0) return 'center';
    if (diff === 1 || diff === -(tutors.length - 1)) return 'right';
    if (diff === -1 || diff === tutors.length - 1) return 'left';
    return 'hidden';
  };

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

        {/* Exam Preparation Carousel */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">📚 Exam Preparation</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevExam}
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={nextExam}
                className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-center items-center min-h-[300px]">
              {examTypes.map((exam, index) => {
                const position = getExamCardPosition(index);
                return (
                  <div
                    key={exam.id}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      position === 'center' 
                        ? 'transform-none scale-110 z-30 opacity-100' 
                        : position === 'left'
                        ? 'transform -translate-x-80 scale-75 z-10 opacity-60'
                        : position === 'right'
                        ? 'transform translate-x-80 scale-75 z-10 opacity-60'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => {
                      if (position === 'center') {
                        alert(`Starting ${exam.name} preparation...`);
                      } else if (position === 'left') {
                        prevExam();
                      } else if (position === 'right') {
                        nextExam();
                      }
                    }}
                  >
                    <div className={`w-80 bg-gradient-to-br from-${exam.color}-50 to-${exam.color}-100 p-6 rounded-xl border-2 border-${exam.color}-200 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className={`w-16 h-16 bg-${exam.color}-500 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <span className="text-white text-2xl font-bold">{exam.name.charAt(0)}</span>
                      </div>
                      <h3 className={`font-bold text-${exam.color}-800 mb-2 text-lg text-center`}>{exam.name}</h3>
                      <p className={`text-${exam.color}-700 text-sm mb-3 text-center`}>{exam.description}</p>
                      <div className={`text-${exam.color}-600 text-sm font-medium text-center mb-3`}>{exam.grades}</div>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {exam.subjects.map(subject => (
                          <span key={subject} className={`px-2 py-1 bg-${exam.color}-200 text-${exam.color}-800 rounded-full text-xs`}>
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* AI Tutors Carousel */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">🤖 AI Tutors</h2>
            <div className="flex space-x-2">
              <button 
                onClick={prevTutor}
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                ←
              </button>
              <button 
                onClick={nextTutor}
                className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                →
              </button>
            </div>
          </div>
          
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-center items-center min-h-[300px]">
              {tutors.map((tutor, index) => {
                const position = getTutorCardPosition(index);
                return (
                  <div
                    key={tutor.id}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      position === 'center' 
                        ? 'transform-none scale-110 z-30 opacity-100' 
                        : position === 'left'
                        ? 'transform -translate-x-80 scale-75 z-10 opacity-60'
                        : position === 'right'
                        ? 'transform translate-x-80 scale-75 z-10 opacity-60'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => {
                      if (position === 'center') {
                        alert(`Connecting to ${tutor.name}...`);
                      } else if (position === 'left') {
                        prevTutor();
                      } else if (position === 'right') {
                        nextTutor();
                      }
                    }}
                  >
                    <div className={`w-80 bg-gradient-to-br from-${tutor.color}-50 to-${tutor.color}-100 p-6 rounded-xl border-2 border-${tutor.color}-200 shadow-lg hover:shadow-xl transition-shadow`}>
                      <div className={`w-16 h-16 bg-${tutor.color}-500 rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                        <span className="text-white text-2xl font-bold">{tutor.subject.charAt(0)}</span>
                      </div>
                      <h3 className={`font-bold text-${tutor.color}-800 mb-1 text-lg text-center`}>{tutor.name}</h3>
                      <p className={`text-${tutor.color}-700 text-sm mb-2 text-center font-medium`}>{tutor.subject}</p>
                      <p className={`text-${tutor.color}-600 text-sm mb-3 text-center`}>{tutor.expertise}</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {tutor.specialties.map(specialty => (
                          <span key={specialty} className={`px-2 py-1 bg-${tutor.color}-200 text-${tutor.color}-800 rounded-full text-xs`}>
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-cpu text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-blue-800 mb-2">AI Learning Tools</h3>
            <p className="text-blue-700 text-sm mb-4">Access intelligent tutoring and creative assistance</p>
            <button 
              onClick={() => {
                if (window.parent && window.parent.handlePageChange) {
                  window.parent.handlePageChange('ai-tools');
                } else if (window.handlePageChange) {
                  window.handlePageChange('ai-tools');
                } else {
                  console.log('Navigation: ai-tools');
                  // Fallback to setting current page directly
                  const event = new CustomEvent('navigate', { detail: { page: 'ai-tools' } });
                  window.dispatchEvent(event);
                }
              }}
              className="text-blue-600 text-sm font-medium hover:text-blue-800"
            >
              Explore AI Tools →
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-clock text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-green-800 mb-2">Learning History</h3>
            <p className="text-green-700 text-sm mb-4">Track your progress and review past sessions</p>
            <button 
              onClick={() => {
                if (window.parent && window.parent.handlePageChange) {
                  window.parent.handlePageChange('history');
                } else if (window.handlePageChange) {
                  window.handlePageChange('history');
                } else {
                  console.log('Navigation: history');
                  // Fallback to setting current page directly
                  const event = new CustomEvent('navigate', { detail: { page: 'history' } });
                  window.dispatchEvent(event);
                }
              }}
              className="text-green-600 text-sm font-medium hover:text-green-800"
            >
              View History →
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-chart-bar text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-purple-800 mb-2">Progress Reports</h3>
            <p className="text-purple-700 text-sm mb-4">View detailed analytics and achievements</p>
            <button 
              onClick={() => window.location.href = 'reports.html'}
              className="text-purple-600 text-sm font-medium hover:text-purple-800"
            >
              View Reports →
            </button>
          </div>
        </div>

        {/* Courses & Tutors Accordion */}
        <CoursesAccordion />


      </div>
    );
  } catch (error) {
    console.error('HomePage component error:', error);
    return null;
  }
}