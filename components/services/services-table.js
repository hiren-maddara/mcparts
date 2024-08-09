"use client";

import { useState } from "react";
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
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";

// import FilterBtn from "./filter-btn";

const servicesData = [
  {
    plateNum: "UBY 234E",
    model: "Nissan Pathfinder",
    workers: ["John M.", "Hiren K.", "Paul L.", "Andrew K."],
    status: "complete",
    diagnosis: "Transmission",
    startDate: "2022-12-01",
    endDate: "2023-01-12",
    itemsAmount: 24000,
  },
  {
    plateNum: "GHY 789K",
    model: "Toyota Corolla",
    workers: ["Lisa C.", "David R."],
    status: "in progress",
    diagnosis: "Engine Overhaul",
    startDate: "2023-02-15",
    endDate: null,
    itemsAmount: 18000,
  },
  {
    plateNum: "JKS 120D",
    model: "Honda Accord",
    workers: ["Emma W.", "Jack P."],
    status: "pending",
    diagnosis: "Brake System",
    startDate: "2023-03-05",
    endDate: null,
    itemsAmount: 15000,
  },
  {
    plateNum: "DFG 567A",
    model: "Ford Mustang",
    workers: ["Mark T.", "Sophia B."],
    status: "complete",
    diagnosis: "Suspension",
    startDate: "2022-10-10",
    endDate: "2022-11-20",
    itemsAmount: 22000,
  },
  {
    plateNum: "KLM 345B",
    model: "Chevrolet Camaro",
    workers: ["Ryan V.", "Olivia N.", "Emily S."],
    status: "in progress",
    diagnosis: "Electrical System",
    startDate: "2023-04-01",
    endDate: null,
    itemsAmount: 19500,
  },
  {
    plateNum: "HGF 890J",
    model: "BMW X5",
    workers: ["Michael C.", "Sophia B.", "Liam M."],
    status: "pending",
    diagnosis: "Cooling System",
    startDate: "2023-05-20",
    endDate: null,
    itemsAmount: 21000,
  },
  {
    plateNum: "TRQ 432L",
    model: "Audi A4",
    workers: ["Ava D.", "Noah E.", "Ethan W."],
    status: "in progress",
    diagnosis: "Fuel System",
    startDate: "2023-06-10",
    endDate: null,
    itemsAmount: 17500,
  },
  {
    plateNum: "LPO 987N",
    model: "Mercedes-Benz C-Class",
    workers: ["Charlotte H.", "Daniel G.", "John M."],
    status: "complete",
    diagnosis: "Transmission",
    startDate: "2022-08-15",
    endDate: "2022-09-25",
    itemsAmount: 26000,
  },
  {
    plateNum: "WER 654Q",
    model: "Kia Sorento",
    workers: ["Amelia J.", "Mason K."],
    status: "in progress",
    diagnosis: "Steering System",
    startDate: "2023-07-01",
    endDate: null,
    itemsAmount: 17000,
  },
  {
    plateNum: "XCV 123F",
    model: "Subaru Outback",
    workers: ["James L.", "Isabella M.", "Mia N."],
    status: "complete",
    diagnosis: "Exhaust System",
    startDate: "2022-11-10",
    endDate: "2022-12-15",
    itemsAmount: 20000,
  },
  {
    plateNum: "VBN 678G",
    model: "Mazda CX-5",
    workers: ["Elijah O.", "Harper P."],
    status: "in progress",
    diagnosis: "Transmission",
    startDate: "2023-08-05",
    endDate: null,
    itemsAmount: 23000,
  },
  {
    plateNum: "MNB 543C",
    model: "Jeep Wrangler",
    workers: ["Benjamin Q.", "Evelyn R.", "Alexander S."],
    status: "pending",
    diagnosis: "Drivetrain",
    startDate: "2023-09-01",
    endDate: null,
    itemsAmount: 24500,
  },
  {
    plateNum: "ZXV 321H",
    model: "Hyundai Santa Fe",
    workers: ["Avery T.", "Sebastian U."],
    status: "complete",
    diagnosis: "Air Conditioning",
    startDate: "2022-07-20",
    endDate: "2022-08-30",
    itemsAmount: 18000,
  },
  {
    plateNum: "QWE 876P",
    model: "Volvo XC90",
    workers: ["Samuel V.", "Ella W.", "Henry X."],
    status: "in progress",
    diagnosis: "Electrical System",
    startDate: "2023-10-01",
    endDate: null,
    itemsAmount: 22000,
  },
  {
    plateNum: "TYU 456Z",
    model: "Land Rover Discovery",
    workers: ["Victoria Y.", "Logan Z.", "Madison A."],
    status: "pending",
    diagnosis: "Engine Overhaul",
    startDate: "2023-11-10",
    endDate: null,
    itemsAmount: 27500,
  },
  {
    plateNum: "JHG 234V",
    model: "Tesla Model S",
    workers: ["Jack B.", "Grace C.", "Lucas D."],
    status: "complete",
    diagnosis: "Battery Replacement",
    startDate: "2022-06-15",
    endDate: "2022-07-20",
    itemsAmount: 32000,
  },
  {
    plateNum: "KJN 789E",
    model: "Toyota RAV4",
    workers: ["Chloe E.", "Michael F."],
    status: "in progress",
    diagnosis: "Brake System",
    startDate: "2023-12-01",
    endDate: null,
    itemsAmount: 16000,
  },
  {
    plateNum: "PLM 654D",
    model: "Ford F-150",
    workers: ["Sofia G.", "James H.", "Emma I."],
    status: "complete",
    diagnosis: "Suspension",
    startDate: "2022-09-10",
    endDate: "2022-10-20",
    itemsAmount: 25000,
  },
  {
    plateNum: "BNM 987Q",
    model: "Chevrolet Tahoe",
    workers: ["William J.", "Mia K.", "Olivia L."],
    status: "in progress",
    diagnosis: "Cooling System",
    startDate: "2023-01-15",
    endDate: null,
    itemsAmount: 21000,
  },
  {
    plateNum: "ASD 123F",
    model: "Honda CR-V",
    workers: ["Isabella M.", "Alexander N.", "Noah O."],
    status: "pending",
    diagnosis: "Transmission",
    startDate: "2023-02-20",
    endDate: null,
    itemsAmount: 23000,
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
    accessorKey: "plateNum",
    header: "Plate",
    cell: ({ row }) => {
      let color;
      if (row.original.status === "pending") color = "bg-red-600";
      if (row.original.status === "in progress") color = "bg-orange-300";
      if (row.original.status === "complete") color = "bg-green-800";

      return (
        <div className="capitalize flex gap-2 items-center justify-center">
          {row.getValue("plateNum")}
          <span
            className={`rounded-full flex-grow-0 flex-shrink-0 h-2 w-2 capitalize max-h-2 max-w-2 ${color}`}
          >
            {/* {row.original.manufacturer} */}
          </span>
        </div>
      );
    },
  },
  {
    id: "model",
    accessorKey: "model",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Model
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("model")}</div>
    ),
  },
  {
    accessorKey: "workers",
    header: () => <div className="">Workers</div>,
    cell: ({ row }) => {
      const workers = row.getValue("workers");

      // Format the amount as a dollar amount
      //   const formatted = new Intl.NumberFormat("en-US", {
      //     style: "currency",
      //     currency: "USD",
      //   }).format(amount);

      return (
        <div className="font-medium">
          {workers[0]}
          <span>{` + ${workers.length - 1}`}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "diagnosis",
    header: () => <div className="text-right">Diagnosis</div>,
    cell: ({ row }) => {
      const diag = row.getValue("diagnosis");

      return <div className="text-right font-medium">{diag}</div>;
    },
  },
  {
    accessorKey: "itemsAmount",
    header: () => <div className="text-right">Items Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("itemsAmount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "startDate",
    header: "Started",
    cell: ({ row }) => (
      <div className="capitalize flex gap-2">{row.getValue("startDate")}</div>
    ),
  },
  {
    accessorKey: "endDate",
    header: "Finished",
    cell: ({ row }) => (
      <div className="capitalize flex gap-2">{row.getValue("endDate")}</div>
    ),
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

export function ServicesTable() {
  const router = useRouter();

  const [openContextMenu, setOpenContextMenu] = useState("closed");
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: servicesData,
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

  function handleRowClick(slug) {
    router.push(`/services/${slug}`);
  }

  function handleContextMenu() {
    console.log("context");
    setOpenContextMenu("open");

    console.log(openContextMenu);
  }

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

        {/* <FilterBtn /> */}

        <Button variant="link" className="text-sm">
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
                <ContextMenu
                  key={row.id}
                >
                  <ContextMenuTrigger asChild>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onDoubleClick={() => handleRowClick(row.original.plateNum)}
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
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-64">
                    <ContextMenuItem inset>
                      Back
                      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                      Forward
                      <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                      Reload
                      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSub>
                      <ContextMenuSubTrigger inset>
                        More Tools
                      </ContextMenuSubTrigger>
                      <ContextMenuSubContent className="w-48">
                        <ContextMenuItem>
                          Save Page As...
                          <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                        <ContextMenuItem>Name Window...</ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem>Developer Tools</ContextMenuItem>
                      </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem checked>
                      Show Bookmarks Bar
                      <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>
                      Show Full URLs
                    </ContextMenuCheckboxItem>
                    <ContextMenuSeparator />
                    <ContextMenuRadioGroup value="pedro">
                      <ContextMenuLabel inset>People</ContextMenuLabel>
                      <ContextMenuSeparator />
                      <ContextMenuRadioItem value="pedro">
                        Pedro Duarte
                      </ContextMenuRadioItem>
                      <ContextMenuRadioItem value="colm">
                        Colm Tuite
                      </ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuContent>
                </ContextMenu>
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
