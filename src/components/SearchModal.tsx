import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, FileText, ArrowRight } from 'lucide-react';
import { CLINICAL_RESOURCES } from '../data/resources';
import { BONUS_DOCUMENTS } from '../data/bonuses';
import { ClinicalResource, BonusDocument } from '../types/clinical';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResource: (res: ClinicalResource) => void;
  onSelectBonus: (bonus: BonusDocument) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResource,
  onSelectBonus
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!query.trim()) return { resources: [], bonuses: [] };
    const q = query.toLowerCase();

    const matchingResources = CLINICAL_RESOURCES.filter(
      r => r.title.toLowerCase().includes(q) ||
           r.id.toLowerCase().includes(q) ||
           r.objective.toLowerCase().includes(q) ||
           r.tags.some(t => t.toLowerCase().includes(q))
    ).slice(0, 8);

    const matchingBonuses = BONUS_DOCUMENTS.filter(
      b => b.title.toLowerCase().includes(q) ||
           b.subtitle.toLowerCase().includes(q) ||
           b.description.toLowerCase().includes(q) ||
           b.category.toLowerCase().includes(q)
    );

    return { resources: matchingResources, bonuses: matchingBonuses };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center p-4 pt-16 sm:pt-24"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50/70">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar em todos os 160 recursos e 5 bônus em PDF..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200/70 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() && (
            <div className="py-8 text-center text-xs text-slate-400">
              Digite uma palavra-chave como <span className="font-semibold text-slate-600">"freio"</span>, <span className="font-semibold text-slate-600">"anamnese"</span>, <span className="font-semibold text-slate-600">"rotina"</span>, <span className="font-semibold text-slate-600">"raiva"</span> ou o código de um recurso.
            </div>
          )}

          {query.trim() && results.resources.length === 0 && results.bonuses.length === 0 && (
            <div className="py-8 text-center text-xs text-slate-500">
              Nenhum material clínico encontrado com o termo "{query}".
            </div>
          )}

          {/* Bonus Results */}
          {results.bonuses.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                Bônus Exclusivos em PDF ({results.bonuses.length})
              </span>
              <div className="space-y-1.5">
                {results.bonuses.map((bonus) => (
                  <div
                    key={bonus.id}
                    onClick={() => {
                      onSelectBonus(bonus);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-emerald-50/60 border border-slate-100 hover:border-emerald-200 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 truncate block">
                          Bônus {bonus.bonusNumber}: {bonus.title}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate block">
                          {bonus.pagesCount} Páginas · {bonus.category}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Resources Results */}
          {results.resources.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                Recursos Terapêuticos ({results.resources.length})
              </span>
              <div className="space-y-1.5">
                {results.resources.map((res) => (
                  <div
                    key={res.id}
                    onClick={() => {
                      onSelectResource(res);
                      onClose();
                    }}
                    className="p-3 rounded-xl hover:bg-blue-50/60 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold font-mono shrink-0">
                        {res.id}
                      </span>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-900 truncate block">
                          {res.title}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate block">
                          Acervo {res.collectionId} · {res.ageRange}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Pressione Esc para fechar</span>
          <span className="font-mono">160 Recursos + 5 Bônus</span>
        </div>
      </div>
    </div>
  );
};
