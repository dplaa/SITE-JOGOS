const responses = {
    "O que é Counter-Strike?": "Counter-Strike é um jogo de tiro em primeira pessoa que se concentra em combate em equipe, onde os jogadores podem escolher ser terroristas ou contra-terroristas.",
    "Qual é a diferença entre Call of Duty e Battlefield?": "Call of Duty foca em jogabilidade rápida e frenética, enquanto Battlefield oferece experiências mais amplas e táticas com grandes mapas e combate veicular.",
    "O que é Valorant?": "Valorant é um jogo de tiro tático que combina elementos de FPS com habilidades únicas de personagens, proporcionando uma experiência estratégica e dinâmica.",
    "Quais são as melhores armas em jogos de FPS?": "As melhores armas dependem do jogo e do estilo de jogo, mas geralmente rifles de assalto, snipers e pistolas são populares por sua versatilidade.",
    "Como melhorar no meu jogo de FPS?": "Pratique sua mira, aprenda os mapas, jogue com amigos para comunicação e utilize ajustes nas configurações do jogo para otimizar sua experiência.",
    "O que é um FPS competitivo?": "FPS competitivo refere-se a jogos de tiro em primeira pessoa que têm ligas, torneios e uma comunidade ativa, como CS:GO e Valorant.",
    "Como funciona o matchmaking em jogos de FPS?": "O matchmaking usa algoritmos para parear jogadores com habilidades semelhantes, analisando seu desempenho e histórico de partidas.",
    "Quais são as tendências atuais em jogos de FPS?": "Atualmente, muitos jogos estão incorporando elementos de battle royale, microtransações e modos cooperativos, além de gráficos melhorados.",
    "Quais são os principais desenvolvedores de jogos de FPS?": "Desenvolvedores conhecidos incluem Valve, Activision, EA e Riot Games, cada um trazendo inovações para o gênero.",
    "Como os jogos de FPS afetam a coordenação motora?": "Jogos de FPS podem melhorar a coordenação mão-olho e habilidades motoras finas devido à necessidade de reações rápidas e precisão.",
    
    // Novas perguntas e respostas
    "Quais são os modos de jogo mais populares em FPS?": "Os modos mais populares incluem Deathmatch, Capture the Flag, e Team Deathmatch.",
    "O que são skins em jogos de FPS?": "Skins são cosméticos que alteram a aparência das armas ou personagens sem afetar o desempenho.",
    "Como funcionam os jogos de FPS em equipe?": "Em jogos em equipe, os jogadores trabalham juntos para atingir objetivos, como capturar pontos ou eliminar a equipe adversária.",
    "Quais são os benefícios de jogar FPS?": "Jogar FPS pode melhorar a capacidade de reação, o trabalho em equipe e a tomada de decisões sob pressão.",
    "O que são FPS com perspectiva em primeira pessoa?": "FPS em primeira pessoa permitem que os jogadores vejam o mundo através dos olhos do personagem, aumentando a imersão.",
    "Como são as atualizações de conteúdo em jogos de FPS?": "Os desenvolvedores frequentemente lançam atualizações para adicionar novos mapas, modos de jogo e balanceamentos.",
    "O que é a comunidade de jogos de FPS?": "A comunidade de jogos de FPS é composta por jogadores que se reúnem para competir, compartilhar dicas e discutir estratégias.",
    "Como funciona a economia em jogos como CS:GO?": "Em CS:GO, os jogadores ganham dinheiro ao completar objetivos e podem comprar armas e equipamentos no início de cada rodada.",
    "Qual é a importância do mapa em jogos de FPS?": "O mapa é crucial, pois determina a estratégia, o posicionamento e os caminhos de ataque e defesa.",
    "O que são clãs em jogos de FPS?": "Clãs são grupos de jogadores que se unem para competir e se socializar em jogos.",
    
    "O que é um headshot?": "Um headshot é um tiro que acerta a cabeça do inimigo, causando dano extra ou eliminando-o instantaneamente.",
    "Quais são os jogos de FPS mais influentes?": "Jogos como Doom, Half-Life e Call of Duty mudaram a forma como os FPS são jogados e desenvolvidos.",
    "Como funcionam os sistemas de ranking em jogos de FPS?": "Os sistemas de ranking avaliam o desempenho do jogador e o posicionam em uma tabela de classificação, permitindo partidas mais equilibradas.",
    "O que são cheats em jogos de FPS?": "Cheats são métodos não autorizados que dão vantagens injustas, como mira automática ou invulnerabilidade.",
    "Como lidar com jogadores tóxicos em FPS?": "Use as ferramentas de reporte do jogo, e evite interagir com jogadores tóxicos para uma experiência mais positiva.",
    "Quais são os campeonatos de FPS mais famosos?": "Os campeonatos incluem ESL One, DreamHack e o Mundial de Valorant.",
    "Como o design de níveis afeta a jogabilidade?": "Um bom design de níveis cria oportunidades estratégicas, torna o jogo mais divertido e mantém o fluxo de partidas equilibradas.",
    "O que são eventos sazonais em jogos de FPS?": "Eventos sazonais introduzem novos conteúdos e modos de jogo temporários, geralmente em torno de datas comemorativas.",
    "Quais são os requisitos mínimos para jogos de FPS?": "Os requisitos variam, mas geralmente incluem uma boa placa gráfica, processador e uma conexão de internet estável.",
    "Como a inteligência artificial é usada em jogos de FPS?": "IA é usada para controlar inimigos não jogáveis e para adaptar a dificuldade com base no desempenho do jogador.",
    
    "O que é um modo de jogo cooperativo?": "Modo cooperativo permite que jogadores trabalhem juntos para completar objetivos em vez de competirem entre si.",
    "Como funciona o sistema de loot em jogos de FPS?": "O sistema de loot permite que os jogadores coletem equipamentos e armas, muitas vezes em caixas ou ao derrotar inimigos.",
    "Qual é o impacto dos eSports nos jogos de FPS?": "Os eSports aumentaram a popularidade dos jogos de FPS, oferecendo competições profissionais e uma base de fãs dedicada.",
    "Como escolher a melhor configuração de controle em um FPS?": "Experimente diferentes sensibilidades e layouts até encontrar o que melhor se adapta ao seu estilo de jogo.",
    "O que são DLCs em jogos de FPS?": "DLCs (Conteúdos Para Download) são pacotes adicionais que oferecem novos conteúdos, como mapas ou modos de jogo.",
    "Como funcionam as microtransações em FPS?": "Microtransações permitem que os jogadores comprem itens cosméticos ou vantagens com dinheiro real.",
    "O que é um jogo de tiro em equipe?": "Um jogo de tiro em equipe envolve jogadores colaborando para alcançar objetivos, geralmente com foco em estratégias de grupo.",
    "Como as atualizações afetam o equilíbrio do jogo?": "Atualizações frequentemente corrigem bugs e ajustam armas ou mecânicas para manter a jogabilidade justa.",
    "O que é um FPS baseado em história?": "FPS baseados em história possuem uma narrativa envolvente que orienta os jogadores através de missões e objetivos.",
    "Quais são os jogos de FPS mais esperados do ano?": "Jogos como Starfield, a nova edição de Call of Duty e sequências de franquias populares estão entre os mais aguardados.",
    
    "O que é a mecânica de mira em jogos de FPS?": "A mecânica de mira refere-se à forma como os jogadores controlam a precisão dos tiros, essencial para o sucesso.",
    "Como funciona o sistema de respawn?": "O sistema de respawn determina quando e onde um jogador renasce após ser eliminado, impactando a estratégia de jogo.",
    "O que são modos de jogo alternativos em FPS?": "Modos alternativos oferecem variações de jogabilidade, como zumbis, battle royale ou modos de sobrevivência.",
    "Como a música e os efeitos sonoros afetam a experiência de jogo?": "Música e efeitos sonoros aumentam a imersão e a tensão, ajudando os jogadores a se sentirem mais envolvidos na ação.",
    "Quais são as dicas para se destacar em FPS?": "Foque na comunicação, conheça os mapas, estude os adversários e pratique regularmente.",
    "O que é um FPS tático?": "FPS táticos priorizam estratégia e planejamento sobre a ação rápida, exigindo coordenação entre os jogadores.",
    "Como a história afeta os jogos de FPS?": "Uma boa história pode adicionar profundidade e motivação, tornando o jogo mais envolvente.",
    "O que são mods em jogos de FPS?": "Mods são modificações feitas por fãs que alteram ou expandem o jogo original, oferecendo novas experiências.",
    "Como a performance do jogo pode ser otimizada?": "Ajustar configurações gráficas, atualizar drivers e usar hardware compatível ajuda a otimizar o desempenho.",
    "Quais são as maiores comunidades online de FPS?": "Comunidades como Reddit, Discord e fóruns dedicados são populares para discutir estratégias e compartilhar experiências."
};

