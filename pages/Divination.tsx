
import React, { useState } from 'react';
import { DivinationType, FortuneResult } from '../types';
import { getDivinationResponse, generateCardImage } from '../services/geminiService';

const Divination: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<FortuneResult | null>(null);
  const [cardImage, setCardImage] = useState<string | null>(null);
  const [userInput, setUserInput] = useState('');
  const [selectedType, setSelectedType] = useState<DivinationType>(DivinationType.TAROT);

  const handleDivine = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setResult(null);
    setCardImage(null);

    try {
      // Mock user info for MVP
      const userInfo = {
        name: '游客',
        birthDate: '1995-05-20',
        location: '新加坡'
      };

      const [divResponse, imgResponse] = await Promise.all([
        getDivinationResponse(selectedType, userInput, userInfo),
        generateCardImage(userInput)
      ]);

      setResult(divResponse);
      setCardImage(imgResponse);
    } catch (error) {
      console.error(error);
      alert('星路堵塞，请稍后再试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-lg mx-auto pb-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif font-bold">星语灵感测算</h2>
        <p className="text-gray-400 text-sm">闭目凝神，输入你心中的困惑</p>
      </div>

      <div className="space-y-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {Object.values(DivinationType).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm border transition-all ${
                selectedType === type
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-white/5 border-white/10 text-gray-400'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="例如：我近三个月在马来西亚的事业运势如何？"
          className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-gray-200 focus:outline-none focus:border-purple-500/50 transition-colors"
        />

        <button
          onClick={handleDivine}
          disabled={loading || !userInput.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-4 rounded-xl font-bold text-white shadow-lg shadow-purple-500/20 active:scale-95 disabled:opacity-50 transition-all"
        >
          {loading ? '星灵感应中...' : '开始测算'}
        </button>
      </div>

      {loading && (
        <div className="flex flex-col items-center gap-4 py-12">
          <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
          <p className="text-purple-400 animate-pulse">正在连通星系脉络...</p>
        </div>
      )}

      {result && (
        <div className="space-y-6 animate-fadeIn">
          {cardImage && (
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative group">
              <img src={cardImage} alt="Magic Card" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-xl font-serif font-bold text-white italic">"{result.title}"</p>
              </div>
            </div>
          )}

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">测算结果</h3>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">运势分</span>
                <span className="text-xl font-bold text-yellow-500">{result.score}</span>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
              {result.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-[10px] text-purple-300">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-300 text-sm leading-relaxed border-t border-white/5 pt-4">
              {result.detailedAnalysis}
            </p>

            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-[10px] text-yellow-500 font-bold mb-1 uppercase tracking-widest">大师秘籍</p>
              <p className="text-xs text-yellow-200/80 italic">{result.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Divination;
