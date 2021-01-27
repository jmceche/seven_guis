import React from "react";
import Row from "./Row";

//const numberRows = new Array(99).fill("");
//const numberCols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numberRows = new Array(7).fill("");
const numberCols = "ABCDEFG".split("");
const Table = () => {
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
          <Row key={index + 1} idRow={index + 1} numberCols={numberCols} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
