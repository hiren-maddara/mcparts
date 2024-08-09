"use client"

import { useState } from "react";
import { CompleteCheckoutBtn } from "./complete-checkout-btn";
import CompleteOrder from "./order-complete";

function CheckoutSummary() {
  const [openSheet, setOpenSheet] = useState(false)

  return (
    <div className="relative max-h-full rounded border-b shadow bg-primary text-white row-span-3">
      <div className="py-3 px-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">Cart summary</h3>
        <CompleteCheckoutBtn handleClick={()=>setOpenSheet(!openSheet)} />
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">
          <span className="text-sm font-medium text-muted-foreground">UGX</span>
          457,000
        </div>
        <p className="text-xs text-muted-foreground">20 items selected</p>
      </div>

      <CompleteOrder open={openSheet} toggleSheet={setOpenSheet} />
    </div>
  );
}

export default CheckoutSummary;
