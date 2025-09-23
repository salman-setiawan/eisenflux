import { useState, useEffect } from "react";
import { useLanguage } from "../data/languageContext.jsx";

const MouseTracker = () => {
  const { language } = useLanguage(); // ambil bahasa dari context
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isClickable, setIsClickable] = useState(false);
  const [isInside, setIsInside] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const inside =
        clientX >= 0 &&
        clientY >= 0 &&
        clientX <= window.innerWidth &&
        clientY <= window.innerHeight;

      setCoords({ x: clientX, y: clientY });
      setIsInside(inside);

      if (!inside) {
        setIsClickable(false);
        return;
      }

      const el = document.elementFromPoint(clientX, clientY);
      if (!el) {
        setIsClickable(false);
        return;
      }

      const clickable = el.closest(
        "a, button, [role='button'], [data-clickable='true']"
      );
      const hasPointer = window.getComputedStyle(el).cursor === "pointer";

      setIsClickable(!!(clickable || hasPointer));
    };

    const handleDocMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        setIsInside(false);
        setIsClickable(false);
      }
    };

    const handleDocMouseOver = (e) => {
      if (!e.relatedTarget && !e.fromElement) {
        setIsInside(true);
      }
    };

    const handleBlur = () => {
      setIsInside(false);
      setIsClickable(false);
    };
    const handleFocus = () => setIsInside(true);
    const handleVisibility = () => setIsInside(!document.hidden);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleDocMouseOut);
    document.addEventListener("mouseover", handleDocMouseOver);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibility);

    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleDocMouseOut);
      document.removeEventListener("mouseover", handleDocMouseOver);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.body.style.cursor = prevCursor || "auto";
    };
  }, []);

  if (!isInside) return null;

  const tooltipText = isClickable
    ? language === "id"
      ? "tekan-tombol"
      : "click-button"
    : `x.${coords.x} - y.${coords.y}`;

  return (
    <>
      {/* custom cursor kotak */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          top: coords.y,
          left: coords.x,
          width: "14px",
          height: "14px",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#ffa500",
          animation: isClickable ? "blink 0.2s infinite" : "none",
        }}
      />

      {/* tooltip */}
      <div
        className="fixed bg-black text-white px-1 py-0.5 text-[11px] pointer-events-none z-[9999]"
        style={{
          top: coords.y + 12,
          left: coords.x - 8,
        }}
      >
        {tooltipText}
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { background-color: #ffa500; }
          50% { background-color: #ffffff; }
        }
      `}</style>
    </>
  );
};

export default MouseTracker;
