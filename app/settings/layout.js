import { Fragment } from "react";
import DashboardLayout from "../dashboard/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InventoryLayout({ children }) {
  return (
    <Fragment>
      <DashboardLayout>
        <div className="grid grid-cols-6 gap-4">
          <nav className="col-span-1 text-sm text-muted-foreground">
              <Button variant="link" className="py-0 h-8">
                <Link href="#" className="font-semibold text-primary">
                  General
                </Link>
              </Button>
              <Button variant="link" className="py-0 h-8">
                <Link href="#">Security</Link>
              </Button>
              <Button variant="link" className="py-0 h-8">
                <Link href="#">Integrations</Link>
              </Button>
              <Button variant="link" className="py-0 h-8">
                <Link href="#">Support</Link>
              </Button>
              <Button variant="link" className="py-0 h-8">
                <Link href="#">Organizations</Link>
              </Button>
              <Button variant="link" className="py-0 h-8">
                <Link href="#">Advanced</Link>
              </Button>
          </nav>
          <main className="col-span-5 border-l p-2">{children}</main>
        </div>
      </DashboardLayout>
    </Fragment>
  );
}
