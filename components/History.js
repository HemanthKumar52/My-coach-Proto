function History() {
  const [activeHistoryTab, setActiveHistoryTab] = React.useState('exam');

  const examHistory = [
    { 
      exam: 'NAPLAN Mathematics', 
      date: '2024-09-20', 
      score: '85%', 
      status: 'completed',
      questions: '45/50',
      time: '2h 15m'
    },
    { 
      exam: 'ICAS Science', 
      date: '2024-09-18', 
      score: '92%', 
      status: 'completed',
      questions: '38/40',
      time: '1h 45m'
    },
    { 
      exam: 'VIC Scholarship Prep', 
      date: '2024-09-15', 
      score: '78%', 
      status: 'completed',
      questions: '28/35',
      time: '2h 30m'
    },
    { 
      exam: 'English Reading Test', 
      date: '2024-09-10', 
      score: 'In Progress', 
      status: 'in-progress',
      questions: '15/25',
      time: '45m'
    }
  ];

  const tutorHistory = [
    {
      tutor: 'Math AI Tutor',
      subject: 'Algebra',
      date: '2024-09-22',
      duration: '45 minutes',
      rating: 5,
      topic: 'Quadratic Equations',
      status: 'completed'
    },
    {
      tutor: 'Science AI Tutor',
      subject: 'Physics',
      date: '2024-09-21',
      duration: '60 minutes',
      rating: 4,
      topic: 'Motion and Forces',
      status: 'completed'
    },
    {
      tutor: 'English AI Tutor',
      subject: 'Writing',
      date: '2024-09-19',
      duration: '30 minutes',
      rating: 5,
      topic: 'Essay Structure',
      status: 'completed'
    },
    {
      tutor: 'Math AI Tutor',
      subject: 'Geometry',
      date: '2024-09-17',
      duration: '50 minutes',
      rating: 4,
      topic: 'Circle Theorems',
      status: 'scheduled'
    }
  ];

  const reportsHistory = [
    {
      title: 'Monthly Progress Report',
      type: 'Progress',
      date: '2024-09-01',
      subjects: ['Math', 'Science', 'English'],
      status: 'available',
      format: 'PDF'
    },
    {
      title: 'NAPLAN Readiness Assessment',
      type: 'Assessment',
      date: '2024-08-25',
      subjects: ['All Subjects'],
      status: 'available',
      format: 'PDF'
    },
    {
      title: 'Weekly Performance Summary',
      type: 'Summary',
      date: '2024-09-15',
      subjects: ['Math', 'English'],
      status: 'available',
      format: 'PDF'
    },
    {
      title: 'Tutor Session Report',
      type: 'Session',
      date: '2024-09-20',
      subjects: ['Science'],
      status: 'processing',
      format: 'PDF'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'available': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating) => {
    return Array.from({length: 5}, (_, i) => (
      <div key={i} className={`icon-star text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}></div>
    ));
  };

  try {
    return (
      <div className="space-y-6" data-name="history" data-file="components/History.js">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">History Dashboard</h2>
          
          {/* History Tab Navigation */}
          <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
            {[
              { id: 'exam', label: 'Exam History', icon: 'book-open' },
              { id: 'tutor', label: 'Tutor History', icon: 'users' },
              { id: 'reports', label: 'Reports History', icon: 'chart-bar' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveHistoryTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-all duration-300 ${
                  activeHistoryTab === tab.id 
                    ? 'bg-white text-[var(--primary-color)] shadow-sm' 
                    : 'text-gray-600 hover:text-[var(--primary-color)]'
                }`}
              >
                <div className={`icon-${tab.icon} text-sm`}></div>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Exam History */}
          {activeHistoryTab === 'exam' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Recent Exams</h3>
              {examHistory.map((exam, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[var(--text-primary)]">{exam.exam}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                      {exam.status === 'completed' ? 'Completed' : exam.status === 'in-progress' ? 'In Progress' : exam.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium">{exam.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Score:</span>
                      <p className="font-medium">{exam.score}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Questions:</span>
                      <p className="font-medium">{exam.questions}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Time:</span>
                      <p className="font-medium">{exam.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tutor History */}
          {activeHistoryTab === 'tutor' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Recent Tutor Sessions</h3>
              {tutorHistory.map((session, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[var(--text-primary)]">{session.tutor}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                      {session.status === 'completed' ? 'Completed' : session.status === 'scheduled' ? 'Scheduled' : session.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm mb-3">
                    <div>
                      <span className="text-gray-500">Subject:</span>
                      <p className="font-medium">{session.subject}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Topic:</span>
                      <p className="font-medium">{session.topic}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Duration:</span>
                      <p className="font-medium">{session.duration}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium">{session.date}</p>
                    </div>
                    {session.status === 'completed' && (
                      <div>
                        <span className="text-gray-500">Rating:</span>
                        <div className="flex items-center space-x-1 mt-1">
                          {renderStars(session.rating)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Reports History */}
          {activeHistoryTab === 'reports' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">Generated Reports</h3>
              {reportsHistory.map((report, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-[var(--text-primary)]">{report.title}</h4>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                        {report.status === 'available' ? 'Available' : report.status === 'processing' ? 'Processing' : report.status}
                      </span>
                      {report.status === 'available' && (
                        <button className="bg-[var(--primary-color)] text-white px-3 py-1 rounded text-xs hover:bg-[var(--accent-color)] transition-colors">
                          Download
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Type:</span>
                      <p className="font-medium">{report.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium">{report.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Subjects:</span>
                      <p className="font-medium">{report.subjects.join(', ')}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Format:</span>
                      <p className="font-medium">{report.format}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('History component error:', error);
    return null;
  }
}