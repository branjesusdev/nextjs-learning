"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
}

export const SidebarMenuItem = ({ path, icon, title }: Props) => {

  const isActive = usePathname() === path;

  return (
    <>
      <Link
        href={path}
        className={
          `rounded-md w-full px-2 inline-flex space-x-2 items-center  py-2  transition-all ease-linear duration-200 
          ${isActive ? 'bg-neutral-700/40 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`
        }
      >
        <div>
          { icon }
        </div>
        <div className="flex flex-col">
          <span className="text-base font-medium leading-5">
            {title}
          </span>
        </div>
      </Link>
    </>
  );
};
