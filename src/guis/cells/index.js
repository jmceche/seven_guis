import React from "react";
import Table from "./Table";
import CellProvider from "./context/CellState";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },

  paper: {
    display: "inline-block",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Cells = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.center}>
        <Paper className={classes.paper}>
          <CellProvider>
            <Table />
          </CellProvider>
        </Paper>
      </Container>
    </>
  );
};

export default Cells;
