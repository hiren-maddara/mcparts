import { Inter } from "next/font/google";
import "../globals.css";
import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import SalesItemsModel from "@/components/sales/sales-items-model";
import HeaderSearch from "@/components/dashboard/header-search";
import { SpareProvider } from "@/store/spare-context";
import { NavProvider } from "@/store/nav-context";
import { SalesProvider } from "@/store/sales-context";
import { AlertProvider } from "@/store/alert-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mc-Parts dashboard",
  description: "Workshop management system",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-screen`}>
        <AlertProvider>
          <NavProvider>
            <div className="flex gap-1 relative z-0 overflow-hidden w-full h-full">
              <DashboardNavbar />

              <main className="workspace-container relative h-full flex-1 max-w-full overflow-hidden flex flex-col">
                {/* <HeaderSearch /> */}
                <DashboardHeader />
                <div className="flex-1 flex flex-col gap-4 p-6 overflow-hidden overflow-y-auto">
                  {/* <SalesItemsModel /> */}
                  <SpareProvider>
                    <SalesProvider>{children}</SalesProvider>
                  </SpareProvider>
                </div>
              </main>
            </div>
          </NavProvider>
        </AlertProvider>
      </body>
    </html>
  );
}
