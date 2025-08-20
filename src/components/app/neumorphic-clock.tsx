
"use client";

import { useState, useEffect, useRef } from 'react';

const NeumorphicClock = () => {
  const [, setTime] = useState(new Date());
  const secondsRef = useRef<HTMLDivElement>(null);
  const minutesRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now);

      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = now.getHours() + minutes / 60;

      const secondsDeg = (seconds / 60) * 360;
      const minutesDeg = (minutes / 60) * 360;
      const hoursDeg = (hours / 12) * 360;
      
      if (secondsRef.current) {
        secondsRef.current.style.transform = `rotate(${secondsDeg}deg)`;
      }
      if (minutesRef.current) {
        minutesRef.current.style.transform = `rotate(${minutesDeg}deg)`;
      }
      if (hoursRef.current) {
        hoursRef.current.style.transform = `rotate(${hoursDeg}deg)`;
      }
      
      requestAnimationFrame(updateClock);
    };
    
    const animationFrameId = requestAnimationFrame(updateClock);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const clockSize = "w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80";
  const handBaseClasses = "absolute bottom-1/2 left-1/2 origin-bottom rounded-t-full transform-gpu transition-transform duration-75 ease-out";

  return (
    <div className={`relative ${clockSize} rounded-full neumorphic-shadow-light flex items-center justify-center bg-gradient-to-br from-card to-background p-4 border border-primary/20`}>
      {/* Outer ring decoration */}
      <div className="absolute inset-2 rounded-full border-2 border-primary/10"></div>
      
      {/* Hour markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`hour-marker-${i}`}
          className="absolute w-full h-full"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div className={`absolute top-1 left-1/2 -translate-x-1/2 rounded-full ${
            i % 3 === 0 
              ? 'w-1 h-4 bg-gradient-to-b from-primary to-accent' 
              : 'w-0.5 h-3 bg-muted-foreground/70'
          }`} />
        </div>
      ))}

      {/* Minute markers */}
       {[...Array(60)].map((_, i) => {
        if (i % 5 === 0) return null; // Skip hour marker positions
        return (
          <div
            key={`minute-marker-${i}`}
            className="absolute w-full h-full"
            style={{ transform: `rotate(${i * 6}deg)` }}
          >
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-px h-2 rounded-full bg-muted-foreground/30" />
          </div>
        );
      })}

      {/* Numbers */}
      {[...Array(12)].map((_, index) => {
        const hour = index + 1;
        const angleDeg = 90 - (hour * 30); 
        const angleRad = angleDeg * Math.PI / 180;
        const radiusPercentage = 35; 
        
        const xPos = radiusPercentage * Math.cos(angleRad);
        const yPos = radiusPercentage * Math.sin(angleRad);

        return (
          <div
            key={`hour-num-${hour}`}
            className="absolute text-sm sm:text-base md:text-lg font-bold text-foreground select-none bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center"
            style={{
              left: `calc(50% + ${xPos}%)`,
              top: `calc(50% - ${yPos}%)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {hour}
          </div>
        );
      })}

      {/* Hour Hand */}
      <div
        ref={hoursRef}
        className={`${handBaseClasses} w-2 h-[28%] bg-gradient-to-t from-foreground to-foreground/80 shadow-lg`}
        style={{ transform: 'rotate(0deg)' }} 
      />
      {/* Minute Hand */}
      <div
        ref={minutesRef}
        className={`${handBaseClasses} w-1.5 h-[38%] bg-gradient-to-t from-foreground to-foreground/90 shadow-lg`}
        style={{ transform: 'rotate(0deg)' }}
      />
      {/* Second Hand */}
      <div
        ref={secondsRef}
        className={`${handBaseClasses} w-0.5 h-[42%] bg-gradient-to-t from-primary via-primary to-accent shadow-lg`}
        style={{ transform: 'rotate(0deg)' }}
      />
      {/* Center Dot */}
      <div className="absolute w-4 h-4 bg-gradient-to-br from-primary to-accent rounded-full neumorphic-inset-shadow-light shadow-inner border border-primary/30" />
    </div>
  );
};

export default NeumorphicClock;

