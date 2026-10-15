import React from 'react';
import { 
  X, 
  Download, 
  Heart, 
  MonitorPlay, 
  CheckCircle2, 
  Video, 
  Lightbulb, 
  Layers,
  Clock,
  Printer
} from 'lucide-react';
import { ClinicalResource } from '../types/clinical';
import { generateResourcePdf } from '../utils/pdfGenerator';

interface ResourceDetailModalProps {
  resource: ClinicalResource | null;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenInSession: (resource: ClinicalResource) => void;
  onClose: () => void;
  onDownloaded: (resource: ClinicalResource) => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const ResourceDetailModal: React.FC<ResourceDetailModalProps> = ({
  resource,
  isFavorite,
  onToggleFavorite,
  onOpenInSession,
  onClose,
  onDownloaded,
  onNotify
}) => {
  if (!resource) return null;

  const handleDownload = () => {
    generateResourcePdf(resource);
    onDownloaded(resource);
    onNotify('Ficha em PDF Gerada', `O arquivo "${resource.id}.pdf" foi exportado com sucesso.`, 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label={`Ficha Técnica do recurso ${resource.title}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200/80 bg-slate-50/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold tracking-wider font-mono">
              {resource.id}
            </span>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {resource.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  ~{resource.estimatedMinutes} minutos
                </span>
                <span>·</span>
                <span>Acervo {resource.collectionId}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleFavorite(resource.id)}
              className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
                isFavorite
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-xs transition-colors border border-slate-200/80 hidden sm:flex items-center gap-1"
              title="Imprimir ficha"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownload}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar Ficha (PDF)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
          {/* Indicado Para */}
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-1">
            <h3 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Indicado para
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              {resource.ageRange}
            </p>
            <p className="text-[11px] text-blue-700 italic">
              * Nota clínica: A adequação da ferramenta deve sempre considerar a avaliação individual do neurodesenvolvimento e necessidades específicas de cada criança.
            </p>
          </div>

          {/* Objetivo Clínico-Terapêutico */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Objetivo Clínico-Terapêutico
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              {resource.objective}
            </p>
          </div>

          {/* Anexos e Materiais Inclusos */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              Anexos e Materiais Inclusos na Plataforma
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {resource.materialsIncluded.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Passo a Passo da Aplicação */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Passo a Passo da Aplicação
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-blue-700 block text-xs uppercase mb-1">
                  1. Início & Enquadre
                </span>
                <p className="leading-relaxed">{resource.stepByStep.inicio}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-blue-700 block text-xs uppercase mb-1">
                  2. Desenvolvimento
                </span>
                <p className="leading-relaxed">{resource.stepByStep.desenvolvimento}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="font-bold text-blue-700 block text-xs uppercase mb-1">
                  3. Fechamento & Transferência para o Cotidiano
                </span>
                <p className="leading-relaxed">{resource.stepByStep.fechamento}</p>
              </div>
            </div>
          </div>

          {/* Adaptação para Telessaúde */}
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
              <Video className="w-4 h-4 text-emerald-700" />
              Adaptação para Telessaúde (Online)
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {resource.telehealthAdaptation}
            </p>
          </div>

          {/* O Pulo do Gato Clínico */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/90 space-y-1.5">
            <h3 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              O Pulo do Gato Clínico
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
              "{resource.clinicalTip}"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200/80 bg-slate-50/80 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenInSession(resource)}
              className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <MonitorPlay className="w-4 h-4" />
              <span>Abrir no Modo Sessão</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Ficha Completa (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
