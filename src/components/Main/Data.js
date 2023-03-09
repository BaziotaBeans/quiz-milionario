const data = [
  {
    id: 1,
    question: "Um ano é composto de quantos trimestres?",
    answers: [
      {
        text: "2",
        correct: false,
      },
      {
        text: "3",
        correct: false,
      },
      {
        text: "4",
        correct: true,
      },
      {
        text: "6",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Qual destes instrumentos musicais não possui cordas?",
    answers: [
      {
        text: "Violino",
        correct: false,
      },
      {
        text: "Saxofone",
        correct: true,
      },
      {
        text: "Harpa",
        correct: false,
      },
      {
        text: "Guitarra",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Para obter R$ 32 com a mesma quantidade de moedas de um, cinco e dez centavos, quantas moedas de cada valor são necessárias?",
    answers: [
      {
        text: "100",
        correct: false,
      },
      {
        text: "150",
        correct: false,
      },
      {
        text: "200",
        correct: true,
      },
      {
        text: "250",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "Qual era o nome do meio de Walt Disney?",
    answers: [
      {
        text: "James",
        correct: false,
      },
      {
        text: "Winston",
        correct: false,
      },
      {
        text: "Benjamin",
        correct: false,
      },
      {
        text: "Elias",
        correct: true,
      },
    ],
  },
  {
    id: 5,
    question: "Qual destas duplas sertanejas é formada por irmãos gêmeos?",
    answers: [
      {
        text: "Matheus & Cristiano",
        correct: true,
      },
      {
        text: "Henrique & Juliano",
        correct: false,
      },
      {
        text: "Vieira & Vierinha",
        correct: false,
      },
      {
        text: "Matheus & Kauan",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "Qual é o nome de registro da cantora Anitta?",
    answers: [
      {
        text: "Manuela",
        correct: false,
      },
      {
        text: "Marisa",
        correct: false,
      },
      {
        text: "Larissa",
        correct: true,
      },
      {
        text: "Clarissa",
        correct: false,
      },
    ],
  },
  {
    id: 7,
    question:
      "Qual a classificação dada ao medicamento obtido exclusivamente da matéria-prima vegetal?",
    answers: [
      {
        text: "Homeopático",
        correct: false,
      },
      {
        text: "Genérico",
        correct: false,
      },
      {
        text: "Alopático",
        correct: false,
      },
      {
        text: "Fitoterápico",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Em qual destas regiões ficava o Quilombo dos Palmares, onde viveu Zumbi?",
    answers: [
      {
        text: "Serra da Barriga, AL",
        correct: true,
      },
      {
        text: "Vale do Ribeira, SP",
        correct: false,
      },
      {
        text: "Riacho de Santana, BA",
        correct: false,
      },
      {
        text: "Boqueirão da Arara, CE",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Quantas vezes por dia os muçulmanos realizam a Salah, oração que é feita acompanhando as etapas do nascer até o pôr do sol?",
    answers: [
      {
        text: "3",
        correct: false,
      },
      {
        text: "5",
        correct: true,
      },
      {
        text: "7",
        correct: false,
      },
      {
        text: "9",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Na novela Avenida Brasil, Genésio, primeiro marido de Carminha, vende a casa e sai do banco com uma mala cheia de:",
    answers: [
      {
        text: "Papel Picado",
        correct: true,
      },
      {
        text: "Notas Falsas",
        correct: false,
      },
      {
        text: "Dinheiro",
        correct: false,
      },
      {
        text: "Jornal",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Em novembro de 1985, durante um jantar de gala na Casa Branca, nos EUA, a Princesa Diana usou um vestido confeccionado por:",
    answers: [
      {
        text: "Oscar de La Renta",
        correct: false,
      },
      {
        text: "Versace",
        correct: false,
      },
      {
        text: "Catherine Walker",
        correct: false,
      },
      {
        text: "Victor Edelstein",
        correct: true,
      },
    ],
  },
  {
    id: 12,
    question: "Escrito por Fred Zero Quatro, como ficou conhecido o manifesto que lançou o movimento Manguebeat?",
    answers: [
      {
        text: "Caranguejos com Cérebro",
        correct: true,
      },
      {
        text: "Caranguejos com Desejo",
        correct: false,
      },
      {
        text: "Caranguejos com Memória",
        correct: false,
      },
      {
        text: "Caranguejos com Fome",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "Quando foi inaugurado o primeiro shopping center no Brasil?",
    answers: [
      {
        text: "1960",
        correct: false,
      },
      {
        text: "1966",
        correct: true,
      },
      {
        text: "1969",
        correct: false,
      },
      {
        text: "1976",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Em qual ano aconteceu a primeira cerimônia de entrega do Oscar?",
    answers: [
      {
        text: "1925",
        correct: false,
      },
      {
        text: "1938",
        correct: false,
      },
      {
        text: "1933",
        correct: false,
      },
      {
        text: "1929",
        correct: true,
      },
    ],
  },
  {
    id: 15,
    question: "O macarrão instantâneo foi inventado nos anos 1950, no Japão, por:",
    answers: [
      {
        text: "Shuji Nakamura",
        correct: false,
      },
      {
        text: "Fujio Masuoka",
        correct: false,
      },
      {
        text: "Yoshiro Nakamatsu",
        correct: false,
      },
      {
        text: "Momofuku Ando",
        correct: true,
      },
    ],
  },
];
export default data;
