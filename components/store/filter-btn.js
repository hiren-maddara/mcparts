// import { useState } from "react";
// import {
//   MultiSelector,
//   MultiSelectorContent,
//   MultiSelectorInput,
//   MultiSelectorItem,
//   MultiSelectorList,
//   MultiSelectorTrigger,
// } from "./multiselect";
// import { Button } from "../ui/button";
// import { Plus } from "lucide-react";

// export default function FilterBtn() {
//   const [value, setValue] = useState([]);
//   return (
//     <MultiSelector
//       values={value}
//       onValuesChange={setValue}
//       loop
//       className="max-w-xs"
//     >
//       <MultiSelectorTrigger>
//         <MultiSelectorInput placeholder="Select your framework" />
//         <Button variant="outline" className="ml-auto border-dashed">
//           <Plus className="ml-2 h-4 w-4" />
//           System
//         </Button>
//       </MultiSelectorTrigger>
//       <MultiSelectorContent>
//         <MultiSelectorList>
//           <MultiSelectorItem value={"React"}>React</MultiSelectorItem>
//           <MultiSelectorItem value={"Vue"}>Vue</MultiSelectorItem>
//           <MultiSelectorItem value={"Svelte"}>Svelte</MultiSelectorItem>
//         </MultiSelectorList>
//       </MultiSelectorContent>
//     </MultiSelector>
//   );
// }

// start 2nd try

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useState } from "react";

export default function FilterBtn() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  function handleSelect(currentValue) {
    const sysName = currentValue.toLowerCase().split("#")[0];
    setValue(prevVal=> {
        if(prevVal.length === 0) return [sysName]
        return prevVal.includes(sysName) ? prevVal.filter(val => val !== sysName): [...prevVal, sysName]
    }
    )

  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="border-dashed flex gap-2">
          <Plus className="h-4 w-4" />
          System
          <Separator orientation="vertical" />
          <Badge variant="secondary" className="rounded-sm">
            Engine
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                onSelect={(currentValue) => handleSelect(currentValue)}
              >
                <Checkbox
                  className="cursor-default mr-2 h-4 w-4"
                  checked={value.includes("engine")}
                />
                Engine
                <span className="ml-auto font-mono">#23</span>
              </CommandItem>
              <CommandItem
                onSelect={(currentValue) => handleSelect(currentValue)}
              >
                <Checkbox className="cursor-default mr-2 h-4 w-4" checked={value.includes("transmission")} />
                Transmission
                <span className="ml-auto">#23</span>
              </CommandItem>
              <CommandItem onSelect={currentValue => handleSelect(currentValue)}>
                <Checkbox className="cursor-default mr-2 h-4 w-4" checked={value.includes("lights")} />
                Lights
                <span className="ml-auto">#23</span>
              </CommandItem>
              <CommandItem onSelect={currentValue => handleSelect(currentValue)}>
                <Checkbox className="cursor-default mr-2 h-4 w-4" checked={value.includes("cooling")} />
                Cooling
                <span className="ml-auto">#23</span>
              </CommandItem>
              <CommandItem onSelect={currentValue => handleSelect(currentValue)}>
                <Checkbox className="cursor-default mr-2 h-4 w-4" checked={value.includes("electric")} />
                Electric
                <span className="ml-auto">#23</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
