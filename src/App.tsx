import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { AcervosView } from './components/AcervosView';
import { BonusView } from './components/BonusView';
import { SessionModeView } from './components/SessionModeView';
import { FavoritesView } from './components/FavoritesView';
import { ResourceDetailModal } from './components/ResourceDetailModal';
import { BonusReaderModal } from './components/BonusReaderModal';
import { SearchModal } from './components/SearchModal';
import { ToastContainer, ToastMessage } from './components/Toast';
import { CLINICAL_COLLECTIONS } from './data/acervos';
import { ClinicalCollection, ClinicalResource, BonusDocument, DownloadHistoryItem } from './types/clinical';
import { generateBonusPdf, generateResourcePdf } from './utils/pdfGenerator';
import { ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<'dashboard' | 'acervos' | 'bonus' | 'session-mode' | 'favorites'>('dashboard');

  // Selected Data
  const [selectedCollection, setSelectedCollection] = useState<ClinicalCollection>(CLINICAL_COLLECTIONS[0]);
  const [selectedResource, setSelectedResource] = useState<ClinicalResource | null>(null);
  const [selectedBonus, setSelectedBonus] = useState<BonusDocument | null>(null);

  // Search Modal
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Favorites & Download History (persisted in localStorage)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('acervo_favorites');
      return saved ? JSON.parse(saved) : ['TDAH-01', 'TDAH-02', 'TEA-01'];
    } catch {
      return ['TDAH-01', 'TDAH-02'];
    }
  });

  const [downloadHistory, setDownloadHistory] = useState<DownloadHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem('acervo_downloads');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Toasts
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Save favorites & history
  useEffect(() => {
    try {
      localStorage.setItem('acervo_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem('acervo_downloads', JSON.stringify(downloadHistory));
    } catch (e) {
      console.warn('Storage failed', e);
    }
  }, [downloadHistory]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => {
      if (prev.includes(id)) {
        addToast('Removido', 'Recurso removido dos favoritos.', 'info');
        return prev.filter(item => item !== id);
      } else {
        addToast('Favorito Salvo', 'Recurso adicionado à sua biblioteca de favoritos.', 'success');
        return [...prev, id];
      }
    });
  };

  const recordDownload = (title: string, type: 'bonus' | 'resource', size: string = 'PDF') => {
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newItem: DownloadHistoryItem = {
      id: Date.now().toString(),
      title,
      type,
      timestamp: timeStr,
      size
    };
    setDownloadHistory(prev => [newItem, ...prev.slice(0, 19)]);
  };

  const handleDownloadBonus = (bonus: BonusDocument, e: React.MouseEvent) => {
    e.stopPropagation();
    generateBonusPdf(bonus);
    recordDownload(bonus.title, 'bonus', bonus.estimatedSize);
    addToast('Download Concluído', `O arquivo "${bonus.title}.pdf" foi gerado com sucesso.`, 'success');
  };

  const handleOpenInSession = (resource: ClinicalResource) => {
    setSelectedResource(null);
    setCurrentView('session-mode');
    addToast('Modo Sessão Ativado', `Recurso ${resource.id} carregado na sessão.`, 'info');
  };

  // If in Session Mode, render full-screen view
  if (currentView === 'session-mode') {
    return (
      <main className="bg-slate-900 min-h-screen">
        <SessionModeView
          initialResource={selectedResource}
          onExit={() => setCurrentView('dashboard')}
          onNotify={addToast}
        />
        <ToastContainer toasts={toasts} onDismiss={removeToast} />
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={(view) => {
          setCurrentView(view as any);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        favoritesCount={favorites.length}
        downloadCount={downloadHistory.length}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Viewport Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'dashboard' && (
          <DashboardView
            onNavigate={(view) => {
              setCurrentView(view as any);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCollection={(col) => {
              setSelectedCollection(col);
              setCurrentView('acervos');
            }}
            onSelectResource={(res) => setSelectedResource(res)}
            onSelectBonus={(bonus) => setSelectedBonus(bonus)}
            onDownloadBonus={handleDownloadBonus}
            favoritesCount={favorites.length}
            downloadHistory={downloadHistory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}

        {currentView === 'acervos' && (
          <AcervosView
            selectedCollection={selectedCollection}
            onSelectCollection={setSelectedCollection}
            onSelectResource={(res) => setSelectedResource(res)}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onDownloaded={(res) => recordDownload(`${res.id} - ${res.title}`, 'resource', '1.2 MB')}
            onNotify={addToast}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onNavigateToBonus={() => {
              setCurrentView('bonus');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'bonus' && (
          <BonusView
            onOpenBonus={(bonus) => setSelectedBonus(bonus)}
            onDownloaded={(bonus) => recordDownload(bonus.title, 'bonus', bonus.estimatedSize)}
            onNotify={addToast}
          />
        )}

        {currentView === 'favorites' && (
          <FavoritesView
            favorites={favorites}
            onSelectResource={(res) => setSelectedResource(res)}
            onToggleFavorite={toggleFavorite}
            onDownloaded={(res) => recordDownload(`${res.id} - ${res.title}`, 'resource', '1.2 MB')}
            onNotify={addToast}
            onNavigateToAcervos={() => setCurrentView('acervos')}
          />
        )}
      </main>

      {/* Global Modals */}
      <ResourceDetailModal
        resource={selectedResource}
        isFavorite={selectedResource ? favorites.includes(selectedResource.id) : false}
        onToggleFavorite={toggleFavorite}
        onOpenInSession={handleOpenInSession}
        onClose={() => setSelectedResource(null)}
        onDownloaded={(res) => recordDownload(`${res.id} - ${res.title}`, 'resource', '1.2 MB')}
        onNotify={addToast}
      />

      <BonusReaderModal
        bonus={selectedBonus}
        onClose={() => setSelectedBonus(null)}
        onDownloaded={(bonus) => recordDownload(bonus.title, 'bonus', bonus.estimatedSize)}
        onNotify={addToast}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResource={(res) => setSelectedResource(res)}
        onSelectBonus={(bonus) => setSelectedBonus(bonus)}
      />

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={removeToast} />

      {/* Professional Clinical Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">Acervo Clínico Infantil</span>
            <span>·</span>
            <span>Plataforma Profissional em Saúde Mental e Neuropsicologia</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              160 Recursos Clínicos & 5 Bônus em PDF
            </span>
            <span>·</span>
            <span>Material de Apoio à Prática Clínica Infantojuvenil</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-400 text-center leading-relaxed">
          Aviso Clínico: Os materiais e fichas técnicas desta plataforma destinam-se ao suporte da prática clínica de psicólogos e terapeutas qualificados. Não substituem o julgamento clínico individualizado, anamnese abrangente ou diagnóstico multiprofissional.
        </div>
      </footer>
    </div>
  );
}
