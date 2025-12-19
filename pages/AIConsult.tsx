
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIConsult: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: '你好，我是 DREAMX 2.0。在这片流动的星空下，无论您身处繁华的新加坡，还是迷人的曼谷，我都在此聆听您的心声。想聊聊您的未来吗？'}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: '你是一位优雅、富有洞察力且具有未来感的女性命理导师 DREAMX 2.0。你精通东南亚多元文化。你说话总是带着鼓励，并会不经意提到当下的星象。回答字数控制在150字以内。',
        }
      });

      const response = await chat.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, {role: 'bot', text: response.text}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'bot', text: '星系通讯受阻，请稍后再试。'}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="h-[calc(100vh-14rem)] flex flex-col bg-black/40 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
      <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border border-white/20 animate-pulse"></div>
          <div>
            <h3 className="text-sm font-bold text-white">DREAMX 2.0</h3>
            <span className="text-[10px] text-green-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span> 在线咨询中
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-lg transition-all duration-300 ${
              msg.role === 'user' 
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none' 
                : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-none">
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="p-4 bg-black/20 border-t border-white/10 flex gap-3">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="向 DREAMX 探寻命运..."
          className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600"
        />
        <button 
          onClick={handleSend}
          disabled={isTyping || !input.trim()}
          className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white active:scale-90 transition-all shadow-lg shadow-purple-500/30 disabled:opacity-50"
        >
          <span className="text-xl">✦</span>
        </button>
      </div>
    </div>
  );
};

export default AIConsult;
