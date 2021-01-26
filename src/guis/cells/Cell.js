import React, { useState, useContext, useEffect, useRef } from "react";
import CellContext from "./context/CellContext";
import usePrevious from "./hooks/usePrevious";

const Cell = ({ idRow, idCol }) => {
  const { cellData, updateCellData, executeFormula } = useContext(CellContext);
  const [cellVal, setCellVal] = useState(cellData?.[idRow]?.[idCol] || "");
  const [cellDisplay, setCellDisplay] = useState("");
  const [clicked, setClicked] = useState(false);
  const prevVal = usePrevious(cellVal);
  useEffect(() => {
    if (cellData?.[idRow]?.[idCol]?.[0] === "=") {
      setCellDisplay(parseFormula(cellData[idRow][idCol]));
    } else {
      setCellDisplay(cellVal);
    }
  }, [cellData]);

  const handleChange = (e) => {
    setCellVal(e.target.value);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleSubmitValue = () => {
    if (cellVal !== prevVal) {
      updateCellData(idCol, idRow, cellVal);
    }
    setClicked(false);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      handleSubmitValue();
    }
  };
  const handleBlur = () => {
    handleSubmitValue();
  };

  const parseFormula = (value) => {
    if (value[0] === "=") {
      const res = executeFormula(idCol, idRow, value.slice(1));
      return res;
    }
    return value;
  };

  return (
    <td
      style={{
        padding: 0,
        margin: 0,
        minWidth: "100px",
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
            maxWidth: "100%",
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
