import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { RouteLinks } from '../route-link'
import { GanttChart } from 'lucide-react'

export function MobileNavBar() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="border-none p-0 md:hidden"
          size="icon"
        >
          {' '}
          <GanttChart />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>Menu de navegação</DrawerDescription>
          </DrawerHeader>
          <ul>
            <li className="m-2 p-2">
              <DrawerClose asChild>
                <RouteLinks href="profile" text="Sobre mim" />
              </DrawerClose>
            </li>

            <li className="m-2 p-2">
              <DrawerClose asChild>
                <RouteLinks href="/projects" text="Projetos" />
              </DrawerClose>
            </li>

            <li className="m-2 p-2">
              <DrawerClose asChild>
                <RouteLinks href="/skills" text="Skills" />
              </DrawerClose>
            </li>

            <li className="m-2 p-2">
              <DrawerClose asChild>
                <RouteLinks href="/contact" text="Contato" />
              </DrawerClose>
            </li>
            <li className="m-2 p-2">
              {' '}
              <DrawerClose asChild>
                <RouteLinks href="/admin" text="Contato" />
              </DrawerClose>
            </li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
