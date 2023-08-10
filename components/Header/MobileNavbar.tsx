import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RouteLinks } from "@/components/RoutesLink"
import { RiMenu3Line } from 'react-icons/ri';
import { ThemeToggle } from "@/components/Theme-toggle";
import ContactLinks from "../ContactLinks";


const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <RiMenu3Line className="h-6 w-6 cursor-pointer text-white transition-all ease-in hover:text-textPrimary md:hidden" />
      </SheetTrigger>
      <SheetContent className="bg-gradient-to-b from-transparent to-primary-foreground backdrop-blur-sm transition-all ease-in">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col items-center justify-center  overflow-hidden transition-all">
          <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
            <RouteLinks href="/" text="Inicio" />
          </li>
          <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
            <SheetClose asChild>
              <RouteLinks href="/profile" text="Sobre mim" />
            </SheetClose>
          </li>
          <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
            <SheetClose asChild>
              <RouteLinks href="/skills" text="Skills" />
            </SheetClose>
          </li>
          <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
            <SheetClose asChild>
              <RouteLinks href="/projects" text="Projetos" />
            </SheetClose>
          </li>
          <li className="m-2 w-full p-2 text-center transition-all hover:scale-105">
            <SheetClose asChild>
              <RouteLinks href="/contact" text="Contato" />
            </SheetClose>
          </li>
        </ul>
        <SheetFooter className="mt-8 gap-6">
          <ThemeToggle />
          <div className="flex flex-row items-center justify-around gap-4">
            <ContactLinks />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavbar
