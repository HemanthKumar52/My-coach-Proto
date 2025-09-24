function ExamPrepApp() {
  const examTypes = [
    {
      id: 'naplan',
      name: 'NAPLAN',
      description: 'National Assessment Program - Literacy and Numeracy',
      icon: 'file-text',
      subjects: ['Reading', 'Writing', 'Language Conventions', 'Numeracy'],
      grades: 'Years 3, 5, 7, 9'
    },
    {
      id: 'icas',
      name: 'ICAS',
      description: 'International Competitions and Assessments for Schools',
      icon: 'globe',
      subjects: ['Mathematics', 'English', 'Science', 'Digital Technologies'],
      grades: 'Years 2-12'
    },
    {
      id: 'vic-scholarship',
      name: 'VIC Scholarship',
      description: 'Victorian Government School Scholarship Program',
      icon: 'award',
      subjects: ['Mathematics', 'English', 'General Ability'],
      grades: 'Year 9 Entry'
    },
    {
      id: 'vic-selective',
      name: 'VIC Selective',
      description: 'Victorian Selective School Entrance Exam',
      icon: 'star',
      subjects: ['Mathematics', 'Reading Comprehension', 'Numerical Reasoning'],
      grades: 'Year 9 Entry'
    }
  ];

  const handleExamClick = (examId) => {
    // Simulate exam selection and navigation
    alert(`Starting ${examId.toUpperCase()} preparation module...`);
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="exam-prep" onPageChange={(page) => {
          if (page === 'exam-prep') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Exam Preparation</h1>
              <p className="text-[var(--text-secondary)] text-lg">Choose your target examination and start your preparation journey</p>
            </div>

            {/* Exam Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {examTypes.map(exam => (
                <div 
                  key={exam.id}
                  onClick={() => handleExamClick(exam.id)}
                  className="exam-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                      <div className={`icon-${exam.icon} text-2xl text-[var(--primary-color)]`}></div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{exam.grades}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exam.name}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4">{exam.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exam.subjects.map(subject => (
                        <span key={subject} className="text-xs bg-[var(--secondary-color)] text-[var(--primary-color)] px-2 py-1 rounded-full">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[var(--primary-color)]">Start Preparation</span>
                    <div className="icon-arrow-right text-[var(--primary-color)]"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-8">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-book-open text-2xl text-blue-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Comprehensive Content</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Complete syllabus coverage with practice questions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-clock text-2xl text-green-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Timed Practice</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Exam-style timed tests and mock exams</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="icon-chart-bar text-2xl text-purple-600"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Progress Analytics</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Detailed performance tracking and insights</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('ExamPrepApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExamPrepApp />);