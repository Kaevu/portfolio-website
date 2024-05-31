import React from "react"
import { SiGithub, SiX } from "react-icons/si"
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mt-10 mb-16">
      <hr className="opacity-20"></hr>
      <ul className="font-sm justify-center mt-8 flex space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li className="px-2">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="https://github.com/0xYezi"
          >
            <SiGithub size={24} />
          </a>
        </li>

        <li className="flex px-2">
          <span className="pr-4">-</span>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="https://x.com/0xYezii"
          >
            <SiX size={24} />
          </a>
          <span className="pl-4">-</span>
        </li>
        <li className="px-2">
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            href="mailto:email@yezi.dev"
          >
            <MdEmail size={24} />
          </a>
        </li>
      </ul>
      <p className="flex mt-8 text-neutral-600 dark:text-neutral-300 justify-center">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  )
}
