const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A representação autêntica da cultura em filmes:",
        alternativas: [
            {
                texto:"Promove a valorização da diversidade cultural.",
                afirmacao: "Os filmes ajudam a valorizar a diversidade cultural ao exibir e celebrar diferentes tradições e histórias de várias culturas.. "
            },
            {
                texto: "Reforça estereótipos prejudiciais.",
                afirmacao: "Os filmes podem reforçar estereótipos prejudiciais ao retratar grupos culturais de forma simplista e negativa, perpetuando preconceitos e mal-entendidos."
            }
        ]
    },
    {
        enunciado: "Filmes que utilizam estereótipos culturais:",
        alternativas: [
            {
                texto: "Podem simplificar e distorcer as culturas representadas.",
                afirmacao: "Os filmes frequentemente simplificam e distorcem as culturas representadas, apresentando visões estereotipadas que não refletem a complexidade e a riqueza real dessas culturas. "
            },
            {
                texto: "São sempre precisos e respeitosos nas suas representações.",
                afirmacao: "Os filmes nem sempre são precisos e respeitosos nas suas representações culturais, frequentemente apresentando interpretações que podem ser imprecisas ou insensíveis."
            }
        ]
    },
    {
        enunciado: "A maneira como os filmes retratam uma cultura:",
        alternativas: [
            {
                texto:  "Pode influenciar a percepção global dessa cultura.",
                afirmacao: "Os filmes podem influenciar a percepção global de uma cultura ao moldar como ela é vista e entendida pelo público em todo o mundo. "
            },
            {
                texto: "Não tem impacto fora do entretenimento.",
                afirmacao: "Os filmes têm um impacto além do entretenimento, moldando a percepção cultural e social e influenciando atitudes e valores na sociedade."
            }
        ]
    },
    {
        enunciado: "A representação de culturas minoritárias nos filmes:",
        alternativas: [
            {
                texto: "É essencial para combater o racismo e a discriminação.",
                afirmacao: "Os filmes são essenciais para combater o racismo e a discriminação, pois têm o poder de desafiar preconceitos e promover empatia ao representar de forma diversificada e inclusiva as experiências de diferentes grupos. "
            },
            {
                texto:  "Não tem impacto significativo na sociedade contemporânea.",
                afirmacao: "Os filmes têm um impacto significativo na sociedade contemporânea, moldando percepções, influenciando opiniões e refletindo questões sociais e culturais importantes.
            }
        ]
    },
    {
        enunciado: "Por que é importante que os cineastas consultem especialistas culturais ao retratar uma cultura específica?",
        alternativas: [
            {
                texto: "Para garantir que a representação seja autêntica e respeitosa.",
                afirmacao: "Para garantir que a representação seja autêntica e respeitosa, é fundamental que filmes envolvam consultores culturais e colaboradores de diversas origens durante o processo de produção. "
            },
            {
                texto:  "Porque isso limita a criatividade dos cineastas.",
                afirmacao: "A busca por representação autêntica e respeitosa pode ser vista por alguns como uma limitação à criatividade dos cineastas, ao impor restrições e exigir um maior grau de sensibilidade cultural em suas produções."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
