import React, { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import PromptCard from "../components/PromptCard";
import { MOCK_PROMPTS } from "../data";
import { Category, Difficulty } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

export default function ExplorePrompts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("Todos");
  const { t } = useLanguage();

  const filteredPrompts = useMemo(() => {
    return MOCK_PROMPTS.filter(prompt => {
      const matchesSearch = 
        prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prompt.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "Todos" || prompt.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === "Todos" || prompt.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen py-12 bg-slate-950 fade-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            {t('explore_title')} <span className="text-accent">Prompts</span>
          </h1>
          <p className="text-slate-400 text-lg">
            {t('explore_subtitle')}
          </p>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 mb-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* Search */}
            <div className="md:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-500" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                placeholder={t('search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="block w-full py-2.5 px-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
              >
                <option value="Todos">{t('filter_category')}</option>
                {Object.values(Category).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Dropdown */}
            <div className="md:col-span-3">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="block w-full py-2.5 px-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent appearance-none cursor-pointer"
              >
                <option value="Todos">{t('filter_difficulty')}</option>
                {Object.values(Difficulty).map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-slate-400 text-sm">
          <span className="text-accent font-bold">{filteredPrompts.length}</span> {t('results_found')}
        </div>

        {/* Grid */}
        {filteredPrompts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {filteredPrompts.map(prompt => (
              <PromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-900/30 rounded-xl border border-slate-800 border-dashed">
            <Filter className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white">{t('no_results')}</h3>
            <p className="text-slate-500 mt-1">...</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Todos");
                setSelectedDifficulty("Todos");
              }}
              className="mt-4 text-accent hover:underline text-sm"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}