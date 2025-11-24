import React from "react";
import { Play, BookOpen, Zap, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Tutorials() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen py-12 bg-slate-950 fade-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-accent" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            {t('tut_title')} <span className="text-accent">NanoBanana</span>
          </h1>
          <p className="text-slate-400">
            {t('tut_subtitle')}
          </p>
        </div>

        {/* Main Video Feature */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Play className="w-5 h-5 text-accent" />
            <h2 className="text-xl font-bold text-white">{t('tut_title')}</h2>
          </div>
          
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden p-1">
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden group cursor-pointer">
              {/* Dynamic AI Tutorial Image */}
              <div className="absolute inset-0 bg-[url('https://image.pollinations.ai/prompt/A%20futuristic%20AI%20tutorial%20thumbnail,%20showing%20a%20robot%20teacher,%20digital%20screens,%20neon%20colors,%20youtube%20style?width=1200&height=675&nologo=true')] bg-cover bg-center opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                   <Play className="w-8 h-8 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <span className="inline-block px-2 py-1 bg-red-600 text-white text-xs font-bold rounded mb-2">YouTube</span>
                <h3 className="text-2xl font-bold text-white">Aulão de ChatGPT - Básico Completo</h3>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">Nano Banana Tutorial</h3>
              <p className="text-slate-400 text-sm">Full guide.</p>
            </div>
          </div>
        </div>

        {/* Learning Guides Grid */}
        <h2 className="text-2xl font-bold text-white text-center mb-8">Nano Banana <span className="text-accent">Guides</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4 mb-4">
               <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/20">
                  <BookOpen className="w-6 h-6 text-green-500" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-white">Intro</h3>
                 <p className="text-xs text-slate-500 mt-1">Basic concepts</p>
               </div>
            </div>
            <ul className="space-y-2 pl-2">
               {["Concept 1", "Concept 2", "Concept 3", "Concept 4"].map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                   <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-start gap-4 mb-4">
               <div className="p-3 bg-green-900/30 rounded-lg border border-green-500/20">
                  <Lightbulb className="w-6 h-6 text-green-500" />
               </div>
               <div>
                 <h3 className="text-lg font-bold text-white">Engineering</h3>
                 <p className="text-xs text-slate-500 mt-1">Advanced techniques</p>
               </div>
            </div>
            <ul className="space-y-2 pl-2">
               {["Structure", "Keywords", "Styles", "References"].map((item, i) => (
                 <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
                   <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                   {item}
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Essential Tips */}
        <h2 className="text-2xl font-bold text-center text-white mb-8">Tips <span className="text-accent">& Tricks</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: 1, title: "Be Specific", text: "Details matter." },
              { num: 2, title: "Use References", text: "Mention styles." },
              { num: 3, title: "Iterate", text: "Test variations." },
            ].map((tip) => (
              <div key={tip.num} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <div className="w-8 h-8 bg-green-600 rounded text-white font-bold flex items-center justify-center mb-3 text-sm">
                  {tip.num}
                </div>
                <h3 className="text-white font-bold mb-2 text-sm">{tip.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{tip.text}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}