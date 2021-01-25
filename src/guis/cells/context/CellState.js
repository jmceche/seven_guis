import React, { useState } from "react";
import CellContext from "./CellContext";
import { Parser as FormulaParser } from "hot-formula-parser";

const CellProvider = (props) => {
  const [cellData, setCellData] = useState({});
  const parser = new FormulaParser();

  const updateCellData = (col, row, value) => {
    let modData = { ...cellData };
    if (!modData[row]) modData[row] = {};
    if (value === "") {
      delete modData[row][col];
      if (Object.keys(modData[row]).length === 0) delete modData[row];
    } else {
      modData[row][col] = value;
    }
    setCellData({ ...modData });
  };

  parser.on("callCellValue", (cellCoord, done) => {
    if (
      cellCoord.column.label === parser.cell.col &&
      cellCoord.row.index + 1 === parser.cell.row
    ) {
      done("#REF!");
    } else {
      done(cellData[cellCoord.row.index + 1][cellCoord.column.label]);
    }
  });

  parser.on("callRangeValue", (startCellCoord, endCellCoord, done) => {
    let fragment = [];
    for (
      let row = startCellCoord.row.index + 1;
      row <= endCellCoord.row.index + 1;
      row++
    ) {
      let rowData = cellData[row];
      let colFragment = [];

      for (
        let col = startCellCoord.column.index;
        col <= endCellCoord.column.index;
        col++
      ) {
        colFragment.push(rowData[Object.keys(rowData).sort()[col]]);
      }
      fragment.push(colFragment);
    }

    if (fragment) {
      done(fragment);
    }
  });

  const executeFormula = (col, row, value) => {
    parser.cell = { col, row };
    //console.log(parser.cell);
    let res = parser.parse(value);
    if (res.error) {
      return res.error;
    }
    return res.result;
  };
  return (
    <CellContext.Provider value={{ cellData, updateCellData, executeFormula }}>
      {props.children}
    </CellContext.Provider>
  );
};

export default CellProvider;
