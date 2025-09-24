function ReportsApp() {
  const ChartJS = window.Chart;
  
  React.useEffect(() => {
    // Progress Chart
    const progressCtx = document.getElementById('progressChart');
    if (progressCtx) {
      new ChartJS(progressCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [{
            label: 'Learning Progress (%)',
            data: [45, 52, 61, 68, 74, 82],
            borderColor: '#dc2626',
            backgroundColor: 'rgba(220, 38, 38, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, max: 100 }
          }
        }
      });
    }

    // Subject Performance Chart
    const subjectCtx = document.getElementById('subjectChart');
    if (subjectCtx) {
      new ChartJS(subjectCtx, {
        type: 'bar',
        data: {
          labels: ['Math', 'English', 'Science', 'Tamil', 'Hindi'],
          datasets: [{
            label: 'Score (%)',
            data: [88, 76, 92, 68, 74],
            backgroundColor: [
              '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444'
            ]
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } },
          scales: { y: { beginAtZero: true, max: 100 } }
        }
      });
    }
  }, []);

  const reportData = {
    overall: { score: 82, grade: 'A-', improvement: '+8%' },
    subjects: [
      { name: 'Mathematics', score: 88, grade: 'A', trend: 'up' },
      { name: 'English', score: 76, grade: 'B+', trend: 'up' },
      { name: 'Science', score: 92, grade: 'A+', trend: 'up' },
      { name: 'Tamil', score: 68, grade: 'B-', trend: 'down' },
      { name: 'Hindi', score: 74, grade: 'B', trend: 'up' }
    ],
    strengths: ['Problem Solving', 'Logical Reasoning', 'Scientific Analysis'],
    improvements: ['Reading Comprehension', 'Essay Writing', 'Grammar']
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="reports" onPageChange={(page) => {
          if (page === 'reports') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Academic Reports</h1>
              <p className="text-[var(--text-secondary)] text-lg">Track your learning progress and performance analytics</p>
            </div>

            {/* Overall Performance */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Overall Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{reportData.overall.score}%</div>
                  <div className="text-red-100">Average Score</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{reportData.overall.grade}</div>
                  <div className="text-red-100">Current Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-green-300">{reportData.overall.improvement}</div>
                  <div className="text-red-100">This Month</div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Progress Over Time</h3>
                <canvas id="progressChart" height="200"></canvas>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Subject Performance</h3>
                <canvas id="subjectChart" height="200"></canvas>
              </div>
            </div>

            {/* Subject Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-6">Subject Breakdown</h3>
              <div className="space-y-4">
                {reportData.subjects.map((subject, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="icon-book text-xl text-blue-600"></div>
                      </div>
                      <div>
                        <h4 className="font-semibold">{subject.name}</h4>
                        <p className="text-sm text-[var(--text-secondary)]">Grade: {subject.grade}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold">{subject.score}%</div>
                        <div className={`text-sm ${subject.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                          <div className={`icon-trending-${subject.trend} inline mr-1`}></div>
                          {subject.trend === 'up' ? 'Improving' : 'Needs Focus'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths and Improvements */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-600">Strengths</h3>
                <div className="space-y-3">
                  {reportData.strengths.map((strength, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="icon-check text-sm text-green-600"></div>
                      </div>
                      <span className="font-medium">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Areas for Improvement</h3>
                <div className="space-y-3">
                  {reportData.improvements.map((improvement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <div className="icon-alert-circle text-sm text-orange-600"></div>
                      </div>
                      <span className="font-medium">{improvement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('ReportsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReportsApp />);
