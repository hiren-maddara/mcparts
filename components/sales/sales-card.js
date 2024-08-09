import { Battery, CreditCard, Drill, Hash } from "lucide-react";
import { Fragment } from "react";
import { Separator } from "../ui/separator";

function ItemCard() {
  return (
    <Fragment>
    <div className="rounded bg-card text-card-foreground w-full flex p-2">
      <div className="w-2/5 max-w-2/5 overflow-hidden">
        <img className="max-w-full" src="https://media.istockphoto.com/id/460213405/it/foto/set-di-sospensione.jpg?s=1024x1024&w=is&k=20&c=EGJnQoUwSZlsWWXT2mPy5naCvgyNNkdlEn3fq8ZRL-o=" />
      </div>
      <div className="w-3/5 pl-3 flex flex-col gap-2 justify-center">
        <h3 className="tracking-tight text-sm font-medium flex items-center">
          <span>Shock absorber</span>
          <Battery className="h-4 w-4 font-bold ml-4" />
        </h3>
        <h3 className="text-xs text-muted-foreground flex gap-1">
          <Hash className="h-4 w-4 text-muted-foreground" />
          535366HS-345f
        </h3>
        <h3 className="text-xs text-muted-foreground flex gap-1">
          <Drill className="h-4 w-4 text-muted-foreground" />
          <span>Nissan ltd</span>
        </h3>

        <div className="text-sm font-medium flex gap-1 items-center">
          <CreditCard className="h-4 w-4 text-muted-foreground" />
          <div className="text-xl font-bold">
            <span className="text-sm text-muted-foreground">UGX</span>32000
            <span>/</span>
          </div>
          <span className="text-sm text-muted-foreground">2 items</span>
        </div>
      </div>
    </div>

    <Separator />
    </Fragment>
  );
}

export default ItemCard;
