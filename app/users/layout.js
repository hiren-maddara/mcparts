import { Fragment } from "react";
import DashboardLayout from "../dashboard/layout";

export const metadata = {
  title: '',
  description: '',
}

export default function InventoryLayout({ children }) {
  return (
    <Fragment>
      <DashboardLayout>{children}</DashboardLayout>
    </Fragment>
  );
}
