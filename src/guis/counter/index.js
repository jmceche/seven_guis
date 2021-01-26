import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  containerHeigth: {
    height: "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: "4rem",
  },
  nav: {
    marginBottom: "5rem",
  },
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <>
      <AppBar position='static' mb={5} className={classes.nav}>
        <Toolbar>
          <Typography id='vertical-slider' variant='h6'>
            Number Counter
          </Typography>
        </Toolbar>
      </AppBar>
      <Container
        maxWidth='md'
        justify='center'
        className={classes.containerHeigth}
      >
        <Grid container justify='center' spacing={2}>
          <Grid item xs={2}>
            <Paper className={classes.root}>
              <Typography variant='h5' align='center'>
                {count}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Button color='primary' onClick={handleClick} variant='contained'>
              Count
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Counter;
