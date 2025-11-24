import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Sparkles } from "lucide-react";
import PromptCard from "../components/PromptCard";
import { MOCK_PROMPTS } from "../data";
import { useLanguage } from "../contexts/LanguageContext";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  // Simple filtering for the home page
  const filteredPrompts = MOCK_PROMPTS.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 6); // Show only top 6 on home

  return (
    <div className="min-h-screen fade-text">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-slate-950 -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            {t('hero_title')}
            <br />
            <span className="text-accent">Iniciei no Digital</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            {t('hero_subtitle')}
          </p>

          <div className="max-w-2xl mx-auto relative mb-12">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-4 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all shadow-lg backdrop-blur-sm"
              placeholder={t('search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/explore" 
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-slate-900 font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              {t('btn_explore')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/generator" 
              className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all hover:border-slate-500"
            >
              {t('btn_generator')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-white">{t('feat_title')} <span className="text-accent">Iniciei no Digital</span></h2>
            </div>
            <Link to="/explore" className="hidden md:flex items-center text-sm text-accent hover:text-white transition-colors">
              {t('feat_view_all')} <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <p className="text-slate-400 mb-10 -mt-8">
            {t('explore_subtitle')}
          </p>

          {filteredPrompts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrompts.map(prompt => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-500">{t('no_results')}</p>
            </div>
          )}

          <div className="mt-10 text-center md:hidden">
             <Link to="/explore" className="inline-flex items-center text-sm text-accent font-medium">
               {t('feat_view_all')} <ArrowRight className="ml-1 w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}