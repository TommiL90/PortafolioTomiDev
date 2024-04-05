import { retrieveSkills } from '@/actions/retrieve-skills'
import { TIconNAme } from '@/components/ui/icons'
import { Language, Tech } from '@prisma/client'
import { Skills } from './_components/skill-components'

export interface ITechnology {
  title: TIconNAme
  description: string
}

export interface IStatus {
  isDefault: boolean
  isHovered: boolean
  skill: Tech
}

// const technologies: ITechnology[] = [
//   {
//     title: 'HTML',
//     description:
//       'HTML (HyperText Markup Language) é uma linguagem de marcação usada para estruturar o conteúdo de páginas da web. Ele define a estrutura básica de uma página, permitindo adicionar textos, imagens, links e outros elementos interativos.',
//   },
//   {
//     title: 'CSS',
//     description:
//       'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para definir a apresentação e o layout de documentos HTML. Com o CSS, é possível controlar cores, fontes, margens, espaçamentos e outros aspectos visuais das páginas da web.',
//   },
//   {
//     title: 'Javascript',
//     description:
//       'JavaScript é uma linguagem de programação de alto nível e orientada a objetos. É amplamente usada no desenvolvimento web para tornar as páginas interativas, oferecendo funcionalidades dinâmicas e permitindo a manipulação do conteúdo em tempo real.',
//   },
//   {
//     title: 'Typescript',
//     description:
//       'TypeScript é um superset do JavaScript que adiciona tipagem estática ao código. Ele oferece maior robustez e segurança ao desenvolvimento de aplicações JavaScript, detectando erros em tempo de compilação e melhorando a manutenção do código.',
//   },
//   {
//     title: 'React',
//     description:
//       'React é uma biblioteca JavaScript de código aberto para a construção de interfaces de usuário (UI). Ela permite a criação de componentes reutilizáveis e facilita o desenvolvimento de aplicativos web de página única (SPA) com atualização em tempo real.',
//   },
//   {
//     title: 'NextJS',
//     description:
//       'Next.js é um framework JavaScript de código aberto construído em cima do React. Ele oferece funcionalidades adicionais para desenvolvimento de aplicações web, como renderização no lado do servidor, geração de páginas estáticas e facilidades para criação de aplicativos híbridos.',
//   },
//   {
//     title: 'NodeJS',
//     description:
//       'Node.js é um ambiente de execução JavaScript do lado do servidor que permite a criação de aplicações web escaláveis e em tempo real. Ele é baseado no motor V8 do Google Chrome e possui uma arquitetura de I/O não bloqueante que o torna eficiente e adequado para aplicações de alto desempenho.',
//   },
//   {
//     title: 'Express',
//     description:
//       'Express.js é um framework web minimalista para Node.js. Ele simplifica a criação de aplicativos web e APIs com JavaScript, fornecendo uma camada de abstração sobre o servidor HTTP nativo do Node.js e adicionando recursos úteis para lidar com rotas, middlewares e gerenciamento de requisições e respostas.',
//   },
//   {
//     title: 'NestJS',
//     description:
//       'NestJS é um framework para construir aplicativos server-side com Node.js. Ele é baseado no conceito de módulos e utiliza uma arquitetura inspirada no Angular para organizar o código de forma escalável e modular. NestJS também fornece recursos avançados para a criação de APIs RESTful e aplicativos em tempo real.',
//   },
//   {
//     title: 'Tailwind',
//     description:
//       'Tailwind CSS é um framework CSS de utilitários de baixo nível que permite a criação de interfaces web customizadas com rapidez. Ele oferece uma abordagem diferente dos tradicionais frameworks de CSS, fornecendo classes utilitárias para estilização direta dos elementos, o que agiliza o processo de desenvolvimento e permite maior flexibilidade no design.',
//   },
//   {
//     title: 'Python',
//     description:
//       'Python é uma linguagem de programação de alto nível, versátil e de fácil aprendizado. Ela é conhecida por sua sintaxe clara e legível, o que a torna uma ótima escolha para desenvolvimento de scripts, aplicações web, ciência de dados, automação, entre outros.',
//   },
//   {
//     title: 'Django',
//     description:
//       'Django é um framework web de alto nível baseado em Python. Ele segue o padrão Model-View-Template (MVT) e simplifica a criação de aplicações web robustas e escaláveis. Com Django, é possível construir rapidamente desde simples sites até aplicações complexas, fornecendo muitos componentes reutilizáveis e uma arquitetura bem estruturada.',
//   },
//   {
//     title: 'PostgreSQL',
//     description:
//       'PostgreSQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele é conhecido por ser poderoso, seguro e altamente extensível, oferecendo suporte a recursos avançados, como chaves estrangeiras, junções complexas, gatilhos e procedimentos armazenados.',
//   },
//   {
//     title: 'MySQL',
//     description:
//       'MySQL é um sistema de gerenciamento de banco de dados relacional amplamente utilizado. Ele é conhecido por sua confiabilidade, alta performance e facilidade de uso. É uma escolha popular para aplicações web e outros projetos que necessitam de armazenamento e recuperação eficiente de dados.',
//   },
//   {
//     title: 'Redis',
//     description:
//       'Redis é um banco de dados de estrutura de dados em memória, conhecido por sua velocidade e versatilidade. Além de ser usado como um cache em memória para melhorar o desempenho de aplicações, ele também pode atuar como um banco de dados chave-valor, armazenando informações temporárias ou de rápido acesso.',
//   },
//   {
//     title: 'MongoDB',
//     description:
//       'MongoDB é um banco de dados NoSQL orientado a documentos, projetado para armazenar e consultar dados de forma flexível e escalável. Sua estrutura de documentos permite armazenar informações de maneira semelhante a objetos JSON, facilitando a representação e manipulação dos dados em muitas aplicações modernas.',
//   },
//   {
//     title: 'Prisma',
//     description:
//       'Prisma é uma ferramenta de desenvolvimento de banco de dados com foco em produtividade. Ela simplifica a interação com o banco de dados ao oferecer um ORM (Object-Relational Mapping) moderno e seguro, permitindo que os desenvolvedores realizem consultas e manipulem os dados usando código TypeScript ou JavaScript.',
//   },
//   {
//     title: 'TypeORM',
//     description:
//       'TypeORM é um ORM (Object-Relational Mapping) de código aberto que permite mapear objetos em um banco de dados relacional. Ele é especialmente popular entre projetos TypeScript e Node.js, facilitando a manipulação e persistência dos dados usando uma sintaxe familiar e orientada a objetos.',
//   },
//   {
//     title: 'Git',
//     description:
//       'Git é um sistema de controle de versão distribuído amplamente utilizado. Ele permite o rastreamento de alterações em projetos de software ao longo do tempo, facilitando a colaboração entre desenvolvedores, o gerenciamento de conflitos e a implementação de novas funcionalidades com segurança.',
//   },
//   {
//     title: 'Github',
//     description:
//       'GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Ela oferece uma série de recursos para colaboração, como controle de versão, rastreamento de problemas, integração contínua, entre outros. O GitHub se tornou uma comunidade vibrante para desenvolvedores compartilharem e contribuírem com projetos de código aberto e privados.',
//   },
// ]

interface Props {
  params: {
    locale: string
  }
}

const SkillPage = async ({ params }: Props) => {
  const language =
    (params.locale.toUpperCase() as Language) || ('PT' as Language)
  const skills = await retrieveSkills(language)
  return <Skills techs={skills} />
}

export default SkillPage
