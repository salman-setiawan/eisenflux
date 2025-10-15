import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const gmt8 = new Date(utc + 8 * 3600000); // konversi ke GMT+8

      const hours = String(gmt8.getHours()).padStart(2, "0");
      const minutes = String(gmt8.getMinutes()).padStart(2, "0");
      const seconds = String(gmt8.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock(); // update saat pertama kali render
    const interval = setInterval(updateClock, 1000); // update tiap detik

    return () => clearInterval(interval); // bersihkan interval saat unmount
  }, []);

  return (
    <div className="flex items-center justify-between sm:items-end gap-x-1.5 font-bold h-full">
      <div>
        {time || "--:--:--"}
      </div>
      <div className="text-neutral-400 text-[11px]">GMT+8</div>
    </div>
  );
};

export default Clock;
