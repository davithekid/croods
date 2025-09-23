"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";

export function ProgressDemo({ value }) {
  const [progress, setProgress] = React.useState(value ?? 0);

  React.useEffect(() => {
    if (value) {
      const timer = setTimeout(() => setProgress(value), 200);
      return () => clearTimeout(timer);
    }
  }, [value]);

  return <Progress value={progress} className="w-full h-2 rounded-full" />;
}
