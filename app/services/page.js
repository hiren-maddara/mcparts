import ServicesSummary from "@/components/services/services-summary";
import { ServicesTable } from "@/components/services/services-table";
import { Fragment } from "react";

export default function ServicesPage() {
  return <Fragment>
    <ServicesSummary />
    <ServicesTable />
  </Fragment>;
}
