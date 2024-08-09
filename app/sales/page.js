"use client";

import InvetoryStatus from "@/components/icons/InvetoryStatus";
import Stats from "@/components/overview/stats";
import CheckoutSummary from "@/components/sales/checkout-summary";
import ItemCard from "@/components/sales/sales-card";
import SalesCardPlaceholder from "@/components/sales/sales-card-placeholder";
import { SalesForm } from "@/components/sales/sales-form";
import SalesItemsModel from "@/components/sales/sales-items-model";
import { SalesContext, SalesProvider } from "@/store/sales-context";
import { SpareContext } from "@/store/spare-context";
import { usePathname } from "next/navigation";
import { Fragment, useState, useContext, useEffect } from "react";

function SalesPage() {
  const [openSalesModal, setOpenSalesModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const { spareParts } = useContext(SpareContext);

  const pathname = usePathname()

  function handleSelectItem(val) {
    const parsedPartNum = val.split("#")[1];
    const item = spareParts.find((item) => item.partnum === parsedPartNum);
    setSelectedItem(item);
    setOpenSalesModel(false);
  }

  useEffect(() => {
    const down = (e) => {
      if (pathname.startsWith('/sales') && e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenSalesModel((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [pathname]);

  return (
    <Fragment>
      <SalesProvider>
        {openSalesModal && (
          <SalesItemsModel
            handleCloseSalesModel={() => setOpenSalesModel(false)}
            handleSelectItem={handleSelectItem}
            open={openSalesModal}
          />
        )}

        <div className="overflow-hidden overflow-y-auto h-full  relative flex flex-col gap-4 lg:grid lg:grid-cols-6">
          <div className="lg:col-span-3 flex justify-center">
            <SalesForm
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              handleOpenSalesModal={(e) => {
                e.preventDefault();
                setOpenSalesModel(true);
              }}
            />
          </div>

          {/* checkout summary */}
          <div
            className={`sales-summary col-span-3 grid grid-rows-10 overflow-hidden border gap-0 flex-shrink-0`}
          >
            <CheckoutSummary />

            <div className="sell-cards row-span-7 overflow-y-auto flex flex-col">
              {/* <ItemCard />
            <ItemCard />
            <ItemCard /> */}

              <SalesCardPlaceholder />
            </div>
          </div>
        </div>
      </SalesProvider>
    </Fragment>
  );
}

export default SalesPage;
