import { useEffect, useRef } from "react";

const NoiseOverlay = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        const gray = Math.random() * 255;
        buffer[i] = (255 << 24) | (gray << 16) | (gray << 8) | gray;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      generateNoise();
      animationFrameId = requestAnimationFrame(loop);
    };

    resize();
    loop();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none opacity-60 mix-blend-overlay"
    />
  );
};

export default NoiseOverlay;
