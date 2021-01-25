import React from "react";
import Table from "./Table";
import CellProvider from "./context/CellState";
const index = () => {
  return (
    <CellProvider>
      <Table />
    </CellProvider>
  );
};

export default index;
