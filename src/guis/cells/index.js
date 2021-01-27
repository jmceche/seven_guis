import React from "react";
import Table from "./Table";
import CellProvider from "./context/CellState";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  nav: {
    marginBottom: "5rem",
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
      <AppBar position='static' mb={5} className={classes.nav}>
        <Toolbar>
          <Typography id='vertical-slider' variant='h6'>
            Cells
          </Typography>
        </Toolbar>
      </AppBar>
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
