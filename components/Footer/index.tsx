import Link from "next/link"
import ContactLinks from "../ContactLinks"
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
            href="https://www.linkedin.com/in/tomasbenjamin"
            target="_blank"
          >
            Tomás Benjamin
          </Link>
        </span>
      </section>

      <section className="flex items-center justify-around gap-4">
        <ContactLinks/>
      </section>
    </footer>
  )
}
