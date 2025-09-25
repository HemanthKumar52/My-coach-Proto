// AI Tools Carousel Component
function AITools() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // AI Tools data with modified names and descriptions as requested
  const aiTools = [
    // Creative Category
    {
      id: 1,
      name: "Creative Spark",
      category: "creative",
      description: "Generate creative writing prompts and artistic ideas",
      icon: "palette",
      color: "from-pink-500 to-purple-600",
      sample: "Create a story about a magical library that appears only at midnight..."
    },
    {
      id: 2,
      name: "Design Genius",
      category: "creative",
      description: "AI-powered design suggestions and visual concepts",
      icon: "paintbrush",
      color: "from-purple-500 to-indigo-600",
      sample: "Generate a modern logo concept for an eco-friendly startup..."
    },
    {
      id: 3,
      name: "Story Weaver",
      category: "creative",
      description: "Interactive storytelling and narrative development",
      icon: "book-open",
      color: "from-indigo-500 to-blue-600",
      sample: "Help me develop characters for my fantasy adventure story..."
    },
    
    // Learn Category
    {
      id: 4,
      name: "Study Buddy",
      category: "learn",
      description: "Personalized learning companion for all subjects",
      icon: "graduation-cap",
      color: "from-green-500 to-emerald-600",
      sample: "Explain photosynthesis in simple terms with examples..."
    },
    {
      id: 5,
      name: "Math Mentor",
      category: "learn",
      description: "Step-by-step math problem solving and concepts",
      icon: "calculator",
      color: "from-emerald-500 to-teal-600",
      sample: "Help me solve this quadratic equation: x² + 5x + 6 = 0..."
    },
    {
      id: 6,
      name: "Language Lab",
      category: "learn",
      description: "Interactive language learning and practice",
      icon: "globe",
      color: "from-teal-500 to-cyan-600",
      sample: "Practice French conversation about ordering food at a restaurant..."
    },
    
    // Feature Category
    {
      id: 7,
      name: "Smart Planner",
      category: "feature",
      description: "Intelligent scheduling and task management",
      icon: "calendar",
      color: "from-orange-500 to-red-600",
      sample: "Create a study schedule for my upcoming exams..."
    },
    {
      id: 8,
      name: "Research Pro",
      category: "feature",
      description: "Advanced research assistance and fact-checking",
      icon: "search",
      color: "from-red-500 to-pink-600",
      sample: "Research the causes and effects of climate change..."
    },
    {
      id: 9,
      name: "Note Master",
      category: "feature",
      description: "Smart note-taking and summary generation",
      icon: "file-text",
      color: "from-yellow-500 to-orange-600",
      sample: "Summarize this lecture about World War II..."
    },
    
    // Generate Category
    {
      id: 10,
      name: "Quiz Builder",
      category: "generate",
      description: "Generate custom quizzes and practice tests",
      icon: "help-circle",
      color: "from-blue-500 to-purple-600",
      sample: "Create a 10-question quiz about the solar system..."
    },
    {
      id: 11,
      name: "Code Crafter",
      category: "generate",
      description: "Programming assistance and code generation",
      icon: "code",
      color: "from-gray-500 to-slate-600",
      sample: "Write a Python function to calculate fibonacci numbers..."
    },
    {
      id: 12,
      name: "Essay Assist",
      category: "generate",
      description: "Essay structure and writing assistance",
      icon: "edit",
      color: "from-slate-500 to-gray-600",
      sample: "Help me outline an essay about renewable energy..."
    }
  ];

  // Auto-scroll functionality
  React.useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % aiTools.length);
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, aiTools.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + aiTools.length) % aiTools.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % aiTools.length);
  };

  const getVisibleTools = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % aiTools.length;
      visible.push(aiTools[index]);
    }
    return visible;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'creative': return 'bg-pink-100 text-pink-800';
      case 'learn': return 'bg-green-100 text-green-800';
      case 'feature': return 'bg-orange-100 text-orange-800';
      case 'generate': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[var(--text-primary)]">
          🤖 AI Learning Tools
        </h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            title={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
          >
            <div className={`icon-${isPaused ? 'play' : 'pause'} text-sm`}></div>
          </button>
          <button
            onClick={handlePrevious}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <div className="icon-chevron-left text-sm"></div>
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <div className="icon-chevron-right text-sm"></div>
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getVisibleTools().map((tool, index) => (
            <div
              key={`${tool.id}-${currentIndex}`}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${tool.color} p-6 text-white transform transition-all duration-500 hover:scale-105 cursor-pointer`}
              onClick={() => {
                // Show AI chat sample for this tool
                alert(`🤖 ${tool.name} Sample:\n\n${tool.sample}`);
              }}
            >
              {/* Category Badge */}
              <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(tool.category)} bg-white`}>
                {tool.category}
              </div>

              {/* Tool Icon */}
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <div className={`icon-${tool.icon} text-lg`}></div>
              </div>

              {/* Tool Info */}
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-white text-opacity-90 text-sm mb-4">
                {tool.description}
              </p>

              {/* Try Button */}
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group-hover:bg-opacity-40">
                Try Now →
              </button>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {aiTools.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[var(--primary-color)] w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mt-4 space-x-4">
        {['creative', 'learn', 'feature', 'generate'].map((category) => (
          <button
            key={category}
            onClick={() => {
              const categoryIndex = aiTools.findIndex(tool => tool.category === category);
              if (categoryIndex !== -1) {
                setCurrentIndex(categoryIndex);
              }
            }}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors capitalize ${getCategoryColor(category)} hover:opacity-80`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}