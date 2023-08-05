import React from "react";

const MetodoDescription = () => (
  <span>
    A metodologia aplicada é a Terapia de Aceitação e Compromisso. Saiba mais
    sobre esse método <a href="/pagina-do-metodo">aqui</a>.
  </span>
);

const faqData = [
  {
    id: 1,
    title: "ONDE É FEITO A CONSULTA?",
    description:
      "A consulta é feita diretamente pela plataforma do Psicologia Viva ou via Google Meeting, de forma prática, rápida e para seu melhor conforto! ",
  },
  {
    id: 2,
    title: "QUAL A METODOLOGIA USADA?",
    description: <MetodoDescription />,
  },
  {
    id: 3,
    title: "TERAPIA ONLINE FUNCIONA?",
    description:
      "Terapia Online é uma forma muito prática e válida de se realizar uma terapia, com tanta eficácia quanto a presencial. Porém, visto a rotina e preferência de muitos, ela se torna uma ótima opção!",
  },
  {
    id: 4,
    title: "EU NÃO ESTOU DOENTE, SÓ TRISTE. PRECISO DE TERAPIA?",
    description:
      "Terapia é a forma mais eficaz de lidar com questões presentes em todos nós como confusão mental, ansiedade, tristeza, questões do dia-a-dia, questões de relacionamentos, desconfortos. A terapia não é só para quem está doente, e sim para quem quer aprender a se conhecer melhor e a lidar melhor com a vida!",
  },
  {
    id: 5,
    title: "NÃO CONSIGO FALAR SOBRE MEUS PROBLEMAS. VAI FUNCIONAR?",
    description:
      "Nós somos especialistas em te entender e fazer a consulta da forma mais confortável possível para que todos possam evoluir durante as sessões mesmo que tenha dificuldade em se abrir.",
  },
  {
    id: 6,
    title: "EU VOU TER QUE TOMAR REMÉDIO? E POR QUANTO TEMPO?",
    description:
      "Terapeutas não podem te medicar, e portanto, você não será medicado ao fazer terapia. Os psiquiatras costumam recomendam a terapia ou a terapia em conjunto com a medicação, em casos mais especificos. A terapía é para todos :)",
  },
];

export default faqData;
