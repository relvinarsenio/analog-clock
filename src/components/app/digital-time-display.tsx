
"use client";

import { useState, useEffect, useRef } from 'react';
import { useLocalization } from '@/contexts/localization-context';
import { Card, CardContent } from '@/components/ui/card';

const timeFormatOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
};

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export function DigitalTimeDisplay() {
  const [timeString, setTimeString] = useState<string>("--:--:--");
  const [dateString, setDateString] = useState<string>("Loading date...");
  const { locale } = useLocalization();
  const timerIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateDisplay = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString(locale, timeFormatOptions));
      setDateString(now.toLocaleDateString(locale, dateFormatOptions));
    };

    
    updateDisplay();

    
    const synchronizer = () => {
      const now = new Date();
      const msUntilNextSecond = 1000 - now.getMilliseconds();

      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }

      timerIdRef.current = setTimeout(() => {
        updateDisplay();
        
        if (timerIdRef.current) {
           clearTimeout(timerIdRef.current);
        }
        
        timerIdRef.current = setInterval(updateDisplay, 1000);
      }, msUntilNextSecond);
    };

    synchronizer();

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [locale]);

  return (
    <Card className="neumorphic-shadow-light glass-effect p-4 sm:p-6 text-center max-w-md w-full border border-primary/20 rounded-2xl">
      <CardContent className="p-0">
        <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2 tracking-wide">
          {timeString}
        </div>
        <div className="text-sm sm:text-base text-muted-foreground/80 font-light tracking-wider">
          {dateString}
        </div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full"></div>
      </CardContent>
    </Card>
  );
}
