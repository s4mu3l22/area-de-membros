import { BonusDocument } from '../types/clinical';

export const BONUS_DOCUMENTS: BonusDocument[] = [
  {
    id: 'bonus-01',
    bonusNumber: 1,
    title: 'Fichas de Anamnese Infantil Estruturadas',
    subtitle: 'Mapeamento Clínico, Desenvolvimento e Dinâmica Familiar (Dos 3 aos 12 anos)',
    category: 'Anamnese & Avaliação',
    pagesCount: 18,
    estimatedSize: '3.8 MB',
    description: 'Protocolo completo de acolhimento e investigação inicial. Inclui Guia Rápido com 5 diretrizes para a psicóloga, Ficha Completa Parte 1 (Identificação, Demanda e Marcos do Desenvolvimento) e Parte 2 (Rotina, Regulação Emocional, Dinâmica Familiar e Vida Escolar), Anexo Especial para Pais Separados/Divorciados, e Checklist de Fechamento da 1ª Sessão com Contrato Terapêutico Verbal e Registro de Acordos.',
    targetAudience: 'Psicólogas Clínicas, Neuropsicólogos e Terapeutas Infantojuvenis',
    sourceFile: 'Fichas_de_Anamnese_Infantil_Estruturadas.pdf',
    keyHighlights: [
      '5 Diretrizes de postura clínica para conduzir a 1ª entrevista sem tom inquisitório',
      'Mapeamento completo dos marcos neuropsicomotores e sensoriais (desfralde, linguagem, sono)',
      'Anexo Especial e neutro para famílias em divórcio, litígio ou guarda compartilhada',
      'Checklist de 10 minutos para fechamento, sigilo e contrato terapêutico verbal'
    ],
    sections: [
      {
        title: 'Guia Rápido para a Psicóloga: Como Conduzir a Primeira Entrevista',
        pageLabel: 'Páginas 1 a 2',
        content: `A sessão de anamnese na clínica infantil não é um simples preenchimento de protocolo burocrático: é o momento inaugural de construção da aliança terapêutica com a família. Quando os pais chegam ao consultório, frequentemente trazem consigo uma carga invisível de culpa, exaustão, medo do julgamento e sensação de fracasso.

As 5 Diretrizes Fundamentais de Postura Clínica:
1. Acolha a angústia parental antes de investigar o sintoma: Pais que se sentem julgados se defendem; pais que se sentem compreendidos colaboram. Valide o cansaço familiar antes de focar nos comportamentos disruptivos.
2. Utilize a ficha como bússola, nunca como barreira no contato visual: Conheça profundamente a estrutura para que a conversa flua como diálogo clínico orgânico. Note silêncios, suspiros e trocas de olhares.
3. Traduza a "queixa comportamental" em "necessidade emocional": Pergunte o que costuma acontecer imediatamente antes para fazer psicoeducação sutil de que todo sintoma comunica algo.
4. Pratique a neutralidade empática e evite alianças trianguladas: Nunca seja juíza de conflitos de casal. Reposicione o foco no bem-estar e desenvolvimento da criança.
5. Conduza o tempo com firmeza gentil e feche com direcionamento claro: Reserve obrigatoriamente os últimos 10 minutos para alinhamento e contrato terapêutico verbal.`
      },
      {
        title: 'Ficha de Anamnese Infantil Completa — Parte 1',
        pageLabel: 'Páginas 3 a 8',
        content: `Investigação aprofundada:
• Identificação da Criança e Dados Sociodemográficos
• Dados dos Responsáveis, Composição do Núcleo Familiar e Rede de Apoio
• Dados Escolares e Acompanhamentos Multidisciplinares (Pediatria, Neuropediatria, TO, Fono, Psicopedagogia)
• Mapeamento da Demanda Clínica e Queixa Principal nas palavras dos pais
• Histórico do Sintoma, Gatilhos e Tentativas Prévias de Solução
• Histórico Gestacional, Parto e Condições Neonatais (Apgar, UTI, Puerpério)
• Alimentação Inicial, Desmame e Introdução Alimentar
• Desenvolvimento Neuropsicomotor (Sustentação, Marcha, Coordenação Motora Fina)
• Desenvolvimento da Linguagem e Comunicação (Balbucios, Frases, Ecolalia, Atrasos)
• Controle Esfincteriano e Desfralde (Enurese diurna/noturna, Encoprese, Retenção)
• Hábitos Orais e Objetos Transicionais (Chupeta, Dedo, Onicofagia, Paninho)
• Histórico Médico Geral, Doenças Crônicas, Medicações e Histórico Familiar (TDAH, TEA, Ansiedade)`
      },
      {
        title: 'Ficha de Anamnese Infantil Completa — Parte 2',
        pageLabel: 'Páginas 9 a 13',
        content: `Mapeamento da Rotina e Funcionamento Psicoafetivo:
• Rotina Diária de Segunda a Domingo e Atividades Extracurriculares
• Qualidade e Organização do Sono (Rituais, Despertares, Pesadelos, Bruxismo, Terror Noturno)
• Alimentação Atual e Relação com a Comida (Seletividade sensorial, Compulsão)
• Uso de Telas (Tempo diário, Supervisão, Reação à retirada do aparelho)
• O Brincar e Autonomia no Autocuidado (Sustentação do foco, Perder em jogos, Banho, Roupas)
• Perfil Afetivo & Social vs Perfil Comportamental & Atencional
• Regulação Emocional e Tolerância à Frustração (Reação ao "NÃO", Crises de Birra/Explosão, Auto/Heteroagressividade)
• Medos, Ansiedades e Sintomas Psicossomáticos (Somatizações abdominais, Cefaleia, Rituais)
• Qualidades e Potencialidades da Criança (Forças e Talentos admirados pela família)
• Dinâmica Familiar, Vínculo com Genitores e Estilo Parental (Manejo de regras, Alinhamento educativo)
• Clima Familiar e Eventos Estressores Recentes (Lutos, Mudanças, Desemprego)
• Vida Escolar e Relacionamento com Pares (Adaptação, Lição de casa, Bullying)`
      },
      {
        title: 'Anexo Especial: Pais Separados, Divorciados ou em Conflito Conjugal',
        pageLabel: 'Páginas 14 a 15',
        content: `Instrumento exclusivo para mapeamento da dinâmica de co-parentalidade:
• Histórico da separação e como a notícia foi comunicada à criança
• Exposição a brigas verbais, desqualificações ou conflitos abertos entre genitores
• Arranjo de guarda (Compartilhada, Unilateral, Litígio) e rotina entre as duas casas
• Consistência de regras e limites entre os dois lares
• Comportamento da criança nas transições de ida e retorno
• Qualidade da comunicação co-parental e novos relacionamentos (padrasto/madrasta)
• Mapeamento de conflitos de lealdade e triangulação ("leva e traz" de recados, culpa por se divertir)`
      },
      {
        title: 'Checklist de Fechamento da 1ª Sessão & Contrato Verbal',
        pageLabel: 'Páginas 16 a 18',
        content: `Roteiro prático para os 10 minutos finais da entrevista:
1. Explicação da Avaliação Inicial e Ludoterapia: Como o brincar é a linguagem natural onde a criança elabora conflitos.
2. Como Preparar a Criança para a 1ª Sessão: Script claro para os pais falarem em casa sem criar medo ou ideia de castigo.
3. Sigilo Terapêutico na Clínica Infantil: Pacto de confidencialidade com a criança e comunicação por temas nas devolutivas.
4. Frequência das Sessões e Encontros de Devolutiva: Periodicidade de sessões individuais e parentais.
5. Política de Faltas, Cancelamentos com 24h e Honorários.
6. O Papel Ativo da Família: Metáfora dos 50 minutos de consultório versus as outras 167 horas em casa.
7. Tabela de Registro de Acordos e Assinatura/Carimbo CRP da Psicóloga.`
      }
    ]
  },
  {
    id: 'bonus-02',
    bonusNumber: 2,
    title: 'Roteiro e Scripts de Devolutiva para Pais',
    subtitle: 'Como comunicar seu raciocínio clínico com clareza, ética e segurança inabalável na clínica infantil',
    category: 'Devolutiva Parental',
    pagesCount: 6,
    estimatedSize: '1.9 MB',
    description: 'Manual definitivo para transformar a sessão de devolutiva em uma intervenção de alta potência terapêutica. Elimina os 3 maiores erros da terapeuta, ensina a Fórmula Áurea de Tradução do Lúdico em Linguagem Clínica, fornece scripts exatos para as 5 perguntas mais difíceis dos pais e disponibiliza a Ficha Imprimível de Preparação e Registro de Devolutiva.',
    targetAudience: 'Psicólogas que desejam eliminar o abandono precoce e transformar pais em coterapeutas',
    sourceFile: 'Roteiro_e_Scripts_de_Devolutiva_para_Pais.pdf',
    keyHighlights: [
      'Os 3 erros que fazem a psicóloga parecer insegura na devolutiva',
      'Estrutura de Ouro minuto a minuto (Passos 1 a 5 cronometrados)',
      'Fórmula Prática: Tradução da brincadeira lúdica em raciocínio técnico',
      'Scripts palavra por palavra para as 5 perguntas mais temidas dos pais'
    ],
    sections: [
      {
        title: 'O Verdadeiro Papel da Devolutiva & Os 3 Erros Fatais',
        pageLabel: 'Página 1',
        content: `A criança é o paciente no tapete lúdico, mas são os pais que sustentam o contrato terapêutico. Para um leigo, o que acontece dentro da sala parece apenas "uma hora de brincadeira cara". Quando não compreendem o raciocínio clínico por trás do brincar, instala-se a desvalorização e o abandono precoce.

Os 3 Erros que Fazem a Psicóloga Parecer Insegura:
• Erro 1: O "Relatório de Recreação": Citar o brinquedo (ex: "Jogamos Uno e massinha") sem atrelá-lo imediatamente à habilidade psicológica avaliada ou estimulada faz os pais pensarem que poderiam fazer o mesmo em casa de graça.
• Erro 2: Uso excessivo de jargão técnico ("Psicologuês"): Conceitos abstratos sem tradução cotidiana afastam os responsáveis. Eles assentem por vergonha, mas saem sentindo que você não conhece o filho real deles.
• Erro 3: Entrar na posição de Julgadora dos Pais ou Defensora da Criança: Tom acusatório ("Vocês não dão limites") ou defensivo gera reatividade e evasão.`
      },
      {
        title: 'A Estrutura de Ouro da Sessão de Devolutiva (Passo a Passo)',
        pageLabel: 'Página 2',
        content: `Cronograma estruturado para conduzir 50 minutos de sessão parental com excelência:
• Passo 1: Acolhimento e Escuta da Percepção Parental (Minutos 0 a 10)
• Passo 2: Retomada da Demanda Inicial e Objetivos da Anamnese (Minutos 10 a 15)
• Passo 3: Traduzindo o Lúdico em Linguagem Clínica (Minutos 15 a 30) - Fórmula: Nome da Brincadeira + Objetivo Clínico + O que foi observado na criança.
• Passo 4: Apontamento de Avanços Sutis e Pontos em Construção (Minutos 30 a 40)
• Passo 5: Plano de Ação Prático para Casa (Minutos 40 a 50) - Dois combinados claros para a rotina.`
      },
      {
        title: 'Exemplos Práticos de Tradução do Lúdico em 4 Perfis',
        pageLabel: 'Página 3',
        content: `Casos Clínicos Traduzidos:
1. Criança Ansiosa / Medo de Errar: Brincadeira de Desenho sem Borracha / Torre instável (Jenga).
Foco clínico: Flexibilidade cognitiva e dessensibilização sistemática ao erro.

2. Criança Agressiva / Baixa Tolerância à Frustração: Jogos de tabuleiro com regras e perdas.
Foco clínico: O jogo funciona como laboratório seguro de frustração com co-regulação do adulto.

3. Criança com TDAH (Impulsividade e Desatenção): Jogos de estratégia sequencial e maquetes.
Foco clínico: Controle inibitório pré-frontal e técnica de pausa planejada "Pare, Pense e Aja".

4. Criança em Luto / Divórcio / Mudança: Casinha e brincadeira projetiva.
Foco clínico: Emprestar sentimentos aos bonecos para digerir dores profundas e reconstruir abrigos seguros.`
      },
      {
        title: 'Scripts para Responder às 5 Perguntas Mais Temidas',
        pageLabel: 'Páginas 4 a 5',
        content: `Scripts prontos para memorizar e aplicar com firmeza:`,
        scriptBoxes: [
          {
            situation: 'Pergunta 1: "Mas ela só brinca na sessão?"',
            label: 'Script Clínico',
            text: 'Se eu o colocasse sentado conversando, o cérebro dele não teria repertório abstrato. Para o adulto é a palavra; para a criança, é o brincar. Aqui, cada brinquedo tem intencionalidade técnica cirúrgica para avaliar regras, frustrações e projetar angústias sem barreiras de defesa.'
          },
          {
            situation: 'Pergunta 2: "Quando a gente vai começar a ver resultado?"',
            label: 'Script Clínico',
            text: 'Resultados aparecem em ondas: primeiro no consultório, depois com oscilações em casa e estabilização final. Dividimos o tratamento em ciclos de avaliação para medir metas. O sucesso depende da assiduidade, aplicação em casa e parceria com a escola.'
          },
          {
            situation: 'Pergunta 3: "Não era para isso já ter melhorado?" (Recaídas)',
            label: 'Script Clínico',
            text: 'Uma recaída não significa voltar à estaca zero; o desenvolvimento funciona como ondas do mar. Ao colocarmos limites firmes, a criança passa pela "explosão de extinção", testando se o comportamento antigo ainda funciona. Vamos analisar juntos o gatilho dessa crise.'
          },
          {
            situation: 'Pergunta 4: "O que exatamente ela falou para você na sessão?" (Sigilo)',
            label: 'Script Clínico',
            text: 'Para a terapia funcionar, preciso proteger o sigilo e a confiança da criança. Se ela souber que tudo é repassado palavra por palavra, criará barreiras. Eu guardo o conteúdo literal, mas compartilho os temas emocionais e riscos: garanto que ela não falou mal de vocês, mas expressou necessidades afetivas.'
          },
          {
            situation: 'Pergunta 5: "Você acha que ela precisa ir ao médico / tomar remédio?"',
            label: 'Script Clínico',
            text: 'Diagnóstico e medicação são atos exclusivos do médico. Sugerir avaliação médica é uma investigação 360 graus para verificar se há uma questão neurobiológica exigindo esforço triplo da criança. A terapia ensina, e o suporte médico pode colocar os "óculos" necessários.'
          }
        ]
      },
      {
        title: 'Ficha de Preparação e Registro de Devolutiva Parental',
        pageLabel: 'Página 6',
        content: `Template de 1 página para preenchimento pré-devolutiva:
1. Escuta Inicial dos Pais
2. Mapa de Forças e Potencialidades da Criança
3. Demandas e Objetivos Clínicos Trabalhados (Regulação, Frustração, Atenção, Habilidades Sociais)
4. Tabela de Tradução do Lúdico (Recurso Utilizado -> Habilidade Estimulada -> Resposta da Criança)
5. Balanço de Evolução e Pontos em Construção
6. Plano de Ação Prático para Casa e Assinatura/Carimbo CRP.`
      }
    ]
  },
  {
    id: 'bonus-03',
    bonusNumber: 3,
    title: 'Checklist e Sistema de Planejamento de Sessão Infantil em 5 Minutos',
    subtitle: 'Guia Prático Avançado para Psicólogas Clínicas | Alta Performance e Intencionalidade Terapêutica',
    category: 'Planejamento de Sessão',
    pagesCount: 6,
    estimatedSize: '1.7 MB',
    description: 'Método estruturado para eliminar a angústia de improvisar no armário 3 minutos antes da criança chegar. Apresenta o ritual cronometrado de 5 minutos antes da sessão, a Matriz de Escolha Rápida e Plano B para 6 situações críticas (resistência, silêncio, agitação extrema, choro na porta, recusa por achar coisa de bebê), Ficha Imprimível de Planejamento e o Planner Semanal de Agenda Clínica Infantil.',
    targetAudience: 'Psicólogas que buscam intencionalidade clínica, economia de tempo e segurança técnica',
    sourceFile: 'Checklist_e_Sistema_de_Planejamento_de_Sessao_Infantil_em_5_Minutos.pdf',
    keyHighlights: [
      'O Método "Sessão com Intencionalidade": trocando entretenimento por objetivo clínico',
      'Ritual de 5 minutos cronometrado (1 min para cada pilar do atendimento)',
      'Matriz de Escolha Rápida e Plano B para 6 situações clínicas de crise',
      'Ficha Imprimível de Planejamento de Sessão e Planner Semanal de Agenda'
    ],
    sections: [
      {
        title: 'O Método "Sessão com Intencionalidade"',
        pageLabel: 'Página 1',
        content: `O maior ralo de energia da psicóloga clínica infantil não é o atendimento em si, mas a angústia de abrir o armário 3 minutos antes do paciente chegar e tentar adivinhar qual jogo "vai preencher o tempo". A prática clínica sem planejamento prévio transforma a terapia em recreação sem rumo.

A Virada de Chave Clínica:
• Escolher um joguinho para passar o tempo: Foco no entretenimento, na distração ou no "fazer algo". Gera ansiedade na terapeuta, dispersão na criança e estagnação no tratamento.
• Selecionar um recurso mediador por demanda clínica: Foco na aliança terapêutica e no objetivo central. O jogo, a história ou o desenho não são o fim, mas o veículo pelo qual a regulação, a reestruturação cognitiva ou a elaboração do luto acontecem.

Pilares da Intencionalidade:
• Clareza Diagnóstica: Saber exatamente qual hipótese ou meta estamos testando hoje.
• Economia de Tempo: Preparar o setting em 5 minutos cronometrados.`
      },
      {
        title: 'O Checklist de 5 Minutos Antes da Sessão (Passo a Passo)',
        pageLabel: 'Página 2',
        content: `Execute este ritual cronometrado antes de cada atendimento:
1. Revisão rápida do último prontuário (1 min): Leia apenas a última linha do registro anterior: qual foi o gancho deixado? Qual tarefa com os pais ficou pendente?
2. Definição de 1 único Objetivo Clínico Central para hoje (1 min): Escreva uma frase curta (ex: "Favorecer a expressão da raiva contida frente à separação").
3. Seleção do Recurso Principal (1 min): Adapte à faixa etária e ao nível de energia da criança que está chegando.
4. Seleção do "Recurso Plano B" (1 min): Tenha sempre uma alternativa de menor complexidade caso o primeiro falhe.
5. Preparação do setting físico ou aba digital (1 min): Organize a mesa, retire excessos de estímulos visuais que distraiam crianças com TDAH, ou abra as ferramentas interativas se for online.
Regra de Ouro: Use um alarme silencioso no celular para controlar os blocos de 5 minutos entre um paciente e outro.`
      },
      {
        title: 'Matriz de Escolha Rápida e Plano B (Situações 1 a 6)',
        pageLabel: 'Páginas 3 a 4',
        content: `Guia de intervenção imediata para crises comuns no consultório:`,
        tableData: {
          headers: ['Situação Crítica', 'O que NÃO Fazer', 'Faça Y (Plano B Clínico)'],
          rows: [
            ['1. Criança chega e não quer falar nada (Silêncio / Resistência)', 'Ficar fazendo perguntas diretas ("O que aconteceu na escola?", "Por que está calado?").', 'Inicie uma atividade paralela (desenho livre ou massinha ao lado dela, sem olhar fixamente). Diga: "Hoje podemos ficar em silêncio enquanto construímos algo se preferir".'],
            ['2. Criança extremamente agitada e sem foco (Hiperativa / Desregulada)', 'Tentar impor um jogo de tabuleiro com regras rígidas e sentado na cadeira.', 'Proponha imediatamente um circuito de regulação motora (pular na mini-cama elástica, esmagar argila pesada, empurrar a parede por 10s) para descarregar a adrenalina antes da fala.'],
            ['3. Chora na porta e recusa separar-se da mãe (Ansiedade de Separação)', 'Arrancar a criança à força ou culpabilizar a mãe por "dar colo demais".', 'Crie um ritual de transição visual (carimbo invisível de coragem no pulso da mãe e da criança) ou convide a mãe para entrar nos primeiros 3 minutos sentada em cadeira neutra.'],
            ['4. Recusa folha/jogo dizendo "é coisa de bebê" (Resistência / Autoimagem)', 'Insistir dizendo que o exercício é importante ou obrigatório.', 'Inverta o papel: diga "Você tem razão, isso está muito fácil para sua idade. Que tal você assumir o papel de terapeuta e criar um desafio mais difícil para mim?".'],
            ['5. Quer mudar as regras o tempo todo para não perder (Baixa Tolerância)', 'Bater de frente, discutir quem ganhou ou aplicar punições.', 'Valide a emoção e introduza o "Dado Maluco": jogue com regras flexíveis na primeira rodada e, na segunda, combine que a regra é fixa para treinar o ganho e a perda seguro.'],
            ['6. Termina a atividade em 5 min e sobram 40 min (Vazio Terapêutico)', 'Deixar a criança solta correndo pelo consultório sem supervisão ativa.', 'Abra o "Baú dos Desafios Relâmpago" (caixa com cartões de improviso: mímica de sentimentos, desenho de olhos fechados, inventar um super-herói com defeitos).']
          ]
        }
      },
      {
        title: 'Ficha Imprimível de Planejamento Individual & Planner Semanal',
        pageLabel: 'Páginas 5 a 6',
        content: `Modelos operacionais:
• Ficha de Planejamento Individual: Paciente, Data, Sessão Nº, Demanda Central (Vínculo, Regulação, Ansiedade, TDAH, Luto, Família, Comportamento, Autoestima), Recurso Principal, Plano B, Adaptações e Registro Rápido Pós-Sessão em 3 minutos (Engajamento, Fala marcante, Gancho para próxima sessão).
• Planner Semanal de Agenda Clínica Infantil: De Segunda a Sábado com Pacientes/Horários, Materiais a Imprimir/Separar e Devolutivas com Pais, somado ao Checklist de Logística Semanal de sexta-feira à tarde.`
      }
    ]
  },
  {
    id: 'bonus-04',
    bonusNumber: 4,
    title: 'Guia Prático de Manejo com Pais Difíceis',
    subtitle: 'Estratégias Clínicas e Scripts Exatos para Transformar Resistência em Parceria Ativa na Psicoterapia Infantil',
    category: 'Manejo Parental',
    pagesCount: 6,
    estimatedSize: '2.1 MB',
    description: 'Protocolo avançado de gestão clínica e posicionamento profissional. Analisa o que está por trás da resistência parental como mecanismo de defesa familiar, destrincha o manejo dos 4 perfis mais desafiadores ("Conserte meu filho", Cobradores, Desconfiados/Invasivos e Ausentes), entrega 5 scripts de WhatsApp para gestão ética de limites e fornece o Documento de Alinhamento Inicial para assinatura dos responsáveis.',
    targetAudience: 'Psicólogas e Terapeutas que desejam blindar sua prática contra o esgotamento profissional',
    sourceFile: 'Guia_Pratico_de_Manejo_com_Pais_Dificeis.pdf',
    keyHighlights: [
      'Compreensão sistêmica da resistência parental (não tomar como ataque pessoal)',
      'Manejo detalhado dos 4 perfis de pais desafiadores com scripts de fala exatos',
      '5 Scripts de WhatsApp prontos para copiar e colar em situações de quebra de contrato',
      'Documento de Alinhamento Inicial para assinatura e pactuação da parceria'
    ],
    sections: [
      {
        title: 'Visão Clínico-Estratégica da Resistência Parental',
        pageLabel: 'Página 1',
        content: `Na psicoterapia infantil, raramente atendemos apenas a criança. O sintoma do pequeno é o sintoma da engrenagem familiar. Quando os pais chegam cobradores, críticos, ansiosos ou ausentes, a reação automática da terapeuta iniciante é a defensiva.

No entanto, a resistência não é um ataque pessoal contra você: é um mecanismo de defesa coletivo. Pais trazem dores, culpa, sensação de incompetência e medo do julgamento da sociedade. Quando a terapeuta compreende essa dinâmica, desiste de disputar poder e assume a liderança do processo.`
      },
      {
        title: 'Manejo dos 4 Perfis de Pais Mais Desafiadores',
        pageLabel: 'Páginas 2 a 3',
        content: `Diretrizes clínicas e scripts exatos para cada perfil:`,
        scriptBoxes: [
          {
            situation: 'Perfil 1: Os Pais "Conserte Meu Filho" (Esperam conserto mecânico sem mexer em nada em casa)',
            label: 'Script Clínico',
            text: 'Entendo perfeitamente o desejo de ver o [Nome da Criança] bem e sei quanto vocês estão cansados. Mas preciso ser muito transparente: a terapia infantil ocupa apenas 50 minutos da semana dele. Os outros 10.070 minutos acontecem em casa. Eu consigo dar as ferramentas e decodificar o que o comportamento dele quer dizer, mas a construção e a manutenção diária dependem de vocês. Eu cuido da bússola aqui dentro, mas quem pilota o navio na rotina diária são vocês.'
          },
          {
            situation: 'Perfil 2: Os Pais Cobradores e Ansiosos (Exigem resultados rápidos após 3 ou 4 sessões)',
            label: 'Script Clínico',
            text: 'Eu compreendo perfeitamente essa ansiedade. Quando a casa está caótica, cada dia parece durar uma semana. Mas o cérebro infantil não funciona como um interruptor. Primeiro o sintoma muda de forma, depois ele diminui de frequência e, por fim, desaparece. O fato de ele ainda ter crises mostra que estamos mexendo nas camadas profundas. Vamos olhar para o gráfico de progresso do mês passado: antes as crises duravam duas horas e eram diárias; hoje duram vinte minutos e acontecem duas vezes por semana. Isso é avanço clínico real.'
          },
          {
            situation: 'Perfil 3: Os Pais Desconfiados ou Invasivos (Questionam idade/filhos ou querem assistir à sessão)',
            label: 'Script Clínico',
            text: 'Eu entendo que entregar seu filho para uma profissional exige total confiança. Minha formação é especializada em desenvolvimento infantil, respaldada por anos de prática clínica. O espaço da sessão precisa ser de sigilo absoluto para que ele se sinta seguro para elaborar suas angústias sem medo de que os pais saibam de imediato. A minha garantia de trabalho vocês têm através das devolutivas detalhadas que fazemos quinzenalmente.'
          },
          {
            situation: 'Perfil 4: Os Pais Ausentes ou que Desmarcam em Cima da Hora',
            label: 'Script Clínico',
            text: 'Eu percebo que a rotina de vocês está extremamente sobrecarregada, mas preciso pontuar algo delicado: toda vez que a sessão de orientação é desmarcada em cima da hora ou o horário da criança é negligenciado, enviamos uma mensagem implícita para ela de que o seu processo emocional é a última prioridade da família. A terapia infantil só tem eficácia real quando o adulto demonstra, através do investimento de tempo e prioridade, que este espaço importa. Como podemos reorganizar a agenda para que isso não volte a acontecer?'
          }
        ]
      },
      {
        title: 'Scripts de WhatsApp para Gestão Ética de Limites',
        pageLabel: 'Páginas 4 a 5',
        content: `O WhatsApp é a maior fonte de esgotamento e quebra de limite na clínica moderna. Utilize estes scripts prontos para preservar seu descanso:`,
        scriptBoxes: [
          {
            situation: 'Situação 1: Áudio ou texto gigante na sexta-feira à noite pedindo socorro',
            label: 'Script WhatsApp',
            text: 'Olá, [Nome da Mãe/Pai]! Recebi sua mensagem e compreendo que a situação com o [Nome da Criança] hoje foi bastante desafiadora e gerou desgaste em casa. Como estou fora do horário de atendimento clínico e preciso preservar meu descanso para atuar bem, não consigo escutar o áudio/ler tudo agora. Mas acolho o seu cansaço! Anote os pontos principais do que aconteceu e traga na nossa próxima sessão de orientação na [dia da semana] para avaliarmos juntas com calma e estratégia. Caso seja uma emergência psiquiátrica aguda, lembre-se do contato do pronto-atendimento infantil. Um abraço e bom descanso!'
          },
          {
            situation: 'Situação 2: Cancelamento em cima da hora pela 3ª vez seguida',
            label: 'Script WhatsApp',
            text: 'Olá, [Nome]! Acabo de ver sua mensagem sobre o cancelamento de última hora de hoje. Conforme previsto no nosso contrato terapêutico, horários cancelados com menos de [X horas/dias] de antecedência são cobrados normalmente, pois este espaço é reservado exclusivamente para o [Nome da Criança]. Além disso, a constância é um pilar indispensável para que ele perceba segurança no tratamento. Vamos manter a sessão da próxima semana fixa? Caso a rotina esteja muito apertada no momento, podemos reavaliar a frequência das sessões para uma periodicidade que caiba de verdade na agenda de vocês.'
          },
          {
            situation: 'Situação 3: Recusa em comparecer à sessão de orientação parental ("estou sem tempo")',
            label: 'Script WhatsApp',
            text: 'Olá, [Nome]! Compreendo perfeitamente que a rotina profissional e familiar está corrida. Porém, preciso reforçar tecnicamente: a psicoterapia infantil sem a participação ativa dos pais na orientação parental perde mais de 70% do seu efeito. A criança muda na terapia, mas se o ambiente em casa continua idêntico, o sintoma retorna. A nossa sessão de orientação não é um relatório escolar sobre você, é o espaço onde desenhamos as ferramentas práticas para o seu dia a dia ficar mais leve. Qual destes dois horários da próxima semana fica melhor para ajustarmos nossa ponte?'
          },
          {
            situation: 'Situação 4: Pais separados tentando usar a psicóloga como mensageira ou aliada contra o ex',
            label: 'Script WhatsApp',
            text: 'Olá, [Nome]! Compreendo sua preocupação com o que ocorre na outra casa, mas reforço que meu papel clínico aqui é exclusivamente o desenvolvimento emocional do [Nome da Criança], e mantenho uma postura de neutralidade e ética em relação à dinâmica parental. Não posso atuar como intermediária de recados ou juíza de acordos entre vocês. Sugiro que questões referentes à guarda, rotinas externas ou acordos parentais sejam alinhadas diretamente entre os responsáveis ou através da mediação jurídica adequada. Na nossa devolutiva, foco estritamente no que compete ao bem-estar emocional dele dentro do consultório e nas orientações conjuntas possíveis.'
          },
          {
            situation: 'Situação 5: Ameaça de interrupção precoce da terapia no meio de uma fase sensível',
            label: 'Script WhatsApp',
            text: 'Olá, [Nome]! Recebi sua mensagem informando o desejo de encerrar o processo terapêutico neste momento. Como estamos em uma fase importante de elaboração e consolidação de ganhos emocionais do [Nome da Criança], uma interrupção abrupta pode gerar sensação de abandono e perda de referências para ele. O mais recomendado pela ética clínica é realizarmos uma "Sessão de Encerramento e Despedida" presencial, com a presença de vocês, para fecharmos este ciclo de forma saudável e segura para a criança. Vamos agendar essa sessão de transição para a próxima semana?'
          }
        ]
      },
      {
        title: 'Documento de Alinhamento Inicial: Como Funciona a Nossa Parceria',
        pageLabel: 'Página 6',
        content: `Documento oficial para entrega e assinatura no primeiro encontro:
• O Tempo do Processo: A infância não tem botão de avanço rápido; mudanças exigem constância e paciência com as oscilações naturais.
• O Sigilo Lúdico e a Confiança: O consultório é o santuário da criança; o que acontece ali é protegido.
• A Família como o Principal Agente de Mudança: A terapia só consolida quando os combinados são mantidos em casa.
• Assiduidade e Pontualidade: Faltas comunicam à criança que seu espaço emocional é secundário.
• Frase de Impacto Final: "Cuidar da saúde mental de uma criança é transformar o presente para garantir a leveza do futuro. Estamos juntas nessa missão."
• Campos de Assinatura do Responsável e Assinatura/Carimbo CRP da Psicóloga.`
      }
    ]
  },
  {
    id: 'bonus-05',
    bonusNumber: 5,
    title: 'Kit de Psicoeducação Visual para Entregar aos Pais (5 Lâminas)',
    subtitle: 'Materiais visuais em formato infográfico pronto para imprimir ou enviar aos pais nas orientações',
    category: 'Psicoeducação',
    pagesCount: 5,
    estimatedSize: '2.4 MB',
    description: 'Coleção de 5 lâminas didáticas ilustradas com linguagem acolhedora e respaldada nas neurociências. Desenvolvida para traduzir o funcionamento cerebral infantil para a família, alinhar expectativas, desarmar a culpa parental e ensinar estratégias práticas de co-regulação em casa.',
    targetAudience: 'Psicólogas para entrega direta aos pais em consultas de orientação ou via WhatsApp',
    sourceFile: 'Kit_de_Psicoeducacao_Visual_para_Entregar_aos_Pais.pdf',
    keyHighlights: [
      'Lâmina 1: Por que brincar é coisa séria na terapia infantil?',
      'Lâmina 2: Entendendo a ansiedade infantil: como identificar e acolher em casa',
      'Lâmina 3: Birra ou desregulação emocional? Como agir no momento da tempestade',
      'Lâmina 4: Criança agitada e TDAH: como ajudar no foco e na rotina sem brigas diárias',
      'Lâmina 5: A família como parceira: como funciona a evolução na terapia infantil'
    ],
    sections: [
      {
        title: 'Lâmina 1: Por Que Brincar É Coisa Séria na Terapia Infantil?',
        pageLabel: 'Lâmina 1 de 5',
        content: `No consultório de psicologia infantil, o brinquedo não é apenas um passatempo: o brincar é a linguagem natural da criança. Enquanto os adultos usam a fala e a lógica para processar sentimentos, a criança processa o mundo através do faz de conta e dos jogos.

Comparativo:
• O Brincar Comum em Casa: Foco no lazer, no entretenimento livre e na diversão espontânea. Ajuda a gastar energia física de forma saudável.
• O Brincar Terapêutico no Consultório: Ferramenta clínica intencional usada pela psicóloga para acessar o mundo interno da criança e elaborar traumas, frustrações, medos e conflitos emocionais que a criança não consegue verbalizar.

4 Habilidades Fundamentais Desenvolvidas no Lúdico:
1. Regulação Emocional: Exterioriza medos e raivas em bonecos ou cenários, ganhando controle sobre eles.
2. Resolução de Problemas: Testa hipóteses e encontra soluções criativas para impasses na história imaginária.
3. Empatia e Teoria da Mente: Assume diferentes papéis sociais, compreendendo o ponto de vista do outro.
4. Frustração e Limites: Aprende a lidar com regras de jogos, esperar a sua vez e perder sem desmoronar.

Como os pais podem apoiar a sessão: Evite interrogar a criança na saída dizendo "O que a tia conversou com você?". Diga apenas: "Que bom que você veio hoje, espero que tenha sido um momento legal" e deixe que ela compartilhe espontaneamente.`
      },
      {
        title: 'Lâmina 2: Entendendo a Ansiedade Infantil: Como Identificar e Acolher em Casa',
        pageLabel: 'Lâmina 2 de 5',
        content: `A ansiedade nas crianças nem sempre se parece com o medo adulto. Como o cérebro emocional está em pleno desenvolvimento, a ansiedade costuma "vazar" através do corpo e de alterações no comportamento.

Sinais de Alerta no Corpo e Comportamento:
• Somas físicas frequentes: Dor de barriga constante antes da escola, dores de cabeça ou náuseas sem causa médica.
• Irritabilidade e birras intensas: Crianças ansiosas costumam estar hipervigilantes, explodindo com facilidade por pequenas frustrações.
• Medo excessivo de errar: Necessidade de perfeição em desenhos, tarefas ou recusa em tentar algo novo.
• Dificuldades para dormir: Resistência na hora de deitar, pedidos constantes para dormir na cama dos pais ou pesadelos.

Tabela de Linguagem:
• O que NÃO dizer (Invalidação): "Isso é bobagem!", "Deixa de frescura", "Não tem motivo para chorar", "Você precisa ser forte e corajoso!".
• O que DIZER (Acolhimento e Segurança): "Eu vejo que você está assustado(a), e tudo bem sentir isso. Estou aqui com você.", "Vamos respirar juntos. Coragem não é não ter medo, é enfrentar o medo com apoio."

3 Estratégias Práticas de Regulação em Casa:
1. Nomeie o Sentimento: Ajude a criança a dar nome ao que sente ("Parece que seu coração está disparado de preocupação, certo?").
2. Respiração do Cheirinho e da Vela: Cheirar uma flor imaginária pelo nariz e apagar uma velinha soltando o ar devagar pela boca.
3. Âncora de Segurança: Ofereça um abraço firme e acolhedor para sinalizar ao sistema nervoso que o perigo passou.`
      },
      {
        title: 'Lâmina 3: Birra ou Desregulação Emocional? Como Agir no Momento da Tempestade',
        pageLabel: 'Lâmina 3 de 5',
        content: `Quando uma criança entra em colapso emocional profundo (choro descontrolado, gritos, chutes), ela não está manipulando os pais; ela perdeu temporariamente o controle do próprio sistema nervoso.

O Cérebro no Andar de Cima vs. Andar de Baixo:
• O Andar de Baixo (sistema límbico e amígdala) comanda emoções primitivas, instintos de luta ou fuga e sobrevivência.
• O Andar de Cima (córtex pré-frontal) comanda a razão, o autocontrole e a lógica.
Durante uma tempestade emocional, o Andar de Cima "desconecta", deixando a criança refém puramente das emoções do Andar de Baixo.

Por que gritar ou dar sermão não funciona?
No auge da desregulação, a capacidade auditiva racional da criança está bloqueada. Gritar ou punir ativa ainda mais a amígdala cerebral, interpretando o adulto como uma ameaça e aumentando o pânico ou a agressividade.

O Passo a Passo da Co-regulação em Casa:
1. Garantir Segurança e Calma: Respire fundo. Sua calma externa serve de regulador biológico para o sistema nervoso dela.
2. Conectar e Validar: Antes de corrigir qualquer comportamento, acolha o sentimento: "Você está muito bravo porque queríamos ir embora, eu entendo."
3. Ensinar e Conversar Depois: Só aplique limites, regras ou conversas educativas quando a tempestade passar e o cérebro superior estiver reconectado.`
      },
      {
        title: 'Lâmina 4: Criança Agitada e TDAH: Como Ajudar no Foco e na Rotina sem Brigas Diárias',
        pageLabel: 'Lâmina 4 de 5',
        content: `Lidar com uma criança com TDAH ou com grandes dificuldades nas funções executivas exige mudança de perspectiva. A desorganização e a agitação não são falta de educação ou birra proposital, mas sim diferenças na arquitetura e química cerebral.

Ela não faz "de propósito":
O cérebro com perfil executivo desafiador tem dificuldades reais com memória de trabalho, regulação do impulso e planejamento. Quando ela esquece o casaco pela terceira vez ou interrompe uma conversa, o cérebro dela simplesmente falhou no "freio" interno, e não por desobediência consciente.

5 Ajustes Práticos no Ambiente para Facilitar a Rotina:
1. Comandos Curtos e Visuais: Em vez de dar três ordens seguidas, dê uma por vez, olhando nos olhos ou usando quadros de rotina ilustrados.
2. Blocos Curtos de Tarefas: Divida grandes missões (ex: "arrumar o quarto") em etapas miúdas ("guarde os 3 livros da cama primeiro").
3. Rotina Previsível: Use avisos antecipados para transições ("Daqui a 5 minutos vamos desligar a tela para jantar").
4. Reforço Positivo Imediato: Celebre cada pequena conquista de foco ou autocontrole na hora em que ela acontecer.
5. Pausas de Movimento: Permita que a criança gaste energia física antes de sentar para realizar tarefas que exigem concentração prolongada.`
      },
      {
        title: 'Lâmina 5: A Família como Parceira: Como Funciona a Evolução na Terapia Infantil',
        pageLabel: 'Lâmina 5 de 5',
        content: `O processo psicoterapêutico infantil é uma construção conjunta entre a criança, a psicóloga e, fundamentalmente, os pais. Compreender o ritmo dessa jornada alinha expectativas e potencializa enormemente os resultados.

A Evolução Não É uma Linha Reta:
Muitos pais esperam uma melhora contínua e linear. Na prática clínica, a evolução se parece com ondas: avanços expressivos são seguidos por pequenas regressões temporárias. Isso acontece porque, ao mexer nas estruturas emocionais, a criança testa novos comportamentos, vivencia novas crises e consolida o aprendizado aos poucos.

A Regra de 1 Hora vs. 167 Horas:
A criança passa cerca de 1 hora por semana na sessão com a psicóloga. Porém, passa 167 horas do restante da semana convivendo com a família, escola e ambiente social. A transformação real acontece no dia a dia, quando os pais aplicam as orientações em casa.

Checklist de 5 Atitudes Parentais que Aceleram Resultados:
• Validar Emoções: Permitir que a criança sinta o que sente, sem minimizar sua dor.
• Dar Exemplo Prático: Praticar a autorregulação emocional na frente dos filhos.
• Consistência nos Combinados: Manter a clareza e a firmeza amorosa nas regras estabelecidas.
• Celebrar Pequenos Marcos: Valorizar o esforço e a tentativa da criança, e não apenas o resultado perfeito.
• Manter Alinhamento Escolar/Clínico: Compartilhar orientações e feedbacks com a terapeuta regularmente.`
      }
    ]
  }
];
