import Link from "next/link"

import { RouteLinksProps } from "@/types/routesLink"

export const RouteLinks = (props: RouteLinksProps) => {
  return (
    <Link
      className={`${
        props.onClick ? "" : "hover:text-primary-foreground"
      } font-bold transition-all ease-in`}
      href={props.href}
      onClick={props.onClick}
    >
      {props.text}
    </Link>
  )
}
