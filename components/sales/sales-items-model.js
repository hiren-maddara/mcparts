"use client";

import { Calendar, Hash, Search, User, Wrench } from "lucide-react";
import { Badge } from "../ui/badge";
import { Fragment, useContext, useEffect, useRef, useState } from "react";
import { SpareContext } from "@/store/spare-context";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

export default function SalesItemsModel({ handleCloseSalesModel, handleSelectItem, open }) {
  const { spareParts } = useContext(SpareContext);
  const inputRef = useRef(null)

  useEffect(()=>{
    if(open && inputRef.current){
      inputRef.current.focus()
    }
  }, [open])


  return (
    <Fragment>
      <div
        onClick={handleCloseSalesModel}
        class="flex h-full w-full flex-col items-center justify-center overflow-hidden text-popover-foreground absolute z-10 shadow-2xl top-0 left-0 bg-black/80"
      ></div>

        <Command loop className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col overflow-hidden z-20 bg-popover text-popover-foreground rounded-lg border oohh h-2/3 w-2/3">
          <CommandInput ref={inputRef}
            placeholder="Type to search..."
            className="flex items-center border-none shadow-none px-3"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {/* <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup> */}
            {/* <CommandSeparator /> */}
            <CommandGroup heading="Spare">
              {spareParts.map((item) => (
                <CommandItem
                  key={item.spareid}
                  className="cursor-pointer"
                  onSelect={handleSelectItem}
                >
                  <Wrench className="mr-2 h-4 w-4" />
                  <span>{item.partname}</span>
                  <div className="ml-auto flex justify-between gap-3 text-xs text-muted-foreground font-medium">
                    <span className="">@{item.price}</span>
                    <span >#{item.partnum}</span>
                    <span></span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
    </Fragment>
  );
}
