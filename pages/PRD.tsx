
import React from 'react';

const PRD: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn pb-20">
      <div className="border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold">DREAMX - 产品研发档案 (PRD)</h1>
        <p className="text-gray-400 text-sm mt-1">版本: v1.0 MVP | 状态: 运行中</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500">01.</span> 业务目标与市场定位
        </h2>
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 space-y-4 text-sm leading-relaxed text-gray-300">
          <p><strong className="text-white">核心愿景：</strong> 为东南亚（SEA）地区华人及命理爱好者提供融合传统玄学与现代AI的数字占卜平台。</p>
          <p><strong className="text-white">市场机会：</strong> 东南亚华人社区对传统命理需求巨大，但市场缺乏审美现代化、交互智能化的移动端产品。DREAMX 填补了“重体验、强反馈、本土化”这一空白。</p>
          <p><strong className="text-white">差异化：</strong> 整合 Gemini 3 系列模型，结合东南亚文化进行调优，强调“梦想与运势”的结合。</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500">02.</span> 用户画像 (Personas)
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
            <h3 className="font-bold text-indigo-400 mb-2">职场白领 (Singapore/KL)</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• 年龄: 25-35岁</li>
              <li>• 痛点: 工作压力大，关心晋升与财运</li>
              <li>• 场景: 通勤时查看每日运势，重大决定前咨询AI</li>
            </ul>
          </div>
          <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
            <h3 className="font-bold text-pink-400 mb-2">命理爱好者 (Bangkok/HCM)</h3>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• 年龄: 30-45岁</li>
              <li>• 痛点: 传统算命流程繁杂，不便线下咨询</li>
              <li>• 场景: 深夜测算情感，了解跨文化习俗</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500">03.</span> 核心功能矩阵 (MVP Scope)
        </h2>
        <table className="w-full text-left text-xs text-gray-300">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2">功能模块</th>
              <th className="py-2">描述</th>
              <th className="py-2">技术点</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            <tr>
              <td className="py-3 font-bold text-white">智能测算</td>
              <td className="py-3">八字/塔罗/周易三合一测算。</td>
              <td className="py-3">Gemini 3 Flash (JSON Mode)</td>
            </tr>
            <tr>
              <td className="py-3 font-bold text-white">灵感绘卡</td>
              <td className="py-3">根据用户问题动态生成视觉化的占卜卡片。</td>
              <td className="py-3">Gemini 2.5 Flash Image</td>
            </tr>
            <tr>
              <td className="py-3 font-bold text-white">DREAMX 咨询</td>
              <td className="py-3">仿大师语气的实时对话咨询。</td>
              <td className="py-3">Gemini Chat Session</td>
            </tr>
            <tr>
              <td className="py-3 font-bold text-white">本土化引擎</td>
              <td className="py-3">注入SEA特定的地理、文化、黄历数据。</td>
              <td className="py-3">Custom System Prompts</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-purple-500">04.</span> 设计原则
        </h2>
        <div className="flex gap-4">
          <div className="flex-1 bg-gradient-to-br from-purple-500/10 to-transparent p-4 rounded-lg border border-purple-500/10">
            <p className="text-xs text-gray-400"><strong className="text-purple-400">视觉：</strong> 深邃蓝紫调 (Midnight Indigo) + 鎏金 (Gold Accents) + 模糊磨砂玻璃 (Glassmorphism)。</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-indigo-500/10 to-transparent p-4 rounded-lg border border-indigo-500/10">
            <p className="text-xs text-gray-400"><strong className="text-indigo-400">交互：</strong> 微动效引导，强调神秘感与仪式感，单手操作友好。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PRD;
