"use client";

import { headerNavItemId } from "@/model/navBar";
import { useState } from "react";

const headerNavItem = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export default function Header() {
  const [nowPage, setNowPage] = useState<headerNavItemId>("home");

  return (
    <header className="bg-slate-600 cursor-default">
      <ul className="flex gap-14 justify-end items-center py-5 font-semibold text-lg w-11/12 mx-auto">
        {headerNavItem.map(({ id, title }) => (
          <li
            key={id}
            className={`${
              nowPage === id &&
              "after:block after:mt-1 after:border after:border-emerald-400 text-emerald-400"
            }`}
          >
            {title}
          </li>
        ))}
      </ul>
    </header>
  );
}
