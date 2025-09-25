function AIToolsPage() {
  try {
    return (
      <div className="space-y-8" data-name="ai-tools-page" data-file="components/AIToolsPage.js">
        {/* AI Tools Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">AI Learning Tools</h1>
              <p className="text-blue-100 text-lg mb-4">Intelligent Assistance for Your Learning Journey</p>
              <p className="text-blue-200">Discover powerful AI tools designed to enhance your educational experience</p>
            </div>
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <div className="icon-cpu text-6xl text-white"></div>
            </div>
          </div>
        </div>

        {/* AI Tools Carousel */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-6">
              <div className="icon-cpu text-2xl text-blue-600"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Available AI Tools</h2>
              <p className="text-gray-600">Choose from our collection of intelligent learning assistants</p>
            </div>
          </div>
          
          {typeof AITools !== 'undefined' ? (
            <AITools />
          ) : (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading AI Tools...</p>
            </div>
          )}
        </div>

        {/* AI Tools Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-pink-50 to-purple-100 p-6 rounded-xl border border-pink-200">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-palette text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-pink-800 mb-2">Creative Tools</h3>
            <p className="text-pink-700 text-sm mb-4">Generate creative content, stories, and artistic ideas</p>
            <div className="text-xs text-pink-600">
              • Creative Spark<br/>
              • Design Genius<br/>
              • Story Weaver
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl border border-green-200">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-graduation-cap text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-green-800 mb-2">Learning Tools</h3>
            <p className="text-green-700 text-sm mb-4">Personalized tutoring and subject assistance</p>
            <div className="text-xs text-green-600">
              • Study Buddy<br/>
              • Math Mentor<br/>
              • Language Coach
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <div className="icon-brain text-xl text-white"></div>
            </div>
            <h3 className="font-bold text-blue-800 mb-2">Analysis Tools</h3>
            <p className="text-blue-700 text-sm mb-4">Research, analysis, and problem-solving assistance</p>
            <div className="text-xs text-blue-600">
              • Research Helper<br/>
              • Data Analyst<br/>
              • Problem Solver
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('AIToolsPage component error:', error);
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h2 className="text-red-800 font-semibold mb-2">Error Loading AI Tools</h2>
        <p className="text-red-600">{error.message}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reload Page
        </button>
      </div>
    );
  }
}