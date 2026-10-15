import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Heart, 
  Download, 
  Clock, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';
import { CLINICAL_COLLECTIONS } from '../data/acervos';
import { CLINICAL_RESOURCES } from '../data/resources';
import { ClinicalCollection, ClinicalResource } from '../types/clinical';
import { generateResourcePdf } from '../utils/pdfGenerator';

interface AcervosViewProps {
  selectedCollection: ClinicalCollection;
  onSelectCollection: (col: ClinicalCollection) => void;
  onSelectResource: (res: ClinicalResource) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onDownloaded: (res: ClinicalResource) => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onNavigateToBonus: () => void;
}

export const AcervosView: React.FC<AcervosViewProps> = ({
  selectedCollection,
  onSelectCollection,
  onSelectResource,
  favorites,
  onToggleFavorite,
  onDownloaded,
  onNotify,
  searchTerm,
  setSearchTerm,
  onNavigateToBonus
}) => {
  const [ageFilter, setAgeFilter] = useState<'all' | '3-5' | '6-8' | '9-12'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  // Filter resources for current collection
  const resourcesForCollection = useMemo(() => {
    return CLINICAL_RESOURCES.filter(r => r.collectionId === selectedCollection.id);
  }, [selectedCollection.id]);

  const filteredResources = useMemo(() => {
    return resourcesForCollection.filter(r => {
      const matchesSearch = 
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.objective.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
        r.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesAge = ageFilter === 'all' || r.ageCategories.includes(ageFilter);
      return matchesSearch && matchesAge;
    });
  }, [resourcesForCollection, searchTerm, ageFilter]);

  const handleDownload = (res: ClinicalResource, e: React.MouseEvent) => {
    e.stopPropagation();
    generateResourcePdf(res);
    onDownloaded(res);
    onNotify('Ficha Gerada', `Ficha técnica "${res.id}.pdf" exportada.`, 'success');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Collection Switcher Tabs (8 collections) */}
      <div className="p-2 bg-slate-100 rounded-2xl overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {CLINICAL_COLLECTIONS.map((col) => {
            const isSelected = selectedCollection.id === col.id;
            return (
              <button
                key={col.id}
                onClick={() => onSelectCollection(col)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
                  isSelected
                    ? 'bg-white text-blue-800 shadow-xs ring-1 ring-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-blue-600' : 'bg-slate-300'}`} />
                <span>Acervo {col.id}: {col.shortName}</span>
                <span className="text-[10px] text-slate-700 font-mono">
                  (20)
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Collection Header Banner */}
      <div className={`p-6 sm:p-8 rounded-2xl border ${selectedCollection.borderPastel} ${selectedCollection.bgPastel} transition-all`}>
        <div className="max-w-4xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700">
            <span>Coleção Clínica {selectedCollection.id} de 8</span>
            <span>·</span>
            <span>20 Recursos Específicos</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {selectedCollection.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
            {selectedCollection.description}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600">
            <span>Foco Clínico: <strong className="text-slate-900">{selectedCollection.focusArea}</strong></span>
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Buscar nos 20 recursos do Acervo ${selectedCollection.id}...`}
            className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-xs"
          />
        </div>

        {/* Age Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-slate-100 rounded-xl">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 hidden sm:inline flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Idade:
          </span>
          <button
            onClick={() => setAgeFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              ageFilter === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Todas as Idades
          </button>
          <button
            onClick={() => setAgeFilter('3-5')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              ageFilter === '3-5'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            3 a 5 anos
          </button>
          <button
            onClick={() => setAgeFilter('6-8')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              ageFilter === '6-8'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            6 a 8 anos
          </button>
          <button
            onClick={() => setAgeFilter('9-12')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              ageFilter === '9-12'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            9 a 12 anos
          </button>
        </div>
      </div>

      {/* Grid of Resources for Selected Collection */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredResources.map((res) => {
          const isFav = favorites.includes(res.id);
          return (
            <div
              key={res.id}
              onClick={() => onSelectResource(res)}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Header of Resource Card */}
                <div className="flex items-start justify-between gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold font-mono tracking-wider">
                    {res.id}
                  </span>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] text-slate-600 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      ~{res.estimatedMinutes} min
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(res.id);
                      }}
                      className={`p-1.5 rounded-md hover:bg-slate-100 transition-colors ${
                        isFav ? 'text-rose-500' : 'text-slate-400 hover:text-slate-600'
                      }`}
                      title={isFav ? 'Remover dos favoritos' : 'Favoritar'}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                  {res.title}
                </h3>

                {/* Age & Objective */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-slate-700 block">
                    Faixa etária: {res.ageRange}
                  </span>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {res.objective}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {res.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-blue-600 group-hover:underline flex items-center gap-1">
                  <span>Ver Ficha Técnica</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <button
                  onClick={(e) => handleDownload(res, e)}
                  className="p-1.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-slate-200/80"
                  title="Baixar Ficha em PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 p-8">
          <Layers className="w-10 h-10 text-slate-300 mx-auto mb-2" />
          <h3 className="text-sm font-bold text-slate-800">Nenhum recurso encontrado neste filtro</h3>
          <p className="text-xs text-slate-500 mt-1">Experimente selecionar "Todas as Idades" ou limpar a busca.</p>
        </div>
      )}

      {/* Summary Table of All 8 Collections as Requested in Etapa 4 */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Tabela-Resumo dos 8 Acervos do Sistema (160 Recursos)
            </h3>
            <p className="text-xs text-slate-500">
              Visão arquitetural completa de todas as coleções clínicas do Acervo Clínico Infantil
            </p>
          </div>
          <button
            onClick={onNavigateToBonus}
            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Ver Bônus em PDF</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-700 border-b border-slate-200 font-bold">
                <th className="p-3">Acervo</th>
                <th className="p-3">Temática Central</th>
                <th className="p-3">Objetivo Clínico</th>
                <th className="p-3 text-center">Total</th>
                <th className="p-3 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CLINICAL_COLLECTIONS.map((col) => (
                <tr 
                  key={col.id} 
                  className={`hover:bg-slate-50/80 transition-colors ${
                    selectedCollection.id === col.id ? 'bg-blue-50/40 font-semibold' : ''
                  }`}
                >
                  <td className="p-3 text-slate-900 font-bold">
                    Acervo {col.id}: {col.shortName}
                  </td>
                  <td className="p-3 text-slate-600">{col.focusArea}</td>
                  <td className="p-3 text-slate-600 max-w-md">{col.description}</td>
                  <td className="p-3 text-center font-mono font-bold text-blue-700">
                    20 recursos
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => onSelectCollection(col)}
                      className="px-2.5 py-1 text-xs text-blue-600 hover:text-blue-800 font-bold hover:underline"
                    >
                      {selectedCollection.id === col.id ? 'Ativo' : 'Navegar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
