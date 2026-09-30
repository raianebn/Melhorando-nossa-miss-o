const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: [
                    "No início, ficou com medo do que essa tecnologia pode fazer.",
                    "Achou assustador pensar na velocidade com que a tecnologia está avançando."
                ]
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: [
                    "Quis saber como usar IA no seu dia a dia.",
                    "Pensou que a IA pode ajudar em tarefas da sua vida."
                ]
            }
        ]
    },

    {
        enunciado: "Você precisa fazer um trabalho escolar e descobre que uma IA consegue pesquisar e explicar o assunto para você. O que você faz?",
        alternativas: [
            {
                texto: "Uso a IA para me ajudar a entender o assunto.",
                afirmacao: [
                    "Você vê a IA como uma ferramenta de aprendizado.",
                    "Acredita que a tecnologia pode facilitar seus estudos."
                ]
            },
            {
                texto: "Prefiro pesquisar sozinho.",
                afirmacao: [
                    "Você prefere desenvolver suas próprias pesquisas.",
                    "Acredita que é importante aprender sem depender da tecnologia."
                ]
            }
        ]
    },

    {
        enunciado: "Você recebe uma imagem criada por IA que parece uma fotografia real. Qual seria sua reação?",
        alternativas: [
            {
                texto: "Eu verificaria se a imagem é verdadeira.",
                afirmacao: [
                    "Você se preocupa com a possibilidade de informações falsas.",
                    "Acredita que é importante verificar o conteúdo antes de compartilhá-lo."
                ]
            },
            {
                texto: "Eu ficaria impressionado com a tecnologia.",
                afirmacao: [
                    "Você se interessa pelos avanços da inteligência artificial.",
                    "Ficaria curioso para descobrir como a imagem foi criada."
                ]
            }
        ]
    },

    {
        enunciado: "Se uma IA pudesse realizar uma tarefa repetitiva por você, o que faria?",
        alternativas: [
            {
                texto: "Usaria a IA para economizar tempo.",
                afirmacao: [
                    "Você acredita que a IA pode tornar algumas tarefas mais práticas.",
                    "Gosta da ideia de usar tecnologia para aumentar sua produtividade."
                ]
            },
            {
                texto: "Faria a tarefa manualmente.",
                afirmacao: [
                    "Você prefere manter controle sobre suas atividades.",
                    "Acredita que algumas tarefas não deveriam ser totalmente automatizadas."
                ]
            }
        ]
    },

    {
        enunciado: "Você descobre que uma empresa está usando IA para tomar algumas decisões. O que pensa?",
        alternativas: [
            {
                texto: "A tecnologia pode ajudar, mas pessoas também precisam participar das decisões.",
                afirmacao: [
                    "Você acredita que a tecnologia deve ser utilizada com responsabilidade.",
                    "Considera importante manter a participação humana em decisões importantes."
                ]
            },
            {
                texto: "Se a IA consegue fazer isso mais rápido, deveria ser utilizada.",
                afirmacao: [
                    "Você valoriza a eficiência proporcionada pela tecnologia.",
                    "Acredita que a automação pode melhorar muitos processos."
                ]
            }
        ]
    },

    {
        enunciado: "No futuro, a inteligência artificial estará ainda mais presente na sociedade. Como você se imagina nesse cenário?",
        alternativas: [
            {
                texto: "Aprendendo cada vez mais sobre IA.",
                afirmacao: [
                    "Você pretende acompanhar as mudanças tecnológicas.",
                    "Tem curiosidade sobre como a inteligência artificial pode transformar o futuro."
                ]
            },
            {
                texto: "Usando a tecnologia com cuidado.",
                afirmacao: [
                    "Você acredita que novas tecnologias devem ser utilizadas com responsabilidade.",
                    "Prefere entender os riscos antes de adotar novas ferramentas."
                ]
            }
        ]
    }
];

let atual = 0;
let respostas = [];

function mostraPergunta() {
    caixaResultado.style.display = "none";
    caixaPerguntas.textContent = perguntas[atual].enunciado;
    caixaAlternativas.textContent = "";

    perguntas[atual].alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostas.push(alternativa.afirmacao);

            atual++;

            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                mostraResultado();
            }
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";

    let resultado = "";

    respostas.forEach((resposta) => {
        resposta.forEach((frase) => {
            resultado += frase + " ";
        });
    });

    textoResultado.textContent = resultado;
}

mostraPergunta();
