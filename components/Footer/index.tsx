import Link from "next/link"
import { Icons } from "@/components/Icons"
import { LuLinkedin } from 'react-icons/lu';
import { BiLogoGmail } from 'react-icons/bi';


export const Footer = () => {
  const date = new Date()
  const currentYear = date.getFullYear()

  return (
    <footer className="flex h-20 items-center justify-around border-t border-primary">
      <section className="flex">
        <span className="m-1 font-bold">&copy; {currentYear} TomiDev</span>
        <span className="m-1 hidden font-bold md:block">
          | Powered by
          <Link
            className="flex items-center pl-4 font-bold text-foreground hover:text-primary-foreground"
            href="https://www.linkedin.com/in/renovatt"
            target="_blank"
          >
            Tomás Benjamin
          </Link>
        </span>
      </section>

      <section className="flex items-center justify-around gap-4">
        <Link
          className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialLinkedin bg-socialLinkedin p-0 text-white hover:border-socialLinkedin hover:bg-transparent hover:text-socialLinkedin"
          href="https://www.linkedin.com/in/tomasbenjamin"
          target="_blank"
        >
          <LuLinkedin className="h-5 w-5" />
        </Link>

        <Link
          className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGitHub bg-socialGitHub p-0 text-white hover:border-socialGitHub hover:bg-transparent hover:text-socialGitHub"
          href="https://github.com/TommiL90"
          target="_blank"
        >
          <Icons.gitHub className="h-5 w-5" />
        </Link>
        <Link
          className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGmail bg-socialGmail p-0 text-white hover:border-socialGmail hover:bg-transparent hover:text-socialGmail"
          href="mailto:tomasbenjamin@gmail.com"
          target="_blank"
        >
          <BiLogoGmail className="h-5 w-5" />
        </Link>
      </section>
    </footer>
  )
}
