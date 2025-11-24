import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-950 text-white p-4 text-center fade-text">
      <div className="relative mb-8">
        <h1 className="text-9xl font-black text-slate-900 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle className="w-24 h-24 text-accent opacity-80" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 text-white">Página não encontrada</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto text-lg">
        Opa! Parece que a página que você está procurando se perdeu no multiverso digital.
      </p>
      
      <Link 
        to="/" 
        className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
      >
        <Home className="w-5 h-5 mr-2" />
        Voltar para o Início
      </Link>
    </div>
  );
}