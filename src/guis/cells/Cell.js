import React, { useEffect, useState, useContext } from "react";
import CellContext from "./context/CellContext";

const Cell = ({ idRow, idCol }) => {
  const { cellData, updateCellData, executeFormula } = useContext(CellContext);
  const [cellVal, setCellVal] = useState("");
  const [cellDisplay, setCellDisplay] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (cellData[idRow]) {
      //setCellVal(cellData[idRow][idCol]);
      setCellDisplay(parseFormula(cellVal));
    }
  }, [cellData]);

  const handleChange = (e) => {
    setCellVal(e.target.value);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      updateCellData(idCol, idRow, e.target.value);
      setClicked(false);
    }
  };
  const handleBlur = () => {
    setClicked(false);
  };

  const parseFormula = (value) => {
    if (value[0] === "=") {
      return executeFormula(idCol, idRow, value.slice(1));
    }
    return value;
  };

  return (
    <td
      style={{
        padding: 0,
        margin: 0,
        width: "100px",
        height: "30px",
        textAlign: "center",
      }}
      onClick={handleClick}
    >
      {clicked ? (
        <input
          type='text'
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            appearance: "none",
            border: "none",
            textAlign: "center",
          }}
          autoFocus={clicked}
          value={cellVal}
          onChange={handleChange}
          onKeyDown={handleEnterKey}
          onBlur={handleBlur}
        />
      ) : (
        <p
          style={{
            width: "100%",
            margin: 0,
          }}
        >
          {cellDisplay}
        </p>
      )}
    </td>
  );
};

export default Cell;
