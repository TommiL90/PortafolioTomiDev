import { TIconNAme } from '@/components/ui/icons'

export type Trepo = {
  name: string
  description: string
  images: string[]
  techs: TIconNAme[]
  deploy: string
  repository: string
}
export type TRepos = Trepo[]

export const reposFront: TRepos = [
  {
    name: 'Motor-Shop',
    description:
      'Aplicação web para comprar e vender veículos. Os usuários podem se registrar como clientes ou anunciantes, fazer login, atualizar suas informações de perfil e gerenciar seus anúncios, entre outros',
    images: [
      'motorshop/Dashboard.png',
      'motorshop/Login.png',
      'motorshop/Details.png',
    ],
    techs: ['Typescript', 'React', 'Tailwind', 'NextJS', 'Vercel'],
    deploy: 'https://motor-shop-front-lac.vercel.app/',
    repository: 'https://github.com/TommiL90/motor-shop-front',
  },
  {
    name: 'Startemy',
    description:
      'Plataforma de cursos com navegação, compra e consumo de cursos, além de registro e login.',
    images: [
      'startemy/LandingPage.png',
      'startemy/SignUp.png',
      'startemy/Cursos.png',
    ],
    techs: ['Typescript', 'React', 'ChakraUI', 'StyledComponents', 'Vercel'],
    deploy: 'https://startemy-m3-gcaastro1.vercel.app/',
    repository: 'https://github.com/TommiL90/Startemy-project',
  },
  {
    name: 'Kenzie Burguer',
    description:
      'Projeto criado usando ReactJs, Styled-Components, react-hook-form, validação de formulário e aplicando proteção de rotas.',
    images: ['burguer/DashBoard.png', 'burguer/SignUp.png', 'burguer/Cart.png'],
    techs: ['Typescript', 'React', 'StyledComponents', 'Vercel'],
    deploy:
      'https://react-typescript-hamburgueria-tommil90-tommil90.vercel.app/login',
    repository: 'https://github.com/TommiL90/react-typescript-hamburgueria',
  },
  {
    name: 'To-Do',
    description:
      'Projeto criado usando ReactJs, Chakra UI, react-hook-form, validação de formulário e aplicando proteção de rotas.',
    images: ['todo/DashBoard.png', 'todo/Login.png', 'todo/SignUp.png'],
    techs: ['Typescript', 'React', 'ChakraUI', 'Vercel'],
    deploy: 'https://to-do-app-tommil90.vercel.app/login',
    repository: 'https://github.com/TommiL90/toDoApp',
  },
]

export const reposBack: TRepos = [
  {
    name: 'Motor-Shop API',
    description:
      'Cadastro de usuarios como clientes ou vendedores. Os anunciantes podem criar, atualizar e excluir seus anúncios de veículos, entre outras funcionalidades',
    images: ['apiCover/api1.png'],
    techs: [
      'NodeJS',
      'Express',
      'Typescript',
      'Prisma',
      'PlanetScale',
      'MySQL',
    ],
    deploy: 'https://motor-shop-t14.onrender.com/api-docs/',
    repository: 'https://github.com/TommiL90/motor-shop-backend',
  },
  {
    name: 'NestJS API',
    description:
      'Projeto Api-Master. Seu propósito é construir uma API escalável que me auxilia a hospedar a parte do backend de alguns dos meus projetos de frontend no meu repositório.',
    images: ['apiCover/api2.png'],
    techs: ['Typescript', 'NestJS', 'NodeJS', 'PlanetScale', 'MySQL'],
    deploy: 'nestjsapi.onrender.com/api',
    repository: 'https://github.com/TommiL90/nestjs-api',
  },
  {
    name: 'E-commerce API',
    description:
      'Este projeto envolve a criação de um sistema que é inicialmente desenvolvido com APIView e sqlite3, e fazendo a transição para Generic Views, Model Serializer e Postgres.',
    images: ['apiCover/api3.png'],
    techs: ['Python', 'Django', 'PostgreSQL'],
    deploy:
      'https://react-typescript-hamburgueria-tommil90-tommil90.vercel.app/login',
    repository: 'https://github.com/TommiL90/react-typescript-hamburgueria',
  },
  {
    name: 'KI-Móveis',
    description:
      'Neste trabalho, desenvolvemos um serviço de back-end responsável por gerenciar uma agência imobiliária usando o TypeORM e relacionamentos.',
    images: ['apiCover/api4.png'],
    techs: ['Typescript', 'NodeJS', 'TypeORM', 'PostgreSQL', 'Jest'],
    deploy: 'https://to-do-app-tommil90.vercel.app/login',
    repository: 'https://github.com/TommiL90/toDoApp',
  },
]
