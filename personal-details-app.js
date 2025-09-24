function PersonalDetailsApp() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    grade: '',
    school: '',
    interests: []
  });

  const [step, setStep] = React.useState(1);
  const totalSteps = 3;

  const subjects = ['Mathematics', 'English', 'Science', 'History', 'Geography', 'Tamil', 'Hindi'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (subject) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(subject)
        ? prev.interests.filter(s => s !== subject)
        : [...prev.interests, subject]
    }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Save data and redirect to dashboard
    localStorage.setItem('userProfile', JSON.stringify(formData));
    window.location.href = 'dashboard.html';
  };

  try {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                <div className="icon-user text-2xl text-white"></div>
              </div>
              <h1 className="text-3xl font-bold text-[var(--primary-color)] mb-2">Complete Your Profile</h1>
              <p className="text-[var(--text-secondary)]">Help us personalize your learning experience</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                {[1, 2, 3].map(num => (
                  <div key={num} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step >= num ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {num}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[var(--primary-color)] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form Steps */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-input"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-input"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Academic Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="number"
                      placeholder="Age"
                      className="form-input"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                    />
                    <select
                      className="form-input"
                      value={formData.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                    >
                      <option value="">Select Grade</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i} value={i + 1}>Grade {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <input
                    type="text"
                    placeholder="School Name"
                    className="form-input"
                    value={formData.school}
                    onChange={(e) => handleInputChange('school', e.target.value)}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-4">Subject Interests</h2>
                  <p className="text-[var(--text-secondary)] mb-4">Select subjects you're interested in learning</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {subjects.map(subject => (
                      <button
                        key={subject}
                        onClick={() => handleInterestToggle(subject)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          formData.interests.includes(subject)
                            ? 'border-[var(--primary-color)] bg-[var(--secondary-color)] text-[var(--primary-color)]'
                            : 'border-gray-300 hover:border-[var(--primary-color)]'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  disabled={step === 1}
                  className={`px-6 py-3 rounded-lg font-semibold ${
                    step === 1 
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                  }`}
                >
                  Previous
                </button>
                
                {step < totalSteps ? (
                  <button onClick={nextStep} className="btn-primary">
                    Next
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn-primary">
                    Complete Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PersonalDetailsApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PersonalDetailsApp />);