"use client";

import { useEffect, useState } from "react";

interface LocalClockProps {
  timeZone: string;
  location: string;
}

export function LocalClock({ timeZone, location }: LocalClockProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="text-xs uppercase tracking-wider text-foreground/55">
      {time ? `${time} · ${location}` : location}
    </span>
  );
}
