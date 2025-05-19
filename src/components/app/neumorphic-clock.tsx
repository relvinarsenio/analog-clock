
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

  const clockSize = "w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72";
  const handBaseClasses = "absolute bottom-1/2 left-1/2 origin-bottom rounded-t-full transform-gpu";

  return (
    <div className={`relative ${clockSize} rounded-full neumorphic-shadow-light flex items-center justify-center bg-background p-3 border-2 border-card/60`}>
      {/* Hour markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`hour-marker-${i}`}
          className="absolute w-full h-full"
          style={{ transform: `rotate(${i * 30}deg)` }}
        >
          <div className={`absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2.5 rounded-full ${i % 3 === 0 ? 'bg-primary' : 'bg-muted-foreground'}`} />
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
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-px h-1.5 rounded-full bg-muted-foreground/50" />
          </div>
        );
      })}

      {/* Numbers */}
      {[...Array(12)].map((_, index) => {
        const hour = index + 1;
        const angleDeg = 90 - (hour * 30); 
        const angleRad = angleDeg * Math.PI / 180;
        const radiusPercentage = 38; 
        
        const xPos = radiusPercentage * Math.cos(angleRad);
        const yPos = radiusPercentage * Math.sin(angleRad);

        return (
          <div
            key={`hour-num-${hour}`}
            className="absolute text-[0.6rem] sm:text-xs md:text-sm font-medium text-foreground select-none"
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
        className={`${handBaseClasses} w-1.5 h-[25%] bg-foreground shadow-md`}
        style={{ transform: 'rotate(0deg)' }} 
      />
      {/* Minute Hand */}
      <div
        ref={minutesRef}
        className={`${handBaseClasses} w-1 h-[35%] bg-foreground shadow-md`}
        style={{ transform: 'rotate(0deg)' }}
      />
      {/* Second Hand */}
      <div
        ref={secondsRef}
        className={`${handBaseClasses} w-0.5 h-[40%] bg-primary shadow-md`}
        style={{ transform: 'rotate(0deg)' }}
      />
      {/* Center Dot */}
      <div className="absolute w-3 h-3 bg-primary rounded-full neumorphic-inset-shadow-light shadow-inner" />
    </div>
  );
};

export default NeumorphicClock;

