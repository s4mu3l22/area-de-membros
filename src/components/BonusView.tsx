import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { BONUS_DOCUMENTS } from '../data/bonuses';
import { BonusDocument } from '../types/clinical';
import { generateBonusPdf } from '../utils/pdfGenerator';

interface BonusViewProps {
  onOpenBonus: (bonus: BonusDocument) => void;
  onDownloaded: (bonus: BonusDocument) => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const BonusView: React.FC<BonusViewProps> = ({
  onOpenBonus,
  onDownloaded,
  onNotify
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(BONUS_DOCUMENTS.map(b => b.category)));
    return ['all', ...cats];
  }, []);

  const filteredBonuses = useMemo(() => {
    return BONUS_DOCUMENTS.filter(b => {
      const matchesSearch = 
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.subtitle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || b.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleDownload = (bonus: BonusDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadingId(bonus.id);
    generateBonusPdf(bonus);
    onDownloaded(bonus);
    onNotify(
      'Download em Andamento',
      `O arquivo "${bonus.title}.pdf" foi gerado e enviado ao navegador.`,
      'success'
    );
    setTimeout(() => {
      setDownloadingId(null);
    }, 1500);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Required Header Layout */}
      <div className="bg-gradient-to-r from-blue-50/80 via-emerald-50/70 to-amber-50/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Biblioteca Exclusiva de Bônus · Acervo Clínico Infantil</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Bônus Exclusivos
          </h1>
          <p className="text-base font-semibold text-slate-700">
            Materiais complementares para enriquecer sua prática clínica
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            Acesse seus materiais extras e baixe os arquivos para utilizar quando precisar. Todos os 5 documentos originais foram mapeados e organizados com leitor interativo e exportação completa em PDF.
          </p>
        </div>

        {/* Real Inventory Status Banner */}
        <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              5 Arquivos Autênticos Integrados
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1.5 font-medium text-blue-700">
              <BookOpen className="w-4 h-4 text-blue-600" />
              41 Páginas de Protocolos
            </span>
          </div>
          <span className="text-[11px] text-slate-500 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            Acesso Irrestrito aos Membros do Acervo Clínico Infantil
          </span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Pesquisar bônus por nome, roteiro ou conteúdo..."
            className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xs"
          />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              {cat === 'all' ? 'Todos os Bônus' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Bonus Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredBonuses.map((bonus) => (
          <div
            key={bonus.id}
            className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-blue-300/80"
          >
            <div className="p-5 sm:p-6 space-y-4">
              {/* Card Header & Icon */}
              <div className="flex items-start justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/90 border border-blue-200/80 text-blue-700 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                    Bônus {bonus.bonusNumber}
                  </span>
                  <span className="text-xs text-slate-700 font-mono">
                    {bonus.pagesCount} Páginas · {bonus.estimatedSize}
                  </span>
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide block mb-1">
                  {bonus.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {bonus.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                  {bonus.subtitle}
                </p>
              </div>

              {/* Description based on real file */}
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                {bonus.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                {bonus.keyHighlights.slice(0, 2).map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                    <span className="line-clamp-1">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card Actions */}
            <div className="px-5 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => onOpenBonus(bonus)}
                className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:bg-white rounded-lg border border-slate-200/80 transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-slate-500" />
                <span>Visualizar material</span>
              </button>

              <button
                onClick={(e) => handleDownload(bonus, e)}
                disabled={downloadingId === bonus.id}
                className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors flex items-center gap-1.5 disabled:opacity-60"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === bonus.id ? 'Gerando...' : 'Baixar PDF'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBonuses.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 p-8">
          <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-slate-800">Nenhum bônus encontrado</h3>
          <p className="text-xs text-slate-500 mt-1">Tente ajustar os termos de busca ou filtros selecionados.</p>
        </div>
      )}
    </div>
  );
};
