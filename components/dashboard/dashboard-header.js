"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  MessageSquareText,
  PanelLeftClose,
  PanelRightClose,
  Plus,
  ShoppingCart,
  Sun,
} from "lucide-react";
import { Fragment, useContext } from "react";
import HeaderCommandMenu from "./header-search";
import ProfileMenu from "./profile-menu";
import { navContext } from "@/store/nav-context";

function DashboardHeader() {
  const {
    nav: { collapsed, setCollapsed },
  } = useContext(navContext);
  function toggleNavBar() {
    setCollapsed(!collapsed);
  }
  return (
    <Fragment>
      <header className="flex-shrink-0 flex h-16 items-center p-0 pr-4 gap-1 border-b">
        <div className="mr-auto flex items-center justify-center">
          <div onClick={toggleNavBar} className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8">
            {collapsed ? (
              <PanelRightClose className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </div>
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8">
            <ShoppingCart className="h-4 w-4" />
          </div>
          <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8">
            <Plus className="h-4 w-4" />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <HeaderCommandMenu />
        </div>

        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8">
          <MessageSquareText className="h-4 w-4" />
        </div>

        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8">
          <Sun className="h-4 w-4" />
        </div>

        <ProfileMenu />
      </header>
    </Fragment>
  );
}

export default DashboardHeader;
