import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { BonusDocument } from '../types/clinical';
import { generateBonusPdf } from '../utils/pdfGenerator';

interface BonusReaderModalProps {
  bonus: BonusDocument | null;
  onClose: () => void;
  onDownloaded: (bonus: BonusDocument) => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const BonusReaderModal: React.FC<BonusReaderModalProps> = ({
  bonus,
  onClose,
  onDownloaded,
  onNotify
}) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [copiedScriptIndex, setCopiedScriptIndex] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!bonus) return null;

  const currentSection = bonus.sections[activeSectionIndex] || bonus.sections[0];

  const handleCopyScript = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedScriptIndex(index);
    onNotify('Script Copiado!', 'Texto copiado com sucesso para sua área de transferência.', 'success');
    setTimeout(() => {
      setCopiedScriptIndex(null);
    }, 2500);
  };

  const handleDownload = () => {
    generateBonusPdf(bonus);
    onDownloaded(bonus);
    onNotify('Download Iniciado', `O arquivo "${bonus.title}.pdf" está sendo gerado e baixado.`, 'success');
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleCheckItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label={`Visualizador do material ${bonus.title}`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Top Bar */}
        <div className="px-5 py-4 border-b border-slate-200/80 bg-slate-50/70 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                <span>Bônus {bonus.bonusNumber} Exclusivo</span>
                <span>·</span>
                <span className="text-slate-500 font-normal">{bonus.category}</span>
                <span>·</span>
                <span className="text-slate-500 font-normal">{bonus.pagesCount} Páginas</span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {bonus.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg text-xs transition-colors border border-slate-200/80 hidden sm:flex items-center gap-1.5 font-medium"
              title="Imprimir documento"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir</span>
            </button>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Baixar PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Fechar visualizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            Seções:
          </span>
          <div className="flex items-center gap-1.5 min-w-0">
            {bonus.sections.map((section, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSectionIndex(idx)}
                className={`px-3 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                  activeSectionIndex === idx
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {section.pageLabel ? `${section.pageLabel}` : `Parte ${idx + 1}`}
              </button>
            ))}
          </div>
        </div>

        {/* Document Content Viewport */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 bg-slate-50/30">
          {/* Section Heading Banner */}
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-xs text-blue-600 font-bold mb-1">
              <span>{currentSection.pageLabel || `Seção ${activeSectionIndex + 1}`}</span>
              <span className="text-slate-400 font-normal">Documento Original Autêntico</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {currentSection.title}
            </h3>
          </div>

          {/* Section Main Prose Content */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-sans">
              {currentSection.content}
            </div>
          </div>

          {/* Interactive Script Boxes if present */}
          {currentSection.scriptBoxes && currentSection.scriptBoxes.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Scripts Prontos para Uso Clínico e Mensagens:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {currentSection.scriptBoxes.map((script, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 shadow-xs space-y-2 relative"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-900">
                        {script.situation || script.label}
                      </span>
                      <button
                        onClick={() => handleCopyScript(script.text, sIdx)}
                        className="px-2.5 py-1 rounded bg-white hover:bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300/80 flex items-center gap-1 transition-colors"
                      >
                        {copiedScriptIndex === sIdx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700">Copiado</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copiar Script</span>
                          </>
                        )}
                      </button>
                    </div>
                    <blockquote className="text-xs sm:text-sm text-slate-800 italic bg-white/70 p-3 rounded-lg border border-amber-100 leading-relaxed">
                      "{script.text}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Table Data if present */}
          {currentSection.tableData && (
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Matriz Comparativa de Intervenção
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100/90 text-slate-800 border-b border-slate-200">
                      {currentSection.tableData.headers.map((h, hIdx) => (
                        <th key={hIdx} className="p-2.5 font-bold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {currentSection.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-2.5 font-bold text-slate-900 align-top w-1/4">{row[0]}</td>
                        <td className="p-2.5 text-rose-700 align-top w-1/3 bg-rose-50/30">
                          <span className="font-semibold block text-[10px] uppercase text-rose-600 mb-0.5">O que NÃO fazer:</span>
                          {row[1]}
                        </td>
                        <td className="p-2.5 text-emerald-800 align-top w-5/12 bg-emerald-50/30">
                          <span className="font-semibold block text-[10px] uppercase text-emerald-600 mb-0.5">Faça Y (Plano B Clínico):</span>
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Checklist Items if applicable */}
          {currentSection.checklistItems && (
            <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2.5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Checklist de Execução Clínica:
              </h4>
              <div className="space-y-2">
                {currentSection.checklistItems.map((item, cIdx) => {
                  const checkId = `${activeSectionIndex}-${cIdx}`;
                  return (
                    <label 
                      key={cIdx} 
                      className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={!!checkedItems[checkId]}
                        onChange={() => toggleCheckItem(checkId)}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className={checkedItems[checkId] ? 'line-through text-slate-400' : ''}>
                        {item}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 py-3.5 border-t border-slate-200/80 bg-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSectionIndex(prev => Math.max(0, prev - 1))}
              disabled={activeSectionIndex === 0}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>
            <span className="text-xs text-slate-500 font-mono">
              {activeSectionIndex + 1} de {bonus.sections.length}
            </span>
            <button
              onClick={() => setActiveSectionIndex(prev => Math.min(bonus.sections.length - 1, prev + 1))}
              disabled={activeSectionIndex === bonus.sections.length - 1}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition-colors"
            >
              <span>Próxima</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-500 hidden sm:inline">
              Formato: Documento PDF Autêntico ({bonus.estimatedSize})
            </span>
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Arquivo Completo (PDF)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
