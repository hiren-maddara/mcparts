"use client"

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SalesContext } from "@/store/sales-context";
import { useContext } from "react";


export default function Component() {
  const {items} = useContext(SalesContext)
  return (
    <Card className="shadow-none rounded-xl border bg-card text-card-foreground md:col-span-1 lg:col-span-3">
      <CardHeader className="px-7">
        <CardTitle>Recent activity</CardTitle>
        <CardDescription>Recent sales from the store.</CardDescription>
      </CardHeader>
      <CardContent className="max-h-96 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead className="sm:table-cell">Staff</TableHead>
              <TableHead className="sm:table-cell">Status</TableHead>
              <TableHead className="md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* <TableRow className="bg-accent">
              <TableCell>
                <div className="font-medium">Engine oil</div>
                <div className="  text-sm text-muted-foreground md:inline">
                  DGF231-HPpro
                </div>
              </TableCell>
              <TableCell className="sm:table-cell">Jane F</TableCell>
              <TableCell className="sm:table-cell">
                <Badge className="text-xs" variant="secondary">
                  Complete
                </Badge>
              </TableCell>
              <TableCell className="md:table-cell">2023-06-23</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow> */}

            {items && items.map((sale) => (
              <TableRow key={sale.partnum}>
                <TableCell>
                  <div className="font-medium">{sale.spareparts.partname}</div>
                  <div className="  text-sm text-muted-foreground md:inline">
                    {sale.spareparts.partnum}
                  </div>
                </TableCell>
                <TableCell className="  sm:table-cell">{sale.employees.employeename}</TableCell>
                <TableCell className="  sm:table-cell">
                  <Badge className="text-xs" variant={sale.status === 'complete'?'secondary':'outline'}>
                    {sale.status}
                  </Badge>
                </TableCell>
                <TableCell className="  md:table-cell">{sale.saledate}</TableCell>
                <TableCell className="text-right">UGX {sale.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
