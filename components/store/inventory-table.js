"use client";

import { useContext, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  CarFront,
  ClipboardPlus,
  Copy,
  EyeOff,
  MoreHorizontal,
  PackagePlus,
  Pencil,
  PlusCircle,
  SlidersHorizontal,
  Trash,
  Wrench,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FilterBtn from "./filter-btn";
import { AlertContext } from "@/store/alert-context";

const data = [
  {
    partNum: "DG234-HPro",
    itemName: "Engine oil",
    system: "engine",
    manufacturer: "Nissan",
    price: "25000",
    inventoryStatus: 24,
    soldMonth: 12,
  },
  {
    partNum: "XF123-GLow",
    itemName: "Brake pads",
    system: "brakes",
    manufacturer: "Toyota",
    price: "15000",
    inventoryStatus: 30,
    soldMonth: 20,
  },
  {
    partNum: "BY789-MMed",
    itemName: "Air filter",
    system: "air intake",
    manufacturer: "Honda",
    price: "10000",
    inventoryStatus: 50,
    soldMonth: 18,
  },
  {
    partNum: "TR456-HPro",
    itemName: "Spark plugs",
    system: "ignition",
    manufacturer: "Ford",
    price: "5000",
    inventoryStatus: 40,
    soldMonth: 25,
  },
  {
    partNum: "JK234-LLow",
    itemName: "Transmission fluid",
    system: "transmission",
    manufacturer: "Chevrolet",
    price: "20000",
    inventoryStatus: 15,
    soldMonth: 10,
  },
  {
    partNum: "AB123-CTurbo",
    itemName: "Turbocharger",
    system: "engine",
    manufacturer: "Nissan",
    price: "45000",
    inventoryStatus: 10,
    soldMonth: 5,
  },
  {
    partNum: "CD456-EPlus",
    itemName: "Exhaust system",
    system: "engine",
    manufacturer: "Toyota",
    price: "30000",
    inventoryStatus: 20,
    soldMonth: 8,
  },
  {
    partNum: "EF789-FHigh",
    itemName: "Fuel injector",
    system: "fuel system",
    manufacturer: "Honda",
    price: "20000",
    inventoryStatus: 15,
    soldMonth: 7,
  },
  {
    partNum: "GH012-GMax",
    itemName: "Gearbox",
    system: "transmission",
    manufacturer: "Ford",
    price: "55000",
    inventoryStatus: 8,
    soldMonth: 12,
  },
  {
    partNum: "IJ345-HPro",
    itemName: "Headlights",
    system: "lighting",
    manufacturer: "Chevrolet",
    price: "8000",
    inventoryStatus: 50,
    soldMonth: 30,
  },
  {
    partNum: "KL678-ILow",
    itemName: "Ignition coil",
    system: "ignition",
    manufacturer: "Nissan",
    price: "12000",
    inventoryStatus: 25,
    soldMonth: 10,
  },
  {
    partNum: "MN901-JHigh",
    itemName: "Radiator",
    system: "cooling",
    manufacturer: "Toyota",
    price: "18000",
    inventoryStatus: 18,
    soldMonth: 15,
  },
  {
    partNum: "OP234-KMed",
    itemName: "Clutch",
    system: "transmission",
    manufacturer: "Honda",
    price: "22000",
    inventoryStatus: 12,
    soldMonth: 6,
  },
  {
    partNum: "QR567-LMax",
    itemName: "Alternator",
    system: "electrical",
    manufacturer: "Ford",
    price: "15000",
    inventoryStatus: 20,
    soldMonth: 10,
  },
  {
    partNum: "ST890-MMid",
    itemName: "Battery",
    system: "electrical",
    manufacturer: "Chevrolet",
    price: "10000",
    inventoryStatus: 35,
    soldMonth: 22,
  },
  {
    partNum: "UV123-NLow",
    itemName: "Shock absorbers",
    system: "suspension",
    manufacturer: "Nissan",
    price: "25000",
    inventoryStatus: 10,
    soldMonth: 4,
  },
  {
    partNum: "WX456-OPower",
    itemName: "Power steering pump",
    system: "steering",
    manufacturer: "Toyota",
    price: "16000",
    inventoryStatus: 14,
    soldMonth: 8,
  },
  {
    partNum: "YZ789-QHigh",
    itemName: "Timing belt",
    system: "engine",
    manufacturer: "Honda",
    price: "12000",
    inventoryStatus: 22,
    soldMonth: 11,
  },
  {
    partNum: "AA012-RMax",
    itemName: "Oil filter",
    system: "engine",
    manufacturer: "Ford",
    price: "5000",
    inventoryStatus: 40,
    soldMonth: 20,
  },
  {
    partNum: "BB345-SMid",
    itemName: "Brake calipers",
    system: "brakes",
    manufacturer: "Chevrolet",
    price: "18000",
    inventoryStatus: 16,
    soldMonth: 6,
  },
  {
    partNum: "CC678-TLow",
    itemName: "Water pump",
    system: "cooling",
    manufacturer: "Nissan",
    price: "14000",
    inventoryStatus: 18,
    soldMonth: 10,
  },
  {
    partNum: "DD901-UPower",
    itemName: "Fuel pump",
    system: "fuel system",
    manufacturer: "Toyota",
    price: "20000",
    inventoryStatus: 12,
    soldMonth: 8,
  },
  {
    partNum: "EE234-VMax",
    itemName: "Air conditioning compressor",
    system: "air conditioning",
    manufacturer: "Honda",
    price: "30000",
    inventoryStatus: 8,
    soldMonth: 4,
  },
  {
    partNum: "FF567-WHigh",
    itemName: "Fan belt",
    system: "cooling",
    manufacturer: "Ford",
    price: "6000",
    inventoryStatus: 25,
    soldMonth: 12,
  },
  {
    partNum: "GG890-XMid",
    itemName: "Radiator hose",
    system: "cooling",
    manufacturer: "Chevrolet",
    price: "4000",
    inventoryStatus: 20,
    soldMonth: 10,
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "partNum",
    header: "Part Number",
    cell: ({ row }) => (
      <div className="capitalize flex gap-2">
        {row.getValue("partNum")}
        <Badge variant="secondary" className="rounded-sm capitalize">
          {row.original.manufacturer}
        </Badge>
      </div>
    ),
  },
  {
    id: "itemName",
    accessorKey: "itemName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Item
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("itemName")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "inventoryStatus",
    header: () => <div className="text-right">Inventory status</div>,
    cell: ({ row }) => {
      const qtt = parseFloat(row.getValue("inventoryStatus"));

      return <div className="text-right font-medium">{qtt}</div>;
    },
  },
  {
    accessorKey: "soldMonth",
    header: () => <div className="text-right">Sold in June</div>,
    cell: ({ row }) => {
      const qtt = parseFloat(row.getValue("soldMonth"));

      return <div className="text-right font-medium">{qtt}</div>;
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(row.original)}
            >
              Copy info
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>View in new tab</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function InventoryTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const testAlert = useContext(AlertContext)

  return (
    <div className="w-full">
      {/* table header */}
      <div className="flex items-center py-4 pt-0 gap-2">
        <Input
          placeholder="Filter items..."
          value={table.getColumn("itemName")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("itemName")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />

        <FilterBtn />

        <Button variant="link" className="text-sm" onClick={()=>{
          testAlert({
            variant:'destructive',
             description:"If you never try you'll never know"
          })
        }}>
          Reset
          <X className="h-4 w-4 inline" />
        </Button>

        <DropdownMenu className="outline-none active:outline-none">
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto flex gap-2">
              <Wrench className="ml-2 h-4 w-4 inline" />
              Options
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Items</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                <span>Edit</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ClipboardPlus className="mr-2 h-4 w-4" />
                <span>Generate report</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash className="mr-2 h-4 w-4" />
                <span>Delete</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <EyeOff className="mr-2 h-4 w-4" />
                <span>Hide from spare</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <PackagePlus className="mr-2 h-4 w-4" />
                <span>Record new stock</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <CarFront className="mr-2 h-4 w-4" />
                  <span>Assign to one system</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      <span>Copy to clipboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <X className="mr-2 h-4 w-4" />
              <span>Cancel selection</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto flex gap-2">
              <SlidersHorizontal className="ml-2 h-4 w-4 inline" />
              View
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* body */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* footer */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
