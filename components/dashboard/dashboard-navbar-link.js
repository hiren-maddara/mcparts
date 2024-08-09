"use client"
import Link from "next/link";
import {usePathname} from "next/navigation"

export default function NavBarLink({ label, link, collapsed, children }) {
    const pathname = usePathname()

    function assignStyles(){
        if(pathname.startsWith(`${link}`)) return "bg-primary text-primary-foreground hover:bg-primary/90  dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"

        return "hover:bg-accent hover:text-accent-foreground"

    }
    
  return (
    <Link
      className={
        "inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 justify-start capitalize" +
        " " +
        assignStyles()
      }
      href={link}
    >
      {children}
      {!collapsed && <span>{label}</span>}
      {/* <span className="ml-auto text-background dark:text-white">128</span> */}
    </Link>
  );
}
