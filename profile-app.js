// Toast Notification Component
function Toast({ message, isVisible, type = 'success' }) {
  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center space-x-2">
        <div className={`icon-${type === 'success' ? 'check' : 'x'} text-sm`}></div>
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

function ProfileApp() {
  const [activeTab, setActiveTab] = React.useState('dashboard');
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  
  // Profile customization states
  const [showProfileCustomizer, setShowProfileCustomizer] = React.useState(false);
  const [selectedAvatar, setSelectedAvatar] = React.useState('avatar1');
  const [selectedBackground, setSelectedBackground] = React.useState('default');
  const [userProfile, setUserProfile] = React.useState({
    name: 'John Student',
    email: 'john.student@example.com',
    grade: 'Grade 9',
    bio: 'Mathematics Enthusiast',
    level: 5,
    xp: 1250,
    totalXp: 1500,
    joinDate: '2024-01-15'
  });
  
  // XP animation states
  const [showXpGain, setShowXpGain] = React.useState(false);
  const [xpGainAmount, setXpGainAmount] = React.useState(0);
  const [showCustomization, setShowCustomization] = React.useState(false);
  const [showAvatarSelector, setShowAvatarSelector] = React.useState(false);
  
  const badges = [
    // Level 1 Badges
    { name: 'First Steps', icon: 'star', color: 'yellow', earned: true, level: 1, rarity: 'common' },
    { name: 'Early Bird', icon: 'sunrise', color: 'orange', earned: true, level: 1, rarity: 'common' },
    
    // Level 2-3 Badges
    { name: 'Math Rookie', icon: 'calculator', color: 'blue', earned: true, level: 2, rarity: 'uncommon' },
    { name: 'Quick Learner', icon: 'zap', color: 'yellow', earned: true, level: 2, rarity: 'uncommon' },
    { name: 'Persistent', icon: 'target', color: 'green', earned: false, level: 3, rarity: 'uncommon' },
    
    // Level 4-5 Badges
    { name: 'Math Master', icon: 'award', color: 'blue', earned: true, level: 4, rarity: 'rare' },
    { name: 'Science Explorer', icon: 'microscope', color: 'purple', earned: true, level: 4, rarity: 'rare' },
    { name: 'Reading Champion', icon: 'book-open', color: 'green', earned: false, level: 5, rarity: 'rare' },
    { name: 'Language Expert', icon: 'globe', color: 'orange', earned: false, level: 5, rarity: 'rare' },
    
    // Level 6+ Badges (Epic & Legendary)
    { name: 'Perfect Score', icon: 'trophy', color: 'red', earned: false, level: 6, rarity: 'epic' },
    { name: 'Study Streak', icon: 'flame', color: 'red', earned: false, level: 6, rarity: 'epic' },
    { name: 'Knowledge Seeker', icon: 'compass', color: 'purple', earned: false, level: 7, rarity: 'epic' },
    { name: 'Academic Elite', icon: 'crown', color: 'gold', earned: false, level: 8, rarity: 'legendary' },
    { name: 'Genius', icon: 'brain', color: 'rainbow', earned: false, level: 10, rarity: 'legendary' }
  ];

  const avatars = [
    { id: 'avatar1', name: 'Student Sam', emoji: '🧑‍🎓', unlocked: true },
    { id: 'avatar2', name: 'Math Wizard', emoji: '🧙‍♂️', unlocked: userProfile.level >= 3 },
    { id: 'avatar3', name: 'Science Hero', emoji: '🦸‍♀️', unlocked: userProfile.level >= 5 },
    { id: 'avatar4', name: 'Book Worm', emoji: '📚', unlocked: userProfile.level >= 4 },
    { id: 'avatar5', name: 'Tech Genius', emoji: '🤖', unlocked: userProfile.level >= 6 },
    { id: 'avatar6', name: 'Star Student', emoji: '⭐', unlocked: userProfile.level >= 7 },
    { id: 'avatar7', name: 'Champion', emoji: '🏆', unlocked: userProfile.level >= 8 },
    { id: 'avatar8', name: 'Master Mind', emoji: '🧠', unlocked: userProfile.level >= 10 }
  ];

  const backgrounds = [
    { id: 'default', name: 'Classic Red', gradient: 'from-red-500 to-red-600', unlocked: true },
    { id: 'ocean', name: 'Ocean Blue', gradient: 'from-blue-500 to-cyan-500', unlocked: userProfile.level >= 2 },
    { id: 'forest', name: 'Forest Green', gradient: 'from-green-500 to-emerald-500', unlocked: userProfile.level >= 3 },
    { id: 'sunset', name: 'Sunset Orange', gradient: 'from-orange-500 to-pink-500', unlocked: userProfile.level >= 4 },
    { id: 'galaxy', name: 'Galaxy Purple', gradient: 'from-purple-500 to-indigo-600', unlocked: userProfile.level >= 5 },
    { id: 'gold', name: 'Golden Hour', gradient: 'from-yellow-400 to-orange-500', unlocked: userProfile.level >= 6 },
    { id: 'cosmic', name: 'Cosmic Dark', gradient: 'from-gray-800 to-purple-900', unlocked: userProfile.level >= 7 },
    { id: 'rainbow', name: 'Rainbow Elite', gradient: 'from-pink-500 via-purple-500 to-indigo-500', unlocked: userProfile.level >= 10 }
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

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    const message = !notificationsEnabled ? 'Notifications enabled! You will receive learning reminders.' : 'Notifications disabled. You won\'t receive reminders.';
    showToastNotification(message);
    
    // Store preference in localStorage
    localStorage.setItem('notificationsEnabled', (!notificationsEnabled).toString());
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkModeEnabled;
    setDarkModeEnabled(newDarkMode);
    
    // Apply dark mode to the document
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1f2937';
      document.body.style.color = '#f9fafb';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1f2937';
    }
    
    const message = newDarkMode ? 'Dark mode enabled! Easier on your eyes.' : 'Light mode enabled. Welcome back to the bright side!';
    showToastNotification(message);
    
    // Store preference in localStorage
    localStorage.setItem('darkModeEnabled', newDarkMode.toString());
  };

  // Load preferences on component mount
  React.useEffect(() => {
    const savedNotifications = localStorage.getItem('notificationsEnabled');
    const savedDarkMode = localStorage.getItem('darkModeEnabled');
    const savedProfile = localStorage.getItem('userProfile');
    const savedAvatar = localStorage.getItem('selectedAvatar');
    const savedBackground = localStorage.getItem('selectedBackground');
    
    if (savedNotifications !== null) {
      setNotificationsEnabled(savedNotifications === 'true');
    }
    
    if (savedDarkMode !== null) {
      const isDarkMode = savedDarkMode === 'true';
      setDarkModeEnabled(isDarkMode);
      
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.body.style.backgroundColor = '#1f2937';
        document.body.style.color = '#f9fafb';
      }
    }
    
    if (savedProfile) {
      try {
        setUserProfile(JSON.parse(savedProfile));
      } catch (e) {
        console.log('Could not parse saved profile');
      }
    }
    
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar);
    }
    
    if (savedBackground) {
      setSelectedBackground(savedBackground);
    }
  }, []);

  // Interactive Functions
  const gainXP = (amount) => {
    setXpGainAmount(amount);
    setShowXpGain(true);
    
    const newXP = userProfile.xp + amount;
    const newLevel = Math.floor(newXP / 1000) + 1;
    
    if (newLevel > userProfile.level) {
      setTimeout(() => {
        showToastNotification(`🎉 Level Up! Welcome to Level ${newLevel}!`);
      }, 1000);
    }
    
    setUserProfile({
      ...userProfile,
      xp: newXP,
      level: newLevel
    });
    
    setTimeout(() => {
      setShowXpGain(false);
    }, 2000);
  };

  const selectAvatar = (avatarId) => {
    const avatar = avatars.find(av => av.id === avatarId);
    if (avatar && avatar.unlocked) {
      setSelectedAvatar(avatarId);
      showToastNotification(`Avatar changed to ${avatar.name}!`);
    }
  };

  const selectBackground = (backgroundId) => {
    const background = backgrounds.find(bg => bg.id === backgroundId);
    if (background && background.unlocked) {
      setSelectedBackground(backgroundId);
      showToastNotification(`Background changed to ${background.name}!`);
    }
  };

  // Save preferences to localStorage
  React.useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    localStorage.setItem('selectedAvatar', selectedAvatar);
    localStorage.setItem('selectedBackground', selectedBackground);
  }, [userProfile, selectedAvatar, selectedBackground]);

  try {
    return (
      <>
        <Toast message={toastMessage} isVisible={showToast} type="success" />
        <div className={`min-h-screen flex transition-colors duration-300 ${darkModeEnabled ? 'bg-gray-900' : 'bg-[var(--surface)]'}`}>
          <Sidebar currentPage="profile" onPageChange={(page) => {
            if (page === 'profile') return;
            if (page === 'home') window.location.href = 'dashboard.html';
            else window.location.href = `${page}.html`;
          }} />
        
        <main className={`flex-1 p-6 transition-colors duration-300 ${darkModeEnabled ? 'bg-gray-900' : ''}`}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${darkModeEnabled ? 'text-red-400' : 'text-[var(--primary-color)]'}`}>Profile Details</h1>
              <p className={`text-lg transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>Track your progress and achievements</p>
            </div>

            {/* Profile Header */}
            <div className={`bg-gradient-to-r ${backgrounds.find(bg => bg.id === selectedBackground)?.gradient || 'from-red-500 to-red-600'} text-white rounded-xl p-8 mb-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              
              {/* Customization Button */}
              <button 
                onClick={() => setShowCustomization(!showCustomization)} 
                className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full transition-all z-10"
              >
                <i data-lucide="palette" className="w-5 h-5"></i>
              </button>
              
              <div className="relative z-10 flex items-center space-x-6">
                <div 
                  className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-5xl cursor-pointer hover:scale-105 transition-transform border-4 border-white border-opacity-30"
                  onClick={() => setShowAvatarSelector(!showAvatarSelector)}
                >
                  {avatars.find(av => av.id === selectedAvatar)?.emoji || '👤'}
                </div>
                <div className="flex-1">
                  <h2 
                    className="text-2xl font-bold mb-2 cursor-pointer hover:text-blue-200 transition-colors" 
                    onClick={() => {
                      const newName = prompt('Enter your name:', userProfile.name);
                      if (newName && newName.trim()) {
                        setUserProfile({...userProfile, name: newName.trim()});
                      }
                    }}
                  >
                    {userProfile.name}
                  </h2>
                  <p className="text-red-100 mb-4">Level {userProfile.level} • {userProfile.title}</p>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{userProfile.xp.toLocaleString()}</div>
                      <div className="text-red-200 text-sm">Total XP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">Level {userProfile.level}</div>
                      <div className="text-red-200 text-sm">Current Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{badges.filter(b => b.earned).length}</div>
                      <div className="text-red-200 text-sm">Badges</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div 
                    className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-2 cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => gainXP(100)}
                    title="Click for bonus XP!"
                  >
                    <i data-lucide="crown" className="w-8 h-8 text-yellow-800"></i>
                  </div>
                  <div className="text-sm">Level {userProfile.level}</div>
                </div>
              </div>
              
              {/* XP Progress Bar */}
              <div className="mt-6 relative z-10">
                <div className="flex justify-between text-sm mb-2">
                  <span>Level {userProfile.level}</span>
                  <span>{userProfile.xp % 1000} / 1000 XP to Level {userProfile.level + 1}</span>
                </div>
                <div 
                  className="w-full bg-white bg-opacity-20 rounded-full h-3 cursor-pointer hover:bg-opacity-30 transition-all"
                  onClick={() => gainXP(50)}
                  title="Click to gain XP!"
                >
                  <div 
                    id="xpBar"
                    className="bg-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${(userProfile.xp % 1000) / 10}%` }}
                  ></div>
                </div>
              </div>
              
              {/* XP Gain Animation */}
              {showXpGain && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold text-lg shadow-lg animate-bounce z-20">
                  +{xpGainAmount} XP!
                </div>
              )}
            </div>
            
            {/* Avatar & Background Customization Panel */}
            {showCustomization && (
              <div className="mb-6 bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">🎨 Customize Your Profile</h3>
                  <button 
                    onClick={() => setShowCustomization(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i data-lucide="x" className="w-5 h-5"></i>
                  </button>
                </div>
                
                {/* Avatar Selection */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3 text-gray-700">Choose Your Avatar</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {avatars.map(avatar => (
                      <div 
                        key={avatar.id}
                        onClick={() => avatar.unlocked && setSelectedAvatar(avatar.id)} 
                        className={`p-3 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                          !avatar.unlocked 
                            ? 'opacity-50 cursor-not-allowed' 
                            : selectedAvatar === avatar.id 
                              ? 'border-blue-500 bg-blue-50' 
                              : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-3xl text-center mb-2">{avatar.emoji}</div>
                        <div className="text-xs text-center text-gray-600">{avatar.name}</div>
                        {!avatar.unlocked && (
                          <div className="text-xs text-center text-red-500">🔒 Level {Math.ceil(Math.log2(avatars.indexOf(avatar) + 1)) + 2}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Background Selection */}
                <div>
                  <h4 className="font-medium mb-3 text-gray-700">Choose Background Theme</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {backgrounds.map(bg => (
                      <div 
                        key={bg.id}
                        onClick={() => bg.unlocked && setSelectedBackground(bg.id)} 
                        className={`h-16 rounded-lg cursor-pointer border-2 transition-all hover:scale-105 relative ${
                          !bg.unlocked 
                            ? 'opacity-50 cursor-not-allowed' 
                            : selectedBackground === bg.id 
                              ? 'border-blue-500' 
                              : 'border-gray-200 hover:border-blue-300'
                        } bg-gradient-to-r ${bg.gradient} flex items-center justify-center text-white font-medium text-sm`}
                      >
                        {bg.name}
                        {!bg.unlocked && (
                          <div className="absolute bottom-1 text-xs">🔒 Lv{bg.id === 'ocean' ? 2 : bg.id === 'forest' ? 3 : bg.id === 'sunset' ? 4 : bg.id === 'galaxy' ? 5 : bg.id === 'gold' ? 6 : bg.id === 'cosmic' ? 7 : 10}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

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
              <div className="space-y-6">
                {/* Badge Statistics */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Badge Collection</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{badges.filter(b => b.earned).length}</div>
                      <div className="text-sm text-green-800">Earned</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{badges.filter(b => b.rarity === 'rare' && b.earned).length}</div>
                      <div className="text-sm text-blue-800">Rare</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{badges.filter(b => b.rarity === 'epic' && b.earned).length}</div>
                      <div className="text-sm text-purple-800">Epic</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">{badges.filter(b => b.rarity === 'legendary' && b.earned).length}</div>
                      <div className="text-sm text-yellow-800">Legendary</div>
                    </div>
                  </div>
                </div>

                {/* Badge Categories */}
                {['common', 'uncommon', 'rare', 'epic', 'legendary'].map(rarity => (
                  <div key={rarity} className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className={`text-lg font-bold mb-4 capitalize ${
                      rarity === 'common' ? 'text-gray-600' :
                      rarity === 'uncommon' ? 'text-green-600' :
                      rarity === 'rare' ? 'text-blue-600' :
                      rarity === 'epic' ? 'text-purple-600' :
                      'text-yellow-600'
                    }`}>
                      {rarity} Badges {rarity === 'legendary' ? '👑' : rarity === 'epic' ? '⚡' : rarity === 'rare' ? '💎' : rarity === 'uncommon' ? '🌟' : '⭐'}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {badges.filter(b => b.rarity === rarity).map(badge => (
                        <div 
                          key={badge.name} 
                          className={`text-center p-4 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer ${
                            badge.earned 
                              ? `border-${badge.color}-300 bg-${badge.color}-50` 
                              : 'border-gray-200 bg-gray-50 opacity-60'
                          }`}
                          onClick={() => badge.earned && alert(`${badge.name}: You earned this ${badge.rarity} badge at level ${badge.level}!`)}
                        >
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 ${
                            badge.earned 
                              ? `bg-${badge.color}-100 text-${badge.color}-600` 
                              : 'bg-gray-200 text-gray-400'
                          }`}>
                            <i data-lucide={badge.icon} className="w-8 h-8"></i>
                          </div>
                          <div className="font-semibold text-sm mb-1">{badge.name}</div>
                          <div className={`text-xs mb-1 ${badge.earned ? 'text-green-600' : 'text-gray-400'}`}>
                            {badge.earned ? '✅ Earned' : `🔒 Level ${badge.level}`}
                          </div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            rarity === 'common' ? 'bg-gray-100 text-gray-600' :
                            rarity === 'uncommon' ? 'bg-green-100 text-green-600' :
                            rarity === 'rare' ? 'bg-blue-100 text-blue-600' :
                            rarity === 'epic' ? 'bg-purple-100 text-purple-600' :
                            'bg-yellow-100 text-yellow-600'
                          }`}>
                            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className={`rounded-xl shadow-lg p-6 transition-colors duration-300 ${darkModeEnabled ? 'bg-gray-800' : 'bg-white'}`}>
                <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Account Settings</h3>
                <div className="space-y-6">
                  {/* Notifications Toggle */}
                  <div className={`flex items-center justify-between py-4 border-b transition-colors duration-300 ${darkModeEnabled ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Notifications</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>Receive learning reminders and updates</p>
                    </div>
                    <button 
                      onClick={toggleNotifications}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                        notificationsEnabled 
                          ? 'bg-[var(--primary-color)]' 
                          : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 transform ${
                        notificationsEnabled 
                          ? 'translate-x-6' 
                          : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>

                  {/* Dark Mode Toggle */}
                  <div className={`flex items-center justify-between py-4 border-b transition-colors duration-300 ${darkModeEnabled ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Dark Mode</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>Switch to dark theme for better night viewing</p>
                    </div>
                    <button 
                      onClick={toggleDarkMode}
                      className={`w-12 h-6 rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${
                        darkModeEnabled 
                          ? 'bg-gray-600' 
                          : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all duration-300 transform ${
                        darkModeEnabled 
                          ? 'translate-x-6' 
                          : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>

                  {/* Additional Settings */}
                  <div className={`flex items-center justify-between py-4 border-b transition-colors duration-300 ${darkModeEnabled ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Email Digest</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>Receive weekly progress summary via email</p>
                    </div>
                    <button className={`w-12 h-6 bg-gray-300 rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}>
                      <div className="w-4 h-4 bg-white rounded-full absolute left-1 top-1 transition-all duration-300"></div>
                    </button>
                  </div>

                  <div className={`flex items-center justify-between py-4 transition-colors duration-300`}>
                    <div>
                      <h4 className={`font-semibold transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Auto-Save Progress</h4>
                      <p className={`text-sm transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>Automatically save your learning progress</p>
                    </div>
                    <button className={`w-12 h-6 bg-[var(--primary-color)] rounded-full relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}>
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 transition-all duration-300"></div>
                    </button>
                  </div>

                  {/* Status Display */}
                  <div className={`mt-6 p-4 rounded-lg transition-colors duration-300 ${
                    darkModeEnabled ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <h5 className={`font-medium mb-3 transition-colors duration-300 ${darkModeEnabled ? 'text-white' : 'text-[var(--text-primary)]'}`}>Current Settings Status</h5>
                    <div className="space-y-2 text-sm">
                      <div className={`flex items-center space-x-2 transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>
                        <div className={`w-2 h-2 rounded-full ${notificationsEnabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span>Notifications: {notificationsEnabled ? 'Enabled' : 'Disabled'}</span>
                      </div>
                      <div className={`flex items-center space-x-2 transition-colors duration-300 ${darkModeEnabled ? 'text-gray-300' : 'text-[var(--text-secondary)]'}`}>
                        <div className={`w-2 h-2 rounded-full ${darkModeEnabled ? 'bg-gray-600' : 'bg-yellow-500'}`}></div>
                        <span>Theme: {darkModeEnabled ? 'Dark Mode' : 'Light Mode'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        </div>
      </>
    );
  } catch (error) {
    console.error('ProfileApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProfileApp />);