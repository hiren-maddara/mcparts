"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertContext } from "@/store/alert-context";
import { newSale } from "@/store/sales-context";
import { useContext, useEffect, useState } from "react";

export function SalesForm({handleOpenSalesModal, selectedItem, setSelectedItem}) {
  const [label, setLabel] = useState(null)
  const [qtt, setQtt] = useState('')
  const [price, setPrice] = useState(0)

  const addAlert = useContext(AlertContext)

  useEffect(()=>{
    if(!selectedItem) {
      setLabel(null)
    setQtt(0)
    setPrice(0)
    }else{
      setLabel(selectedItem.partname)
    setQtt(1)
    setPrice(selectedItem.price)
    }
    
  }, [selectedItem])
  
  const priceForQtt = Number(price) * Number(qtt)

  function handleInputChange(e) {
    const value = e.target.value;
    // Allow clearing the input
    if (value === '') {
      setQtt('');
    } else if (!isNaN(value)) {
      // Prevent setting the value below 1
      const numValue = Number(value);
      if (numValue >= 1) {
        setQtt(numValue);
      } else {
        setQtt(1);
      }
    }
  };

  function sellItem(){
    try {
      newSale({
        spareid: selectedItem.spareid,
        amount: priceForQtt,
        quantity: qtt,
        sellerid: 1,
        saledate: new Date(),
        status: "complete"
      })
  
      setQtt(0)
      setPrice(0)
      setSelectedItem(null)
      addAlert({
        description: "Operation successfull",
        variant: "success"
      })
    } catch (error) {
      alert(error)
    }
    
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sell an item</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4" tabIndex={-12}>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Item</Label>
              <input type="text" id="name" className="hidden" />
              <button onClick={handleOpenSalesModal} className="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-10 w-full justify-start rounded-sm bg-muted/50 text-sm font-normal text-muted-foreground shadow-none ">
                <span className="inline-flex">{label || "Click to select"}</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.5rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">Ctrl </span>J
                </kbd>
              </button>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="quantity" className="capitalize">
                Quantity
              </Label>
              <Input type="number" id="quantity" placeholder="0" value={qtt} onChange={handleInputChange} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price" className="capitalize">
                Price
              </Label>
              <Input type="text" id="price" placeholder="UGX" className="ring-0 outline-none" value={priceForQtt} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Add to cart</Button>
        <Button onClick={sellItem}>Sell one</Button>
      </CardFooter>
    </Card>
  );
}
