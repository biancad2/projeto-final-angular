import { Injectable } from '@angular/core';

interface Subject{
    initials: string, 
    title: string, 
    nf: number,
    day: string,
    startTime: string,
    endTime: string,
    teacher: string,
    qtAulas: number,
    goals: string,
    summary: string
}
@Injectable({
  providedIn: 'root'
})
export class CursandoService {
  public list: Array<Subject>=[
    { 
      initials: 'AGM004', 
      title: 'Negócios e Marketing e Eletrônicos', 
      nf: 8.8,
      day: "Quarta",
      startTime: "19:00",
      endTime: "22:30",
      teacher: "Renato",
      qtAulas: 4,
      goals: "Apresentar e discutir as questões do marketing na era da Internet. Abordar as principais estratégias, ações, ferramentas e mídias presentes na Web. Objetivos específicos. Compreender e utilizar a Internet para os negócios e implementar ações de marketing, comunicação e publicidade on-line",
      summary: "Conceitos de marketing e de marketing digital. O comportamento do consumidor on-line. Marketing de conteúdo. Marketing nas mídias sociais. E-mail marketing. Marketing viral. Publicidade on-line. Pesquisa de marketing on-line. Marketing e os negócios na Internet. Estudos de caso"
    },
    { 
      initials: 'IDS002', 
      title: 'Desenvolvimento para Servidores II', 
      nf: 0,
      day: "Quinta",
      startTime: "19:00",
      endTime: "22:30",
      teacher: "Ciro",
      qtAulas: 4,
      goals: "Conceitos e evolução das tecnologias de programação de servidores. Recursos da linguagem escolhida para servidores na Internet. Padrões de projetos. Integração com sistemas (Google Maps API, Twitter, entre outros",
      summary: "Desenvolver um site completo de e-commerce ou outro tipo de negócio na Internet usando uma linguagem apropriada a servidores, banco de dados e padrões de projeto. Objetivos específicos. Implementar softwares do lado servidor e com uso de uma linguagem de programação e de padrões de projetos mais usuais como MVC, DAO, Composite, Singleton, entre outros"
    },  
    { 
      initials: 'ISW011', 
      title: 'Projeto de Prototipagem e Testes de Usabilidade', 
      nf: 8,
      day: "Sábado",
      startTime: "08:00",
      endTime: "11:10",
      teacher: "Rosemeire",
      qtAulas: 4,
      goals: "Conceitos, métodos de prototipagem e ferramentas de teste de protótipos. Conceitos de usabilidade e estratégias de design. Métodos de teste de usabilidade. Planejamento de teste de usabilidade. Recrutamento. Projeto de usabilidade. Plano de teste. Sessão de teste de usabilidade. Análise de dados. Comunicação dos resultados. Variação de técnicas",
      summary: "Aprofundar os conceitos de design da usabilidade  e métodos de ensaio para mídia interativa. Usabilidade baseada na adaptação de design de interface para uma experiência do usuário mais eficaz.  Apresentar e usar diferentes métodos e ferramentas de prototipagem para explorar com os colegas de equipe ou clientes: conceitos de design, comunicação e testes de usabilidade. Objetivos específicos. Os estudantes serão capazes de criar uma série de protótipos para aplicações Web hipotéticas Criar um protótipo interativo baseando-se no protótipo de papel. Revisar protótipo. Projetar, conduzir e analisar testes de usabilidade com base: nos princípios estabelecidos, nos resultados de pesquisa com o protótipo e na teoria.  Desenvolver um plano de teste de usabilidade, recrutar os usuários apropriados, criar cenários robustos de tarefas, facilitar os testes,  analisar e comunicar os resultados do teste"
    },
    { 
      initials: 'ISW012', 
      title: 'Desenvolvimento para Dispositivos Móveis I', 
      nf: 5,
      day: "Segunda",
      startTime: "19:00",
      endTime: "22:30",
      teacher: "Chiara",
      qtAulas: 4,
      goals: "Introdução e conceitos. Recursos disponíveis para dispositivos móveis na linguagem de marcação de textos. Uso de algum ambiente de desenvolvimento: configuração do ambiente, emulação de dispositivos móveis nos computadores pessoais, interface gráfica, serviços disponíveis, banco de dados nos dispositivos. Desenvolvimento de aplicações que utilizam dados de geolocalização. Integração entre sistemas remotos",
      summary: "Apresentar as tecnologias de desenvolvimento de aplicativos para dispositivos móveis. Objetivos específicos.  Desenvolver aplicações para dispositivos móveis de plataformas não proprietárias"
    },
    { 
      initials: 'ITE004', 
      title: 'Tópicos Especiais em Sistemas para Internet II', 
      nf: 0,
      day: "Sexta",
      startTime: "19:00",
      endTime: "22:30",
      teacher: "Ricardo",
      qtAulas: 4,
      goals: "Recursos e aplicações da tecnologia escolhida",
      summary: "Apresentar tecnologias ainda não estudadas ou aprofundar algum tema já visto definido pela coordenadoria do curso em cada unidade. Objetivos específicos. Estudar e aplicar tecnologias de uso corrente na região na qual o curso de insere ou de interesse para o desenvolvimento profissional dos estudantes ou desenvolver temas que aprofundem algum conhecimento já estudado"
    },
    { 
      initials: 'TES006', 
      title: 'Estágio Supervisionado em Sistemas para Internet', 
      nf: 0,
      day: "Sábado",
      startTime: "16:30",
      endTime: "18:00",
      teacher: "Mauricio",
      qtAulas: 4,
      goals: "Atividades de caráter prático, realizadas em organizações de qualquer natureza (indústria",
      summary: "Possibilitar aos estudantes uma experiência prática em um ambiente profissional, e a oportunidade de desenvolvimento profissional em  Sistemas para Internet. Objetivos específicos. Desenvolver competências relacionadas com a experiência de trabalho prático em ambiente profissional real"
    },
    { 
      initials: 'TTG401', 
      title: 'Projeto de Trabalho de Graduação em Sistemas para Internet I', 
      nf: 0,
      day: "Sábado",
      startTime: "11:30",
      endTime: "13:00",
      teacher: "Mauricio",
      qtAulas: 4,
      goals: "Conceito de portfólio no âmbito da educação superior. Planejamento e organização de portfólios",
      summary: "Apoiar o estudante na organização de seu portfólio de projetos desenvolvidos ao longo do curso. Objetivos específicos. Os estudantes devem ser capazes de organizar o portfólio individual dos projetos desenvolvidos ao longo do curso. Devem ser capazes de redigir resumos, artigos e relatórios técnicos dos trabalhos em linguagem apropriada e na forma culta. Deve demonstrar independência de pensamento e autonomia para pesquisa"
    },
  ]

  constructor() { }

  getSubjects(){
    return this.list;
  }

  tamanho(){
    return this.list.length;
  }
}
