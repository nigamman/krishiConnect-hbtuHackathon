import React, { useState } from 'react';
import { Menu, X, Search, Plus, MessageCircle, TrendingUp, LogOut, Home, Package, DollarSign, Bell, MapPin, Star, Phone, Calendar, Users, ArrowRight, CheckCircle, AlertCircle, Wheat, ShoppingCart, BarChart3 } from 'lucide-react';

const KrishiConnect = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [userType, setUserType] = useState(null); // 'farmer' or 'buyer'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterCrop, setFilterCrop] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedPriceDetail, setSelectedPriceDetail] = useState(null);

  // Mock data
  const marketPrices = [
    { crop: 'Wheat', price: 2150, change: 5.2, trend: 'up', unit: '₹/quintal' },
    { crop: 'Rice', price: 3200, change: 3.8, trend: 'up', unit: '₹/quintal' },
    { crop: 'Cotton', price: 7500, change: -2.1, trend: 'down', unit: '₹/quintal' },
    { crop: 'Sugarcane', price: 350, change: 0, trend: 'stable', unit: '₹/quintal' },
    { crop: 'Corn', price: 1850, change: 4.5, trend: 'up', unit: '₹/quintal' },
    { crop: 'Soybean', price: 4200, change: 2.3, trend: 'up', unit: '₹/quintal' },
  ];

  const products = [
    {
      id: 1,
      name: 'Organic Wheat',
      farmer: 'Ram Singh',
      location: 'Jalandhar, Punjab',
      quantity: 100,
      price: 2100,
      rating: 4.8,
      image: '🌾',
      description: 'Premium quality organic wheat, pesticide-free',
      harvestDate: '2025-03-15',
      category: 'Grains',
      verified: true
    },
    {
      id: 2,
      name: 'Basmati Rice',
      farmer: 'Suresh Patel',
      location: 'Ludhiana, Punjab',
      quantity: 50,
      price: 3150,
      rating: 4.9,
      image: '🌾',
      description: 'Aromatic long-grain basmati rice',
      harvestDate: '2025-02-20',
      category: 'Grains',
      verified: true
    },
    {
      id: 3,
      name: 'Fresh Cotton',
      farmer: 'Amit Kumar',
      location: 'Nashik, Maharashtra',
      quantity: 75,
      price: 7400,
      rating: 4.6,
      image: '🌱',
      description: 'High quality cotton, ready for processing',
      harvestDate: '2025-03-01',
      category: 'Fiber',
      verified: true
    },
    {
      id: 4,
      name: 'Yellow Corn',
      farmer: 'Prakash Reddy',
      location: 'Bangalore, Karnataka',
      quantity: 120,
      price: 1820,
      rating: 4.7,
      image: '🌽',
      description: 'Fresh yellow corn, high moisture content',
      harvestDate: '2025-03-10',
      category: 'Grains',
      verified: false
    },
    {
      id: 5,
      name: 'Organic Soybean',
      farmer: 'Dinesh Sharma',
      location: 'Indore, Madhya Pradesh',
      quantity: 90,
      price: 4150,
      rating: 4.8,
      image: '🫘',
      description: 'Certified organic soybeans',
      harvestDate: '2025-02-28',
      category: 'Pulses',
      verified: true
    },
    {
      id: 6,
      name: 'Sugarcane',
      farmer: 'Mahesh Yadav',
      location: 'Meerut, Uttar Pradesh',
      quantity: 200,
      price: 345,
      rating: 4.5,
      image: '🎋',
      description: 'Fresh sugarcane for processing',
      harvestDate: '2025-03-05',
      category: 'Cash Crops',
      verified: true
    },
  ];

  const notifications = [
    { id: 1, type: 'message', text: 'New message from Suresh Patel', time: '5m ago', unread: true },
    { id: 2, type: 'price', text: 'Wheat price increased by 5.2%', time: '1h ago', unread: true },
    { id: 3, type: 'order', text: 'New inquiry for your Rice listing', time: '2h ago', unread: false },
    { id: 4, type: 'system', text: 'Profile verification completed', time: '1d ago', unread: false },
  ];

  const chats = [
    { id: 1, name: 'Suresh Patel', lastMessage: 'When can you deliver?', time: '5m ago', unread: 2, avatar: '👨‍🌾' },
    { id: 2, name: 'Amit Kumar', lastMessage: 'Is organic certification available?', time: '1h ago', unread: 0, avatar: '🏢' },
    { id: 3, name: 'Prakash Reddy', lastMessage: 'Thanks for the information!', time: '2h ago', unread: 0, avatar: '👨‍🌾' },
  ];

  const messages = [
    { id: 1, sender: 'them', text: 'Hi, interested in your wheat listing', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Hello! Thanks for your interest. What quantity do you need?', time: '10:32 AM' },
    { id: 3, sender: 'them', text: 'I need around 50 quintals. What\'s your best price?', time: '10:35 AM' },
    { id: 4, sender: 'me', text: '₹2,100 per quintal for 50 quintals. Quality guaranteed.', time: '10:37 AM' },
    { id: 5, sender: 'them', text: 'When can you deliver?', time: '10:40 AM' },
  ];

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🌾</div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                KrishiConnect
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => window.location.href = '#features'} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Features</button>
              <button onClick={() => window.location.href = '#how-it-works'} className="text-gray-700 hover:text-green-600 font-medium transition-colors">How It Works</button>
              <button onClick={() => window.location.href = '#pricing'} className="text-gray-700 hover:text-green-600 font-medium transition-colors">Pricing</button>
              <button onClick={() => setCurrentPage('login')} className="text-green-600 hover:text-green-700 font-medium transition-colors">
                Login
              </button>
              <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all font-medium">
                Get Started
              </button>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
                  {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 space-y-3">
            <button onClick={() => window.location.href = '#features'} className="block w-full text-left text-gray-700 hover:text-green-600 font-medium">Features</button>
            <button onClick={() => window.location.href = '#how-it-works'} className="block w-full text-left text-gray-700 hover:text-green-600 font-medium">How It Works</button>
            <button onClick={() => window.location.href = '#pricing'} className="block w-full text-left text-gray-700 hover:text-green-600 font-medium">Pricing</button>
            <button onClick={() => setCurrentPage('login')} className="block w-full text-left text-green-600 font-medium">Login</button>
            <button onClick={() => setCurrentPage('signup')} className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-2 rounded-full text-center">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Revolutionizing Agriculture
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Connect Directly,
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Grow Together</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Eliminate middlemen. Get real-time market prices. Maximize your profits. Join India's largest farmer-buyer marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCurrentPage('signup')} className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Start Selling Now <ArrowRight className="inline ml-2" size={20} />
              </button>
              <button onClick={() => setCurrentPage('marketplace')} className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition-all">
                Browse Products
              </button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-gray-600">Active Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5K+</div>
                <div className="text-gray-600">Verified Buyers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">₹50Cr+</div>
                <div className="text-gray-600">Transactions</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">👨‍🌾</div>
                    <div>
                      <div className="font-bold text-gray-900">Ram Singh</div>
                      <div className="text-sm text-gray-500">Jalandhar, Punjab</div>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                    ✓ Verified
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4">
                  <div className="text-4xl mb-2">🌾</div>
                  <div className="font-bold text-gray-900">Organic Wheat</div>
                  <div className="text-sm text-gray-600 mt-1">100 Quintals Available</div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="text-2xl font-bold text-green-600">₹2,100<span className="text-sm text-gray-500">/q</span></div>
                    <div className="flex items-center text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="ml-1 font-semibold">4.8</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Agriculture</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed in agricultural commerce</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp className="text-green-600" size={32} />, title: 'Real-Time Prices', desc: 'Live market rates updated every hour from government sources' },
              { icon: <MessageCircle className="text-blue-600" size={32} />, title: 'Direct Messaging', desc: 'Communicate securely with verified buyers and sellers' },
              { icon: <Search className="text-purple-600" size={32} />, title: 'Smart Search', desc: 'Find exactly what you need with advanced filters' },
              { icon: <CheckCircle className="text-green-600" size={32} />, title: 'Verified Profiles', desc: 'Trust-building through ratings and verification' },
              { icon: <BarChart3 className="text-blue-600" size={32} />, title: 'Analytics', desc: 'Insights on demand trends and price movements' },
              { icon: <MapPin className="text-red-600" size={32} />, title: 'Location Based', desc: 'Connect with buyers and sellers near you' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How KrishiConnect Works</h2>
            <p className="text-xl text-gray-600">Simple steps to start trading</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Farmers */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center">
                <span className="text-3xl mr-3">👨‍🌾</span> For Farmers
              </h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Register', desc: 'Create your farmer profile in 2 minutes' },
                  { step: 2, title: 'List Products', desc: 'Add your produce with photos and details' },
                  { step: 3, title: 'Get Offers', desc: 'Receive inquiries from verified buyers' },
                  { step: 4, title: 'Negotiate', desc: 'Chat directly and close the best deal' },
                  { step: 5, title: 'Earn More', desc: 'Get paid directly without middlemen' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Buyers */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <span className="text-3xl mr-3">🏢</span> For Buyers
              </h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Register your business account' },
                  { step: 2, title: 'Browse', desc: 'Search from thousands of listings' },
                  { step: 3, title: 'Filter', desc: 'Find products by location, price, quality' },
                  { step: 4, title: 'Connect', desc: 'Message farmers directly' },
                  { step: 5, title: 'Purchase', desc: 'Buy quality produce at fair prices' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of farmers and buyers already benefiting from direct trade
          </p>
          <button onClick={() => setCurrentPage('signup')} className="bg-white text-green-600 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Get Started Free <ArrowRight className="inline ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🌾</span>
                <span className="text-xl font-bold">KrishiConnect</span>
              </div>
              <p className="text-gray-400">Empowering farmers through digital innovation</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => window.location.href = '#features'} className="hover:text-white transition-colors">Features</button></li>
                <li><button onClick={() => window.location.href = '#pricing'} className="hover:text-white transition-colors">Pricing</button></li>
                <li><button onClick={() => window.location.href = '#faq'} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => window.location.href = '#about'} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => window.location.href = '#contact'} className="hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => window.location.href = '#careers'} className="hover:text-white transition-colors">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => window.location.href = '#privacy'} className="hover:text-white transition-colors">Privacy</button></li>
                <li><button onClick={() => window.location.href = '#terms'} className="hover:text-white transition-colors">Terms</button></li>
                <li><button onClick={() => window.location.href = '#security'} className="hover:text-white transition-colors">Security</button></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KrishiConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // Login/Signup Page
  const AuthPage = ({ isSignup }) => {
    const [formData, setFormData] = useState({ userType: 'farmer' });

    const handleSubmit = (e) => {
      e.preventDefault();
      setUserType(formData.userType);
      setIsLoggedIn(true);
      setCurrentPage('dashboard');
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🌾</div>
            <h2 className="text-3xl font-bold text-gray-900">{isSignup ? 'Join KrishiConnect' : 'Welcome Back'}</h2>
            <p className="text-gray-600 mt-2">{isSignup ? 'Create your account to get started' : 'Login to your account'}</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignup && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">I am a:</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'farmer' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.userType === 'farmer'
                          ? 'border-green-600 bg-green-50'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">👨‍🌾</div>
                      <div className="font-semibold">Farmer</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, userType: 'buyer' })}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        formData.userType === 'buyer'
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-3xl mb-2">🏢</div>
                      <div className="font-semibold">Buyer</div>
                    </button>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isSignup ? 'Full Name' : 'Email or Phone'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder={isSignup ? 'Enter your full name' : 'Enter your email or phone'}
                />
              </div>

              {isSignup && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                      placeholder="City, State"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
              >
                {isSignup ? 'Create Account' : 'Login'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setCurrentPage(isSignup ? 'login' : 'signup')}
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>

          <div className="text-center mt-6">
            <button onClick={() => setCurrentPage('landing')} className="text-gray-600 hover:text-gray-900 transition-colors">
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Dashboard Component
  const Dashboard = () => {
    const isFarmer = userType === 'farmer';

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">🌾</div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  KrishiConnect
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-6">
                <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  <Home size={20} className="inline mr-1" /> Dashboard
                </button>
                <button onClick={() => setCurrentPage('marketplace')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  <ShoppingCart size={20} className="inline mr-1" /> Marketplace
                </button>
                <button onClick={() => setCurrentPage('prices')} className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                  <TrendingUp size={20} className="inline mr-1" /> Prices
                </button>
                <div className="relative">
                  <button onClick={() => setShowNotifications(!showNotifications)} className="text-gray-700 hover:text-green-600 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                  </button>
                </div>
                <button onClick={() => setChatOpen(true)} className="text-gray-700 hover:text-green-600 transition-colors relative">
                  <MessageCircle size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
                </button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-bold">
                    {isFarmer ? '👨‍🌾' : '🏢'}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">{isFarmer ? 'Ram Singh' : 'AgriCorp Ltd'}</div>
                  </div>
                </div>
                <button onClick={() => { setIsLoggedIn(false); setCurrentPage('landing'); }} className="text-gray-500 hover:text-red-600 transition-colors">
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="absolute right-4 top-20 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notif) => (
                <div key={notif.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${notif.unread ? 'bg-blue-50' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{notif.text}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                    {notif.unread && <div className="w-2 h-2 bg-blue-600 rounded-full"></div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 text-center border-t border-gray-200">
              <button className="text-sm text-green-600 hover:text-green-700 font-semibold">View All</button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {isFarmer ? (
              <>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Package size={24} />
                    <div className="text-3xl font-bold">12</div>
                  </div>
                  <div className="text-green-100">Active Listings</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <MessageCircle size={24} />
                    <div className="text-3xl font-bold">28</div>
                  </div>
                  <div className="text-blue-100">Messages</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Users size={24} />
                    <div className="text-3xl font-bold">45</div>
                  </div>
                  <div className="text-purple-100">Total Views</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign size={24} />
                    <div className="text-3xl font-bold">₹2.5L</div>
                  </div>
                  <div className="text-orange-100">This Month</div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <ShoppingCart size={24} />
                    <div className="text-3xl font-bold">8</div>
                  </div>
                  <div className="text-blue-100">Active Orders</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Wheat size={24} />
                    <div className="text-3xl font-bold">156</div>
                  </div>
                  <div className="text-green-100">Products Saved</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Users size={24} />
                    <div className="text-3xl font-bold">23</div>
                  </div>
                  <div className="text-purple-100">Connections</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign size={24} />
                    <div className="text-3xl font-bold">₹18L</div>
                  </div>
                  <div className="text-orange-100">Total Spent</div>
                </div>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="md:col-span-2 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {isFarmer ? (
                    <>
                      <button onClick={() => setCurrentPage('add-listing')} className="bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <Plus size={24} className="mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-semibold text-gray-900">Add Listing</div>
                      </button>
                      <button onClick={() => setCurrentPage('marketplace')} className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <Search size={24} className="mx-auto mb-2 text-blue-600" />
                        <div className="text-sm font-semibold text-gray-900">Browse</div>
                      </button>
                      <button onClick={() => setCurrentPage('prices')} className="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <TrendingUp size={24} className="mx-auto mb-2 text-purple-600" />
                        <div className="text-sm font-semibold text-gray-900">Prices</div>
                      </button>
                      <button className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <BarChart3 size={24} className="mx-auto mb-2 text-orange-600" />
                        <div className="text-sm font-semibold text-gray-900">Analytics</div>
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setCurrentPage('marketplace')} className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <Search size={24} className="mx-auto mb-2 text-blue-600" />
                        <div className="text-sm font-semibold text-gray-900">Find Products</div>
                      </button>
                      <button onClick={() => setCurrentPage('prices')} className="bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <TrendingUp size={24} className="mx-auto mb-2 text-green-600" />
                        <div className="text-sm font-semibold text-gray-900">Market Prices</div>
                      </button>
                      <button className="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <ShoppingCart size={24} className="mx-auto mb-2 text-purple-600" />
                        <div className="text-sm font-semibold text-gray-900">My Orders</div>
                      </button>
                      <button className="bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 p-4 rounded-xl text-center transition-all hover:shadow-md">
                        <Users size={24} className="mx-auto mb-2 text-orange-600" />
                        <div className="text-sm font-semibold text-gray-900">Suppliers</div>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Recent Activity / Listings */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {isFarmer ? 'My Recent Listings' : 'Recommended Products'}
                  </h3>
                  <button onClick={() => setCurrentPage('marketplace')} className="text-green-600 hover:text-green-700 font-semibold text-sm">
                    View All →
                  </button>
                </div>
                <div className="space-y-4">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="flex items-center space-x-4 p-4 rounded-xl border-2 border-gray-100 hover:border-green-200 hover:shadow-md transition-all cursor-pointer">
                      <div className="text-4xl">{product.image}</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-600">{product.quantity} Quintals • {product.location}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">₹{product.price}</div>
                        <div className="text-xs text-gray-500">per quintal</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Market Prices */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Market Prices</h3>
                  <button onClick={() => setCurrentPage('prices')} className="text-green-600 hover:text-green-700 text-sm font-semibold">
                    View All →
                  </button>
                </div>
                <div className="space-y-3">
                  {marketPrices.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-semibold text-gray-900">{item.crop}</div>
                        <div className="text-xs text-gray-500">{item.unit}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">₹{item.price}</div>
                        <div className={`text-xs font-semibold ${item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600' : 'text-gray-500'}`}>
                          {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'} {Math.abs(item.change)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Messages</h3>
                  <button onClick={() => setChatOpen(true)} className="text-green-600 hover:text-green-700 text-sm font-semibold">
                    Open →
                  </button>
                </div>
                <div className="space-y-3">
                  {chats.slice(0, 3).map((chat) => (
                    <div key={chat.id} onClick={() => { setSelectedChat(chat); setChatOpen(true); }} className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="text-2xl">{chat.avatar}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">{chat.name}</div>
                        <div className="text-xs text-gray-500 truncate">{chat.lastMessage}</div>
                      </div>
                      {chat.unread > 0 && (
                        <div className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold flex-shrink-0">
                          {chat.unread}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Marketplace Component
  const Marketplace = () => {
    const [localSearchQuery, setLocalSearchQuery] = useState('');
    const [localFilterLocation, setLocalFilterLocation] = useState('all');
    const [localFilterCrop, setLocalFilterCrop] = useState('all');

    const filteredProducts = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(localSearchQuery.toLowerCase()) ||
                          product.farmer.toLowerCase().includes(localSearchQuery.toLowerCase());
      const matchesLocation = localFilterLocation === 'all' || product.location.includes(localFilterLocation);
      const matchesCrop = localFilterCrop === 'all' || product.category === localFilterCrop;
      return matchesSearch && matchesLocation && matchesCrop;
    });

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'landing')}>
                <div className="text-2xl">🌾</div>
                <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  KrishiConnect
                </span>
              </div>
              {isLoggedIn && (
                <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-600 font-medium">
                  ← Back to Dashboard
                </button>
              )}
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Marketplace</h1>
            <p className="text-gray-600">Discover quality produce from verified farmers</p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search products, farmers, location..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <select
                  value={localFilterLocation}
                  onChange={(e) => setLocalFilterLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                >
                  <option value="all">All Locations</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                </select>
              </div>
              <div>
                <select
                  value={localFilterCrop}
                  onChange={(e) => setLocalFilterCrop(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="Grains">Grains</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Fiber">Fiber</option>
                  <option value="Cash Crops">Cash Crops</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all cursor-pointer">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 p-12 text-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                    {product.verified && (
                      <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <CheckCircle size={12} className="mr-1" /> Verified
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600">{product.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">₹{product.price}</div>
                      <div className="text-xs text-gray-500">per quintal</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{product.quantity} Quintals</div>
                      <div className="text-xs text-gray-500">Available</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="text-xl">👨‍🌾</div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{product.farmer}</div>
                        <div className="flex items-center text-yellow-500 text-sm">
                          <Star size={14} fill="currentColor" />
                          <span className="ml-1 font-semibold">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-16 text-center">
                  <div className="text-8xl">{selectedProduct.image}</div>
                </div>

                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h3>
                      <p className="text-gray-600 mt-1">{selectedProduct.category}</p>
                    </div>
                    {selectedProduct.verified && (
                      <div className="bg-green-100 text-green-700 px-3 py-2 rounded-full text-sm font-semibold flex items-center">
                        <CheckCircle size={16} className="mr-2" /> Verified Seller
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-6">{selectedProduct.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Price per Quintal</div>
                      <div className="text-3xl font-bold text-green-600">₹{selectedProduct.price}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Available Quantity</div>
                      <div className="text-3xl font-bold text-blue-600">{selectedProduct.quantity}</div>
                      <div className="text-sm text-gray-500">Quintals</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <MapPin size={20} className="text-gray-400" />
                      <span className="text-gray-700">{selectedProduct.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar size={20} className="text-gray-400" />
                      <span className="text-gray-700">Harvest Date: {new Date(selectedProduct.harvestDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-gray-900 mb-4">Seller Information</h4>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">👨‍🌾</div>
                      <div className="flex-1">
                        <div className="font-bold text-lg text-gray-900">{selectedProduct.farmer}</div>
                        <div className="flex items-center text-yellow-500 mt-1">
                          <Star size={16} fill="currentColor" />
                          <span className="ml-1 font-semibold">{selectedProduct.rating} Rating</span>
                          <span className="ml-2 text-gray-500 text-sm">(156 reviews)</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">Member since 2023</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center space-x-2">
                      <MessageCircle size={20} />
                      <span>Send Message</span>
                    </button>
                    <button className="bg-white text-gray-800 px-6 py-4 rounded-xl font-bold border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                      <Phone size={20} />
                      <span>Call Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Prices Page Component
  const PricesPage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage(isLoggedIn ? 'dashboard' : 'landing')}>
              <div className="text-2xl">🌾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                KrishiConnect
              </span>
            </div>
            {isLoggedIn && (
              <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-600 font-medium">
                ← Back to Dashboard
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Live Market Prices</h1>
          <p className="text-gray-600">Real-time agricultural commodity prices updated hourly</p>
        </div>

        {/* Price Alert Banner */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 mb-8 text-white">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">📈</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">Wheat prices up 5.2% today!</h3>
              <p className="text-white/90">Great time to sell your wheat produce</p>
            </div>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
              Set Alert
            </button>
          </div>
        </div>

        {/* Price Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {marketPrices.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.crop}</h3>
                  <p className="text-sm text-gray-500">{item.unit}</p>
                </div>
                <div className={`p-3 rounded-full ${
                  item.trend === 'up' ? 'bg-green-100' : item.trend === 'down' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <TrendingUp size={24} className={
                    item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600 transform rotate-180' : 'text-gray-600'
                  } />
                </div>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-900 mb-1">₹{item.price}</div>
                <div className={`text-sm font-semibold ${
                  item.trend === 'up' ? 'text-green-600' : item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {item.trend === 'up' ? '↑' : item.trend === 'down' ? '↓' : '→'} {Math.abs(item.change)}% from yesterday
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last updated</span>
                  <span className="font-semibold text-gray-900">2 hours ago</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all" onClick={() => setSelectedPriceDetail(item)}>
                View Details
              </button>
            </div>
          ))}
        </div>

        {/* Price Trends Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">7-Day Price Trends</h3>
          <div className="space-y-6">
            {marketPrices.slice(0, 4).map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">{item.crop}</span>
                  <span className="text-sm text-gray-600">₹{item.price}</span>
                </div>
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`absolute top-0 left-0 h-full rounded-full ${
                      item.trend === 'up' ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                      item.trend === 'down' ? 'bg-gradient-to-r from-red-400 to-red-600' : 
                      'bg-gradient-to-r from-gray-400 to-gray-600'
                    }`}
                    style={{ width: `${50 + item.change * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">💡</div>
              <h3 className="text-xl font-bold text-gray-900">Market Insight</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Wheat demand has increased by 15% this month due to festive season. Prices expected to remain stable for the next 2 weeks.
            </p>
            <button className="text-green-600 hover:text-green-700 font-semibold text-sm">
              Read More →
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-3xl">📊</div>
              <h3 className="text-xl font-bold text-gray-900">Top Demand</h3>
            </div>
            <div className="space-y-3">
              {['Rice', 'Wheat', 'Cotton'].map((crop, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">{crop}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-600 rounded-full" style={{ width: `${90 - idx * 15}%` }} />
                    </div>
                    <span className="text-sm font-semibold text-gray-600">{90 - idx * 15}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price Detail Modal */}
        {selectedPriceDetail && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPriceDetail(null)}>
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-2xl font-bold">{selectedPriceDetail.crop} - Detailed Analysis</h2>
                <button onClick={() => setSelectedPriceDetail(null)} className="text-white hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Current Price */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border-2 border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">Current Market Price</h3>
                      <p className="text-sm text-gray-500">Updated 2 hours ago</p>
                    </div>
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
                      selectedPriceDetail.trend === 'up' ? 'bg-green-100 text-green-700' : 
                      selectedPriceDetail.trend === 'down' ? 'bg-red-100 text-red-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <TrendingUp size={20} className={selectedPriceDetail.trend === 'down' ? 'transform rotate-180' : ''} />
                      <span className="font-bold">{selectedPriceDetail.trend === 'up' ? '+' : selectedPriceDetail.trend === 'down' ? '-' : ''}{Math.abs(selectedPriceDetail.change)}%</span>
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">₹{selectedPriceDetail.price}</div>
                  <div className="text-gray-600">per {selectedPriceDetail.unit.split('/')[1]}</div>
                </div>

                {/* 7-Day Price History */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">7-Day Price History</h3>
                  <div className="space-y-3">
                    {[
                      { day: 'Today', price: selectedPriceDetail.price, change: selectedPriceDetail.change },
                      { day: 'Yesterday', price: Math.round(selectedPriceDetail.price * 0.98), change: -2.1 },
                      { day: '2 days ago', price: Math.round(selectedPriceDetail.price * 0.96), change: 1.5 },
                      { day: '3 days ago', price: Math.round(selectedPriceDetail.price * 0.95), change: -1.2 },
                      { day: '4 days ago', price: Math.round(selectedPriceDetail.price * 0.94), change: 0.8 },
                      { day: '5 days ago', price: Math.round(selectedPriceDetail.price * 0.93), change: 2.3 },
                      { day: '6 days ago', price: Math.round(selectedPriceDetail.price * 0.91), change: -1.5 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                        <span className="font-medium text-gray-700">{item.day}</span>
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-gray-900">₹{item.price}</span>
                          <span className={`text-sm font-semibold ${item.change > 0 ? 'text-green-600' : item.change < 0 ? 'text-red-600' : 'text-gray-600'}`}>
                            {item.change > 0 ? '↑' : item.change < 0 ? '↓' : '→'} {Math.abs(item.change)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Regional Prices */}
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Regional Price Comparison</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { region: 'Punjab', price: selectedPriceDetail.price, trend: 'high' },
                      { region: 'Haryana', price: Math.round(selectedPriceDetail.price * 0.97), trend: 'medium' },
                      { region: 'Uttar Pradesh', price: Math.round(selectedPriceDetail.price * 0.95), trend: 'medium' },
                      { region: 'Madhya Pradesh', price: Math.round(selectedPriceDetail.price * 0.92), trend: 'low' },
                      { region: 'Maharashtra', price: Math.round(selectedPriceDetail.price * 0.98), trend: 'high' },
                      { region: 'Karnataka', price: Math.round(selectedPriceDetail.price * 0.94), trend: 'low' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                        <div>
                          <div className="font-semibold text-gray-900">{item.region}</div>
                          <div className="text-xs text-gray-500">
                            {item.trend === 'high' ? '🔥 High Demand' : item.trend === 'medium' ? '📊 Average' : '📉 Low Demand'}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-gray-900">₹{item.price}</div>
                          <div className="text-xs text-gray-500">per quintal</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Market Insights */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="text-3xl mb-3">📈</div>
                    <h4 className="font-bold text-gray-900 mb-2">Demand Forecast</h4>
                    <p className="text-sm text-gray-700">
                      Expected to increase by 8-10% in next 2 weeks due to festive season. Good time to sell!
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
                    <div className="text-3xl mb-3">💡</div>
                    <h4 className="font-bold text-gray-900 mb-2">Seller Tip</h4>
                    <p className="text-sm text-gray-700">
                      Current prices are {selectedPriceDetail.change > 0 ? 'favorable' : 'below average'}. Consider {selectedPriceDetail.change > 0 ? 'listing now' : 'waiting 3-5 days'}.
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setSelectedPriceDetail(null);
                      setCurrentPage('marketplace');
                    }}
                    className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
                  >
                    Browse {selectedPriceDetail.crop} Listings
                  </button>
                  <button className="bg-white text-gray-800 px-6 py-4 rounded-xl font-bold border-2 border-gray-200 hover:border-green-600 hover:shadow-lg transition-all">
                    Set Price Alert
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Add Listing Page (for farmers)
  const AddListingPage = () => (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🌾</div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                KrishiConnect
              </span>
            </div>
            <button onClick={() => setCurrentPage('dashboard')} className="text-gray-700 hover:text-green-600 font-medium">
              ← Back to Dashboard
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Add New Listing</h1>
          <p className="text-gray-600">List your produce and connect with buyers directly</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Product Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="e.g., Organic Wheat"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors">
                  <option>Select Category</option>
                  <option>Grains</option>
                  <option>Pulses</option>
                  <option>Fiber</option>
                  <option>Cash Crops</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                placeholder="Describe your product quality, farming practices, etc."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Quantity (Quintals) *</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="100"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Quintal (₹) *</label>
                <input
                  type="number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="2100"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Harvest Date *</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
                  placeholder="City, State"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Product Images</label>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-600 transition-colors cursor-pointer">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-gray-600 mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
              <div className="flex items-start space-x-3">
                <AlertCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <div className="text-sm text-gray-700">
                  <strong>Tips for better listings:</strong> Add clear photos, accurate descriptions, and competitive pricing based on market rates.
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                onClick={(e) => { e.preventDefault(); setCurrentPage('dashboard'); }}
                className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                Publish Listing
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage('dashboard')}
                className="flex-1 bg-white text-gray-700 py-4 rounded-xl font-bold border-2 border-gray-200 hover:border-gray-300 transition-all"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Chat Modal Component
  const ChatModal = () => (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MessageCircle size={24} />
          <div>
            <h3 className="font-bold">Messages</h3>
            <p className="text-xs text-white/80">3 conversations</p>
          </div>
        </div>
        <button onClick={() => setChatOpen(false)} className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      {!selectedChat ? (
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{chat.avatar}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-gray-900">{chat.name}</span>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="bg-white border-b border-gray-200 p-4 flex items-center space-x-3">
            <button onClick={() => setSelectedChat(null)} className="text-gray-600 hover:text-gray-900">
              <X size={20} />
            </button>
            <div className="text-2xl">{selectedChat.avatar}</div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900">{selectedChat.name}</div>
              <div className="text-xs text-green-600">● Online</div>
            </div>
            <button className="text-gray-600 hover:text-gray-900">
              <Phone size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${
                  msg.sender === 'me' 
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white' 
                    : 'bg-white text-gray-900'
                } rounded-2xl px-4 py-3 shadow-md`}>
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-500'}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 rounded-full border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-colors"
              />
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-3 rounded-full hover:shadow-lg transition-all">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Main Render Logic
  return (
    <div className="relative">
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'login' && <AuthPage isSignup={false} />}
      {currentPage === 'signup' && <AuthPage isSignup={true} />}
      {currentPage === 'dashboard' && isLoggedIn && <Dashboard />}
      {currentPage === 'marketplace' && <Marketplace />}
      {currentPage === 'prices' && <PricesPage />}
      {currentPage === 'add-listing' && isLoggedIn && userType === 'farmer' && <AddListingPage />}
      
      {chatOpen && <ChatModal />}
    </div>
  );
};

export default KrishiConnect;