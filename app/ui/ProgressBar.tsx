"use client";

import { useEffect, useState } from "react";
import { Progress } from "./components/Progress";

const ProgressBar = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 20
      );
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  if (progress === 100) {
    return null;
  }

  return <Progress value={progress} className="w-full bg-slate-100" />;
};

export default ProgressBar;
