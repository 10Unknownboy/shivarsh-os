import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, TrendingUp, MessageSquare, Phone, Calendar, Clock, X } from 'lucide-react';
import MusicCardGallery from '../components/MusicCardGallery';

const LoveWrapped: React.FC = () => {
  const navigate = useNavigate();
  const [showMemories, setShowMemories] = useState(false);

  const relationshipStats = [
    { title: "The Glimpse 💫", value: "A glance so sharp, it cut me deep, her eyes of pride, no words to speak. The shift in stance, the cold retreat, a bitter air, a cruel defeat. I stood and watched, her disdain grow, a storm within began to show. Her distant face, her rigid line, left shadows stirring in my mind. No words were spoken, yet it stung, a silent pain, a song unsung. In her rejection, I stood still, and let the hurt rise, as it will. My heart is sea, you're a shine ✨ How deep can you go into heart of mine? I'm shrinking day by day 🥀 But just come to me at any random time ⏰ I will follow you until my death 👣 Whatever the consequences come ⚔️ I will take them with a happy smile 😊♥♥", subtitle: "a love that endures through pain", icon: "💔💖", type: "text" }
  ];


  const getProgressPercentage = (value: string, max: number) => {
    const numValue = parseInt(value.replace(/,/g, ''));
    return Math.min((numValue / max) * 100, 100);
  };

  const renderStatCard = (stat: any, index: number) => {
    const isProgress = stat.type === 'progress';
    const isCounter = stat.type === 'counter';
    
    return (
      <div
        key={index}
        className="glass-effect rounded-3xl p-8 text-center group cursor-pointer hover:scale-105 transition-all duration-500 animate-bounce-in border border-pink-200/30 shadow-lg"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="text-6xl mb-4 group-hover:animate-pulse">
          {stat.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          {stat.title}
        </h3>
        
        {isProgress ? (
          <div className="mb-4">
            <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
              {stat.value}
            </p>
            <div className="w-full bg-pink-100 rounded-full h-3 mb-2">
              <div 
                className="bg-gradient-to-r from-pink-500 to-rose-500 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${getProgressPercentage(stat.value, stat.max)}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              />
            </div>
            <div className="text-xs text-gray-500">
              {getProgressPercentage(stat.value, stat.max).toFixed(1)}% of max
            </div>
          </div>
        ) : isCounter ? (
          <div className="mb-4">
            <div className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2 animate-pulse">
              {stat.value}
            </div>
          </div>
        ) : (
          <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-3">
            {stat.value}
          </p>
        )}
        
        <p className="text-gray-600 text-sm italic">
          {stat.subtitle}
        </p>
      </div>
    );
  };

  // Memories Section Component
  const MemoriesSection = () => (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-90 transition-all duration-500 ${
      showMemories ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      {/* Floating Hearts Background */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute text-pink-400 text-2xl animate-float opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          💕
        </div>
      ))}

      {/* Close Button */}
      <button
        onClick={() => setShowMemories(false)}
        className="absolute top-6 right-6 z-60 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
      >
        <X className="text-white" size={24} />
      </button>

      {/* Main Memory Image */}
      <div className="flex items-center justify-center h-full p-8">
        <div className="relative max-w-4xl max-h-full">
          <img
            src="/files/database/images/collage.jpg"
            alt="Our Beautiful Memory"
            className="w-full h-full object-cover rounded-3xl shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          />
          
          {/* Memory Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 rounded-b-3xl">
            <h3 className="text-4xl font-bold text-white mb-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Our Beautiful Journey 💕
            </h3>
            <p className="text-xl text-white/90 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              Every moment with you is a treasure worth remembering
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-lavender-50 to-rose-100 overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-50 glass-effect border-b border-pink-200/50 backdrop-blur-lg">
        <div className="flex items-center justify-between p-6 max-w-6xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ← Back to Love OS
          </button>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent text-center flex items-center gap-3">
            <Heart className="animate-pulse text-pink-500" size={40} />
            Love Wrapped 2025
            <Heart className="animate-pulse text-rose-500" size={40} />
          </h1>
          <div></div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent mb-6 animate-fade-in-up">
            Your Love Story
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            xyz days of magic, laughter, and endless love 💕
          </p>
          <div className="flex justify-center items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg animate-pulse">
              A
            </div>
            <Heart className="text-pink-500 animate-pulse" size={48} />
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg animate-pulse">
              B
            </div>
          </div>
        </div>
      </div>

      {/* Music Cards Section */}
      <MusicCardGallery />

      {/* Memories Heart Button */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
            Our Precious Memories 💝
          </h3>
          <button
            onClick={() => setShowMemories(true)}
            className="group relative"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-pink-400 via-rose-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 animate-pulse-heart">
              <Heart className="text-white group-hover:scale-125 transition-transform duration-300" size={64} />
            </div>
            <p className="mt-4 text-lg text-gray-600 group-hover:text-pink-600 transition-colors">
              Click to see our memories ✨
            </p>
          </button>
        </div>
      </div>

      {/* Interactive Stats Dashboard */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            A poem for you my love 🥰
          </h3>
          <p className="text-xl text-gray-700">
            🎶🎶🎶
          </p>
        </div>

        {/* Quick Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass-effect rounded-2xl p-6 text-center">
            <MessageSquare className="mx-auto text-pink-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-pink-600">xyz</div>
            <div className="text-sm text-gray-600">Messages</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Phone className="mx-auto text-rose-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-rose-600">xyz</div>
            <div className="text-sm text-gray-600">Calls</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Heart className="mx-auto text-purple-500 mb-2" size={32} />
            <div className="text-2xl font-bold text-purple-600">xyz</div>
            <div className="text-sm text-gray-600">Love Words</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 text-center">
            <Calendar className="mx-auto text-pink-400 mb-2" size={32} />
            <div className="text-2xl font-bold text-pink-600">xyz</div>
            <div className="text-sm text-gray-600">Days Together</div>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relationshipStats.map((stat, index) => renderStatCard(stat, index))}
        </div>
      </div>

      {/* Comparison Chart Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="glass-effect rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Communication Breakdown 💬
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">👩</div>
              <h4 className="text-xl font-bold text-pink-600 mb-4">xyz (A)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Words:</span>
                  <span className="font-bold text-pink-600">xyz</span>
                </div>
                <div className="w-full bg-pink-100 rounded-full h-3">
                  <div className="bg-pink-500 h-3 rounded-full" style={{ width: '69%' }}></div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">👨</div>
              <h4 className="text-xl font-bold text-blue-600 mb-4">xyz (B)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Words:</span>
                  <span className="font-bold text-blue-600">xyz</span>
                </div>
                <div className="w-full bg-blue-100 rounded-full h-3">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '69%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-700 mb-4">
            Here's to many more wrapped years together 💕
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Every day with you feels like a celebration of love
          </p>
          <div className="flex justify-center space-x-4">
            <Heart className="text-pink-500 animate-pulse" size={32} />
            <Heart className="text-rose-500 animate-pulse" size={32} />
            <Heart className="text-purple-500 animate-pulse" size={32} />
          </div>
        </div>
      </div>

      {/* Memories Modal */}
      <MemoriesSection />
    </div>
  );
};

export default LoveWrapped;
