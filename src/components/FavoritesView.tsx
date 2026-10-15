import React from 'react';
import { Heart, ArrowRight, Download, Clock } from 'lucide-react';
import { CLINICAL_RESOURCES } from '../data/resources';
import { ClinicalResource } from '../types/clinical';
import { generateResourcePdf } from '../utils/pdfGenerator';

interface FavoritesViewProps {
  favorites: string[];
  onSelectResource: (res: ClinicalResource) => void;
  onToggleFavorite: (id: string) => void;
  onDownloaded: (res: ClinicalResource) => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
  onNavigateToAcervos: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onSelectResource,
  onToggleFavorite,
  onDownloaded,
  onNotify,
  onNavigateToAcervos
}) => {
  const favoriteResources = CLINICAL_RESOURCES.filter(r => favorites.includes(r.id));

  const handleDownload = (res: ClinicalResource, e: React.MouseEvent) => {
    e.stopPropagation();
    generateResourcePdf(res);
    onDownloaded(res);
    onNotify('Ficha Gerada', `Ficha técnica "${res.id}.pdf" exportada.`, 'success');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      <div className="bg-rose-50/70 p-6 sm:p-8 rounded-2xl border border-rose-200/80 shadow-xs">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span>Biblioteca Pessoal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Meus Recursos Favoritos
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Acesse rapidamente as ferramentas clínicas e fichas técnicas que você mais utiliza nos seus atendimentos e sessões presenciais ou online.
          </p>
        </div>
      </div>

      {favoriteResources.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200/80 p-8 space-y-3">
          <Heart className="w-12 h-12 text-slate-300 mx-auto" />
          <h2 className="text-base font-bold text-slate-800">
            Você ainda não favoritou nenhum recurso
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Navegue pelos 8 acervos clínicos e clique no ícone de coração nos cards para salvar seus recursos preferidos aqui.
          </p>
          <div className="pt-2">
            <button
              onClick={onNavigateToAcervos}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
            >
              Explorar Recursos Clínicos
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favoriteResources.map((res) => (
            <div
              key={res.id}
              onClick={() => onSelectResource(res)}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-rose-100 text-rose-800 text-xs font-bold font-mono tracking-wider">
                    {res.id}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{res.estimatedMinutes} min
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(res.id);
                      }}
                      className="p-1.5 rounded-md hover:bg-rose-50 text-rose-500 transition-colors"
                      title="Remover dos favoritos"
                    >
                      <Heart className="w-4 h-4 fill-rose-500" />
                    </button>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-rose-700 transition-colors">
                  {res.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {res.objective}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-rose-600 group-hover:underline flex items-center gap-1">
                  <span>Abrir Ficha</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => handleDownload(res, e)}
                  className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors border border-slate-200/80"
                  title="Baixar Ficha em PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
