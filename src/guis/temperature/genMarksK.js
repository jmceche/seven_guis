export const genMarksK = (label) =>
  [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390].map(
    (val) => ({
      value: val,
      label: label === "K" ? `${val}${label}` : `${val}°${label}`,
    })
  );
