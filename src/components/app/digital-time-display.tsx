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

/**
 * Displays the current time and date formatted according to the user's locale, updating precisely at the start of each second.
 *
 * @remark
 * The update mechanism synchronizes with the real-world clock to ensure that time changes occur exactly at the beginning of each new second, minimizing drift.
 */
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
    <Card className="neumorphic-shadow-light p-3 sm:p-4 text-center max-w-xs sm:max-w-sm w-full">
      <CardContent className="p-0">
        <div className="text-2xl sm:text-3xl md:text-4xl font-mono font-semibold text-primary mb-1">
          {timeString}
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">
          {dateString}
        </div>
      </CardContent>
    </Card>
  );
}
