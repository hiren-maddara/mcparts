import { CreditCard } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CompleteCheckoutBtn({handleClick}) {
  return (
    <Button className="top-4 left-1 border" onClick={handleClick}>
      <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" /> Proceed
    </Button>
  )
}
