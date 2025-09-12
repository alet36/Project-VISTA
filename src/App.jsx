import React, { useState } from 'react';
import { Home, Brain, BookOpen, Info, Play, Lightbulb, Code, Globe, ChevronRight, Moon, Sun, ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectVista = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [completedTopics, setCompletedTopics] = useState([]);
  const [journeyProgress, setJourneyProgress] = useState([]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const markTopicComplete = (topicId) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
    }
  };

  const markJourneyComplete = (stepId) => {
    if (!journeyProgress.includes(stepId)) {
      setJourneyProgress([...journeyProgress, stepId]);
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'cnns', label: 'CNNs', icon: Brain },
    { id: 'journey', label: 'The journey', icon: BookOpen },
    { id: 'about', label: 'About', icon: Info }
  ];

  const cnnTopics = [
    { id: 'definition', label: 'Definition', icon: Lightbulb },
    { id: 'machine-vision', label: 'Machine Vision', icon: Brain },
    { id: 'prediction', label: 'Prediction', icon: ChevronRight },
    { id: 'demo', label: 'Demo', icon: Play }
  ];

  const journeyTopics = [
    { id: 'topic', label: 'Topic', icon: Lightbulb },
    { id: 'design', label: 'Design', icon: Code },
    { id: 'website', label: 'Website', icon: Globe }
  ];

  const HomePage = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className={`text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Not just pixels.
          </h1>
          <h2 className={`text-4xl font-light ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Learn to learn.
          </h2>
        </div>
        
        {/* Progress Overview */}
        <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Your Learning Journey
          </h3>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {completedTopics.length}/4
            </div>
            <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              CNN Topics
            </div>
          </div>
          <div className={`mt-4 h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
            <div 
              className={`h-2 rounded-full transition-all duration-500 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
              style={{ width: `${(completedTopics.length / 4) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className={`p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'} flex items-center justify-center transition-all hover:scale-105`}>
            <Brain className={`w-12 h-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
          <div className={`p-6 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-gray-50'} flex items-center justify-center transition-all hover:scale-105`}>
            <Play className={`w-12 h-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => setCurrentPage('cnns')}
            className={`px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 ${
              isDarkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );

  const CNNsPage = () => {
    const [selectedTopic, setSelectedTopic] = useState('definition');
    
    return (
      <div className="flex-1 flex">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl">
            <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              CNNs
            </h1>
            
            {/* Topic Content */}
            <div className={`p-8 rounded-lg border ${
              isDarkMode 
                ? 'border-gray-700 bg-gray-800' 
                : 'border-gray-200 bg-white'
            }`}>
              {selectedTopic === 'definition' && (
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    What are CNNs?
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Convolutional Neural Networks (CNNs) are a type of artificial intelligence specifically designed to understand and analyze images. Think of them as digital brains that can "see" and recognize patterns in pictures.
                  </p>
                  <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'}`}>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      💡 <strong>Fun fact:</strong> CNNs are inspired by how the human visual cortex processes information!
                    </p>
                  </div>
                  <button 
                    onClick={() => markTopicComplete('definition')}
                    disabled={completedTopics.includes('definition')}
                    className={`mt-4 px-4 py-2 rounded transition-all ${
                      completedTopics.includes('definition')
                        ? isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                        : isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {completedTopics.includes('definition') ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed!</span>
                      </div>
                    ) : (
                      'Mark as Complete'
                    )}
                  </button>
                </div>
              )}
              
              {selectedTopic === 'machine-vision' && (
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Machine Vision
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Machine vision is the ability of computers to interpret and understand visual information from the world. CNNs are the key technology that makes this possible.
                  </p>
                  <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-green-50'}`}>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      🤖 <strong>Applications:</strong> Self-driving cars, medical imaging, facial recognition, and more!
                    </p>
                  </div>
                  <button 
                    onClick={() => markTopicComplete('machine-vision')}
                    disabled={completedTopics.includes('machine-vision')}
                    className={`mt-4 px-4 py-2 rounded transition-all ${
                      completedTopics.includes('machine-vision')
                        ? isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                        : isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {completedTopics.includes('machine-vision') ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed!</span>
                      </div>
                    ) : (
                      'Mark as Complete'
                    )}
                  </button>
                </div>
              )}
              
              {selectedTopic === 'prediction' && (
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Making Predictions
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    CNNs analyze images by breaking them down into smaller pieces, looking for patterns, and then making educated guesses about what they see.
                  </p>
                  <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      📊 <strong>Process:</strong> Input → Feature Detection → Pattern Recognition → Classification
                    </p>
                  </div>
                  <button 
                    onClick={() => markTopicComplete('prediction')}
                    disabled={completedTopics.includes('prediction')}
                    className={`mt-4 px-4 py-2 rounded transition-all ${
                      completedTopics.includes('prediction')
                        ? isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                        : isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {completedTopics.includes('prediction') ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed!</span>
                      </div>
                    ) : (
                      'Mark as Complete'
                    )}
                  </button>


                  {/*Space for the fast api*/ 
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Making Predictions
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    CNNs analyze images by breaking them down into smaller pieces, looking for patterns, and then making educated guesses about what they see.
                  </p>
                  <div className={`p-4 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-purple-50'}`}>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      📊 <strong>Process:</strong> Input → Feature Detection → Pattern Recognition → Classification
                    </p>
                  </div>
                
                  
                </div>
              )}
              
              {selectedTopic === 'demo' && (
                <div>
                  <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Interactive Demo
                  </h2>
                  <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Try out CNNs in action! Upload an image and see how the network processes and classifies it.
                  </p>
                  <div className={`p-8 rounded border-2 border-dashed text-center ${
                    isDarkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'
                  }`}>
                    <Play className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Demo area - Connect to FastAPI backend
                    </p>
                  </div>
                  <button 
                    onClick={() => markTopicComplete('demo')}
                    disabled={completedTopics.includes('demo')}
                    className={`mt-4 px-4 py-2 rounded transition-all ${
                      completedTopics.includes('demo')
                        ? isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                        : isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    {completedTopics.includes('demo') ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed!</span>
                      </div>
                    ) : (
                      'Try Demo & Complete'
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className={`mt-12 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-blue-50 border-blue-200'} border`}>
              <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                💭 Personal Reflection
              </h3>
              <textarea 
                placeholder="What have you learned about CNNs? Write your thoughts here..."
                className={`w-full h-24 p-3 rounded border resize-none ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar for CNN Topics */}
        <div className={`w-64 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-l p-4`}>
          <h3 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Topics
          </h3>
          <div className="space-y-2">
            {cnnTopics.map((topic) => {
              const IconComponent = topic.icon;
              const isSelected = selectedTopic === topic.id;
              const isCompleted = completedTopics.includes(topic.id);
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    isSelected
                      ? isDarkMode 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-blue-500 text-white'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-gray-700'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm flex-1">{topic.label}</span>
                  {isCompleted && (
                    <CheckCircle className={`w-4 h-4 ${isSelected ? 'text-white' : isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Progress in sidebar */}
          <div className={`mt-6 p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex justify-between items-center mb-2">
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Progress
              </span>
              <span className={`text-xs ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {completedTopics.length}/4
              </span>
            </div>
            <div className={`h-1.5 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
                style={{ width: `${(completedTopics.length / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const JourneyPage = () => (
    <div className="flex-1 p-8">
      <div className="max-w-4xl">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          The journey
        </h1>
        
        <div className="space-y-6">
          {journeyTopics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div 
                key={topic.id}
                className={`p-6 rounded-lg border transition-colors ${
                  isDarkMode 
                    ? 'border-gray-700 bg-gray-800' 
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                      isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <IconComponent className={`w-6 h-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`} />
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {topic.label}
                    </h3>
                  </div>
                  {journeyProgress.includes(topic.id) && (
                    <CheckCircle className={`w-6 h-6 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
                  )}
                </div>
                <p className={`ml-12 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {topic.id === 'topic' && "Understanding the fundamentals of computer vision and neural networks."}
                  {topic.id === 'design' && "Creating an intuitive and engaging learning experience for students."}
                  {topic.id === 'website' && "Building an interactive platform that makes learning CNNs accessible and fun."}
                </p>
                <button 
                  onClick={() => markJourneyComplete(topic.id)}
                  disabled={journeyProgress.includes(topic.id)}
                  className={`ml-12 px-4 py-2 rounded transition-all ${
                    journeyProgress.includes(topic.id)
                      ? isDarkMode ? 'bg-green-600 text-white' : 'bg-green-500 text-white'
                      : isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {journeyProgress.includes(topic.id) ? (
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Completed!</span>
                    </div>
                  ) : (
                    'Mark as Complete'
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-green-50 border-green-200'} border`}>
          <h3 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            🌱 Learning Reflection
          </h3>
          <textarea 
            placeholder="How has your understanding evolved throughout this journey? What insights have you gained?"
            className={`w-full h-24 p-3 rounded border resize-none ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="flex-1 p-8">
      <div className="max-w-4xl">
        <h1 className={`text-4xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          About
        </h1>
        
        <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
          <h2 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Project VISTA
          </h2>
          
          <div className="space-y-6">
            <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              A personal project designed to make Convolutional Neural Networks accessible to learners aged 11 and up.
            </p>
            
            <div className="space-y-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Features
              </h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• Interactive live demos</li>
                <li>• Step-by-step learning journey</li>
                <li>• Personal reflection spaces</li>
                <li>• Accessible explanations</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Tech Stack
              </h3>
              <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>• React + JSX</li>
                <li>• Tailwind CSS</li>
                <li>• FastAPI for demos</li>
                <li>• GitHub + Netlify deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`mt-8 p-6 rounded-lg text-center ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} border`}>
          <button className={`inline-flex items-center space-x-2 px-4 py-2 rounded ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}>
            <ArrowLeft className="w-4 h-4" />
            <span>Go back!</span>
          </button>
          <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Personal Project 2025 // Alejandro Tong Chau
          </p>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'cnns': return <CNNsPage />;
      case 'journey': return <JourneyPage />;
      case 'about': return <AboutPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen flex ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Sidebar */}
      <div className={`w-64 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Project VISTA
            </h1>
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-300' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentPage(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      isActive
                        ? isDarkMode 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-blue-500 text-white'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Visual Elements & Decorative Plate */}
        <div className="p-4">
          {/* Main Decorative Plate - Updated with corner screws */}
          <div className={`relative p-6 mb-6 rounded-xl border-2 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600 shadow-lg' 
              : 'bg-gradient-to-br from-gray-50 to-gray-100 border-gray-300 shadow-md'
          }`}>
            {/* Corner Screws */}
            <div className={`absolute top-1 left-1 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} shadow-inner`}></div>
            <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} shadow-inner`}></div>
            <div className={`absolute bottom-1 left-1 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} shadow-inner`}></div>
            <div className={`absolute bottom-1 right-1 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'} shadow-inner`}></div>
            
            {/* Main grid content */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className={`aspect-square rounded border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
              </div>
              <div className={`aspect-square rounded border-2 border-dashed ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
              </div>
            </div>
            
            <div className={`text-xs text-center font-mono mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Neural Vision
            </div>
            
            {/* Extended plate content */}
            <div className="space-y-2">
              <div className={`h-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} w-3/4`}></div>
              <div className={`h-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} w-1/2`}></div>
              <div className={`h-1 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} w-5/6`}></div>
            </div>
          </div>
          
          {/* Enlarged circles below the plate */}
          <div className="flex justify-center space-x-3">
            <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} flex items-center justify-center shadow-inner`}>
              <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
            </div>
            <div className={`w-8 h-8 rounded-full border-2 ${isDarkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} flex items-center justify-center shadow-inner`}>
              <div className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
            </div>
          </div>
          
          <div className={`mt-4 text-center text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <div className="overflow-hidden">
              <div className="animate-scroll-slow whitespace-nowrap">
                <span>Project VISTA • Project VISTA • Project VISTA • Project VISTA • Project VISTA • Project VISTA • </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {renderPage()}
      
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes scroll-slow {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
        .animate-scroll-slow {
          animation: scroll-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProjectVista;
