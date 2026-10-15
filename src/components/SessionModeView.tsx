import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Dices, 
  Sparkles, 
  Clock, 
  Plus, 
  Trash2,
  Check, 
  ArrowLeft,
  Smile,
  AlertTriangle,
  Flame,
  Moon
} from 'lucide-react';
import { ClinicalResource } from '../types/clinical';
import { CLINICAL_RESOURCES } from '../data/resources';

interface SessionModeViewProps {
  initialResource?: ClinicalResource | null;
  onExit: () => void;
  onNotify: (title: string, message: string, type?: 'success' | 'info') => void;
}

export const SessionModeView: React.FC<SessionModeViewProps> = ({
  initialResource,
  onExit,
  onNotify
}) => {
  // Timer State
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 minutes default
  const [isRunning, setIsRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState('Missão de Foco');

  // Emotion Zone State
  const [selectedZone, setSelectedZone] = useState<'blue' | 'green' | 'yellow' | 'red'>('green');

  // Quick Rules / Agreements State
  const [agreements, setAgreements] = useState<string[]>([
    'Ouvir a voz suave do colega',
    'Pedir ajuda quando a missão ficar difícil',
    'Respirar fundo antes de jogar'
  ]);
  const [newAgreement, setNewAgreement] = useState('');

  // Random Challenge Dice State
  const [currentDiceChallenge, setCurrentDiceChallenge] = useState<string | null>(
    'Role o dado para um Desafio Relâmpago!'
  );
  const [isRolling, setIsRolling] = useState(false);

  // Selected Resource in Session
  const [activeResource, setActiveResource] = useState<ClinicalResource | null>(
    initialResource || CLINICAL_RESOURCES[0]
  );

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isRunning) {
      setIsRunning(false);
      onNotify('Tempo Concluído!', 'O bloco de foco terminou. Hora da recarga cerebral!', 'info');
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds, onNotify]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const setTimerPreset = (mins: number, label: string) => {
    setIsRunning(false);
    setTimerSeconds(mins * 60);
    setTimerLabel(label);
  };

  const handleRollDice = () => {
    setIsRolling(true);
    const challenges = [
      'Faça uma mímica de sentimento sem falar nenhuma palavra!',
      'Desenhe um monstrinho engraçado de olhos fechados!',
      'Pule 10 vezes como sapo para recarregar o cérebro!',
      'Aperte as palmas das mãos uma contra a outra contando até 10!',
      'Invente um super-herói que tem medo de espirro!',
      'Cheire a florzinha 3 vezes e apague a velinha bem devagar!'
    ];
    setTimeout(() => {
      const picked = challenges[Math.floor(Math.random() * challenges.length)];
      setCurrentDiceChallenge(picked);
      setIsRolling(false);
    }, 400);
  };

  const addAgreement = () => {
    if (newAgreement.trim()) {
      setAgreements(prev => [...prev, newAgreement.trim()]);
      setNewAgreement('');
    }
  };

  const removeAgreement = (idx: number) => {
    setAgreements(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-4 sm:p-6 lg:p-8 flex flex-col space-y-6">
      {/* Top Header of Session Mode */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Acervo Clínico Infantil</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Modo Sessão Ativo · Tela Limpa e Otimizada
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 hidden sm:inline">
            Recurso Atual:
          </span>
          <select
            value={activeResource?.id || ''}
            onChange={(e) => {
              const res = CLINICAL_RESOURCES.find(r => r.id === e.target.value);
              if (res) setActiveResource(res);
            }}
            className="bg-slate-800 text-slate-200 text-xs rounded-lg px-3 py-1.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {CLINICAL_RESOURCES.slice(0, 20).map((r) => (
              <option key={r.id} value={r.id}>
                {r.id}: {r.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid in Session Mode */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left Col: Termômetro Emocional & Timer Lúdico (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Termômetro das 4 Zonas de Energia */}
          <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Como Está a Bateria do Seu Cérebro Agora?
              </h2>
              <span className="text-xs text-slate-400">Toque na sua zona</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Zona Azul */}
              <button
                onClick={() => setSelectedZone('blue')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  selectedZone === 'blue'
                    ? 'bg-blue-600/30 border-blue-400 text-blue-200 ring-2 ring-blue-500 scale-102'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Moon className="w-6 h-6 text-blue-400" />
                <span className="text-xs font-bold">Zona Azul</span>
                <span className="text-[10px] text-slate-300">Com sono / Devagar</span>
              </button>

              {/* Zona Verde */}
              <button
                onClick={() => setSelectedZone('green')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  selectedZone === 'green'
                    ? 'bg-emerald-600/30 border-emerald-400 text-emerald-200 ring-2 ring-emerald-500 scale-102'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Smile className="w-6 h-6 text-emerald-400" />
                <span className="text-xs font-bold">Zona Verde</span>
                <span className="text-[10px] text-slate-300">Pronto & Focado</span>
              </button>

              {/* Zona Amarela */}
              <button
                onClick={() => setSelectedZone('yellow')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  selectedZone === 'yellow'
                    ? 'bg-amber-600/30 border-amber-400 text-amber-200 ring-2 ring-amber-500 scale-102'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <span className="text-xs font-bold">Zona Amarela</span>
                <span className="text-[10px] text-slate-300">Agitado / Inquieto</span>
              </button>

              {/* Zona Vermelha */}
              <button
                onClick={() => setSelectedZone('red')}
                className={`p-4 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                  selectedZone === 'red'
                    ? 'bg-rose-600/30 border-rose-400 text-rose-200 ring-2 ring-rose-500 scale-102'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:bg-slate-800'
                }`}
              >
                <Flame className="w-6 h-6 text-rose-400" />
                <span className="text-xs font-bold">Zona Vermelha</span>
                <span className="text-[10px] text-slate-300">Explosão / Raiva</span>
              </button>
            </div>

            {/* Micro Estratégia de Regulação */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-xs text-slate-300 flex items-center justify-between gap-3">
              <span>
                {selectedZone === 'blue' && 'Estratégia: Faça 10 polichinelos ou beba água gelada para despertar o corpo.'}
                {selectedZone === 'green' && 'Estratégia: Excelente! Seu cérebro está na velocidade ideal de cruzeiro.'}
                {selectedZone === 'yellow' && 'Estratégia: Acione o freio amarelo: respire fundo pelo nariz e aperte a bolinha antiestresse.'}
                {selectedZone === 'red' && 'Estratégia: Pausa imediata. Pare tudo, encoste as costas no chão e solte o ar devagar.'}
              </span>
              <span className="text-[10px] text-slate-500 font-mono uppercase">Co-regulação</span>
            </div>
          </div>

          {/* Cronômetro Lúdico de Blocos */}
          <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
                  {timerLabel}
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setTimerPreset(10, 'Missão 10 Minutos')}
                  className="px-2.5 py-1 text-xs rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                >
                  10 min
                </button>
                <button
                  onClick={() => setTimerPreset(15, 'Bloco de 15 Minutos')}
                  className="px-2.5 py-1 text-xs rounded bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                >
                  15 min
                </button>
                <button
                  onClick={() => setTimerPreset(3, 'Pausa da Recarga')}
                  className="px-2.5 py-1 text-xs rounded bg-emerald-700 hover:bg-emerald-600 text-emerald-100 transition-colors"
                >
                  3 min pausa
                </button>
              </div>
            </div>

            {/* Big Digital Display */}
            <div className="text-center py-4 bg-slate-900/90 rounded-xl border border-slate-700/80">
              <span className="text-6xl sm:text-7xl font-mono font-bold tracking-widest text-blue-400 tabular-nums">
                {formatTime(timerSeconds)}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center gap-2 ${
                  isRunning
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pausar</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Iniciar Tempo</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  setIsRunning(false);
                  setTimerSeconds(600);
                }}
                className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-semibold transition-colors flex items-center gap-2"
                title="Reiniciar cronômetro"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Resetar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Dado Maluco & Combinados da Sessão (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* O Dado Maluco de Desafios Relâmpago */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 to-slate-800/90 border border-amber-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Dices className="w-5 h-5 text-amber-400" />
                <h3 className="text-sm font-bold text-amber-200 uppercase tracking-wider">
                  Dado Maluco: Desafio Relâmpago
                </h3>
              </div>
              <button
                onClick={handleRollDice}
                disabled={isRolling}
                className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                <Dices className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
                <span>Rolar Dado</span>
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 text-center min-h-[90px] flex items-center justify-center">
              <p className="text-sm sm:text-base font-semibold text-amber-100 italic">
                "{currentDiceChallenge}"
              </p>
            </div>
          </div>

          {/* Lousa de Combinados da Sessão */}
          <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                Combinados da Sessão de Hoje
              </h3>
              <span className="text-xs text-slate-500 font-mono">
                {agreements.length} Ativos
              </span>
            </div>

            <div className="space-y-2">
              {agreements.map((agr, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/60 text-xs text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{agr}</span>
                  </div>
                  <button
                    onClick={() => removeAgreement(idx)}
                    className="text-slate-500 hover:text-rose-400 p-1"
                    title="Remover combinado"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Add new agreement */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="text"
                value={newAgreement}
                onChange={(e) => setNewAgreement(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addAgreement()}
                placeholder="Novo combinado lúdico..."
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                onClick={addAgreement}
                className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold"
                title="Adicionar"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Tip for Active Resource */}
          {activeResource && (
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-200 space-y-1">
              <span className="font-bold block text-blue-300">
                Pulo do Gato Clínico ({activeResource.id}):
              </span>
              <p className="italic text-slate-300">
                "{activeResource.clinicalTip}"
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
