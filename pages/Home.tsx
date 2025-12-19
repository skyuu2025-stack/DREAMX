
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300 font-medium tracking-widest uppercase mb-4 animate-pulse">
          Explore Your Destiny in SEA
        </div>
        <h1 className="text-5xl font-bold font-serif leading-tight">
          解构梦想，<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
            预见东南亚之幸
          </span>
        </h1>
        <p className="text-gray-400 text-base max-w-lg mx-auto leading-relaxed">
          DREAMX 2.0 深度融合新马泰印本土文化，通过下一代 AI 技术为您开启命理新维度。
        </p>
      </section>

      {/* Daily Fortune Card */}
      <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
          <span className="text-8xl">🪐</span>
        </div>
        <div className="space-y-6 relative z-10">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
            <span className="text-purple-400 text-xs font-bold tracking-widest uppercase">今日星象洞察</span>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-serif">2024年3月27日</h2>
            <p className="text-purple-200/60 text-sm">农历二月十八 · 龙年</p>
          </div>
          <p className="text-gray-200 leading-relaxed text-lg italic font-serif">
            “今日木星与海王星呈吉相，特别有利于新加坡、吉隆坡等沿海城市的创意产业。如果您在今日午后进行跨文化交流，将会有意想不到的收获。”
          </p>
          <div className="flex gap-3 flex-wrap">
            {['事业巅峰 95%', '社交顺遂 88%', '偏财机遇 72%'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/divine" className="group p-8 bg-gradient-to-br from-indigo-900/30 to-black/30 border border-indigo-500/20 rounded-2xl flex flex-col items-center gap-4 hover:border-indigo-500/60 transition-all duration-500 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">🌙</div>
          <div className="text-center">
            <span className="block font-bold text-xl text-indigo-100 mb-1">DREAMX 深度测算</span>
            <span className="text-xs text-indigo-400/70">融合八字与塔罗的本土化解析</span>
          </div>
        </Link>
        <Link to="/ai-consult" className="group p-8 bg-gradient-to-br from-purple-900/30 to-black/30 border border-purple-500/20 rounded-2xl flex flex-col items-center gap-4 hover:border-purple-500/60 transition-all duration-500 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">🧿</div>
          <div className="text-center">
            <span className="block font-bold text-xl text-purple-100 mb-1">大师私域咨询</span>
            <span className="text-xs text-purple-400/70">与 DREAMX 进行 1:1 命运对谈</span>
          </div>
        </Link>
      </div>

      {/* Footer Info */}
      <footer className="text-center py-12 border-t border-white/5">
        <p className="text-gray-500 text-[10px] tracking-widest uppercase">
          © 2024 DREAMX FINAL v2.0 · Designed for Southeast Asia
        </p>
      </footer>
    </div>
  );
};

export default Home;
