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
    if (modData !== cellData) {
      setCellData({ ...modData });
    }
  };

  parser.on("callCellValue", (cellCoord, done) => {
    const c = cellCoord.column.label;
    const r = cellCoord.row.index + 1;
    if (c === parser.cell.col && r === parser.cell.row) {
      return done("#REF!");
    }
    return done(cellData[r][c]);
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
    console.log("test");
    parser.cell = { col, row };
    let res = parser.parse(value);
    if (res.error) {
      return res.error;
    }
    if (res.result[0] === "=") {
      return executeFormula(col, row, res.result.slice(1));
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
