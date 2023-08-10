import React, { Fragment } from 'react'
import { Icons } from "@/components/Icons"
import { LuLinkedin } from 'react-icons/lu';
import { BiLogoGmail } from 'react-icons/bi';


const ContactLinks = () => {
  return (
    <Fragment>
      <a
        className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialLinkedin bg-socialLinkedin p-0 text-white hover:border-socialLinkedin hover:bg-transparent hover:text-socialLinkedin"
        href="https://www.linkedin.com/in/tomasbenjamin"
        target="_blank"
      >
        <LuLinkedin className="h-5 w-5" />
      </a>

      <a
        className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGitHub bg-socialGitHub p-0 text-white hover:border-socialGitHub hover:bg-transparent hover:text-socialGitHub"
        href="https://github.com/TommiL90"
        target="_blank"
      >
        <Icons.gitHub className="h-5 w-5" />
      </a>
      <a
        className="min-w-11 min-h-11 flex h-11 w-11 items-center justify-center rounded-full border-2 border-socialGmail bg-socialGmail p-0 text-white hover:border-socialGmail hover:bg-transparent hover:text-socialGmail"
        href="mailto:tomasbenjamin@gmail.com"
        target="_blank"
      >
        <BiLogoGmail className="h-5 w-5" />
      </a>
    </Fragment>
  )
}

export default ContactLinks