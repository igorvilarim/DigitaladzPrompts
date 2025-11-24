import React, { useState } from "react";
import { Wand2, Zap, Target, Settings, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function PromptGenerator() {
  const [concept, setConcept] = useState("");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const { t } = useLanguage();

  const handleGenerate = () => {
    if (!concept) return;
    // Simple mock generation logic
    const templates = [
      `High quality photo of ${concept}, cinematic lighting, 8k resolution, highly detailed, photorealistic masterpiece.`,
      `Digital art of ${concept}, cyberpunk style, neon colors, futuristic atmosphere, detailed background, trending on artstation.`,
      `3D render of ${concept}, isometric view, soft lighting, pastel colors, blender style, clean composition.`
    ];
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    setGeneratedPrompt(randomTemplate);
  };

  return (
    <div className="min-h-screen py-12 bg-slate-950 fade-text">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-xl mb-4">
            <Wand2 className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('gen_title')} <span className="text-accent">Prompts</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('gen_desc')}
          </p>
        </div>

        {/* Generator Box */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">AI Prompt Generator</h3>
            <p className="text-sm text-slate-400 mb-4">
              {t('gen_desc')}
            </p>
            
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              {t('gen_label')}
            </label>
            <textarea
              className="w-full h-32 bg-slate-950 border border-slate-700 rounded-xl p-4 text-white placeholder-slate-600 focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              placeholder={t('gen_placeholder')}
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={!concept}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${
              concept 
                ? "bg-accent text-slate-900 hover:bg-accent-hover shadow-lg shadow-accent/20" 
                : "bg-slate-800 text-slate-500 cursor-not-allowed"
            }`}
          >
            <Wand2 className="w-5 h-5" />
            {t('gen_btn')}
          </button>

          {generatedPrompt && (
            <div className="mt-8 animate-in fade-in slide-in-from-top-4">
              <div className="p-4 bg-slate-950 rounded-xl border border-accent/30 relative">
                <p className="text-slate-200 font-mono text-sm">{generatedPrompt}</p>
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <span className="bg-accent text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm">AI</span>
                </div>
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex items-center gap-2 mb-4">
               <Settings className="w-4 h-4 text-accent" />
               <h4 className="text-sm font-bold text-white">Examples</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Substituir fundo por uma praia ao pôr do sol",
                "Remover o fundo e colocar o sujeito em um cenário de estúdio branco",
                "Transformar em uma figura colecionável em escala 1/7 com base acrílica",
                "Mudar o clima da foto para uma manhã nublada",
                "Adicionar armadura de fantasia mantendo a identidade facial"
              ].map((action, idx) => (
                <button 
                  key={idx}
                  onClick={() => setConcept(action)}
                  className="text-left p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-xs text-slate-300 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 mb-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="text-center px-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Fast</h3>
                <p className="text-sm text-slate-400">Generate prompts in seconds.</p>
             </div>
             <div className="text-center px-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Accurate</h3>
                <p className="text-sm text-slate-400">Based on best practices.</p>
             </div>
             <div className="text-center px-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Control</h3>
                <p className="text-sm text-slate-400">Full customization.</p>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}