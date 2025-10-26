import Link from 'next/link'
import { Dropdown } from "./dropdown"

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/projects': {
    name: 'projects',
  },
}

export function Navbar() {
  return (
    <aside className="font-[Futura] justify-end -ml-[8px] mb-6 tracking-tight text-xl" >
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row justify-end relative px-0 pb-0 fade overflow-visible scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 underline">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 hover:bg-neutral-800/60 rounded-md"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <Dropdown />
        </nav>
      </div>
    </aside>
  )
}
