import { Fragment } from "react";
import DashboardLayout from "../dashboard/layout";

export default function AnalyticsLayout({ children }) {
  return (
    <Fragment>
      <DashboardLayout>{children}</DashboardLayout>
    </Fragment>
  );
}
