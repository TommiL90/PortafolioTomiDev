export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TomiDev",
  description:
    "Bem-vindo ao meu portfólio de desenvolvimento full stack! Sou um desenvolvedor apaixonado por criar soluções inovadoras e funcionais usando tecnologias modernas como HTML5, CSS3, JavaScript, React, Node.js e muito mais. Conheça meus projetos e descubra como posso ajudar a transformar suas ideias em realidade. Entre em contato para iniciar uma colaboração incrível!",
  generator: "Next.js",
  keywords: ["Fullstack", "Developer", "Tomás", "TomiDev", "Tomás Lillo"],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/sobre-mim",
    },
    {
      title: "Skills",
      href: "/skills",
    },
    {
      title: "Projects",
      href: "/projetos",
    },
    {
      title: "Contact",
      href: "/contato",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    mail: "https://ui.shadcn.com",
  },
  authors: [
    { name: "Tomás Lillo" },
    { name: "Tomás", url: "https://www.linkedin.com/in/tomasbenjamin/" },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",

  icons: [
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
    { rel: "icon", url: "/favicon.ico" },
  ],
}
