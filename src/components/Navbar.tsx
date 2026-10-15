import React from 'react';
import { 
  Sparkles, 
  Search, 
  Heart, 
  MonitorPlay, 
  FileText, 
  Layers, 
  Home
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  favoritesCount: number;
  downloadCount: number;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  favoritesCount,
  onOpenSearch
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Zone 1: Single text wordmark brand */}
          <button 
            onClick={() => onNavigate('dashboard')} 
            className="flex items-center gap-2.5 text-left group focus:outline-none"
            aria-label="Ir para início do Acervo Clínico Infantil"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-100 via-emerald-100 to-amber-100 border border-blue-200/70 flex items-center justify-center text-blue-700 shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap block leading-tight">
                Acervo Clínico Infantil
              </span>
              <span className="text-[11px] font-medium text-slate-700 hidden sm:block leading-none">
                Área de Membros & Ferramental Clínico
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                currentView === 'dashboard'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>

            <button
              onClick={() => onNavigate('acervos')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                currentView === 'acervos'
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Acervos (160)</span>
            </button>

            <button
              onClick={() => onNavigate('bonus')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                currentView === 'bonus'
                  ? 'bg-emerald-50 text-emerald-800'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bônus Exclusivos (PDF)</span>
            </button>

            <button
              onClick={() => onNavigate('session-mode')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                currentView === 'session-mode'
                  ? 'bg-amber-50 text-amber-800 ring-1 ring-amber-300'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <MonitorPlay className="w-3.5 h-3.5 text-amber-700" />
              <span>Modo Sessão</span>
            </button>

            <button
              onClick={() => onNavigate('favorites')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                currentView === 'favorites'
                  ? 'bg-rose-50 text-rose-700'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Favoritos</span>
              {favoritesCount > 0 && (
                <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded-full font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </nav>

          {/* Zone 3: Quick Action & Search */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenSearch}
              className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-slate-100/80 hover:bg-slate-100 text-slate-500 hover:text-slate-800 text-xs transition-colors border border-slate-200/60"
              aria-label="Abrir pesquisa de recursos clínicos"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline ml-1.5">Buscar recurso...</span>
              <kbd className="hidden lg:inline ml-1.5 text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-700 font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => onNavigate('session-mode')}
              className="px-2.5 sm:px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Modo</span>
              <span>Sessão</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
