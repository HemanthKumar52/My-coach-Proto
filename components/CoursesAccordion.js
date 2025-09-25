// Courses & Tutors Accordion Component
function CoursesAccordion() {
  const sections = [
    {
      id: 'courses',
      title: '📚 Available Courses',
      icon: 'book-open',
      items: [
        {
          name: 'Mathematics Mastery',
          description: 'Comprehensive math curriculum from basics to advanced',
          level: 'All Levels',
          duration: '12 weeks',
          color: 'from-blue-500 to-blue-600',
          icon: 'calculator'
        },
        {
          name: 'English Excellence',
          description: 'Reading, writing, grammar and literature skills',
          level: 'Grade 6-12',
          duration: '10 weeks',
          color: 'from-green-500 to-green-600',
          icon: 'book'
        },
        {
          name: 'Science Exploration',
          description: 'Physics, chemistry, and biology fundamentals',
          level: 'Grade 8-12',
          duration: '14 weeks',
          color: 'from-purple-500 to-purple-600',
          icon: 'microscope'
        },
        {
          name: 'NAPLAN Preparation',
          description: 'Targeted preparation for NAPLAN assessments',
          level: 'Grade 3, 5, 7, 9',
          duration: '8 weeks',
          color: 'from-red-500 to-red-600',
          icon: 'target'
        }
      ]
    },
    {
      id: 'tutors',
      title: '👨‍🏫 Expert Tutors',
      icon: 'users',
      items: [
        {
          name: 'Sarah Chen',
          description: 'Mathematics & Physics Specialist',
          level: '5+ years experience',
          duration: 'Available Mon-Fri',
          color: 'from-blue-500 to-cyan-500',
          icon: 'user'
        },
        {
          name: 'Michael Roberts',
          description: 'English & Literature Expert',
          level: '8+ years experience',
          duration: 'Available Tue-Sat',
          color: 'from-green-500 to-teal-500',
          icon: 'user'
        },
        {
          name: 'Dr. Lisa Park',
          description: 'Science & Research Methods',
          level: '10+ years experience',
          duration: 'Available Wed-Sun',
          color: 'from-purple-500 to-pink-500',
          icon: 'user'
        },
        {
          name: 'James Wilson',
          description: 'NAPLAN & Test Preparation',
          level: '6+ years experience',
          duration: 'Available Mon-Thu',
          color: 'from-orange-500 to-red-500',
          icon: 'user'
        }
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className={`icon-${section.icon} text-[var(--primary-color)]`}></div>
              <h2 className="text-xl font-bold text-[var(--text-primary)]">{section.title}</h2>
            </div>
            <div className="overflow-x-hidden relative">
              <div className="flex scrolling-wrapper">
                {[...section.items, ...section.items].map((item, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-4 text-white transform transition-all duration-300 hover:scale-105 cursor-pointer mr-4 flex-shrink-0 w-64`}
                    onClick={() => {
                      if (section.id === 'courses') {
                        window.location.href = 'exam-prep.html';
                      } else {
                        window.location.href = 'tutors.html';
                      }
                    }}
                  >
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-3">
                      <div className={`icon-${item.icon} text-base`}></div>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                    <p className="text-white text-opacity-90 text-sm mb-2">
                      {item.description}
                    </p>
                    <div className="text-xs text-white text-opacity-75 mb-3">
                      <div>{item.level}</div>
                      <div>{item.duration}</div>
                    </div>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 group-hover:bg-opacity-40">
                      {section.id === 'courses' ? 'Enroll Now' : 'Book Session'} →
                    </button>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
              <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}