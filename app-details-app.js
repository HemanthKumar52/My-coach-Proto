function AppDetailsApp() {
  const [userProfile, setUserProfile] = React.useState({
    firstName: 'John',
    lastName: 'Student',
    email: 'john.student@example.com',
    phone: '+1 234 567 8900',
    age: '15',
    grade: '9',
    school: 'Melbourne High School',
    interests: ['Mathematics', 'Science', 'English']
  });

  const [isEditing, setIsEditing] = React.useState(false);

  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  try {
    return (
      <div className="min-h-screen bg-[var(--surface)] flex">
        <Sidebar currentPage="app-details" onPageChange={(page) => {
          if (page === 'app-details') return;
          if (page === 'home') window.location.href = 'dashboard.html';
          else window.location.href = `${page}.html`;
        }} />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-4">Application Details</h1>
              <p className="text-[var(--text-secondary)] text-lg">Manage your profile information and application settings</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Personal Information</h2>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    isEditing 
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-[var(--primary-color)] text-white hover:bg-[var(--accent-color)]'
                  } transition-colors`}
                >
                  <div className={`icon-${isEditing ? 'check' : 'edit'} inline mr-2`}></div>
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={userProfile.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={userProfile.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={userProfile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    value={userProfile.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Grade</label>
                  <select
                    value={userProfile.grade}
                    onChange={(e) => handleInputChange('grade', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    {[...Array(12)].map((_, i) => (
                      <option key={i} value={i + 1}>Grade {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">School</label>
                  <input
                    type="text"
                    value={userProfile.school}
                    onChange={(e) => handleInputChange('school', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 border rounded-lg ${
                      isEditing 
                        ? 'border-gray-300 focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Account Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Member Since</span>
                    <span className="font-medium">January 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Total Study Hours</span>
                    <span className="font-medium">47 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Completed Lessons</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--text-secondary)]">Current Streak</span>
                    <span className="font-medium text-green-600">7 days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="icon-download text-[var(--primary-color)]"></div>
                    <span>Download Progress Report</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="icon-share text-[var(--primary-color)]"></div>
                    <span>Share Achievement</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="icon-settings text-[var(--primary-color)]"></div>
                    <span>Privacy Settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('AppDetailsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppDetailsApp />);