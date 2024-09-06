let dados = [
    {
        nome: "Ahri",
        descricao: "Uma sensual raposa que encanta seus inimigos antes de devorá-los.",
        rota: "mid",
        classe: "mago",
        tag: "mage flex enchantress"
    },
    {
        nome: "Garen",
        descricao: "Um guerreiro de Demacia, símbolo de justiça e honra.",
        rota: "top",
        classe: "lutador",
        tag: "fighter top demacia"
    },
    {
        nome: "Vayne",
        descricao: " A Caçadora Noturna, Vayne, é uma atiradora especializada em derrubar alvos únicos. Com sua agilidade e letalidade, ela se destaca em perseguir e eliminar inimigos fracos. Sua habilidade de aumentar seu dano crítico e furtividade a tornam uma ameaça formidável em lutas prolongadas.",
        rota: "Bot Lane",
        classe: "Atiradora (ADC - Attack Damage Carry)",
        tag: "Caçadora Letal agil Furtiva"
    },
    {
        nome: "Aatrox",
        descricao: "Um antigo guerreiro Ascendido de Shurima, agora corrompido por uma espada Darkin. Aatrox é um lutador poderoso, com habilidades de cura e grande capacidade de sobrevivência.Rota: Top Lane (principalmente), mas pode ser flexionado para a Selva.Classe: Lutador Fighter",
        rota: "Lutador",
        classe: "Top Lane",
        tag: " Imortal, Sangrento, Implacável"
    },
    {
        nome: "Akali",
        descricao: " A Kunoichi da Névoa, Akali, é uma assassina veloz e letal, mestre em combate corpo a corpo. Ela utiliza neblina para se tornar invisível e eliminar seus inimigos com precisão cirúrgica.",
        rota: "Mid Lane (Meio)",
        classe: " Assassino (Assassin)",
        tag: "Ágil, Letal, Furtiva"
    },
    {
        nome: "Akshan",
        descricao: "O Sentinela Rebelde, Akshan, é um atirador único que combina alta mobilidade com a capacidade de reviver aliados caídos. Sua arma em formato de gancho lhe permite se deslocar pelo mapa e marcar inimigos, os quais, ao eliminarem aliados, são automaticamente revividos por Akshan.",
        rota: "Meio (Mid Lane)",
        classe: " Atirador (ADC) com elementos de Assassino",
        tag: "Ágil, Vingativo, Reivindicador"
    },
    {
        nome: "Alistar",
        descricao: "O Minotauro, Alistar, é um tanque resistente e agressivo, capaz de iniciar lutas em equipe e proteger seus aliados. Seus chifres e força bruta o tornam uma força a ser considerada no campo de batalha.",
        rota: "Suporte",
        classe: "Tanque (Tank)",
        tag: " Resistente, Iniciação, Protetor"
    },
    {
        nome: "Amumu",
        descricao: "A Múmia Chorona é um tanque solitário que busca amizades. Apesar de sua aparência assustadora, ele é um aliado leal e forte. Suas habilidades causam dano em área e o permitem controlar o campo de batalha.",
        rota: "Selva",
        classe: "Tanque",
        tag: "Solitário, Chorão, Controle de multidão"
    },
    {
        nome: "Anivia",
        descricao: "O Cisne de Gelo é uma maga que controla o gelo e a neve. Ela é conhecida por sua habilidade de criar paredes de gelo para dividir o campo de batalha e causar dano em área.",
        rota: "Meio",
        classe: "Meio (Maga)",
        tag: " Gelo, Controle de mapa, Artilheira"
    },
    {
        nome: "Aphelios",
        descricao: " O Atendente da Lua é um atirador único que utiliza cinco armas lunares diferentes, cada uma com suas próprias características. Sua mecânica de jogo é complexa e exige habilidade para dominar.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Lunar, Versátil, Complexo"
    },
    {
        nome: "Ashe",
        descricao: "A Arqueira de Cristal é uma atiradora de longo alcance que pode desacelerar e prender seus inimigos. Sua flecha suprema é capaz de revelar todos os campeões inimigos no mapa.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Arqueira, Gelo, Utilitária"
    },
    {
        nome: "Aurelion Sol",
        descricao: "O Ascendido das Estrelas é um mago cósmico que manipula as estrelas para atacar seus inimigos. Seu estilo de jogo é único, com grande alcance e capacidade de controlar o campo de batalha.",
        rota: "Meio",
        classe: "Mago",
        tag: "Cósmico, Estrelas, Controle de mapa"
    },
    {
        nome: "Aurora",
        descricao: "Desde que nasceu, Aurora vive com uma habilidade inigualável de viajar entre os reinos dos mortais e dos espíritos. Determinada a aprender mais sobre os habitantes do reino espiritual, ela deixou seu lar para trás com o objetivo de conduzir mais",
        rota: "Top",
        classe: "Mago/Assassino",
        tag: "Atirador, mago, coelho"
    },
    {
        nome: "Azir",
        descricao: "O Imperador das Areias é um mago que comanda exércitos de soldados de areia. Ele é um líder nato, capaz de manipular o terreno e criar estruturas para defender seus aliados.",
        rota: "Meio",
        classe: "Mago",
        tag: "Imperador, Areia, Controle de mapa"
    },
    {
        nome: "Bardo",
        descricao: "O Vagante Cósmico é um suporte único que explora o mapa em busca de chimes cósmicos. Ele oferece utilidade à sua equipe com suas habilidades de cura, lentidão e deslocamento.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Cósmico, Explorador, Utilitário"
    },
    {
        nome: "Bel'Veth",
        descricao: "A Rainha Vazia é uma assassina monstruosa que emerge das profundezas para devorar tudo em seu caminho. Ela é extremamente ágil e possui um kit de habilidades focado em perseguição e assassinato.",
        rota: "Selva",
        classe: "Assassina",
        tag: "Monstruosa, Vazio, Caçadora"
    },
    {
        nome: "Blitzcrank",
        descricao: "O Grande Golem de Vapor é um suporte tanque com um gancho icônico que permite puxar os inimigos para perto. Ele é conhecido por sua capacidade de iniciar lutas e proteger seus aliados.",
        rota: "Suporte",
        classe: "Tanque",
        tag: "Gancho, Mecânico, Iniciação"
    },
    {
        nome: "Brand",
        descricao: "O Piromante é um mago de longo alcance que inflige dano mágico em área e aplica efeitos de queimadura. Seus feitiços são perfeitos para controlar o campo de batalha e eliminar múltiplos inimigos.",
        rota: "Meio",
        classe: "Mago",
        tag: "Fogo, Queimadura, Área de efeito"
    },
    {
        nome: "Braum",
        descricao: "O Guardião de Freljord é um suporte tanque que protege seus aliados com um escudo gigante. Ele é conhecido por sua capacidade de absorver dano e impedir que os inimigos se aproximem de seus companheiros de equipe.",
        rota: " Suporte",
        classe: "Tanque",
        tag: "Escudo, Freljord, Protetor"
    },
    {
        nome: "Briar",
        descricao: "A Criatura da Névoa é uma jungler assassina que emerge das sombras para caçar seus inimigos. Ela é rápida, ágil e possui um kit de habilidades focado em dano em área e perseguição.",
        rota: "Selva",
        classe: " Assassina",
        tag: "Névoa, Caça, Ágil morta de fome"
    },
    {
        nome: "Caitlyn",
        descricao: "O Xerife de Piltover é uma atiradora de longo alcance com alta precisão e dano. Ela é conhecida por suas armadilhas e sua capacidade de eliminar inimigos a distância.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Xerife, Precisão, Armadilhas"
    },
    {
        nome: "Camille",
        descricao: " A Acero da Piltover é uma lutadora ágil e letal, especializada em combate corpo a corpo. Suas habilidades permitem que ela se agarre a paredes, pule sobre inimigos e cause grandes quantidades de dano em pouco tempo.",
        rota: "Topo",
        classe: "Lutadora",
        tag: "Ágil, Letal, Mobilidade"
    },
    {
        nome: "Cassiopeia",
        descricao: "A Serpente da Névoa é uma maga que controla veneno e petrificação. Seus ataques envenenam os inimigos, causando dano ao longo do tempo e os deixando vulneráveis.",
        rota: "Meio",
        classe: "Maga",
        tag: "Veneno, Petrificação, Controle de multidão"
    },
    {
        nome: "Cho'Gath",
        descricao: "O Vazio Voraz é um monstro colossal que cresce ao devorar seus inimigos. Ele é um tanque resistente com habilidades de área de efeito devastadoras.",
        rota: "Topo",
        classe: "Tanque",
        tag: "Monstro, Vazio, Crescimento"
    },
    {
        nome: "Corki",
        descricao: "O Yordle Pilota é um atirador versátil que combina ataques à distância com explosões poderosas. Sua arma principal é um canhão que dispara mísseis e bombas.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Yordle, Explosivo, Versátil"
    },
    {
        nome: "Darius",
        descricao: "O Hance de Noxus é um guerreiro brutal e poderoso, especializado em combate corpo a corpo. Suas habilidades permitem que ele agarre os inimigos, os arraste para perto e cause grandes quantidades de dano.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Noxus, Brutal, Força"
    },
    {
        nome: "Diana",
        descricao: " A Caçadora da Lua é uma lutadora ágil que luta com uma foice lunar. Seus ataques são poderosos e ela pode se teletransportar para a lua para escapar do perigo.",
        rota: "Selva",
        classe: "Lutadora",
        tag: "Lua, Ágil, Teletransporte"
    },
    {
        nome: "Draven",
        descricao: " O Glorioso é um atirador arrogante e extrovertido que adora o espetáculo. Seus eixos voadores retornam para ele, permitindo que ele cause dano extra e mantenha o ritmo da luta.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Arrogante, Eixos, Showman"
    },
    {
        nome: "Dr. Mundo",
        descricao: "O Madman of Zaun é um lutador tanque que se regenera rapidamente e é resistente a dano. Suas habilidades permitem que ele se cure, cause dano em área e persiga seus inimigos.",
        rota: "Topo, Selva",
        classe: " Lutador, Tanque",
        tag: " Zaun, Regeneração, Louco"
    },
    {
        nome: "Ekko",
        descricao: "O Menino do Tempo é um assassino ágil que pode manipular o tempo. Suas habilidades permitem que ele viaje no tempo, atordoar inimigos e causar grandes quantidades de dano em pouco tempo.",
        rota: "Meio, Selva",
        classe: "Assassino",
        tag: "Tempo, Ágil, Manipulador"
    },
    {
        nome: "Elise",
        descricao: "A Rainha Aranha é uma jungler versátil que pode se transformar em uma aranha gigante. Ela é ágil, pode escalar paredes e causar grandes quantidades de dano em área.",
        rota: "Selva",
        classe: "Assassina",
        tag: "Aranha, Versátil, Escalada"
    },
    {
        nome: "Evelynn",
        descricao: " A Demônio da Luxúria é uma assassina que se esconde nas sombras, pronta para atacar seus inimigos desprevenidos. Suas habilidades permitem que ela se torne invisível, aplique veneno e cause grandes quantidades de dano em alvos isolados.",
        rota: "Selva",
        classe: "Assassina",
        tag: " Sombras, Veneno, Emboscada"
    },
    {
        nome: "Ezreal",
        descricao: "O Explorador Pródigo é um atirador versátil que combina alta mobilidade com dano mágico. Seu kit de habilidades permite que ele se movimente pelo campo de batalha com facilidade e cause dano a vários inimigos ao mesmo tempo.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Explorador, Mobilidade, Dano mágico, manopla"
    },
    {
        nome: "Fiddlesticks",
        descricao: "O Espantalho é um mago aterrorizante que se esconde nas sombras e assusta seus inimigos. Suas habilidades permitem que ele invoque corvos, cause dano em área e aplique efeitos de medo.",
        rota: "Selva",
        classe: "Mago",
        tag: " Medo, Sombras, Invocação"
    },
    {
        nome: "Fiora",
        descricao: "A Grande Duelista é uma lutadora elegante e mortal, especializada em combate corpo a corpo. Suas habilidades permitem que ela desvie de ataques, encontrar os pontos vitais de seus inimigos e causar grandes quantidades de dano.",
        rota: "Topo",
        classe: "Lutadora",
        tag: "Duelista, Elegância, Esquiva"
    },
    {
        nome: "Fizz",
        descricao: "O Pescador das Ruas é um assassino ágil e imprevisível, que se move pela água com facilidade. Suas habilidades permitem que ele pule sobre seus inimigos, cause dano elétrico e escape do perigo.",
        rota: "Meio, Selva",
        classe: " Assassino",
        tag: " Ágil, Elétrico, Aquático, peixe"
    },
    {
        nome: "Galio",
        descricao: "O Colosso de Stone é um tanque resistente e poderoso, capaz de proteger seus aliados e causar dano em área. Suas habilidades permitem que ele se transforme em uma estátua e absorva dano, além de lançar seus inimigos para o ar.",
        rota: "Topo, Suporte",
        classe: "Tanque",
        tag: "Colosso, Pedra, Proteção"
    },
    {
        nome: "Gangplank",
        descricao: "O Rei dos Piratas é um atirador brutal e implacável, que comanda um exército de piratas. Suas habilidades permitem que ele marque seus inimigos, explodir barris de pólvora e causar grandes quantidades de dano.",
        rota: "Topo",
        classe: "Atirador",
        tag: " Pirata, Pólvora, Brutal, laranja"
    },
    {
        nome: "Gnar",
        descricao: "O Mini-Mundo é um lutador único que pode alternar entre duas formas: uma pequena e ágil e outra grande e poderosa. Suas habilidades permitem que ele pule sobre seus inimigos, cause dano em área e transforme o campo de batalha.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Transformação, Ágil, Poderoso"
    },
    {
        nome: "Gragas",
        descricao: " O Barril Explosivo é um lutador tanque que adora uma boa bebida. Suas habilidades permitem que ele role sobre seus inimigos, cause dano em área e aplique efeitos de lentidão.",
        rota: "Selva, Topo",
        classe: "Tanque",
        tag: "Barril, Bebida, Área de efeito"
    },
    {
        nome: "Graves",
        descricao: "O Pistoleiro de Harma é um atirador versátil que combina ataques à distância com explosões poderosas. Sua arma principal é uma shotgun que causa dano em área e ele possui alta mobilidade.",
        rota: " Selva, Bot",
        classe: "Atirador",
        tag: "Pistoleiro, Explosivo, Mobilidade"
    },
    {
        nome: "Gwen",
        descricao: "A Criatura de Encosto é uma lutadora que usa tesouras gigantes para cortar seus inimigos. Ela é frágil, mas possui alta mobilidade e pode causar grandes quantidades de dano em pouco tempo.",
        rota: "Topo, Meio",
        classe: "Lutadora",
        tag: "Tesouras, Frágil, Mobilidade"
    },
    {
        nome: "Hecarim",
        descricao: "O Espectro da Guerra é um cavaleiro espectral que carrega seus inimigos e causa dano em área. Ele é um tanque resistente com alta mobilidade e pode iniciar lutas em equipe.",
        rota: "Selva",
        classe: "Lutador, Tanque",
        tag: "Espectro, Cavaleiro, Carga"
    },
    {
        nome: "Heimerdinger",
        descricao: "O Grande Inventor é um mago que protege seus aliados com torres e armadilhas. Ele é um mestre em controle de mapa e pode causar grandes quantidades de dano a longo alcance.",
        rota: "Meio, Suporte",
        classe: "Mago",
        tag: " Inventor, Torres, Armadilhas"
    },
    {
        nome: "Hwei",
        descricao: "Hwei é um pintor melancólico que cria obras de arte geniais para combater os criminosos de Ionia e trazer conforto às vítimas deles. Por trás de sua melancolia, esconde-se uma mente emocionalmente dilacerada, assombrada pelas visões vibrantes de sua.",
        rota: "Meio",
        classe: "Mago",
        tag: "pintor, jhin, dificil, dano"
    },
    {
        nome: "Illaoi",
        descricao: "O Oráculo de Nautilus é uma lutadora que invoca tentáculos gigantes para atacar seus inimigos. Ela é uma força a ser considerada em lutas individuais e pode causar grandes quantidades de dano físico.",
        rota: "Topo",
        classe: "Lutadora",
        tag: "Tentáculos, Oráculo, Força"
    },
    {
        nome: "Irelia",
        descricao: " A Dançarina das Lâminas é uma lutadora ágil e elegante que dança entre seus inimigos, causando grandes quantidades de dano. Suas habilidades permitem que ela se mova rapidamente pelo campo de batalha e evite os ataques inimigos.",
        rota: "Topo, Meio",
        classe: "Lutadora",
        tag: "Dançarina, Lâminas, Ágil"
    },
    {
        nome: "Ivern",
        descricao: "O Amigo da Floresta é um suporte único que promove o crescimento da selva e protege seus aliados. Ele não causa muito dano, mas pode curar e proteger seus companheiros de equipe.",
        rota: "Suporte/Jungle",
        classe: "Mago",
        tag: "Floresta, Crescimento, Protetor"
    },
    {
        nome: "Janna",
        descricao: "A Tempestade Abençoada é um suporte que controla o vento e protege seus aliados. Ela pode criar ventos fortes para empurrar os inimigos para longe e criar escudos para proteger seus companheiros de equipe.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Vento, Escudo, Proteção"
    },
    {
        nome: "Jarvan IV",
        descricao: "O Príncipe de Demacia é um lutador tanque que pode iniciar lutas em equipe e proteger seus aliados. Suas habilidades permitem que ele crie uma prisão de ouro, lançar seus inimigos para o ar e causar grandes quantidades de dano.",
        rota: "Selva, Topo",
        classe: "Lutador, Tanque",
        tag: "Príncipe, Prisão, Iniciação"
    },
    {
        nome: "Jax",
        descricao: "O Mestre de Armas é um lutador ágil e versátil que utiliza uma lâmina letal. Suas habilidades permitem que ele desvie de ataques, contra-atacar e causar grandes quantidades de dano em um curto período de tempo.",
        rota: " Topo",
        classe: "Lutador",
        tag: "Ágil, Versátil, Contra-ataque"
    },
    {
        nome: " Jayce",
        descricao: "O Forjador de Luz é um lutador híbrido que pode alternar entre duas formas: uma de longo alcance, com um martelo, e outra de curto alcance, com uma pistola. Sua versatilidade o torna um campeão muito poderoso.",
        rota: " Topo",
        classe: "Lutador",
        tag: "Versátil, Híbrido, Martelo e Pistola"
    },
    {
        nome: "Jhin",
        descricao: "O Virtuoso é um atirador psicopata que adora a arte da morte. Seus ataques são precisos e ele possui um kit de habilidades único, que permite que ele marque seus inimigos e execute-os de forma teatral.",
        rota: "Bot",
        classe: " Atirador",
        tag: "Psicopata, Artista, Precisão"
    },
    {
        nome: "Jinx",
        descricao: "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde",
        rota: "bot",
        classe: "Atirador",
        tag: "louca, lunatica, missel"
    },
    {
        nome: "Kai'Sa",
        descricao: "A Filha do Vazio é uma atiradora que evolui ao longo da partida, adaptando-se ao estilo de jogo de seus adversários. Suas habilidades permitem que ela se camuflar, causar dano em área e perseguir seus inimigos.",
        rota: " Bot",
        classe: "Atirador",
        tag: " Vazio, Evolução, Adaptação"
    },
    {
        nome: "Kalista",
        descricao: "A Espada Celestial é uma atiradora que se liga a um aliado para aumentar seu poder de ataque. Ela é especializada em combate em equipe e pode causar grandes quantidades de dano aos inimigos.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Espada, Ligação, Equipe"
    },
    {
        nome: "Karma",
        descricao: "A Mestra Iluminada é um suporte versátil que pode alternar entre duas formas: uma de longo alcance, com habilidades de dano mágico, e outra de curto alcance, com habilidades de cura e proteção.",
        rota: "Suporte",
        classe: "Suporte",
        tag: " Versátil, Cura, Proteção"
    },
    {
        nome: "Karthus",
        descricao: "O Regente da Morte é um mago de longo alcance que pode lançar feitiços de qualquer lugar do mapa. Ele é especializado em causar dano em área e pode acabar com lutas em equipe com suas habilidades poderosas.",
        rota: "Meio",
        classe: "Mago",
        tag: "Morte, Longo alcance, Área de efeito, global"
    },
    {
        nome: "Kassadin",
        descricao: "O Filho das Estrelas é um assassino que se especializa em perseguir inimigos e eliminá-los rapidamente. Suas habilidades permitem que ele se teletransportar através das paredes e aumentar sua resistência mágica.",
        rota: " Meio",
        classe: "Assassino",
        tag: "Estrelas, Teletransporte, Perseguir"
    },
    {
        nome: "Katarina",
        descricao: "A Dama da Lâmina é uma assassina ágil e letal, que dança entre seus inimigos e os elimina com seus shurikens. Ela é especializada em combate em área e pode causar grandes quantidades de dano em pouco tempo.",
        rota: "Meio",
        classe: "Assassina",
        tag: "Ágil, Shurikens, Combate em área"
    },
    {
        nome: "Kayle",
        descricao: "A Justiciera é uma campeã híbrida que começa como um mago e evolui para uma lutadora, ganhando força e velocidade ao longo da partida.",
        rota: "Topo",
        classe: "Híbrida (Mago/Lutadora)",
        tag: "Justiciera, Evolução, Híbrida, juiza"
    },
    {
        nome: "Kayn",
        descricao: "A Sombra que Anda é um assassino que se transforma em uma das duas formas: o Assassino das Sombras ou o Rei das Sombras. Sua forma final depende de como ele mata os campeões inimigos.",
        rota: " Selva",
        classe: "Assassino",
        tag: "Sombra, Transformação, Assassino"
    },
    {
        nome: "Kennen",
        descricao: " A Trovão Andante é um assassino que lança shurikens e eletrifica seus inimigos. Ele é conhecido por sua alta mobilidade e capacidade de causar dano em área.",
        rota: "Meio, Topo",
        classe: "Assassino",
        tag: "Trovão, Shuriken, Mobilidade"
    },
    {
        nome: "Kha'Zix",
        descricao: "O Vazio Voraz é um assassino que evolui adaptando-se ao seu estilo de jogo. Ele pode escolher evoluir diferentes aspectos de suas habilidades, tornando-o um caçador ainda mais letal.",
        rota: " Selva",
        classe: "Assassino",
        tag: "Vazio, Evolução, Caçador"
    },
    {
        nome: "Kindred",
        descricao: "A Alma da Caça é uma dupla de campeões: Wolf, o caçador, e Lamb, a guia. Juntos, eles caçam os campeões inimigos e marcam os alvos para a morte.",
        rota: " Selva",
        classe: "Atirador",
        tag: "Caça, Alma, Dupla"
    },
    {
        nome: "Kled",
        descricao: "O Caçador de Gigantes é um lutador que monta em um pequeno dragão chamado Skaarl. Quando separado de Skaarl, Kled fica mais fraco, mas ganha em mobilidade.",
        rota: "Topo",
        classe: " Lutador",
        tag: "Caçador, Dragão, Mobilidade"
    },
    {
        nome: "Kog'Maw",
        descricao: "A Boca do Vazio é um atirador de longo alcance que cospe ácido corrosivo em seus inimigos. Ele é fraco em combate corpo a corpo, mas pode causar grandes quantidades de dano à distância.",
        rota: " Bot",
        classe: "Atirador",
        tag: "Vazio, Ácido, Longo alcance"
    },
    {
        nome: "K'Sante",
        descricao: "O Onislash é um lutador tanque que pode alternar entre duas formas: uma ágil e outra poderosa. Ele é conhecido por sua resistência e capacidade de iniciar lutas em equipe.",
        rota: "Selva, Topo",
        classe: "Lutador, Tanque",
        tag: "Onislash, Transformação, Resistente"
    },
    {
        nome: "LeBlanc",
        descricao: "A Sedutora é uma maga que cria ilusões de si mesma e engana seus inimigos. Ela é conhecida por sua alta mobilidade e capacidade de causar dano explosivo.",
        rota: "Meio",
        classe: " Maga",
        tag: " Ilusão, Enganação, Mobilidade"
    },
    {
        nome: "Lee Sin",
        descricao: " O Monge Cego é um lutador ágil e poderoso que utiliza artes marciais para derrotar seus inimigos. Ele é conhecido por sua alta mobilidade e capacidade de iniciar lutas em equipe.",
        rota: "Selva",
        classe: "Lutador",
        tag: "Monge, Ágil, Artes marciais, sego"
    },
    {
        nome: "Leona",
        descricao: "A Radiante Solar é uma suporte tanque que inicia as lutas com seus feitiços de luz e prende os inimigos em um raio solar.",
        rota: " Suporte",
        classe: "Tanque",
        tag: "Sol, Iniciadora, Proteção"
    },
    {
        nome: "Lillia",
        descricao: "A Sonhadora da Floresta é uma jungler que usa a magia da natureza para curar aliados e prejudicar inimigos. Ela é conhecida por sua mobilidade e por invocar criaturas da floresta.",
        rota: "Selva",
        classe: "Lutadora",
        tag: "Floresta, Cura, Mobilidade"
    },
    {
        nome: "Lissandra",
        descricao: "A Bruxa da Gelo é uma maga que controla o gelo e a neve. Ela é conhecida por seus feitiços de longo alcance e por sua capacidade de prender os inimigos em blocos de gelo.",
        rota: "Meio",
        classe: "Maga",
        tag: "Gelo, Controle de multidão, Longo alcance"
    },
    {
        nome: "Lucian",
        descricao: "O Purificador é um atirador que usa duas pistolas para eliminar seus inimigos a distância. Ele é conhecido por sua alta mobilidade e por sua capacidade de causar grandes danos em curto espaço de tempo.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Pistolas, Mobilidade, Dano explosivo"
    },
    {
        nome: " Lulu",
        descricao: "A Fada da Floresta é uma suporte que transforma seus aliados em animais fofinhos e protege-os com seus feitiços mágicos.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Fada, Transformação, Proteção"
    },
    {
        nome: " Lux",
        descricao: "A Dama da Luz é uma maga de longo alcance que usa a luz para atacar seus inimigos. Ela é conhecida por seus feitiços de área de efeito e por sua capacidade de prender os inimigos.",
        rota: "Meio",
        classe: "Maga",
        tag: "Luz, Longo alcance, Área de efeito"
    },
    {
        nome: "Malphite",
        descricao: "O Monólito de Ferro é um tanque resistente que inicia as lutas com um golpe sísmico devastador. Ele é conhecido por sua alta defesa e por sua capacidade de absorver danos.",
        rota: "Topo",
        classe: "Tanque",
        tag: " Pedra, Resistente, Iniciador"
    },
    {
        nome: "Malzahar",
        descricao: "O Profeta do Vazio é um mago que invoca criaturas do Vazio para atacar seus inimigos. Ele é conhecido por seus feitiços de controle de multidão e por sua capacidade de causar danos em área.",
        rota: "Meio",
        classe: "Mago",
        tag: "Vazio, Invocação, Controle de multidão"
    },
    {
        nome: " Maokai",
        descricao: "O Tormento da Árvore é um tanque que usa raízes e galhos para prender e danificar seus inimigos. Ele é conhecido por sua alta resistência e por sua capacidade de controlar o campo de batalha.",
        rota: "Topo, Selva",
        classe: "Tanque",
        tag: "Árvore, Raízes, Controle de multidão"
    },
    {
        nome: "Master Yi",
        descricao: "O Wuju é um assassino ágil que usa espadas para eliminar seus inimigos rapidamente. Ele é conhecido por sua alta mobilidade e por sua capacidade de causar grandes danos em um curto período de tempo.",
        rota: "Selva",
        classe: "Assassino",
        tag: "Espadas, Mobilidade, Dano explosivo"
    },
    {
        nome: "Milio",
        descricao: "Um suporte protetor que usa a magia do fogo para criar escudos e curar seus aliados. É conhecido por sua alta mobilidade e por suas habilidades de cura em área.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Fogo, Cura, Proteção"
    },
    {
        nome: "Miss Fortune",
        descricao: "Uma atiradora glamourosa e letal que utiliza duas pistolas para eliminar seus inimigos. É conhecida por seus ataques em área e por sua ultimate que pode virar o jogo.",
        rota: " Bot",
        classe: "Atiradora",
        tag: "Pistolas, Glamourosa, Ataques em área"
    },
    {
        nome: "Mordekaiser",
        descricao: "Um monstro de ferro e fogo que se alimenta da alma de seus inimigos. É um tanque resistente que pode causar grandes danos e arrastar seus inimigos para sua própria dimensão.",
        rota: "Topo",
        classe: "Lutador, Tanque",
        tag: "Ferro, Fogo, Imortalidade"
    },
    {
        nome: " Morgana",
        descricao: " Uma maga sombria que usa a magia negra para prender e torturar seus inimigos. É conhecida por seus feitiços de controle de multidão e por sua capacidade de causar danos em área.",
        rota: "Suporte, Meio",
        classe: "Maga",
        tag: "Sombras, Tortura, Controle de multidão"
    },
    {
        nome: "Naafiri",
        descricao: "Uma assassina que controla uma matilha de sombras. É conhecida por sua alta mobilidade e por sua capacidade de perseguir e eliminar seus inimigos.",
        rota: "Selva",
        classe: " Assassina",
        tag: " Sombras, Mobilidade, Perseguir"
    },
    {
        nome: "Nami",
        descricao: "Uma suporte que controla as marés e cura seus aliados. É conhecida por seus feitiços de cura em área e por sua capacidade de criar ondas para controlar o ritmo da luta.",
        rota: " Suporte",
        classe: "Suporte",
        tag: " Maré, Cura, Controle de multidão"
    },
    {
        nome: "Nasus",
        descricao: "Um cão de guerra que se torna mais forte a cada inimigo que mata. É conhecido por sua alta resistência e por seu dano físico escalável.",
        rota: "Topo",
        classe: " Lutador, Tanque",
        tag: "Cão de guerra, Escalável, Resistente"
    },
    {
        nome: "Nautilus",
        descricao: "Um antigo guardião do mar que usa um âncora para prender e arrastar seus inimigos. É conhecido por sua alta resistência e por sua capacidade de iniciar lutas em equipe.",
        rota: "Suporte",
        classe: "Tanque",
        tag: "Mar, Âncora, Iniciador"
    },
    {
        nome: "Neeko",
        descricao: "Uma yordle que pode se transformar em qualquer campeão aliado. É conhecida por sua capacidade de enganar os inimigos e por seus feitiços de controle de multidão.",
        rota: "Meio, Suporte",
        classe: "Maga",
        tag: "Yordle, Transformação, Enganação"
    },
    {
        nome: "Nidalee",
        descricao: "Uma caçadora que pode alternar entre uma forma humana e uma forma felina. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos tanto à distância quanto em combate corpo a corpo.",
        rota: "Selva",
        classe: "Lutadora, Atiradora",
        tag: "Felina, Transformação, Mobilidade"
    },
    {
        nome: "Nilah",
        descricao: "Uma atiradora ágil e versátil que utiliza uma lâmina de água para atacar seus inimigos e curar seus aliados.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Água, Ágil, Cura"
    },
    {
        nome: "Nocturne",
        descricao: " Um assassino que aterroriza seus inimigos com pesadelos. É conhecido por sua alta mobilidade e por sua capacidade de surpreender os adversários.",
        rota: "Selva",
        classe: "Assassino",
        tag: "Pesadelos, Mobilidade, Surpreendente"
    },
    {
        nome: "Nunu e Willump",
        descricao: "Uma dupla de junglers formada por um yeti e um menino. Nunu é um tanque que causa dano em área, enquanto Willump é um companheiro que ajuda a controlar a selva.",
        rota: "Selva",
        classe: "Lutador, Tanque",
        tag: "Yeti, Selva, Amizade"
    },
    {
        nome: "Olaf",
        descricao: "Um berserker bárbaro que ignora a dor e se torna mais forte à medida que recebe dano. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: "Selva, Topo",
        classe: "Lutador",
        tag: "Bárbaro, Berserker, Resistência"
    },
    {
        nome: "Orianna",
        descricao: "ma maga que controla uma esfera mágica e causa danos em área. É conhecida por sua alta mobilidade e por sua capacidade de prender os inimigos.",
        rota: "Meio",
        classe: "Maga",
        tag: "Esfera, Mobilidade, Controle de multidão"
    },
    {
        nome: "Ornn",
        descricao: " Um titã que forja armas e armaduras para seus aliados. É um tanque resistente que pode causar grandes danos e controlar o campo de batalha.",
        rota: "Topo",
        classe: "Tanque",
        tag: "Titã, Forja, Controle de mapa"
    },
    {
        nome: "Pantheon",
        descricao: "Um guerreiro asgardiano que desce do céu para punir seus inimigos. É um lutador tanque que pode iniciar lutas em equipe e causar grandes danos.",
        rota: "Topo, Selva",
        classe: "Lutador, Tanque",
        tag: "Asgardiano, Iniciador, Dano"
    },
    {
        nome: "Poppy",
        descricao: "Uma yordle guerreira que usa um martelo gigante para esmagar seus inimigos. É conhecida por sua alta resistência e por sua capacidade de deslocar os inimigos.",
        rota: "Topo",
        classe: " Lutadora, Tanque",
        tag: "Yordle, Martelo, Resistência"
    },
    {
        nome: "Pyke",
        descricao: "Um assassino que assombra as profundezas do mar. É conhecido por sua alta mobilidade e por sua capacidade de eliminar rapidamente seus alvos.",
        rota: "Suporte",
        classe: "Assassino",
        tag: "Mar, Assassino, Mobilidade"
    },
    {
        nome: "Qiyana",
        descricao: "Uma assassina que usa a natureza ao seu redor para adaptar seu estilo de jogo. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos.",
        rota: "Meio, Selva",
        classe: "Assassina",
        tag: "Natureza, Adaptação, Mobilidade"
    },
    {
        nome: "Quinn",
        descricao: "Uma atiradora que caça com seu falcão Valor. É conhecida por sua alta mobilidade e por sua capacidade de atacar os inimigos por trás.",
        rota: "Topo, Bot",
        classe: "Atiradora",
        tag: "Falcão, Mobilidade, Ataque por trás"
    },
    {
        nome: "Rakan",
        descricao: "Um suporte charmoso que usa a magia para proteger e fortalecer seus aliados. É conhecido por sua alta mobilidade e por suas habilidades de cura e proteção.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Charmoso, Mobilidade, Proteção"
    },
    {
        nome: "Rammus",
        descricao: "Uma tartaruga espinhosa que se enrola em uma bola para se proteger e atacar seus inimigos. É conhecido por sua alta resistência e por sua capacidade de desacelerar os inimigos.",
        rota: "Selva",
        classe: "Tanque",
        tag: "Tartaruga, Resistência, Desaceleração"
    },
    {
        nome: "Rek'Sai",
        descricao: " Um monstro do subsolo que escava túneis para surpreender seus inimigos. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: " Selva",
        classe: "Lutadora",
        tag: " Subsolo, Mobilidade, Surpreendente"
    },
    {
        nome: "Rell",
        descricao: "Uma guerreira que controla o magnetismo e a gravidade. É conhecida por sua alta resistência e por sua capacidade de prender e arrastar seus inimigos.",
        rota: "Suporte",
        classe: "Lutadora, Tanque",
        tag: "Magnetismo, Gravidade, Controle de multidão"
    },
    {
        nome: "Renata Glasc",
        descricao: "Uma química que manipula a química para controlar a mente de seus inimigos. É conhecida por suas habilidades de controle de multidão e por sua capacidade de fortalecer seus aliados.",
        rota: "Suporte",
        classe: "Maga",
        tag: " Química, Controle de multidão, Fortalecimento"
    },
    {
        nome: "Renekton",
        descricao: "Um crocodilo guerreiro que luta com fúria. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Crocodilo, Fúria, Resistência"
    },
    {
        nome: "Rengar",
        descricao: " Um caçador que persegue suas presas com ferocidade. É conhecido por sua alta mobilidade e por sua capacidade de eliminar rapidamente seus alvos.",
        rota: " Selva",
        classe: "Assassino",
        tag: "Caçador, Ferocidade, Mobilidade"
    },
    {
        nome: "Riven",
        descricao: "Uma exilada que luta com uma espada mágica. É conhecida por sua alta mobilidade e por sua capacidade de causar grandes danos em combate corpo a corpo.",
        rota: "Topo",
        classe: "Lutadora",
        tag: "Espada, Mobilidade, Dano"
    },
    {
        nome: "Rumble",
        descricao: "Um yordle mecânico que utiliza armas e armaduras para lutar. É conhecido por sua alta resistência e por sua capacidade de causar grandes danos em área.",
        rota: "Topo",
        classe: "Lutador, Mago",
        tag: "Yordle, Mecânico, Área de efeito"
    },
    {
        nome: "Ryze",
        descricao: "Um mago poderoso que teleporta entre as ilhas, lançando poderosas magias.",
        rota: "Meio",
        classe: "Mago",
        tag: "Teleporte, Magia, Controle de mapa"
    },
    {
        nome: "Samira",
        descricao: "Uma atiradora que aumenta seu estilo com cada abate, tornando-se mais poderosa.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Estilo, Abates, Dano explosivo"
    },
    {
        nome: "Sejuani",
        descricao: "Uma guerreira do Freljord que monta um javali gigante e causa caos no campo de batalha.",
        rota: " Selva",
        classe: " Lutadora, Tanque",
        tag: "Freljord, Javali, Controle de multidão"
    },
    {
        nome: "Senna",
        descricao: "Uma atiradora espiritual que coleta almas para fortalecer seus ataques.",
        rota: " Suporte, Bot",
        classe: "Atiradora",
        tag: "Almas, Espiritual, Longo alcance"
    },
    {
        nome: "Seraphine",
        descricao: "Uma ídolo pop que usa sua música para curar e fortalecer seus aliados.",
        rota: "Suporte, Meio",
        classe: "Maga",
        tag: "Música, Cura, Suporte"
    },
    {
        nome: "Sett",
        descricao: "Um lutador implacável que usa sua força bruta para dominar seus oponentes.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Força bruta, Lutador, Resistência"
    },
    {
        nome: "Shaco",
        descricao: "Um palhaço psicopata que usa clones e armadilhas para aterrorizar seus inimigos.",
        rota: "Selva",
        classe: "Assassino",
        tag: "Palhaço, Clones, Armadilhas"
    },
    {
        nome: "Shen",
        descricao: "Um guerreiro que protege seus aliados e desafia seus inimigos para um duelo.",
        rota: "Topo",
        classe: "Tanque",
        tag: "Protetor, Duelo, Teleporte"
    },
    {
        nome: "Shyvana",
        descricao: "Uma meio-dragão que pode se transformar em um dragão para causar caos no campo de batalha.",
        rota: "Selva, Topo",
        classe: "Lutadora",
        tag: "Dragão, Transformação, Dano em área"
    },
    {
        nome: "Singed",
        descricao: "Um alquimista louco que deixa um rastro de veneno por onde passa.",
        rota: "Topo",
        classe: "Tanque",
        tag: "Alquimista, Veneno, Perseguidor"
    },
    {
        nome: "Sion",
        descricao: "Um monstro indestrutível que retorna à vida para lutar novamente.",
        rota: "Topo",
        classe: "Tanque",
        tag: "Imortal, Resistência, Dano em área"
    },
    {
        nome: "Sivir",
        descricao: "Uma atiradora mercenária que usa um bumerangue para atacar seus inimigos.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Bumerangue, Mercenária, Mobilidade"
    },
    {
        nome: "Skarner",
        descricao: "Um cristaliano que protege seu povo e ataca seus inimigos com suas garras afiadas.",
        rota: "Selva",
        classe: "Lutador",
        tag: "Cristaliano, Garras, Mobilidade"
    },
    {
        nome: "Sona",
        descricao: "Uma maga que usa a música para curar e fortalecer seus aliados.",
        rota: "Suporte",
        classe: "Maga",
        tag: " Música, Cura, Suporte"
    },
    {
        nome: "Soraka",
        descricao: "Uma estrela que desceu à Terra para curar os feridos.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Estrela, Cura, Proteção, banana"
    },
    {
        nome: "Swain",
        descricao: "Um general noxiano que controla corvos e manipula a morte.",
        rota: "Meio, Topo",
        classe: "Mago",
        tag: "Corvos, Morte, Controle de multidão"
    },
    {
        nome: "Sylas",
        descricao: " Um rebelde que rouba os poderes de seus inimigos.",
        rota: "Meio",
        classe: "Assassino",
        tag: "Rebelde, Roubo de habilidades, Mobilidade"
    },
    {
        nome: "Syndra",
        descricao: "Uma maga que controla esferas de energia para atacar seus inimigos.",
        rota: " Meio",
        classe: "Maga",
        tag: "Esferas, Energia, Controle de multidão"
    },
    {
        nome: "Tahm Kench",
        descricao: "Um monstro aquático que pode engolir aliados e inimigos.",
        rota: "Suporte, Topo",
        classe: "Tanque",
        tag: "Aquático, Engolir, Proteção"
    },
    {
        nome: "Taliyah",
        descricao: "Uma xamã que controla a terra para criar paredes e lançar rochas.",
        rota: "Meio, Selva",
        classe: "Maga",
        tag: "Terra, Paredes, Mobilidade"
    },
    {
        nome: "Talon",
        descricao: "Um assassino que ataca do escuro e elimina seus alvos rapidamente.",
        rota: "Meio, Selva",
        classe: "Assassino",
        tag: "Escuridão, Assassino, Mobilidade"
    },
    {
        nome: "Taric",
        descricao: "Um protetor que usa cristais para fortalecer seus aliados e proteger a justiça.",
        rota: "Suporte",
        classe: "Tanque",
        tag: "Cristais, Proteção, Aliados"
    },
    {
        nome: "Teemo",
        descricao: "Um yordle explorador que planta cogumelos venenosos para emboscar seus inimigos.",
        rota: "Topo, Selva",
        classe: "Atirador",
        tag: "Yordle, Cogumelos, Emboscada"
    },
    {
        nome: "Thresh",
        descricao: "Uma antiga alma aprisionada em uma lanterna que busca coletar almas.",
        rota: "Suporte",
        classe: "Suporte",
        tag: "Lanterna, Almas, Controle de multidão"
    },
    {
        nome: "Tristana",
        descricao: "Uma yordle explosiva que usa foguetes para atacar seus inimigos.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Yordle, Foguetes, Explosivo"
    },
    {
        nome: "Trundle",
        descricao: "Um rei troll que rouba a força de seus inimigos.",
        rota: "Topo, Selva",
        classe: "Lutador, Tanque",
        tag: "Troll, Roubo de atributos, Resistência"
    },
    {
        nome: "Tryndamere",
        descricao: "Um bárbaro que não pode morrer e luta até o fim.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Bárbaro, Imortalidade, Dano"
    },
    {
        nome: "Twisted Fate",
        descricao: "Um mago charlatão que manipula o destino com suas cartas.",
        rota: "Meio",
        classe: "Mago",
        tag: "Cartas, Destino, Teleporte"
    },
    {
        nome: "Twitch",
        descricao: "Uma ratazana mutante que ataca do escuro e espalha veneno.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Ratazana, Veneno, Emboscada"
    },
    {
        nome: "Udyr",
        descricao: "Um espírito da natureza que pode se transformar em diferentes animais, cada um com habilidades únicas.",
        rota: "Selva",
        classe: "Lutador",
        tag: "Natureza, Transformação, Versátil, uga"
    },
    {
        nome: "Urgot",
        descricao: "Um ciborgue noxiano que persegue seus inimigos com suas pernas mecânicas.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Ciborgue, Perseguidor, Resistente, muitas pernas"
    },
    {
        nome: "Varus",
        descricao: "Um atirador amaldiçoado que usa uma besta para lançar flechas venenosas.",
        rota: "Bot",
        classe: "Atirador",
        tag: "Flechas venenosas, Amaldiçoado, Longo alcance"
    },
    {
        nome: "Veigar",
        descricao: "Um yordle mago que se torna mais poderoso a cada abate.",
        rota: "Meio",
        classe: "Mago",
        tag: "Yordle, Abates, Escala de poder"
    },
    {
        nome: "Vel'Koz",
        descricao: "Um ser do vazio que estuda a vida orgânica através de seus raios de energia.",
        rota: "Meio",
        classe: "Mago",
        tag: "Vazio, Energia, Longo alcance"
    },
    {
        nome: "Vex",
        descricao: "Uma yordle sombria que se alimenta da negatividade dos outros.",
        rota: "Meio",
        classe: "Maga",
        tag: "Yordle, Negatividade, Magia sombria"
    },
    {
        nome: "Vi",
        descricao: "Uma policial de Piltover que usa seus punhos mecânicos para nocautear seus inimigos.",
        rota: "Selva, Topo",
        classe: "Lutadora",
        tag: "Policial, Punhos mecânicos, Mobilidade"
    },
    {
        nome: "Viego",
        descricao: "O Rei Ruinado, que busca reunir os fragmentos de sua esposa.",
        rota: "Selva",
        classe: "Assassino",
        tag: "Rei Ruinado, Possessão, Mobilidade"
    },
    {
        nome: "Viktor",
        descricao: "Um cientista que busca a perfeição através da tecnologia.",
        rota: "Meio",
        classe: "Mago",
        tag: "Cientista, Tecnologia, Magia"
    },
    {
        nome: "Vladimir",
        descricao: "Um vampiro antigo que se alimenta do sangue de seus inimigos.",
        rota: "Meio",
        classe: "Mago",
        tag: "Vampiro, Sangue, Cura"
    },
    {
        nome: "Volibear",
        descricao: "Um deus urso do Freljord que invoca raios e causa caos no campo de batalha.",
        rota: "Selva, Topo",
        classe: "Lutador, Tanque",
        tag: "Urso, Raios, Freljord"
    },
    {
        nome: "Warwick",
        descricao: "Um monstro transformado pela ciência que caça seus inimigos implacavelmente.",
        rota: "Selva",
        classe: "Lutador",
        tag: "Monstro, Caça, Perseguidor"
    },
    {
        nome: "Wukong",
        descricao: "O Rei Macaco, um mestre da ilusão que confunde seus inimigos.",
        rota: "Selva",
        classe: "Lutador",
        tag: "Macaco, Ilusão, Mobilidade"
    },
    {
        nome: "Xayah",
        descricao: "Uma assassina que luta ao lado de Rakan, usando penas para atacar seus inimigos.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Penas, Rakan, Mobilidade"
    },
    {
        nome: "Xerath",
        descricao: "Um mago asteca que lança poderosos feitiços de longo alcance.",
        rota: "Meio",
        classe: "Mago",
        tag: "Asteca, Longo alcance, Magia"
    },
    {
        nome: "Xin Zhao",
        descricao: " Um guerreiro noxiano que domina a arte da lança.",
        rota: " Selva",
        classe: "Lutador",
        tag: "Noxiano, Lança, Mobilidade"
    },
    {
        nome: "Yasuo",
        descricao: "Um espadachim errante que domina os ventos.",
        rota: "Meio, Topo",
        classe: "Lutador",
        tag: "Espadachim, Vento, Mobilidade"
    },
    {
        nome: "Yone",
        descricao: "O irmão de Yasuo, um espadachim fantasma que busca vingança.",
        rota: "Meio, Topo",
        classe: "Assassino",
        tag: "Fantasma, Espada, Mobilidade"
    },
    {
        nome: "Yorick",
        descricao: " Um sacerdote que invoca os mortos para lutar por ele.",
        rota: "Topo",
        classe: "Lutador",
        tag: "Sacerdote, Mortos, Invocação"
    },
    {
        nome: "Yuumi",
        descricao: "Um felino mágico que se agarra a um aliado e o fortalece.",
        rota: "Suporte",
        classe: "Mago",
        tag: "Felino, Fortalecimento, Cura, gatinho"
    },
    {
        nome: "Zac",
        descricao: "ma criatura feita de substância elástica que pode se esticar e dividir.",
        rota: "Selva",
        classe: "Tanque",
        tag: "Elástico, Dividir, Resistência"
    },
    {
        nome: "Zed",
        descricao: "Um mestre das sombras que usa shurikens para eliminar seus inimigos.",
        rota: "Meio",
        classe: "Assassino",
        tag: "Sombras, Shurikens, Mobilidade"
    },
    {
        nome: "Zeri",
        descricao: "Uma corredora elétrica que usa sua velocidade para superar seus inimigos.",
        rota: "Bot",
        classe: "Atiradora",
        tag: "Elétrica, Velocidade, Mobilidade"
    },
    {
        nome: "Ziggs",
        descricao: "Um yordle engenheiro que adora explodir coisas.",
        rota: "Meio",
        classe: "Mago",
        tag: "Yordle, Explosivo, Longo alcance"
    },
    {
        nome: "Zilean",
        descricao: "Um cronomancer que manipula o tempo para ajudar seus aliados.",
        rota: "Suporte",
        classe: "Mago",
        tag: "Tempo, Cura, Proteção"
    },
    {
        nome: "Zoe",
        descricao: "Uma yordle travessa que adora brincar com o tempo e o espaço.",
        rota: "Meio",
        classe: "Maga",
        tag: "Yordle, Tempo, Espaço"
    },
    {
        nome: "Zyra",
        descricao: "Uma feiticeira das plantas que controla raízes e flores venenosas.",
        rota: "Suporte",
        classe: "Maga",
        tag: "Plantas, Veneno, Controle de multidão"
    },
];


