import React, { useState } from "react";
import Row from "./Row";

//const numberRows = new Array(99).fill("");
//const numberCols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numberRows = new Array(10).fill("");
const numberCols = "ABCDEF".split("");
const Table = () => {
  //Active cell are cells with values in it
  const [activeCells, setActiveCells] = useState([]); //state format {col:"A", row:1, value: 1, formula: ""=B1"}

  const changeCells = (newCell) => {
    const newCells = [...activeCells];
    const newCellIndex = newCells.findIndex(
      (cell) => cell.col === newCell.col && cell.row === newCell.row
    );
    if (newCellIndex !== -1) {
      newCells[newCellIndex] = newCell;
      setActiveCells(newCells);
    } else {
      setActiveCells([...activeCells, { ...newCell }]);
    }
  };

  return (
    <table cellPadding='0' cellSpacing='0' border='1'>
      <thead>
        <tr>
          <th>/</th>
          {numberCols.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {numberRows.map((row, index) => (
          <Row
            key={index}
            nRow={index + 1}
            idRow={index + 1}
            numberCols={numberCols}
            activeCells={activeCells}
            changeCells={changeCells}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
