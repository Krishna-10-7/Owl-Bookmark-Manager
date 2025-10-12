import React, { useState } from 'react';
import { Download, BookmarkIcon, Search, Tag, Folder, CheckCircle, Github, Sparkles, Clock, Archive } from 'lucide-react';

export default function OwlBookmarkDocs() {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <BookmarkIcon className="w-6 h-6" />,
      title: "Smart Bookmarking",
      description: "Save and organize bookmarks with intelligent categorization and tagging"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Powerful Search",
      description: "Find any bookmark instantly with lightning-fast search functionality"
    },
    {
      icon: <Tag className="w-6 h-6" />,
      title: "Custom Tags",
      description: "Organize bookmarks with custom tags and categories for easy management"
    },
    {
      icon: <Folder className="w-6 h-6" />,
      title: "Folder Organization",
      description: "Create nested folders and collections to keep everything organized"
    }
  ];

  const installSteps = [
    "Download the extension ZIP file using the button above",
    "Extract the ZIP file to a folder on your computer",
    "Open Chrome and navigate to chrome://extensions/",
    "Enable 'Developer mode' using the toggle in the top right",
    "Click 'Load unpacked' and select the extracted extension folder",
    "The Owl Bookmark extension is now installed! Look for the owl icon in your toolbar"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 text-gray-800">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🦉</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Owl Bookmark Manager</h1>
                <p className="text-sm text-amber-700">Your Wise Bookmark Companion</p>
              </div>
            </div>
            <a 
              href="https://github.com/Krishna-10-7/Owl-Bookmarks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors text-gray-800"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-6">🦉</div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            Organize Your Web, Wisely
          </h2>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Owl Bookmark Manager helps you save, organize, and find your bookmarks with the wisdom of an owl. Never lose track of important links again!
          </p>
          <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <Download className="w-6 h-6" />
            <span>Download Extension</span>
          </button>
          <p className="text-sm text-amber-700 mt-4">Version 1.0.0 • Chrome & Edge Compatible</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Recently Added</h4>
              <p className="text-gray-600">Quick access to your most recent bookmarks</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Smart Suggestions</h4>
              <p className="text-gray-600">Get intelligent tag and category suggestions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Archive className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-gray-900">Bulk Operations</h4>
              <p className="text-gray-600">Manage multiple bookmarks at once efficiently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex space-x-2 mb-8 border-b-2 border-amber-200">
            {['overview', 'installation', 'usage', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-amber-500 text-amber-700 -mb-0.5'
                    : 'text-gray-600 hover:text-amber-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-amber-200 shadow-lg">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Overview</h3>
                <p className="text-gray-700 mb-4">
                  Owl Bookmark Manager is your intelligent companion for organizing the web. Like an owl's keen vision in the dark, our extension helps you find and manage your bookmarks with precision and ease.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether you're a researcher collecting articles, a developer saving documentation, or just someone who loves to stay organized, Owl Bookmark Manager adapts to your needs.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Intuitive Interface</h4>
                      <p className="text-sm text-gray-600">Beautiful and easy to use design</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fast & Responsive</h4>
                      <p className="text-sm text-gray-600">Lightning quick search and navigation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacy First</h4>
                      <p className="text-sm text-gray-600">All data stored locally on your device</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cross-Browser Sync</h4>
                      <p className="text-sm text-gray-600">Sync across Chrome and Edge browsers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'installation' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Installation Guide</h3>
                <p className="text-gray-700 mb-6">
                  Follow these simple steps to install the Owl Bookmark Manager in your Chrome or Edge browser:
                </p>
                <div className="space-y-4">
                  {installSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                        {idx + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-amber-100 border-2 border-amber-300 rounded-lg">
                  <p className="text-amber-900 text-sm">
                    <strong>Note:</strong> This extension is currently in developer mode. We're working on submitting it to the Chrome Web Store for easier installation.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'usage' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">How to Use</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Adding Bookmarks</h4>
                    <p className="text-gray-700 mb-2">
                      Click the owl icon in your toolbar while on any webpage, then:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>The current page URL and title will be auto-filled</li>
                      <li>Add custom tags to organize your bookmark</li>
                      <li>Choose a folder or create a new one</li>
                      <li>Add optional notes for future reference</li>
                      <li>Click "Save" and you're done!</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Searching Bookmarks</h4>
                    <p className="text-gray-700">
                      Use the search bar to find bookmarks by title, URL, tags, or notes. Results appear instantly as you type, making it easy to find exactly what you're looking for.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Managing Collections</h4>
                    <p className="text-gray-700">
                      Create folders and collections to group related bookmarks. You can nest folders, rename them, and move bookmarks between collections with simple drag-and-drop.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Using Tags</h4>
                    <p className="text-gray-700">
                      Tags provide flexible organization. Click any tag to see all bookmarks with that tag. The extension suggests tags based on your browsing patterns and existing tags.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Where are my bookmarks stored?</h4>
                    <p className="text-gray-700">
                      All bookmarks are stored locally in your browser using Chrome's storage API. They can also sync across your devices if you're signed into Chrome with sync enabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Can I import my existing bookmarks?</h4>
                    <p className="text-gray-700">
                      Yes! The extension can import bookmarks from your browser's native bookmark manager. Go to Settings → Import/Export to get started.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Can I export my bookmarks?</h4>
                    <p className="text-gray-700">
                      Absolutely! You can export all your bookmarks as a JSON file or HTML bookmarks file compatible with all browsers. Find this option in Settings → Import/Export.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Does this work with Firefox or Safari?</h4>
                    <p className="text-gray-700">
                      Currently, Owl Bookmark Manager supports Chrome and Edge browsers. Firefox and Safari support is planned for future releases.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">Is there a limit to how many bookmarks I can save?</h4>
                    <p className="text-gray-700">
                      There's no hard limit imposed by the extension. The limit is based on your browser's storage capacity, which is typically very generous (several thousand bookmarks).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-amber-700">How do I report bugs or request features?</h4>
                    <p className="text-gray-700">
                      Visit our GitHub repository and create an issue. We love hearing from our users and actively work on improvements based on feedback!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🦉</div>
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-xl mb-8 text-amber-100">
            Join thousands of users who have organized their web browsing with Owl Bookmark Manager
          </p>
          <button className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-amber-600 hover:bg-amber-50 rounded-xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
            <Download className="w-6 h-6" />
            <span>Download Now</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-amber-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="text-2xl">🦉</span>
                <h4 className="font-semibold text-gray-900">Owl Bookmark Manager</h4>
              </div>
              <p className="text-sm text-gray-600">
                Your wise companion for organizing the web. Built with love for bookmark enthusiasts.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
               
                <li><a href="https://github.com/Krishna-10-7/Owl-Bookmarks" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">GitHub Repository</a></li>
                <li><a href="https://github.com/Krishna-10-7/Owl-Bookmarks/issues" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Report an Issue</a></li>
               
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="https://github.com/Krishna-10-7/Owl-Bookmarks" className="hover:text-amber-600 transition-colors">Contribute</a></li>
                
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-gray-600 pt-8 border-t border-amber-200">
            <p>© 2025 Owl Bookmark Manager. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}