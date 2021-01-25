import React from "react";
import Cell from "./Cell";

const Row = ({ numberCols, idRow }) => {
  return (
    <tr>
      <th scope='row'>{idRow}</th>
      {numberCols.map((col) => (
        <Cell key={`${col}${idRow}`} idCol={col} idRow={idRow} />
      ))}
    </tr>
  );
};

export default Row;
