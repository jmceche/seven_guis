import React, { useEffect, useState } from "react";
import { parseFormula } from "./parser";

const Cell = ({ idRow, idCol, activeCells, changeCells }) => {
  const [cell, setCell] = useState({
    col: idCol,
    row: idRow,
    value: "",
    formula: "",
  });
  const [clicked, setClicked] = useState(false);

  const handleChange = (e) => {
    setCell({ ...cell, formula: e.target.value });
  };

  const handleFocus = () => {
    setClicked(true);
  };

  const handleBlur = () => {
    if (cell.formula !== "") {
      setCell({ ...cell, value: parseFormula(cell.formula, activeCells) });
      changeCells({ ...cell, value: parseFormula(cell.formula, activeCells) });
    }
    setClicked(false);
  };

  return (
    <td
      style={{
        padding: 0,
        margin: 0,
      }}
    >
      <input
        type='text'
        style={{
          margin: 0,
          padding: 0,
          width: "100px",
          height: "30px",
          appearance: "none",
          border: "none",
          textAlign: "center",
        }}
        value={clicked ? cell.formula : cell.value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </td>
  );
};

export default Cell;
