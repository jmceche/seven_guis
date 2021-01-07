import React, { useEffect, useRef } from "react";

const CircleDrawer = () => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
  }, [draw]);

  return (
    <>
      <div>
        <button>Undo</button>
        <button>Redo</button>
      </div>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default CircleDrawer;
