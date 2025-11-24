import React, { useState } from 'react';
import { Prompt, Category, Difficulty } from '../types';
import { ExternalLink, Copy, Check, Image as ImageIcon } from 'lucide-react';
import { Modal } from './ui/Modal';

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const getCategoryColor = (category: Category) => {
    switch (category) {
      case Category.IMAGE_EDITING: return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case Category.IMAGE_GENERATION: return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case Category.CHARACTER_CONSISTENCY: return "bg-pink-500/20 text-pink-300 border-pink-500/30";
      case Category.ARTISTIC_EFFECTS: return "bg-orange-500/20 text-orange-300 border-orange-500/30";
      case Category.PRODUCT_DESIGN: return "bg-green-500/20 text-green-300 border-green-500/30";
      case Category.PHOTOGRAPHY: return "bg-cyan-500/20 text-cyan-300 border-cyan-500/30";
      case Category.DIGITAL_ART: return "bg-violet-500/20 text-violet-300 border-violet-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    switch (difficulty) {
      case Difficulty.BEGINNER: return "bg-green-500/20 text-green-300 border-green-500/30";
      case Difficulty.INTERMEDIATE: return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case Difficulty.ADVANCED: return "bg-red-500/20 text-red-300 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-300 border-slate-500/30";
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt_text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div 
        className="group relative flex flex-col bg-slate-900 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        {/* Image Section - Increased height for better impact */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-800">
          {/* Loading Skeleton */}
          {!isImageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-800 animate-pulse">
              <ImageIcon className="w-10 h-10 text-slate-700" />
            </div>
          )}
          
          <img 
            src={prompt.image_url} 
            alt={prompt.title}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Floating Action Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
            <div className="bg-black/50 p-3 rounded-full backdrop-blur-sm border border-white/20">
               <ExternalLink className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-5 space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border font-bold ${getCategoryColor(prompt.category)}`}>
              {prompt.category}
            </span>
            <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md border font-bold ${getDifficultyColor(prompt.difficulty)}`}>
              {prompt.difficulty}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-accent transition-colors line-clamp-1">
            {prompt.title}
          </h3>
          
          <p className="text-sm text-slate-400 line-clamp-2 flex-grow">
            {prompt.description}
          </p>
        </div>
      </div>

      {/* Detail Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title={prompt.title}>
        <div className="space-y-6">
          <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 relative">
             {!isImageLoaded && (
                <div className="h-[300px] w-full flex items-center justify-center text-slate-700">
                   <ImageIcon className="w-12 h-12 animate-pulse" />
                </div>
             )}
            <img src={prompt.image_url} alt={prompt.title} className="w-full h-auto max-h-[500px] object-contain mx-auto" />
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Categoria</label>
                <div className={`mt-1 inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(prompt.category)}`}>
                    {prompt.category}
                </div>
             </div>
             <div>
                <label className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Dificuldade</label>
                <div className={`mt-1 inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(prompt.difficulty)}`}>
                    {prompt.difficulty}
                </div>
             </div>
          </div>

          <div>
            <label className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Descrição</label>
            <p className="text-slate-300 mt-1 leading-relaxed">{prompt.description}</p>
          </div>

          <div className="bg-slate-950 p-5 rounded-lg border border-slate-800 relative group hover:border-slate-600 transition-colors">
            <label className="text-xs text-accent uppercase font-bold tracking-wider mb-3 block flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Prompt Completo
            </label>
            <p className="text-slate-200 font-mono text-sm break-words leading-relaxed">{prompt.prompt_text}</p>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleCopy();
              }}
              className="absolute top-3 right-3 p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors border border-slate-700 shadow-lg"
              title="Copiar Prompt"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="pt-4 border-t border-slate-800 flex justify-end">
             <button 
                onClick={() => setModalOpen(false)}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
             >
                Fechar
             </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PromptCard;