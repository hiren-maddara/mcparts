import { Activity, ArrowRight, CarFront } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function ServicesSummary() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0 pt-0">Ongoing work</CardHeader>

      <CardContent className="grid gap-4 md:grid-cols-2 px-0 border-none">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Nissan pathfinder
            </CardTitle>
            <CarFront className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="felx flex-col gap-1 justify-center pb-0">
            <div className="text-2xl font-bold">UAX 344H</div>
            <p className="text-xs text-muted-foreground">
              <span>Paul M.</span>, <span>Hiren M.</span>, <span>+3</span>
            </p>

            <div className="w-full text-muted-foreground text-sm flex gap-4 items-center mt-2">
              <Badge variant="outline" className="rounded-sm">
                Engine
              </Badge>
              <Badge variant="outline" className="rounded-sm">
                Transmission
              </Badge>
              <span className="text-xs font-mono -ml-2">2weeks</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0 text-sm">
              Details
              <ArrowRight className="h-w w-4 inline" />
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Toyota Camry</CardTitle>
            <CarFront className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="felx flex-col gap-1 justify-center pb-0">
            <div className="text-2xl font-bold">CE 225Q</div>
            <p className="text-xs text-muted-foreground">
              <span>Gilbert N.</span>, <span>+3</span>
            </p>

            <div className="w-full text-muted-foreground text-sm flex gap-4 items-center mt-2">
              <Badge variant="outline" className="rounded-sm">
                Suspension
              </Badge>
              <span className="text-xs font-mono -ml-2">4days</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="link" className="p-0 text-sm">
              Details
              <ArrowRight className="h-w w-4 inline" />
            </Button>
          </CardFooter>
        </Card>

        
      </CardContent>
    </Card>
  );
}
