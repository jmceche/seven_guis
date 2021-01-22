import React from "react";
import Cell from "./Cell";

const Row = ({ nRow, numberCols, idRow, activeCells, changeCells }) => {
  return (
    <tr>
      <th scope='row'>{nRow}</th>
      {numberCols.map((col, index) => (
        <Cell
          key={index}
          idCol={col}
          idRow={idRow}
          activeCells={activeCells}
          changeCells={changeCells}
        />
      ))}
    </tr>
  );
};

export default Row;
