export const hoverDrawnCircle = (circle, xPos, yPos) =>
  (xPos - circle.x) ** 2 + (yPos - circle.y) ** 2 <= circle.r ** 2;

export const drawCircle = (ctx, x, y, r, hovered) => {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.strokeStyle = "#000000";
  ctx.stroke();
  ctx.fillStyle = hovered ? "#aaaaaa" : "#ffffff";
  ctx.fill();
};
