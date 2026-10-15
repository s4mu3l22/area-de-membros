import React from 'react';
import { 
  Sparkles, 
  Search, 
  Heart, 
  MonitorPlay, 
  FileText, 
  Download, 
  ArrowRight, 
  Brain, 
  ShieldAlert, 
  HeartHandshake, 
  BookOpen, 
  Compass, 
  Users, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { CLINICAL_COLLECTIONS } from '../data/acervos';
import { BONUS_DOCUMENTS } from '../data/bonuses';
import { CLINICAL_RESOURCES } from '../data/resources';
import { ClinicalCollection, ClinicalResource, BonusDocument, DownloadHistoryItem } from '../types/clinical';

interface DashboardViewProps {
  onNavigate: (view: string) => void;
  onSelectCollection: (col: ClinicalCollection) => void;
  onSelectResource: (res: ClinicalResource) => void;
  onSelectBonus: (bonus: BonusDocument) => void;
  onDownloadBonus: (bonus: BonusDocument, e: React.MouseEvent) => void;
  favoritesCount: number;
  downloadHistory: DownloadHistoryItem[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onNavigate,
  onSelectCollection,
  onSelectResource,
  onSelectBonus,
  onDownloadBonus,
  favoritesCount,
  downloadHistory,
  searchTerm,
  setSearchTerm
}) => {
  // Collection Icon mapping
  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return <Brain className="w-5 h-5 text-blue-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-emerald-600" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-sky-600" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-teal-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-purple-600" />;
      case 'Users': return <Users className="w-5 h-5 text-yellow-600" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
      default: return <Brain className="w-5 h-5 text-blue-600" />;
    }
  };

  // 4 Featured Quick-Access Resources from TDAH & other core collections
  const featuredResources = [
    CLINICAL_RESOURCES.find(r => r.id === 'TDAH-01')!,
    CLINICAL_RESOURCES.find(r => r.id === 'TDAH-02')!,
    CLINICAL_RESOURCES.find(r => r.id === 'TDAH-04')!,
    CLINICAL_RESOURCES.find(r => r.id === 'TDAH-09')!
  ].filter(Boolean);

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      {/* Welcome Hero Banner with Pastel Accents */}
      <div className="bg-gradient-to-br from-blue-50/90 via-emerald-50/60 to-amber-50/50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs relative overflow-hidden">
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-blue-200/70 text-blue-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Ambiente Exclusivo para Terapeutas Infantojuvenis</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Bem-vinda ao <span className="text-blue-700">Acervo Clínico Infantil</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Sua biblioteca profissional com 160 recursos terapêuticos organizados em 8 acervos neuropsicológicos, somados aos 5 bônus em PDF com protocolos de anamnese, scripts de devolutiva e lâminas de psicoeducação para pais.
          </p>

          {/* Prominent Search Bar */}
          <div className="pt-3 max-w-xl">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onNavigate('acervos');
                }}
                placeholder="Buscar recursos (ex: controle inibitório, rotina, medo de errar)..."
                className="w-full pl-12 pr-28 py-3 bg-white rounded-xl border border-slate-300/80 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 shadow-sm transition-all"
              />
              <button
                onClick={() => onNavigate('acervos')}
                className="absolute right-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
              >
                Buscar
              </button>
            </div>
          </div>

          {/* 4 Main Action Triggers */}
          <div className="pt-4 flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('acervos')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
            >
              <span>Explorar os 8 Acervos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onNavigate('bonus')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Acessar Bônus em PDF</span>
            </button>

            <button
              onClick={() => onNavigate('session-mode')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span>Abrir Modo Sessão</span>
            </button>

            <button
              onClick={() => onNavigate('favorites')}
              className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-semibold border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 text-rose-500" />
              <span>Ver Favoritos ({favoritesCount})</span>
            </button>
          </div>
        </div>

        {/* Metric Badges */}
        <div className="mt-8 pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 bg-white/70 rounded-xl border border-blue-100">
            <span className="text-xl sm:text-2xl font-bold text-blue-700 font-mono tabular-nums block">
              160
            </span>
            <span className="text-xs text-slate-600 font-medium">Recursos Terapêuticos</span>
          </div>

          <div className="p-3 bg-white/70 rounded-xl border border-emerald-100">
            <span className="text-xl sm:text-2xl font-bold text-emerald-700 font-mono tabular-nums block">
              8
            </span>
            <span className="text-xs text-slate-600 font-medium">Acervos Especializados</span>
          </div>

          <div className="p-3 bg-white/70 rounded-xl border border-amber-100">
            <span className="text-xl sm:text-2xl font-bold text-amber-700 font-mono tabular-nums block">
              5
            </span>
            <span className="text-xs text-slate-600 font-medium">Bônus Exclusivos (PDF)</span>
          </div>

          <div className="p-3 bg-white/70 rounded-xl border border-purple-100">
            <span className="text-xl sm:text-2xl font-bold text-purple-700 font-mono tabular-nums block">
              41
            </span>
            <span className="text-xs text-slate-600 font-medium">Páginas de Protocolos Reais</span>
          </div>
        </div>
      </div>

      {/* 8 Acervos Grid Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Os 8 Acervos Clínicos
            </h2>
            <p className="text-xs text-slate-500">
              Exatamente 20 recursos terapêuticos especializados por demanda clínica
            </p>
          </div>
          <button
            onClick={() => onNavigate('acervos')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLINICAL_COLLECTIONS.map((col) => (
            <div
              key={col.id}
              onClick={() => {
                onSelectCollection(col);
                onNavigate('acervos');
              }}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl ${col.bgPastel} border ${col.borderPastel} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    {getIcon(col.iconName)}
                  </div>
                  <span className="text-xs font-bold text-slate-700 font-mono">
                    20 Recursos
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {col.focusArea}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform">
                <span>Acessar acervo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Bonus Spotlight Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <FileText className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Bônus Exclusivos Anexados
              </h2>
              <p className="text-xs text-slate-500">
                Arquivos PDF reais integrados à área de membros prontos para download
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('bonus')}
            className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
          >
            <span>Ver todos os 5 bônus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BONUS_DOCUMENTS.slice(0, 3).map((bonus) => (
            <div
              key={bonus.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-800 uppercase tracking-wider text-[10px]">
                    Bônus {bonus.bonusNumber}
                  </span>
                  <span className="text-slate-700 font-mono text-[11px]">
                    {bonus.pagesCount} Páginas · PDF
                  </span>
                </div>

                <h3 
                  onClick={() => onSelectBonus(bonus)}
                  className="text-sm font-bold text-slate-900 leading-snug cursor-pointer hover:text-blue-600 transition-colors"
                >
                  {bonus.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectBonus(bonus)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors"
                >
                  Visualizar
                </button>

                <button
                  onClick={(e) => onDownloadBonus(bonus, e)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" />
                  <span>Baixar PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Resources Quick Access */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Recursos em Destaque (Acervo 1: TDAH)
            </h2>
            <p className="text-xs text-slate-500">
              Ferramentas de alta aplicação clínica prontas para atendimento
            </p>
          </div>
          <button
            onClick={() => onNavigate('acervos')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
          >
            <span>Ver os 20 de TDAH</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredResources.map((res) => (
            <div
              key={res.id}
              onClick={() => onSelectResource(res)}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group hover:border-blue-300"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono">
                    {res.id}
                  </span>
                  <span className="text-[11px] text-slate-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    ~{res.estimatedMinutes}m
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {res.objective}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Ver ficha técnica</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download History Section if any */}
      {downloadHistory.length > 0 && (
        <div className="p-5 rounded-2xl bg-slate-100/70 border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Materiais Baixados Recentemente ({downloadHistory.length})
            </h3>
            <span className="text-[11px] text-slate-500">Histórico de Sessão</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {downloadHistory.slice(0, 5).map((item) => (
              <span 
                key={item.id}
                className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 font-medium flex items-center gap-1.5"
              >
                <Download className="w-3 h-3 text-blue-600" />
                <span className="truncate max-w-[200px]">{item.title}</span>
                <span className="text-[10px] text-slate-400 font-mono">{item.timestamp}</span>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
