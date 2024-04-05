import { auth } from '@/lib/auth'
import { RouteLinks } from '../route-link'
import { SignIn } from '../signin'

export const Navbar = async () => {
  const session = await auth()
  return (
    <nav className="hidden items-center justify-between md:flex">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouteLinks href="/" text="Inicio" />
        </li>

        <li className="m-2 p-2">
          <RouteLinks href="/profile" text="Sobre mim" />
        </li>

        <li className="m-2 p-2">
          <RouteLinks href="/projects" text="Projetos" />
        </li>

        <li className="m-2 p-2">
          <RouteLinks href="/skills" text="Skills" />
        </li>

        <li className="m-2 p-2">
          <RouteLinks href="/contact" text="Contato" />
        </li>
        <li className="m-2 p-2">
          {session ? <RouteLinks href="/admin" text="Admin" /> : <SignIn />}
        </li>
      </ul>
    </nav>
  )
}
