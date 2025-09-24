"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A pie chart with a label"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },

  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },

  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },

  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },

  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },

  other: {
    label: "Other",
    color: "var(--chart-5)",
  }
}

export function ChartPieLabel() {
  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="text-center mb-2">
        <h3 className="text-lg font-semibold">Receitas por Serviço</h3>
      </div>
      <div className="flex-1 flex items-center justify-center min-h-0">
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground aspect-square w-80 h-80">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}