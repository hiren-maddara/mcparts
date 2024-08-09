"use client";

import {
  Home,
  DollarSign,
  FolderCog,
  Package,
  Users,
  Car,
  Settings,
} from "lucide-react";
import NavbarActions from "./navbar-actions";
import NavBarLink from "./dashboard-navbar-link";
import { useContext } from "react";
import { navContext } from "@/store/nav-context";

function DashboardNavbar() {
  const {
    nav: { collapsed },
  } = useContext(navContext);
  const expandedNav = false;

  function iconStyles() {
    if (!collapsed) return "h-4 w-4 mr-2";
    return "w-full h-4 w-4 m-0";
  }

  return (
    <div
      className={`group flex flex-col gap-1 flex-shrink-0 overflow-x-hidden border-r ${
        collapsed ? "w-14 max-w-14" : "w-48"
      }`}
    >
      <div className="flex-shrink-0 h-16 w-full flex p-4">
        {/* <NavbarActions /> */}
      </div>

      <nav className={collapsed ? "grid gap-1 p-1" : "grid gap-1 p-4 pt-1"}>
        <NavBarLink collapsed={collapsed} label="overview" link="/dashboard">
          <Home className={iconStyles()} />
        </NavBarLink>
        <NavBarLink
          collapsed={collapsed}
          label="sales"
          link="/sales"
          active={false}
        >
          <DollarSign className={iconStyles()} />
        </NavBarLink>
        <NavBarLink
          collapsed={collapsed}
          label="inventory"
          link="/store"
          active={false}
        >
          <Package className={iconStyles()} />
        </NavBarLink>
        <NavBarLink
          collapsed={collapsed}
          label="services"
          link="/services"
          active={false}
        >
          <Car className={iconStyles()} />
        </NavBarLink>
        <NavBarLink
          collapsed={collapsed}
          label="analytics"
          link="/analytics"
          active={false}
        >
          <FolderCog className={iconStyles()} />
        </NavBarLink>
        <NavBarLink
          collapsed={collapsed}
          label="users"
          link="/users"
          active={false}
        >
          <Users className={iconStyles()} />
        </NavBarLink>
      </nav>

      <nav
        className={collapsed ? "mt-auto grid gap-1 p-1" : "mt-auto grid gap-1 p-4 pt-1"}
      >
        <NavBarLink
          collapsed={collapsed}
          label="settings"
          link="/settings"
          active={false}
        >
          <Settings className={iconStyles()} />
        </NavBarLink>
      </nav>
    </div>
  );
}

export default DashboardNavbar;
