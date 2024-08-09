import RecentActivity from "@/components/overview/recent-activity";
import { SalesOverviewChart } from "@/components/overview/sales-overview-chart";
import Stats from "@/components/overview/stats";
import { Fragment } from "react";

function DashboardPage() {
  return (
      <Fragment>
      <Stats />
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-7">
        <SalesOverviewChart />
        <RecentActivity />
      </div>
      </Fragment>
  );
}

export default DashboardPage;
