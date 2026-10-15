import { ClinicalResource } from '../types/clinical';

export const CLINICAL_RESOURCES: ClinicalResource[] = [
  // ==========================================
  // ACERVO 1: TDAH & FUNÇÕES EXECUTIVAS (20 RECURSOS COMPLETOS)
  // ==========================================
  {
    id: 'TDAH-01',
    collectionId: 1,
    title: 'O Semáforo do Freio Cerebral',
    ageRange: '5 a 11 anos (adequação individualizada conforme maturidade motora e cognitiva)',
    ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Desenvolver o controle inibitório motor e verbal (capacidade de frear uma resposta automática imediata) através de pistas visuais e auditivas estruturadas.',
    tags: ['Controle Inibitório', 'Impulsividade', 'Freio Motor', 'Atenção Seletiva'],
    materialsIncluded: [
      'Cartões visuais Semáforo (Vermelho: Parada Total, Amarelo: Pensar/Respirar, Verde: Agir/Avançar)',
      'Ficha de Registro de Frenagens Bem-Sucedidas (PDF A4)',
      'Tabela de Desafios Motores e Verbais Graduados'
    ],
    stepByStep: {
      inicio: 'Apresentar a analogia do "Carro Potente sem Freio": explicar à criança que o cérebro dela é como uma Ferrari veloz, mas que todo grande piloto precisa de um pedal de freio confiável para não bater nas curvas. Combinar o sinal de alerta do semáforo.',
      desenvolvimento: 'Iniciar a dinâmica com comandos motores simples ("Andar no verde, congelar no vermelho"). Na fase 2 (Desafio Invertido), trocar as regras para exercitar a flexibilidade: no verde congela, no vermelho avança. Na fase 3, aplicar comandos verbais: responder perguntas somente após a contagem mental de 3 segundos (Luz Amarela).',
      fechamento: 'Revisar com a criança em quais momentos da rotina diária (escola, lição, conversa com os pais) o "freio amarelo" precisa ser acionado. Preencher a Ficha de Frenagens e carimbar a conquista do dia.'
    },
    telehealthAdaptation: 'No atendimento online, compartilhe a tela com os cartões coloridos em tela cheia ou utilize a webcam com objetos coloridos reais. Peça para a criança encostar a mão no queixo (gesto âncora) sempre que a cor vermelha aparecer no vídeo.',
    clinicalTip: 'Nunca repreenda se a criança falhar na parada motora. Trate o erro como um "pneu que derrapou na pista molhada" e repita o estímulo em ritmo ligeiramente mais lento para reativar o córtex pré-frontal sem gerar frustração defensiva.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-02',
    collectionId: 1,
    title: 'Missão Astronauta: O Mapa de Rotina Matinal e Noturna',
    ageRange: '4 a 10 anos (adaptável com pictogramas ou texto conforme nível de alfabetização)',
    ageCategories: ['3-5', '6-8'],
    objective: 'Estruturar o planejamento sequencial e a autonomia no autocuidado, reduzindo a sobrecarga da memória de trabalho através de suporte visual externo.',
    tags: ['Planejamento', 'Rotina', 'Autonomia', 'Memória de Trabalho'],
    materialsIncluded: [
      'Painel Visual da Estação Espacial (A4 destacável para parede da casa)',
      '18 Ícones Magnéticos/Coláveis de Atividades (Escovar dentes, uniforme, mochila, café)',
      'Distintivo Oficial de Comandante de Missão'
    ],
    stepByStep: {
      inicio: 'Introduzir a narrativa de que as manhãs e noites em casa são como missões de lançamento de foguete, onde nenhuma etapa do protocolo pode ser esquecida para a nave não perder órbita.',
      desenvolvimento: 'Construir junto com a criança a ordem cronológica exata das 5 tarefas essenciais da manhã e as 4 da noite. A criança desenha ou cola os ícones nos quadrantes do painel. Fazer uma simulação teatral no consultório cumprindo a sequência cronometrada.',
      fechamento: 'Entregar o painel aos pais com a instrução de afixá-lo na altura dos olhos da criança. Combinar que os pais não darão comandos verbais repetitivos, apenas apontarão suavemente para o painel perguntando: "Comandante, qual é a próxima etapa da checklist?".'
    },
    telehealthAdaptation: 'Envie o arquivo PDF em formato editável antes da sessão. No atendimento virtual, a criança e o terapeuta preenchem os quadrantes simultaneamente na lousa digital compartilhada.',
    clinicalTip: 'O cérebro TDAH é míope temporalmente: tarefas sem suporte visual desaparecem da memória operacional. O painel deve ter no máximo 5 passos pela manhã para evitar sobrecarga sensorial.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-03',
    collectionId: 1,
    title: 'O Detetive de Distratores',
    ageRange: '7 a 12 anos (adaptável conforme nível de metacognição da criança)',
    ageCategories: ['6-8', '9-12'],
    objective: 'Promover a metacognição atencional e a identificação precoce de estímulos concorrentes internos (pensamentos voadores) e externos (ruídos, telas, objetos).',
    tags: ['Atenção Sustentada', 'Metacognição', 'Distratores', 'Foco'],
    materialsIncluded: [
      'Lupa do Detetive (Molde para montagem em cartolina)',
      'Ficha de Investigação dos Ladrões de Foco (PDF)',
      'Escudo Protetor de Atenção (Estratégias de blindagem do ambiente)'
    ],
    stepByStep: {
      inicio: 'Apresentar a história dos "Ladrões de Atenção" que invadem a sala de aula e o quarto na hora da lição de casa para roubar a energia dos neurônios.',
      desenvolvimento: 'Durante uma tarefa lúdica desafiadora de foco (como montar um quebra-cabeça enquanto o terapeuta introduz pequenos estímulos sonoros graduados), a criança usa a lupa para rotular os ladrões: "Ladrão do Barulho de Fora", "Ladrão do Pensamento no Videogame", "Ladrão do Lápis Colorido". Elaborar o plano de defesa para cada ladrão identificado.',
      fechamento: 'Montar a lista de "Regras de Ouro da Mesa de Estudos": retirar celular, deixar apenas 1 livro aberto e estabelecer o uso de fone antirruído se necessário.'
    },
    telehealthAdaptation: 'Peça para a criança fazer um tour rápido de 360 graus com a webcam pelo quarto/mesa de estudo e, juntos, apontem quais objetos concorrem com o computador na hora do dever.',
    clinicalTip: 'Validar os distratores internos é crucial. Diga: "Ter ideias legais enquanto faz a lição é sinal de cérebro criativo! Vamos apenas criar uma Folha de Estacionamento de Ideias ao lado para anotar e voltar a elas depois".',
    estimatedMinutes: 35
  },
  {
    id: 'TDAH-04',
    collectionId: 1,
    title: 'O Relógio dos Três Tempos (Pomodoro Lúdico Infantil)',
    ageRange: '6 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Capacitar a criança na percepção de passagem temporal física e no manejo da procrastinação através de blocos curtos e visíveis de esforço cognitivo.',
    tags: ['Percepção Temporal', 'Pomodoro', 'Procrastinação', 'Funções Executivas'],
    materialsIncluded: [
      'Disco Temporal Colorido (Vermelho: 15 min de Foco, Verde: 5 min de Recarga Cerebral)',
      'Lista de 12 Atividades de Recarga Rápida sem Telas',
      'Contador de Estrelas de Missão Cumprida'
    ],
    stepByStep: {
      inicio: 'Demonstrar visualmente o conceito de 15 minutos utilizando uma ampulheta ou cronômetro analógico com disco decrescente de cor.',
      desenvolvimento: 'Realizar um mini-ciclo dentro da sessão: 10 minutos de desafio cognitivo contínuo, seguido imediatamente de 3 minutos de recarga sensorial (beber água gelada, pular 10 polichinelos, alongamento de gato).',
      fechamento: 'Construir a tabela personalizada de "Pausas Saudáveis": proibir telas no intervalo de 5 minutos (pois telas sequestram a dopamina e impedem o retorno à tarefa escolar).'
    },
    telehealthAdaptation: 'Utilize um cronômetro visual digital na tela compartilhada com animação fluida de preenchimento de cor e som suave de sino ao término de cada bloco.',
    clinicalTip: 'Crianças com TDAH frequentemente superestimam a duração do tédio ("isso vai demorar 10 horas!"). O cronômetro visual prova concretamente ao cérebro que o esforço tem início e fim delimitados.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-05',
    collectionId: 1,
    title: 'O Dado Maluco da Flexibilidade Cognitiva',
    ageRange: '5 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Desenvolver a flexibilidade cognitiva (capacidade de alterar estratégias mentais e adaptar-se a mudanças inesperadas de regras sem desorganização afetiva).',
    tags: ['Flexibilidade Cognitiva', 'Rigidez', 'Tolerância ao Erro', 'Alternância'],
    materialsIncluded: [
      'Dado de Regras Mutáveis (Molde 3D para montagem)',
      'Baralho de 30 Cartas de Desafios Dual-Task',
      'Escala Visual de Conforto com Mudanças'
    ],
    stepByStep: {
      inicio: 'Conversar sobre a diferença entre ser feito de "vidro rígido" (que quebra ao cair) ou de "borracha flexível" (que quica e se adapta ao chão).',
      desenvolvimento: 'Jogar uma partida de jogo conhecido (trilha ou cartas), mas a cada rodada um jogador rola o Dado Maluco: faces que determinam "inverter sentido da rodada", "jogar com a mão não-dominante", "falar rindo", "trocar de peão". Monitorar e pontuar a capacidade da criança de respirar e aceitar a regra inesperada.',
      fechamento: 'Reconhecer verbalmente os momentos em que a criança sentiu vontade de reclamar, mas conseguiu rir da mudança. Entregar o "Troféu da Mente Flexível".'
    },
    telehealthAdaptation: 'Rode o dado na câmera do consultório ou use um gerador de dados online aleatório na tela compartilhada, incentivando a criança a fazer o gesto de "quicar como mola".',
    clinicalTip: 'Se a criança demonstrar rigidez extrema e ameaçar abandonar o jogo, pause a rodada e co-regule antes de insistir na regra: "Mudanças pegam a gente de surpresa mesmo. Respira comigo 3 vezes e vamos ver o que essa regra doida tem de engraçado".',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-06',
    collectionId: 1,
    title: 'A Folha de Estacionamento de Pensamentos',
    ageRange: '7 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Controlar a intromissão de ideias paralelas durante a execução de tarefas acadêmicas, externalizando os pensamentos intrusivos em um suporte seguro.',
    tags: ['Memória de Trabalho', 'Atenção Dividida', 'Pensamentos Intrusivos', 'Caderno'],
    materialsIncluded: [
      'Prancheta Visual do Estacionamento com 6 Vagas Ilustradas (PDF)',
      'Post-its de Mini-Carros para Escrita Rápida',
      'Protocolo de Retomada Consciente de Tarefas'
    ],
    stepByStep: {
      inicio: 'Explicar que ideias brilhantes costumam aparecer na hora errada (ex: lembrar do meme, da figurinha ou de uma brincadeira durante a conta de matemática). Se tentarmos guardar na cabeça, ela fica lotada; se formos pesquisar na hora, a lição não acaba.',
      desenvolvimento: 'Durante uma atividade estruturada, toda vez que a criança interromper a fala com um assunto aleatório, o terapeuta sinaliza: "Ótima ideia! Vamos estacionar o carro?". A criança escreve ou desenha em 5 segundos no post-it e cola na vaga.',
      fechamento: 'Ao término do tempo de foco, reservar 5 minutos exclusivos para "abrir o estacionamento" e conversar sobre cada ideia anotada com total atenção.'
    },
    telehealthAdaptation: 'Crie uma janela de notas na lateral da tela ou documento colaborativo intitulado "Garagem de Ideias", digitando em uma linha cada pensamento que surgir durante a tarefa.',
    clinicalTip: 'Não proíba a criança de ter ideias e não julgue o conteúdo. O ato físico de colocar no papel desonera a memória operacional e elimina a ansiedade de esquecer a ideia.',
    estimatedMinutes: 20
  },
  {
    id: 'TDAH-07',
    collectionId: 1,
    title: 'O Jogo do Mestre Silencioso (Stroop Motor)',
    ageRange: '4 a 9 anos',
    ageCategories: ['3-5', '6-8'],
    objective: 'Fortalecer o freio inibitório pré-frontal através de inibição comportamental contrária (tarefas do tipo go / no-go e Stroop cinestésico).',
    tags: ['Controle Inibitório', 'Go No-Go', 'Psicomotricidade', 'Atenção Alternada'],
    materialsIncluded: [
      'Par de Cartões Simbólicos (Sol e Lua / Tartaruga e Coelho)',
      'Guia de 15 Variações de Desafios Motores Opostos',
      'Quadro de Níveis de Mestre Zen'
    ],
    stepByStep: {
      inicio: 'Explicar que o Mestre Silencioso desafia o corpo a não fazer o que é óbvio, testando o botão de pausa do cérebro.',
      desenvolvimento: 'Regra 1: Quando o terapeuta levantar a mão direita, a criança levanta a esquerda. Regra 2: Quando o terapeuta bater 1 palma, a criança bate 2; quando bater 2, a criança não bate nenhuma. Regra 3 (Sol e Lua): Ao ver o Sol diz "Noite", ao ver a Lua diz "Dia". Aumentar a velocidade gradualmente.',
      fechamento: 'Registrar quantos acertos seguidos a criança conseguiu sustentar antes de rir ou errar. Destacar o esforço de autocontrole corporal.'
    },
    telehealthAdaptation: 'Perfeito para teleconsulta: posicione a webcam de forma a enquadrar o tronco e as mãos do terapeuta e da criança, aplicando os sinais visuais diretamente na tela.',
    clinicalTip: 'O riso da criança durante a atividade é um mecanismo natural de liberação de dopamina e alívio da tensão pré-frontal. Mantenha o clima lúdico e nunca repreensivo.',
    estimatedMinutes: 20
  },
  {
    id: 'TDAH-08',
    collectionId: 1,
    title: 'A Receita da Pizza em Fatias (Subtarefas & Quebra de Metas)',
    ageRange: '6 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Superar o bloqueio inicial de tarefas longas através da técnica de fracionamento de problemas em micro-etapas realizáveis.',
    tags: ['Planejamento', 'Organização', 'Iniciação de Tarefa', 'Procrastinação'],
    materialsIncluded: [
      'Prato de Pizza Dividido em 6 Fatias Destacáveis (PDF colorido)',
      'Ficha de Tradução de Monstro em Fatias Miúdas',
      'Ingredientes de Adesivos para Marcar Fatias Concluídas'
    ],
    stepByStep: {
      inicio: 'Perguntar: "Você consegue comer uma pizza inteira de uma bocada só?". Demonstrar que engolir a pizza inteira engasga, mas fatia por fatia qualquer um consegue.',
      desenvolvimento: 'Pegar uma tarefa que a criança relata detestar (ex: "arrumar o quarto todo" ou "estudar para a prova de ciências"). Transformar a tarefa em 4 a 6 fatias específicas: 1) Guardar roupas sujas no cesto; 2) Tirar lixo do chão; 3) Alinhar calçados; 4) Guardar materiais escolares na mochila.',
      fechamento: 'A criança cola um ingrediente delicioso na fatia a cada etapa completada na sessão. Alinhar com os pais como aplicar o mesmo método no dever diário.'
    },
    telehealthAdaptation: 'Utilize um template interativo no Miro, Canva ou PDF interativo onde fatias digitais de pizza são preenchidas com pepperoni virtual a cada micro-passo executado.',
    clinicalTip: 'Crianças com TDAH sofrem de paralisia de iniciação porque enxergam a meta final como uma montanha intransponível. Definir a primeira fatia como algo ridicularmente fácil (ex: "apenas abrir o estojo") destrava a inércia.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-09',
    collectionId: 1,
    title: 'A Bússola do Autocontrole e Termômetro de Agitação',
    ageRange: '5 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Desenvolver a propriocepção e a autorregulação do nível de alerta corporal (arousal), ensinando a calibrar a energia entre "desligado", "focado" e "superaquecido".',
    tags: ['Arousal', 'Hiperatividade', 'Regulação Sensorial', 'Propriocepção'],
    materialsIncluded: [
      'Termômetro Corporal das 4 Zonas de Energia (Azul, Verde, Amarelo, Vermelho)',
      'Roda de Estratégias de Calibração Motora',
      'Ficha de Auto-Monitoramento para Escola'
    ],
    stepByStep: {
      inicio: 'Apresentar as 4 zonas do motor humano: Zona Azul (motor frio, com sono), Zona Verde (velocidade de cruzeiro ideal para aprender), Zona Amarela (motor roncando alto, agitado) e Zona Vermelha (superaquecimento, sem controle).',
      desenvolvimento: 'Fazer a criança encenar como seu corpo fica em cada zona. Mapear sensações físicas: coração acelerado, pernas inquietas, mãos inquietas. Praticar 3 técnicas de descida rápida da Zona Amarela para a Verde: respiração do balão, empurrar a parede com as mãos e beber água gelada.',
      fechamento: 'Criar um código silencioso para a criança usar com os pais ou professora quando sentir que o motor entrou na Zona Amarela.'
    },
    telehealthAdaptation: 'Exiba o termômetro na tela e peça para a criança posicionar um marcador digital no número em que sua energia está agora, praticando o exercício respiratório em vídeo.',
    clinicalTip: 'Não tente forçar a criança que está no Vermelho a sentar imediatamente. É necessário oferecer uma descarga proprioceptiva prévia (pressionar as palmas, peso nos ombros) para que o sistema nervoso consiga regular o tônus.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-10',
    collectionId: 1,
    title: 'O Enigma do Mensageiro Real (Memória Operacional Auditiva)',
    ageRange: '6 a 11 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Exercitar o loop fonológico da memória de trabalho, retenção de comandos verbais complexos e ordenação mental de instruções sob interferência.',
    tags: ['Memória de Trabalho', 'Loop Fonológico', 'Instruções', 'Compreensão'],
    materialsIncluded: [
      'Pergaminho das Ordens do Castelo (Lista graduada de 20 comandos)',
      'Cartões de Personagens (Cavaleiro, Mago, Rei, Dragão)',
      'Ficha de Pontuação de Mensageiro de Ouro'
    ],
    stepByStep: {
      inicio: 'Contar a história de que o Rei precisa enviar mensagens secretas através de um mensageiro corajoso que guarde as ordens de cabeça até cruzar a ponte do castelo.',
      desenvolvimento: 'Nível 1: Dar 2 instruções sequenciais diretas. Nível 2: Dar 3 instruções intercaladas com uma pergunta distratora ("O que você almoçou hoje?") antes de executar o comando. Nível 3: Comandos de ordem inversa (ex: "Toque o nariz depois que bater palma" -> a criança deve inverter a execução).',
      fechamento: 'Ensinar a técnica de visualização mental: desenhar a instrução em uma tela imaginária na cabeça antes de executar.'
    },
    telehealthAdaptation: 'Dite as mensagens pelo microfone e peça para a criança repetir mentalmente sussurrando (ensaio subvocal) antes de executar na câmera.',
    clinicalTip: 'Se a criança esquecer a terceira parte de uma ordem, nunca diga que ela "não prestou atenção". Explique que a memória de curto prazo tem espaço limitado como uma prateleira pequena e ensine a verbalizar em voz alta para não deixar cair.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-11',
    collectionId: 1,
    title: 'O Caçador de Padrões e Detalhes Ocultos (Atenção Seletiva Visual)',
    ageRange: '5 a 10 anos',
    ageCategories: ['3-5', '6-8'],
    objective: 'Treinar o escaneamento visual sistemático, inibição de estímulos semelhantes e persistência atencional em tarefas detalhistas.',
    tags: ['Atenção Seletiva', 'Rastreamento Visual', 'Detalhes', 'Percepção'],
    materialsIncluded: [
      '6 Pranchas Ilustradas de Alta Densidade (O Bairro Maluco, Fundo do Mar, Floresta dos Disfarces)',
      'Cartões Alvo de Busca e Pareamento',
      'Marcadores de Detetive Translucidos'
    ],
    stepByStep: {
      inicio: 'Explicar que muitas crianças com TDAH têm "olhar de drone" (enxergam tudo ao mesmo tempo no geral), mas que hoje vamos treinar o "olhar de microscópio" (varrer linha por linha sem pular pedaços).',
      desenvolvimento: 'Ensinar a estratégia de escaneamento visual em padrão Z (da esquerda para a direita, de cima para baixo). A criança localiza figuras camufladas com cronômetro cooperativo (o terapeuta torce junto, sem pressão punitiva).',
      fechamento: 'Comparar o tempo e a precisão da busca quando feita aleatoriamente versus quando feita seguindo o método em Z.'
    },
    telehealthAdaptation: 'Compartilhe a imagem na tela e utilize as ferramentas de anotação (círculo com caneta digital) da videoconferência para a criança marcar os alvos encontrados.',
    clinicalTip: 'Dificuldades no rastreamento visual muitas vezes causam erros em provas escolares (a criança pula questões inteiras sem perceber). Ensinar o uso de uma régua como guia de leitura transfere esse aprendizado para a escola.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-12',
    collectionId: 1,
    title: 'O Baú das Escolhas e Consequências Futuras',
    ageRange: '7 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Aumentar a capacidade de adiar gratificação imediata (delay discounting) e calcular o impacto temporal das decisões impulsivas.',
    tags: ['Gratificação Adiada', 'Tomada de Decisão', 'Impulsividade', 'Consequências'],
    materialsIncluded: [
      'Tabuleiro "Hoje vs Amanhã: A Escolha do Futuro"',
      'Fichas de Recompensa Imediata (1 Moeda Agora) vs Recompensa Acumulada (3 Moedas Amanhã)',
      'Cartas de Dilemas Cotidianos Reais (games, estudo, doces, sono)'
    ],
    stepByStep: {
      inicio: 'Discutir a tentação da recompensa rápida: "Você prefere ganhar 1 bombom agora na sua mão ou esperar o final da sessão e ganhar uma caixa inteira?".',
      desenvolvimento: 'Apresentar situações reais da vida da criança em forma de cartas de dilema: "Ficar mais 15 minutos jogando videogame às 22h ou desligar na hora combinada?". Analisar as consequências imediatas (prazer momentâneo) versus consequências em 12 horas (sono, cansaço na escola, bronca dos pais).',
      fechamento: 'Construir a "Regra dos 5 Minutos de Pausa": antes de comprar, pegar ou gritar, esperar 5 minutos cronometrados para o cérebro maduro responder.'
    },
    telehealthAdaptation: 'Use uma roleta virtual com dilemas do cotidiano e simule as escolhas no tabuleiro digital compartilhado com placar de pontos de longo prazo.',
    clinicalTip: 'O sistema dopaminérgico no TDAH tem hipoativação na antecipação de recompensas distantes. É biologicamente doloroso esperar. A recompensa futura deve ser tangível e visualizada concretamente.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-13',
    collectionId: 1,
    title: 'A Lista do Mágico das Coisas Perdidas (Organização Espacial)',
    ageRange: '6 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Implantar rotinas de categorização física e organização de materiais escolares e pessoais, eliminando a perda crônica de pertences.',
    tags: ['Organização', 'Materiais Escolares', 'Mochila', 'Perda de Objetos'],
    materialsIncluded: [
      'Checklist Visual da Mochila Blindada (PDF com ilustrações)',
      'Etiquetas Coloridas para Categorização de Cadernos e Estojo',
      'Protocolo de Check-in e Check-out Escolar'
    ],
    stepByStep: {
      inicio: 'Fazer um inventário bem-humorado de itens que já "desapareceram no triângulo das bermudas do quarto": casacos, borrachas, garrafinhas de água, cadernos.',
      desenvolvimento: 'Pegar a mochila ou estojo da criança no consultório (ou simular com materiais da sala) e praticar a "Casa dos Objetos": cada item possui endereço fixo. Se o estojo não voltar para o bolso lateral no segundo exato em que a aula acaba, ele se perde.',
      fechamento: 'Plastificar o checklist e prender com chaveiro na alça da mochila da criança para verificação rápida antes de sair da escola.'
    },
    telehealthAdaptation: 'Peça para a criança trazer a mochila escolar para frente da webcam e realizarem juntos o esvaziamento e reclassificação ao vivo.',
    clinicalTip: 'Nunca culpe a criança chamando-a de "desleixada" ou "avoadinha". Explique que ela precisa de suportes mecânicos externos (chaveiros, cores, bolsos dedicados) porque sua mente está sempre ocupada com novas ideias.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-14',
    collectionId: 1,
    title: 'O Domador de Dragões da Frustração Motora',
    ageRange: '5 a 10 anos',
    ageCategories: ['3-5', '6-8'],
    objective: 'Ensinar respostas motoras substitutivas socialmente adaptadas para episódios de raiva impulsiva provocados por frustração imediata.',
    tags: ['Regulação da Raiva', 'Frustração', 'Resposta Motora', 'Catarse Segura'],
    materialsIncluded: [
      'Almofada / Bola Antiestresse Sensorial Terapêutica',
      'Cartão das 4 Ações Seguras para o Corpo',
      'História Ilustrada: "Dino e a Chama que Queimava"'
    ],
    stepByStep: {
      inicio: 'Ler a metáfora do dragãozinho que soltava fogo pelas ventas toda vez que perdia um jogo e acabava queimando seus próprios brinquedos.',
      desenvolvimento: 'Treinar 4 movimentos físicos de descarga de adrenalina que NÃO machucam ninguém: 1) Apertar a bolinha de farinha/silicone com força total contando até 10; 2) Fazer "boca de peixe" e soprar o fogo invisível; 3) Esmagar uma folha de rascunho com as duas mãos e arremessar na lixeira; 4) Abraçar os próprios joelhos com força.',
      fechamento: 'Combinar qual dessas 4 técnicas a criança levará como "poder secreto" para usar quando for contrariada em casa ou na escola.'
    },
    telehealthAdaptation: 'Tenha massinha de modelar ou uma folha de papel toalha em mãos dos dois lados da tela e guie a descarga de força de forma ritmada e expressiva.',
    clinicalTip: 'No momento da raiva, o córtex frontal desliga e o corpo precisa de ação física. Dizer apenas "fique calmo" ou "respire" falha se não houver canalização proprioceptiva segura para a energia acumulada.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-15',
    collectionId: 1,
    title: 'A Dança dos Pensamentos Flecha vs Pensamentos Nuvem',
    ageRange: '7 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Desenvolver a diferenciação cognitiva entre pensamentos com foco direcionado (flechas) e pensamentos difusos/distratores (nuvens).',
    tags: ['Metacognição', 'TCC Lúdica', 'Foco', 'Pensamento Dirigido'],
    materialsIncluded: [
      'Cartões Magnéticos de Flechas Vermelhas e Nuvens Azuis',
      'Ficha de Registro de Flechas do Dia',
      'Quadro Alvo de Concentração'
    ],
    stepByStep: {
      inicio: 'Desenhar no quadro um alvo com flechas cravadas no centro e nuvens flutuando ao redor. Explicar o que são Flechas (pensamentos que te levam direto ao seu objetivo) e Nuvens (pensamentos fofos, mas que te levam para longe).',
      desenvolvimento: 'Apresentar 10 frases comuns durante a lição de casa e pedir para a criança classificar: "Vou terminar este parágrafo antes de beber água" (Flecha) vs "Será que meu amigo já está online no Roblox?" (Nuvem). Ensinar o mantra: "Obrigado nuvem, mas agora eu sou arqueiro!".',
      fechamento: 'A criança constrói seu próprio distintivo de Arqueiro do Foco para colocar no estojo escolar.'
    },
    telehealthAdaptation: 'Use animação de flechas e nuvens arrastáveis na tela em lousa interativa compartilhada, convidando a criança a mirar com o mouse.',
    clinicalTip: 'Não tente eliminar as nuvens. O cérebro divergente do TDAH produz nuvens naturalmente. O objetivo não é parar de pensar, mas sim aprender a não embarcar em cada nuvem passageira.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-16',
    collectionId: 1,
    title: 'O Circuito dos Três Passos (Pare, Pense e Aja)',
    ageRange: '4 a 10 anos',
    ageCategories: ['3-5', '6-8'],
    objective: 'Automatizar o algoritmo comportamental de pausa pré-motora antes de responder a perguntas impulsivamente ou intervir em conversas de terceiros.',
    tags: ['Impulsividade Verbal', 'Pausa Pré-Motora', 'Socialização', 'Interrupções'],
    materialsIncluded: [
      'Tapete de Três Pegadas no Chão (Pare: Amarelo, Pense: Azul, Aja: Verde)',
      'Cartões de Situações Sociais de Interrupção',
      'Espelho de Expressões Faciais'
    ],
    stepByStep: {
      inicio: 'Discutir a sensação de "falar antes de pensar" e as confusões que isso gera com amigos, professores e pais (ex: soltar a resposta na aula antes da professora terminar a pergunta).',
      desenvolvimento: 'Fazer o percurso físico no tapete: o terapeuta faz uma pergunta capciosa ou emite uma fala provocadora; a criança deve pisar no "PARE" (parar o corpo), pisar no "PENSE" (esperar 3 segundos com a mão no queixo formulando a resposta) e só então pisar no "AJA" (falar em tom suave e pausado).',
      fechamento: 'Criar um sinal secreto com a família: uma mão no peito para lembrar a criança do passo da pausa quando estiver em ambientes sociais.'
    },
    telehealthAdaptation: 'Peça para a criança encostar na parede (Pare), cruzar os braços (Pense) e aproximar-se da webcam (Aja) a cada rodada de perguntas surpresa.',
    clinicalTip: 'A impulsividade verbal muitas vezes é confundida com má educação, mas reflete atraso no freio inibitório da fala interiorizada descrita por Vygotsky e Barkley. A criança precisa do movimento externo como âncora antes de internalizar.',
    estimatedMinutes: 25
  },
  {
    id: 'TDAH-17',
    collectionId: 1,
    title: 'O Laboratório da Fala com Volume Regulável',
    ageRange: '4 a 9 anos',
    ageCategories: ['3-5', '6-8'],
    objective: 'Ajustar a modulação do volume da voz e o nível de ruído corporal de acordo com a exigência social do ambiente (biblioteca, sala de aula, pátio).',
    tags: ['Tom de Voz', 'Autorregulação', 'Regras Sociais', 'Hipersensibilidade'],
    materialsIncluded: [
      'Mesa de Som Visual com Slider Graduado de 0 a 5 (Silêncio Absoluto a Grito de Parque)',
      '10 Cartões de Ambientes Sociais Diversos',
      'Aplicativo/Gráfico de Decibéis Lúdico'
    ],
    stepByStep: {
      inicio: 'Mostrar o slider de volume como em uma caixa de som ou televisão: Volume 0 (Mudo), 1 (Sussurro), 2 (Voz de mesa a dois), 3 (Voz de apresentação de sala), 4 (Voz de ar livre), 5 (Grito de emergência).',
      desenvolvimento: 'Sortear cartões de ambientes (cinema, recreio, consultório médico, quarto com irmão dormindo) e pedir para a criança falar a mesma frase neutra ("Eu gosto de sorvete de morango") calibrando perfeitamente a intensidade do ar e da voz de acordo com o número do slider.',
      fechamento: 'Registrar o número ideal para a sala de aula e sala de casa, combinando com a família um gesto discreto de "baixar o botão de volume" em vez de mandar calar a boca.'
    },
    telehealthAdaptation: 'Ajuste as configurações do microfone para mostrar a barra de volume subindo e descendo visualmente na tela, servindo como biofeedback imediato.',
    clinicalTip: 'Crianças hiperativas frequentemente sofrem de propriocepção fonatória diminuída: elas genuinamente não percebem que estão falando alto demais até que alguém grite de volta. O biofeedback visual remove o caráter punitivo.',
    estimatedMinutes: 20
  },
  {
    id: 'TDAH-18',
    collectionId: 1,
    title: 'A Batalha dos Blocos de Instrução Múltipla',
    ageRange: '6 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Fortalecer a memória operacional visuiespacial e a capacidade de retenção de cadeias de comandos sem suporte escrito.',
    tags: ['Memória Visuoespacial', 'Instruções Múltiplas', 'Foco', 'Construção'],
    materialsIncluded: [
      'Conjunto de Blocos de Construção Coloridos (LEGO ou blocos de madeira)',
      'Cartas de Projetos com Prazos Curtos',
      'Prancheta de Verificação de Especificações Técnicas'
    ],
    stepByStep: {
      inicio: 'Apresentar a profissão de Engenheiro Espacial de Montagem Rápida, onde as ordens da torre de comando devem ser executadas com exatidão.',
      desenvolvimento: 'O terapeuta dita uma sequência: "Pegue 2 blocos azuis, coloque 1 vermelho por cima, deixe 1 espaço e monte uma torre amarela de 3 andares". A criança só pode tocar nas peças após o término de toda a fala do terapeuta (inibindo o impulso de mexer nas peças enquanto escuta).',
      fechamento: 'Aumentar a complexidade adicionando restrições de tempo e comemorar as construções perfeitas.'
    },
    telehealthAdaptation: 'Peça para a criança separar 10 peças de LEGO em casa e conduza a montagem guiada por voz ou com uma câmera secundária no plano da mesa.',
    clinicalTip: 'Observe se a criança toca nos blocos enquanto você ainda está explicando. Esse é o momento exato em que o freio falhou. Ensine-a a "sentar sobre as mãos" até a frase "Pode começar!" soar.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-19',
    collectionId: 1,
    title: 'O Contrato de Recompensa em Fichas com Desconto Zero',
    ageRange: '5 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Desenvolver a motivação intrínseca inicial através de reforçamento positivo imediato com fichas cumulativas (Token Economy sem punição de perdas).',
    tags: ['Economia de Fichas', 'Reforçamento Positivo', 'Motivação', 'Engajamento'],
    materialsIncluded: [
      'Painel de Fichas Douradas Magnéticas (PDF de montagem)',
      'Menu de Recompensas de Convivência (e não materiais)',
      'Manual de Orientação Parental Anti-Punição'
    ],
    stepByStep: {
      inicio: 'Sentar junto com a criança e os pais para definir o Menu de Desejos de Convivência (ex: 30 min de passeio de bicicleta com o pai, escolher o jantar de sexta, 1 hora de jogo de tabuleiro em família).',
      desenvolvimento: 'Definir 2 comportamentos-alvo fáceis de mensurar (ex: colocar a louça na pia ao terminar a refeição; sentar na mesa de estudo no horário combinado). Cada cumprimento gera 1 ficha imediata no painel. Regra inegociável da Terapia: NUNCA se retiram fichas já ganhas como punição por outro erro!',
      fechamento: 'Simular uma troca de fichas no consultório para celebrar o sentimento de conquista e valorizar o esforço diário.'
    },
    telehealthAdaptation: 'Compartilhe um painel de estrelas digitais com som de moeda quando a tarefa da sessão for completada.',
    clinicalTip: 'Retirar fichas por mau comportamento posterior destrói a confiança na previsibilidade do sistema e gera revolta com desistência total da criança. O que foi conquistado é intocável.',
    estimatedMinutes: 30
  },
  {
    id: 'TDAH-20',
    collectionId: 1,
    title: 'O Diário de Bordo do Capitão: Minhas Super-Forças e Meus Desafios',
    ageRange: '7 a 12 anos',
    ageCategories: ['6-8', '9-12'],
    objective: 'Promover a psicoeducação empoderadora sobre o neurodesenvolvimento com TDAH, reduzindo o estigma de incapacidade e fortalecendo o autoconceito positivo.',
    tags: ['Psicoeducação', 'Autoestima', 'Autoconhecimento', 'Neurodiversidade'],
    materialsIncluded: [
      'Livro do Capitão (Caderno de 12 páginas em PDF para montagem)',
      'Tabela de Superpoderes do Cérebro Criativo (Hiperfoco, Energia, Coragem, Criatividade)',
      'Certificado de Especialista no Próprio Cérebro'
    ],
    stepByStep: {
      inicio: 'Desmistificar a sigla TDAH: explicar a dopamina e como o cérebro dela funciona com um motor de alta velocidade que precisa de pistas certas para brilhar.',
      desenvolvimento: 'Mapear com a criança suas maiores forças reais (desenho, empatia, energia nos esportes, ideias fora da caixa) e seus desafios (manter a atenção no que é chato, lembrar onde colocou as coisas). Escrever no Diário de Bordo como pedir ajuda na escola sem vergonha.',
      fechamento: 'Assinatura mútua do Certificado de Capitão do Cérebro, com entrega solene aos pais para guardar com orgulho.'
    },
    telehealthAdaptation: 'Utilize apresentação interativa com ilustrações animadas de cérebros exploradores, personalizando o diário na tela.',
    clinicalTip: 'Crianças com TDAH recebem, em média, milhares de broncas e correções a mais do que seus pares neurotípicos ao longo da infância. A reconstrução da autoimagem não é luxo; é condição fundamental para qualquer intervenção ter sucesso.',
    estimatedMinutes: 35
  },

  // ==========================================
  // ACERVOS 2 A 8: CATÁLOGO COMPLETO DOS RECURSOS (140 RECURSOS)
  // ==========================================

  // ACERVO 2: TEA (Transtorno do Espectro Autista) - 20 Recursos
  {
    id: 'TEA-01', collectionId: 2, title: 'O Painel de Antecipação Visual ' + 'Primeiro-Depois', ageRange: '3 a 10 anos', ageCategories: ['3-5', '6-8'],
    objective: 'Promover previsibilidade de transições e diminuir crises de ansiedade através de suporte visual concreto Primeiro/Depois.',
    tags: ['Previsibilidade', 'Transições', 'Comunicação Aumentativa', 'PECS'],
    materialsIncluded: ['Prancha Primeiro/Depois em PVC/PDF', '24 Pictogramas de Atividades Cotidianas'],
    stepByStep: { inicio: 'Apresentar a prancha mostrando a foto da tarefa atual e da recompensa imediata.', desenvolvimento: 'Conduzir a criança na movimentação física do pictograma da esquerda para a direita.', fechamento: 'Celebrar a conclusão da transição com reforço sensorial preferido.' },
    telehealthAdaptation: 'Apresente os cartões na tela dividida em duas colunas bem demarcadas.', clinicalTip: 'Nunca mude o que foi prometido no "Depois" sem antecipação gradual prévia.', estimatedMinutes: 20
  },
  {
    id: 'TEA-02', collectionId: 2, title: 'A Mala Sensorial de Descompressão', ageRange: '3 a 12 anos', ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Regular o sistema tátil e vestibular para cessar sobrecargas sensoriais (sensory meltdown).',
    tags: ['Regulação Sensorial', 'Meltdown', 'Tátil', 'Propriocepção'],
    materialsIncluded: ['Guia de Montagem do Kit Sensorial Portátil', 'Cartão Visual de Escolha de Objeto'],
    stepByStep: { inicio: 'Identificar os sinais precoces de agitação motora ou sobrecarga auditiva.', desenvolvimento: 'Oferecer a mala com opções táteis de texturas variadas, peso corporal e mordedores.', fechamento: 'Retornar suavemente ao ambiente com luz reduzida e tom de voz calmo.' },
    telehealthAdaptation: 'Oriente os pais a manterem a cesta sensorial ao lado da mesa da criança durante a videochamada.', clinicalTip: 'Respeite a aversão tátil: nunca force o toque em materiais gosmentos ou pegajosos.', estimatedMinutes: 25
  },
  {
    id: 'TEA-03', collectionId: 2, title: 'O Termômetro Social de Espaço Pessoal (A Bolha Invisível)', ageRange: '5 a 12 anos', ageCategories: ['6-8', '9-12'],
    objective: 'Ensinar o conceito concreto de distância interpessoal adequada em interações sociais.',
    tags: ['Espaço Pessoal', 'Habilidades Sociais', 'Proxêmica', 'Contato Físico'],
    materialsIncluded: ['Bambolê ou Fita de Chão para Delimitação da Bolha', 'Cartas de Situações Sociais de Cumprimento'],
    stepByStep: { inicio: 'Explicar a metáfora da bolha de sabão pessoal que envolve cada ser humano.', desenvolvimento: 'Praticar aproximações seguras com a fita no chão para abraçar, conversar ou acenar.', fechamento: 'Treinar o cumprimento alternativo quando a criança não desejar contato de toque.' },
    telehealthAdaptation: 'Demonstre a distância esticando o braço em direção à câmera para simular o alcance do toque.', clinicalTip: 'Valide a preferência por não ser tocado enquanto ensina a não invadir sem permissão.', estimatedMinutes: 20
  },
  {
    id: 'TEA-04', collectionId: 2, title: 'História Social do Não Inesperado', ageRange: '4 a 11 anos', ageCategories: ['3-5', '6-8', '9-12'],
    objective: 'Construir repertório cognitivo prévio para lidar com negativas sem comportamento autolesivo.',
    tags: ['Histórias Sociais', 'Tolerância ao Não', 'Comunicação', 'Carol Gray'],
    materialsIncluded: ['Livreto Ilustrado com Texto Estruturado conforme modelo Carol Gray', 'Cartão Resumo de Bolso'],
    stepByStep: { inicio: 'Ler a história social em momento de tranquilidade neurológica da criança.', desenvolvimento: 'Analisar o que os personagens sentem quando os planos mudam de repente.', fechamento: 'Ensaiar o roteiro da fala alternativa: "Tudo bem tentar de novo amanhã".' },
    telehealthAdaptation: 'Apresente os slides ilustrados da história com narração calma e pausada.', clinicalTip: 'Histórias sociais devem ser lidas nos momentos de calma, nunca durante o auge da crise.', estimatedMinutes: 25
  },
  {
    id: 'TEA-05', collectionId: 2, title: 'O Detetive de Expressões Faciais e Teoria da Mente', ageRange: '5 a 12 anos', ageCategories: ['6-8', '9-12'],
    objective: 'Treinar o reconhecimento de pistas não-verbais nos olhos e boca de interlocutores.',
    tags: ['Teoria da Mente', 'Expressões Faciais', 'Pistas Visuais', 'Empatia Cognitiva'],
    materialsIncluded: ['Cartões Particionados de Olhos e Sorrisos', 'Espelho Duplo para Reprodução Facial'],
    stepByStep: { inicio: 'Apresentar as fotos de expressões reais isolando a região dos olhos com máscara.', desenvolvimento: 'Parear expressões com contextos sociais que as desencadeiam.', fechamento: 'Criar uma cena lúdica com fantoches projetando intenções e desejos dos personagens.' },
    telehealthAdaptation: 'Use o congelamento de tela com expressões teatrais para a criança desvendar a pista.', clinicalTip: 'Utilize fotos de pessoas reais com pistas visuais destacadas, evitando abstrações complexas.', estimatedMinutes: 30
  },
  // Adding representations for TEA-06 to TEA-20
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `TEA-${String(i + 6).padStart(2, '0')}`,
    collectionId: 2,
    title: [
      'A Caixa de Transição com Cronômetro Visual',
      'O Roteiro Visual de Higiene e Banho Autônomo',
      'O Pareamento das Emoções Primárias com Cores',
      'O Jogo da Troca de Turno no Brincar Compartilhado',
      'O Mapa de Interesses Especiais como Ponte de Conexão',
      'O Painel da Rotina Escolar e do Recreio Seguro',
      'O Guia de Dessensibilização Alimentar Lúdica',
      'O Semáforo dos Toques Corporais Permitidos',
      'O Baralho de Iniciação de Conversa com Pares',
      'A Cartilha do Autocuidado na Sobrecarga Sonora',
      'O Treino de Interpretação de Figuras de Linguagem e Metáforas',
      'A Roda dos Sentimentos com Botões Sonoros Graváveis',
      'O Caderno de Estratégias para Substituir o Flapping Seguro',
      'O Circuito de Coordenação Motora e Praxia Global',
      'A Certificação da Amizade e Compartilhamento de Brinquedos'
    ][i],
    ageRange: '4 a 12 anos (adaptável individualmente)',
    ageCategories: ['3-5', '6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Estimular o desenvolvimento socioadaptativo, previsibilidade e comunicação funcional no espectro.',
    tags: ['TEA', 'Autismo', 'Habilidades Sociais', 'Regulação Sensorial'],
    materialsIncluded: ['Ficha de aplicação prática estruturada em PDF', 'Suporte visual com ícones padronizados'],
    stepByStep: {
      inicio: 'Estabelecer vínculo sensorial seguro com acolhimento ao hiperfoco da criança.',
      desenvolvimento: 'Conduzir a intervenção com passos curtos, apoio de pistas visuais e mediação assertiva.',
      fechamento: 'Consolidar a aprendizagem com reforço afetivo e comunicação para os pais aplicarem na rotina.'
    },
    telehealthAdaptation: 'Compartilhamento de pranchas visuais de alta definição com suporte ativo dos cuidadores.',
    clinicalTip: 'A previsibilidade é o maior ansiolítico para o cérebro autista. Sempre antecipe o término da atividade.',
    estimatedMinutes: 25
  })),

  // ACERVO 3: TOD (Transtorno Opositor Desafiador) & Comportamento - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `TOD-${String(i + 1).padStart(2, '0')}`,
    collectionId: 3,
    title: [
      'O Acordo dos Campeões: A Arte da Escolha Dirigida',
      'A Balança das Decisões: Ganho vs Perda sem Luta de Poder',
      'O Vulcão da Raiva e o Botão de Resfriamento',
      'O Contrato Terapêutico Anti-Confronto',
      'O Jogo das Regras Invertidas (Quem Manda no Terapeuta?)',
      'A Roda da Negociação Ganha-Ganha',
      'O Cofre dos Combinados Invioláveis',
      'O Detetive da Provocação: Desarmando a Isca',
      'A Bússola do Perdão e Reparação sem Humilhação',
      'O Treino de Escuta sem Argumentação Imediata',
      'O Dado das Soluções Criativas para Disputas',
      'O Espelho da Reatividade: Como Minha Fala Atinge o Outro',
      'O Semáforo da Frustração nos Jogos Competitivos',
      'O Manual da Revanche Pacífica',
      'A Caixa de Desabafo Sem Julgamento',
      'O Termômetro da Teimosia: Vale a Pena Essa Batalha?',
      'O Guia da Comunicação Não-Violenta para Crianças',
      'O Treino do Não Gentil com Justificativa',
      'O Diário da Cooperação Voluntária',
      'O Troféu da Autonomia com Responsabilidade'
    ][i],
    ageRange: '5 a 12 anos',
    ageCategories: ['6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Reduzir a reatividade opositora, evitar disputas de poder disfuncionais e construir repertório de negociação e cooperação.',
    tags: ['TOD', 'Oposição', 'Desobediência', 'Luta de Poder', 'Cooperação'],
    materialsIncluded: ['Ficha de acordo comportamental imprimível em PDF', 'Cartões de escolhas limitadas e roteiro prático'],
    stepByStep: {
      inicio: 'Validar a necessidade de controle da criança sem cair na armadilha da disputa de força verbal.',
      desenvolvimento: 'Apresentar duas opções aceitáveis para o terapeuta e permitir que a criança escolha livremente entre elas.',
      fechamento: 'Reforçar a cooperação demonstrando respeito à autonomia da criança.'
    },
    telehealthAdaptation: 'Utilize enquetes na tela onde a criança clica para votar na opção que prefere executar primeiro.',
    clinicalTip: 'Nunca diga "você tem que fazer". Substitua por escolha dirigida: "Você prefere fazer a folha azul ou a verde primeiro?".',
    estimatedMinutes: 25
  })),

  // ACERVO 4: Depressão e Ansiedade Infantil - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `ANSIEDADE-${String(i + 1).padStart(2, '0')}`,
    collectionId: 4,
    title: [
      'A Fábrica dos Pensamentos Monstro vs Pensamentos Amigo',
      'O Pote dos Medos e a Chave da Coragem',
      'A Respiração do Cheirinho da Flor e Apagar a Velinha',
      'O Mapa Corporal das Somatizações (Onde a Angústia Mora?)',
      'A Escada da Coragem: Enfrentamento Gradual de Fobias',
      'O Diário das Pequenas Vitórias Diárias (Ativação Comportamental)',
      'O Escudo contra Pensamentos Catastróficos',
      'O Termômetro do Pânico e Ancoragem 5-4-3-2-1',
      'O Guarda-Chuva Emocional para Dias Cinzentos',
      'A Caixa das Preocupações Noturnas para Dormir Bem',
      'O Detetive de Evidências Reais vs Imaginações Assustadoras',
      'A Roda dos Sentimentos Ocultos: Tristeza Disfarçada de Raiva',
      'O Amigo Imaginário Protetor: Construindo Recursos Internos',
      'O Baralho da Autocompaixão para Dias Difíceis',
      'A Bússola do Amanhã: Reconstruindo a Esperança',
      'O Jogo da Aventura Interior: Desafiando a Zona de Conforto',
      'O Piquenique das Emoções com os Bichinhos de Pelúcia',
      'O Livro da Minha Coragem Pessoal',
      'O Rastreador de Humor e Atividades que Fazem Sorrir',
      'A Caixa de Primeiros Socorros Emocionais'
    ][i],
    ageRange: '4 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Reestruturação cognitiva lúdica, ativação comportamental contra retraimento e dessensibilização progressiva de medos.',
    tags: ['Ansiedade', 'Depressão Infantil', 'TCC Lúdica', 'Regulação Emocional', 'Medos'],
    materialsIncluded: ['Pranchas de identificação somática em PDF', 'Cartões de pensamentos realistas e escalas visuais'],
    stepByStep: {
      inicio: 'Acolher a expressão do sofrimento sem invalidar com frases de otimismo superficial.',
      desenvolvimento: 'Externalizar a ansiedade em um personagem ou monstro para retirar a culpa do paciente.',
      fechamento: 'Treinar um plano de ação concreto e um exercício sensorial respiratório de segurança.'
    },
    telehealthAdaptation: 'Exercícios guiados com música suave, tela com imagens de natureza relaxante e desenho compartilhado.',
    clinicalTip: 'Nunca diga "não precisa ter medo". Diga: "Eu vejo o quanto esse medo parece gigante, e eu vou segurar sua mão para enfrentá-lo".',
    estimatedMinutes: 30
  })),

  // ACERVO 5: Dificuldades de Aprendizagem & Dislexia - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `APREND-${String(i + 1).padStart(2, '0')}`,
    collectionId: 5,
    title: [
      'A Máquina das Palavras e Rimas Malucas',
      'O Labirinto das Letras Espelhadas (B vs D / P vs Q)',
      'O Treino Multissensorial na Caixa de Areia Colorida',
      'O Tapete da Leitura Ritmicamente Guiada',
      'A Régua de Foco para Não Pular Linhas',
      'O Detetive dos Sons Ocultos (Consciência Fonêmica)',
      'O Mapa Mental dos Textos Grandes',
      'O Baralho das Palavras com Imagens Concretas',
      'A Fábrica da Escrita Sem Medo da Borracha',
      'O Semáforo da Lição de Casa sem Lágrimas',
      'O Treino de Velocidade de Processamento com Cartas Rápidas',
      'O Quadro da Autoestima Acadêmica: Além das Notas',
      'O Dicionário Visual Pessoal de Vocabulário Novo',
      'O Jogo da Montagem das Sílabas Viajantes',
      'O Gravador de Histórias para Expressão Verbal Livre',
      'A Bússola do Erro: Errar é o Cérebro Aprendendo',
      'O Organizador Visual de Problemas Matemáticos em 3 Passos',
      'O Guia de Adaptação de Provas para Escolares',
      'O Bingo das Famílias Fonológicas',
      'O Certificado de Conquistador das Palavras'
    ][i],
    ageRange: '5 a 12 anos',
    ageCategories: ['6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Desenvolver a consciência fonológica, discriminação visual de grafemas e reverter a desmotivação e fobia escolar.',
    tags: ['Dislexia', 'Aprendizagem', 'Consciência Fonológica', 'Autoestima Acadêmica'],
    materialsIncluded: ['Pranchas de pareamento multissensorial', 'Régua de leitura imprimível e cartões fonéticos'],
    stepByStep: {
      inicio: 'Restaurar a segurança da criança garantindo que ela não será ridicularizada por trocar letras.',
      desenvolvimento: 'Empregar métodos multissensoriais (tocar, ouvir, ver e traçar no ar) para fixação fonêmica.',
      fechamento: 'Reconhecer o esforço despendido pelo cérebro e celebrar cada palavra decodificada com sucesso.'
    },
    telehealthAdaptation: 'Destaque visual de letras com cores contrastantes na lousa digital compartilhada.',
    clinicalTip: 'A criança disléxica gasta até cinco vezes mais energia para ler uma frase do que um leitor fluente. Respeite os sinais de fadiga.',
    estimatedMinutes: 25
  })),

  // ACERVO 6: Luto, Traumas e Perdas - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `LUTO-${String(i + 1).padStart(2, '0')}`,
    collectionId: 6,
    title: [
      'A Caixa das Lembranças de Luz e Saudade',
      'O Livro da História que Não Terminou',
      'A Casinha das Duas Famílias (Manejo de Divórcio)',
      'O Pote dos Desabafos de Chuva e Sol',
      'O Fio Invisível do Amor que Conecta Corações',
      'O Ritual da Despedida e Carta das Estrelas',
      'O Mapa do Refúgio Seguro Interior',
      'O Bichinho Guardião das Minhas Memórias',
      'A Pintura da Tempestade que Passou',
      'O Diário da Minha Nova Rotina',
      'A Colcha de Retalhos dos Bons Momentos',
      'O Jogo dos Sentimentos Misturados no Luto',
      'A Caixa Forte dos Segredos que Podem Ser Contados',
      'A Árvore Genealógica das Raízes que Ficam',
      'O Escudo de Proteção Contra Culpa Invisível',
      'A História do Passarinho que Mudou de Ninho',
      'O Pote de Bolinhas de Sabão para Dizer Adeus',
      'O Treino de Respiração da Calmaria no Peito',
      'A Bússola do Recomeço com Esperança',
      'O Abraço de Urso: Autocuidado em Dias Tristes'
    ][i],
    ageRange: '4 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Facilitar a elaboração lúdica do luto, validar sentimentos ambivalentes e construir memórias de ancoragem afetiva segura.',
    tags: ['Luto', 'Separação', 'Divórcio', 'Trauma', 'Perdas', 'Segurança'],
    materialsIncluded: ['Livreto de memórias em PDF', 'Cartões de acolhimento e roteiros narrativos de ressignificação'],
    stepByStep: {
      inicio: 'Construir um santuário de confidencialidade e aceitação incondicional das lágrimas ou do silêncio.',
      desenvolvimento: 'Utilizar metáforas e contos terapêuticos projetivos com animais e barcos para mediar a perda.',
      fechamento: 'Criar um objeto transicional físico que traga a sensação de proteção e vínculo contínuo.'
    },
    telehealthAdaptation: 'Incentive a criança a mostrar um desenho ou objeto significativo de apego pela webcam.',
    clinicalTip: 'Nunca diga que "quem morreu foi viajar ou virou estrelinha" sem esclarecimento biológico honesto para não gerar medo crônico de dormir ou viajar.',
    estimatedMinutes: 30
  })),

  // ACERVO 7: Habilidades Sociais & Inteligência Emocional - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `SOCIAIS-${String(i + 1).padStart(2, '0')}`,
    collectionId: 7,
    title: [
      'O Escudo Anti-Bullying e o Botão do Desprezo Assertivo',
      'A Ponte da Empatia: Colocando-se no Sapato do Outro',
      'O Jogo da Roda da Conversa e Contato Visual Amigável',
      'O Semáforo das Palavras Gentis vs Espinhos Verbais',
      'O Detetive das Boas Amizades (Amigo de Verdade vs Tóxico)',
      'A Arte de Fazer Amigos no Recreio em 3 Passos',
      'O Manual de Resolução Pacífica de Conflitos',
      'O Treino de Dizer NÃO com Educação e Firmeza',
      'O Baralho dos Elogios Sinceros e Gratidão',
      'O Jogo da Troca de Papéis no Teatro de Bonecos',
      'O Dado das Respostas Calmas para Provocações',
      'A Bússola da Generosidade e Partilha sem Obrigação',
      'O Treino da Escuta Ativa com Repetição Amiga',
      'A Caixa do Segredo das Boas Ações Invisíveis',
      'O Guia da Convivência em Grupos e Esportes',
      'O Termômetro da Fofoca: O Filtro dos Três Crivos',
      'O Livro das Minhas Boas Maneiras que Conectam',
      'O Jogo da Desculpa Verdadeira e Reparação',
      'A Árvore dos Vínculos e Gratidão pelos Amigos',
      'O Distintivo de Construtor de Paz'
    ][i],
    ageRange: '5 a 12 anos',
    ageCategories: ['6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Fortalecer a assertividade, prevenir a vitimização por bullying, desenvolver empatia e repertório de cooperação entre pares.',
    tags: ['Bullying', 'Empatia', 'Habilidades Sociais', 'Amizade', 'Assertividade'],
    materialsIncluded: ['Cartões de role-playing de situações reais', 'Pranchas de comunicação assertiva em PDF'],
    stepByStep: {
      inicio: 'Debater situações de convívio escolar trazidas pela criança sem emitir julgamento moral prévio.',
      desenvolvimento: 'Fazer dramatização (role-playing) invertendo papéis: o terapeuta faz a provocação e a criança treina a postura corporal firme.',
      fechamento: 'Avaliar a sensação interna de segurança corporal e firmar o compromisso de testar a resposta na escola.'
    },
    telehealthAdaptation: 'Dramatizações teatrais ao vivo pela câmera treinando a expressão facial de serenidade e firmeza.',
    clinicalTip: 'Crianças que sofrem bullying precisam aprender a neutralidade emocional: reagir com choro ou fúria fornece o combustível que o agressor busca.',
    estimatedMinutes: 25
  })),

  // ACERVO 8: Avaliação Lúdica, Anamnese & Vínculo - 20 Recursos
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `AVALIA-${String(i + 1).padStart(2, '0')}`,
    collectionId: 8,
    title: [
      'A Entrevista da Ilha Deserta: Quem Eu Levaria?',
      'O Quebra-Gelo dos Três Desejos da Varinha Mágica',
      'A Linha do Tempo da Minha Vida em Desenhos',
      'O Desenho da Família dos Animais (Projeção Afetiva)',
      'O Jogo das 20 Perguntas Curiosas sobre Mim',
      'A Caixa Misteriosa do Primeiro Encontro',
      'O Contrato Terapêutico Ilustrado para Crianças',
      'O Mapa dos Meus Lugares Favoritos e de Medo',
      'O Jogo do Baú das Máscaras e das Verdades',
      'A Escultura em Massinha do Meu Humor Hoje',
      'O Pote dos Sonhos para o Nosso Espaço de Terapia',
      'O Questionário Lúdico dos Super-Poderes Pessoais',
      'A Radiografia Emocional com Boneco Transparente',
      'O Jogo do Detetive dos Segredos do Consultório',
      'O Painel dos Combinados e do Sigilo do Paciente',
      'O Termômetro de Conforto com a Psicóloga',
      'A Fábrica da Confiança: O que Preciso para me Sentir Bem?',
      'O Mapa das Pessoas de Apoio e Confiança',
      'O Teste do Brincar Livre Estruturado com Miniaturas',
      'O Passaporte Oficial do Nosso Espaço de Encontro'
    ][i],
    ageRange: '3 a 12 anos',
    ageCategories: ['3-5', '6-8', '9-12'] as ('3-5' | '6-8' | '9-12')[],
    objective: 'Estabelecer vínculo terapêutico inicial seguro, sondagem da queixa sob o olhar da criança e enquadre do sigilo lúdico.',
    tags: ['Vínculo', 'Quebra-Gelo', 'Anamnese Lúdica', 'Contrato Terapêutico', 'Ludoterapia'],
    materialsIncluded: ['Protocolos lúdicos de triagem e rapport em PDF', 'Cartas ilustradas de auto-apresentação e passaporte lúdico'],
    stepByStep: {
      inicio: 'Apresentar a sala e os brinquedos permitindo exploração livre nos primeiros minutos sem perguntas inquisitórias.',
      desenvolvimento: 'Propor o recurso quebra-gelo como um jogo onde o terapeuta também joga e responde com vulnerabilidade apropriada.',
      fechamento: 'Alinhar o contrato terapêutico explicando que ali ela não leva nota e o que ela brinca é protegido pelo sigilo.'
    },
    telehealthAdaptation: 'Tour virtual do consultório e dinâmica de "mostre o brinquedo que melhor representa você hoje".',
    clinicalTip: 'Nunca comece a primeira sessão com a criança perguntando "por que seus pais te trouxeram aqui?". Construa o vínculo lúdico antes de investigar a dor.',
    estimatedMinutes: 30
  }))
];
