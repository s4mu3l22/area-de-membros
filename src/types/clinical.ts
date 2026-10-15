export interface ClinicalResource {
  id: string; // e.g. TDAH-01
  collectionId: number; // 1 to 8
  title: string;
  ageRange: string;
  ageCategories: ('3-5' | '6-8' | '9-12')[];
  objective: string;
  tags: string[];
  materialsIncluded: string[];
  stepByStep: {
    inicio: string;
    desenvolvimento: string;
    fechamento: string;
  };
  telehealthAdaptation: string;
  clinicalTip: string; // O Pulo do Gato Clínico
  estimatedMinutes: number;
}

export interface ClinicalCollection {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  resourceCount: number;
  description: string;
  focusArea: string;
  accentColor: 'blue' | 'mint' | 'yellow' | 'purple' | 'rose' | 'amber' | 'emerald' | 'indigo';
  bgPastel: string;
  badgePastel: string;
  borderPastel: string;
  iconName: string;
}

export interface BonusDocument {
  id: string;
  bonusNumber: number;
  title: string;
  subtitle: string;
  category: 'Anamnese & Avaliação' | 'Devolutiva Parental' | 'Planejamento de Sessão' | 'Manejo Parental' | 'Psicoeducação';
  pagesCount: number;
  estimatedSize: string;
  description: string;
  targetAudience: string;
  sourceFile: string;
  keyHighlights: string[];
  sections: {
    title: string;
    pageLabel?: string;
    content: string;
    tableData?: { headers: string[]; rows: string[][] };
    scriptBoxes?: { label: string; text: string; situation?: string }[];
    checklistItems?: string[];
  }[];
}

export interface DownloadHistoryItem {
  id: string;
  title: string;
  type: 'bonus' | 'resource';
  timestamp: string;
  size: string;
}
