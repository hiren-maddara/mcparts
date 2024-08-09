"use client"

import { PackagePlus } from "lucide-react"
import { useContext } from "react"

function SalesCardPlaceholder() {
    return (
        <div className="flex flex-col gap-2 h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm mx-auto my-auto text-muted-foreground">
            <PackagePlus onClick={() => setItems([]) && console.log(items)} className="h-4 w-4 text-muted-foreground" />

            Start selecting items to add
        </div>
    )
}

export default SalesCardPlaceholder
