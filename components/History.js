// History Component
const { useState } = React;

function History() {
  const [activeTab, setActiveTab] = useState('exam');

  const examData = [
    { name: 'NAPLAN Practice', date: '2024-09-20', score: '85/100' },
    { name: 'Math Assessment', date: '2024-09-18', score: '92/100' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6"> History Dashboard</h2>
        
        <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
          <button 
            onClick={() => setActiveTab('exam')}
            className={activeTab === 'exam' ? 'bg-white shadow-sm px-4 py-2 rounded font-medium' : 'px-4 py-2 rounded font-medium'}
          >
             Exam History
          </button>
          <button 
            onClick={() => setActiveTab('tutor')}
            className={activeTab === 'tutor' ? 'bg-white shadow-sm px-4 py-2 rounded font-medium' : 'px-4 py-2 rounded font-medium'}
          >
             Tutor History
          </button>
        </div>

        {activeTab === 'exam' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Recent Exams</h3>
            {examData.map((exam, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold">{exam.name}</h4>
                <p>Date: {exam.date}</p>
                <p>Score: {exam.score}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tutor' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold">Math AI Tutor</h4>
              <p>Date: 2024-09-22</p>
              <p>Subject: Algebra</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
