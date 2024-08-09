import { Fragment, useContext } from "react";
import DashboardLayout from "../dashboard/layout";

export default function InventoryLayout({ children }) {
  
  return (
    <Fragment>
      <DashboardLayout>{children}</DashboardLayout>
    </Fragment>
  );
}
