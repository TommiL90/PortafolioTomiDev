
import { RouteLinks } from "@/components/RoutesLink"
import { ThemeToggle } from "@/components/Theme-toggle"
import MobileNavbar from "./MobileNavbar"

export type MenuTypeProps = {
  modal?: boolean
  openModal?: () => void
  closeModal?: () => void
}

export const Navbar = ({ openModal }: MenuTypeProps) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouteLinks href="/" text="Inicio" />
        </li>
        <li className="m-2 p-2">
          <RouteLinks href="profile" text="Sobre mim" />
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
      </ul>
      <MobileNavbar />
      <span className="hidden md:block">
        <ThemeToggle />
      </span>
    </nav>
  )
}
