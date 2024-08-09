"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", vehicles: 186, revenue: 80 },
  { month: "February", vehicles: 305, revenue: 200 },
  { month: "March", vehicles: 237, revenue: 120 },
  { month: "April", vehicles: 73, revenue: 190 },
  { month: "May", vehicles: 209, revenue: 130 },
  { month: "June", vehicles: 214, revenue: 140 },
  
]

const chartConfig = {
  desktop: {
    label: "Vehicles",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Revenue",
    color: "hsl(var(--chart-2))",
  },
}

export function SalesOverviewChart() {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Working - Summary</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="vehicles" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="revenue" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total customers for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
