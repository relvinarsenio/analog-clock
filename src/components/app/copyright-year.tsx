
"use client";

import { useState, useEffect } from 'react';

export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) {
    // Return null on server and initial client render before useEffect runs
    return null;
  }

  return <>{year}</>;
}