// Adiciona evento para o botão de enviar mensagem do chatbot
document.getElementById("send-chat").addEventListener("click", () => {
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    if (chatInput.value) {
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = chatInput.value;
        chatMessages.appendChild(userMessage);

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = responses[chatInput.value] || "Desculpe, não entendi sua pergunta.";
        chatMessages.appendChild(botMessage);

        // Limpa a entrada de mensagem
        chatInput.value = "";
        
        // Adiciona rolagem automática
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// Galeria de imagens
const games = [
    {
        title: "Counter-Strike",
        image: "images/csgo.jpg",
        description: "Counter-Strike é um clássico jogo de tiro em primeira pessoa que foca no combate em equipe."
    },
    {
        title: "Call of Duty",
        image: "images/cod.jpg",
        description: "Call of Duty é uma popular série de jogos de tiro que oferece campanhas emocionantes e modos multiplayer competitivos."
    },
    {
        title: "Valorant",
        image: "images/valorant4k.jpg", // Aqui está a imagem do Valorant
        description: "Valorant é um jogo de tiro tático que combina elementos de estratégia e habilidades únicas de personagens."
    },
    // Adicione mais jogos conforme necessário
];

// Variáveis de controle da galeria
let currentIndex = 0;

// Atualiza a galeria com a imagem correspondente
function updateGallery() {
    const galleryImage = document.getElementById('gallery-image');
    const galleryTitle = document.getElementById('gallery-title');
    const galleryDescription = document.getElementById('gallery-description');

    galleryImage.src = games[currentIndex].image;
    galleryImage.onload = () => {
        console.log('Imagem carregada com sucesso:', games[currentIndex].image);
    };
    galleryImage.onerror = () => {
        console.log('Erro ao carregar a imagem:', games[currentIndex].image);
    };

    galleryTitle.textContent = games[currentIndex].title;
    galleryDescription.textContent = games[currentIndex].description;

    // Efeito de transição
    galleryImage.style.opacity = 0; // Começa invisível
    setTimeout(() => {
        galleryImage.style.opacity = 1; // Torna visível
    }, 100); // Breve atraso para iniciar a transição
}

// Navegar para a imagem anterior
document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : games.length - 1;
    updateGallery();
});

// Navegar para a próxima imagem
document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex < games.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

// Inicializa a galeria
updateGallery();
