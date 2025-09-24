function ProfileApp() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  
  const badges = [
    { name: 'First Login', icon: 'star', color: 'yellow', earned: true },
    { name: 'Math Master', icon: 'calculator', color: 'blue', earned: true },
    { name: 'Reading Champion', icon: 'book', color: 'green', earned: false },
    { name: 'Science Explorer', icon: 'microscope', color: 'purple', earned: true },
    { name: 'Language Expert', icon: 'globe', color: 'orange', earned: false },
    { name: 'Perfect Score', icon: 'trophy', color: 'red', earned: false }
  ];

  const activities = [
    { action: 'Completed Math Quiz', time: '2 hours ago', points: '+50 XP' },
    { action: 'Started NAPLAN Prep', time: '1 day ago', points: '+25 XP' },
    { action: 'Badge Earned: Math Master', time: '2 days ago', points: '+100 XP' },
    { action: 'Profile Completed', time: '3 days ago', points: '+75 XP' }
  ];

  const getBadgeColor = (color, earned) => {
    if (!earned) return 'bg-gray-200 text-gray-400';
    
    const colorMap = {
      yellow: 'bg-yellow-100 text-yellow-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="profile" onPageChange={(page) => {
          if (page === 'profile') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Profile Details</h1>
              <p className="text-[var(--text-secondary)] text-lg">Track your progress and achievements</p>
            </div>

            {/* Profile Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl p-8 mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="icon-user text-4xl"></div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">John Student</h2>
                  <p className="text-red-100 mb-4">Grade 9 • Mathematics Enthusiast</p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">1,250</div>
                      <div className="text-red-200 text-sm">Total XP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">Level 5</div>
                      <div className="text-red-200 text-sm">Current Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-red-200 text-sm">Badges</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                    <div className="icon-crown text-3xl text-yellow-800"></div>
                  </div>
                  <div className="text-sm">Level 5</div>
                </div>
              </div>
              
              {/* XP Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Level 5</span>
                  <span>250 / 1500 XP to Level 6</span>
                </div>
                <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '17%' }}></div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 shadow-lg">
              {['dashboard', 'badges', 'activity', 'settings'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-md font-medium capitalize transition-colors ${
                    activeTab === tab 
                      ? 'bg-[var(--primary-color)] text-white' 
                      : 'text-[var(--text-secondary)] hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === 'dashboard' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                    <h3 className="text-xl font-bold mb-4">Learning Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">15</div>
                        <div className="text-sm text-blue-800">Lessons Completed</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">8h 30m</div>
                        <div className="text-sm text-green-800">Study Time</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {activities.map((activity, index) => (
                        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                          <div>
                            <p className="font-medium">{activity.action}</p>
                            <p className="text-sm text-[var(--text-secondary)]">{activity.time}</p>
                          </div>
                          <span className="text-green-600 font-semibold">{activity.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Latest Badges</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.filter(b => b.earned).slice(0, 4).map(badge => (
                      <div key={badge.name} className="text-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${getBadgeColor(badge.color, badge.earned)}`}>
                          <div className={`icon-${badge.icon} text-lg`}></div>
                        </div>
                        <div className="text-xs font-medium">{badge.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'badges' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Achievement Badges</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  {badges.map(badge => (
                    <div key={badge.name} className="text-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${getBadgeColor(badge.color, badge.earned)}`}>
                        <div className={`icon-${badge.icon} text-2xl`}></div>
                      </div>
                      <div className="font-semibold text-sm mb-1">{badge.name}</div>
                      <div className={`text-xs ${badge.earned ? 'text-green-600' : 'text-gray-400'}`}>
                        {badge.earned ? 'Earned' : 'Locked'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6">Account Settings</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="font-semibold">Notifications</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Receive learning reminders</p>
                    </div>
                    <button className="w-12 h-6 bg-[var(--primary-color)] rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1"></div>
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-4 border-b">
                    <div>
                      <h4 className="font-semibold">Dark Mode</h4>
                      <p className="text-sm text-[var(--text-secondary)]">Switch to dark theme</p>
                    </div>
                    <button className="w-12 h-6 bg-gray-300 rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('ProfileApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileApp />);