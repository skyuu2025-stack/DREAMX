
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页', icon: '✨' },
    { path: '/divine', label: '占卜', icon: '🌙' },
    { path: '/ai-consult', label: 'AI咨询', icon: '🧿' },
  ];

  return (
    <div className="min-h-screen flex flex-col mystic-gradient">
      <header className="fixed top-0 w-full z-50 bg-[#050510]/80 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-tighter">DREAMX</span>
          <span className="text-[10px] bg-purple-500/20 px-2 py-0.5 rounded text-purple-300 border border-purple-500/30 uppercase tracking-widest font-bold">v2.0 Final</span>
        </div>
        <div className="flex gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20 shadow-lg shadow-purple-500/20"></div>
        </div>
      </header>

      <main className="flex-1 pt-20 pb-24 overflow-y-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      <nav className="fixed bottom-0 w-full bg-[#050510]/90 backdrop-blur-xl border-t border-white/10 md:hidden flex justify-around p-4 z-50">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${
              location.pathname === item.path ? 'text-purple-400 scale-110' : 'text-gray-400'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Desktop Nav */}
      <aside className="hidden md:flex fixed left-0 top-20 bottom-0 w-20 flex-col items-center py-8 gap-8 border-r border-white/10 z-50">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
              location.pathname === item.path ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/40 scale-105' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="absolute left-16 bg-black/90 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {item.label}
            </span>
          </Link>
        ))}
      </aside>
    </div>
  );
};
