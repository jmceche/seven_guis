import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 600,
  },
  nav: {
    marginBottom: "5rem",
  },
});

const Timer = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let t = setTimeout(() => {
      if (seconds >= value) {
        return cleanUp;
      } else {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);

    const cleanUp = () => clearTimeout(t);
    return cleanUp;
  });

  const handleReset = () => {
    setSeconds(0);
  };

  return (
    <>
      <AppBar position='static' mb={5} className={classes.nav}>
        <Toolbar>
          <Typography id='vertical-slider' variant='h6'>
            Timer
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.root}>
        <h3>Elapsed Time:</h3>
        <LinearProgress variant='determinate' value={(seconds / value) * 100} />
        <h3>{seconds} seconds</h3>
        <h3>Duration: </h3>
        <Slider
          valueLabelDisplay='auto'
          value={value}
          min={0}
          max={300}
          onChange={handleChange}
          aria-labelledby='continuous-slider'
        />
        <Button variant='contained' color='primary' onClick={handleReset}>
          Reset
        </Button>
      </Container>
    </>
  );
};

export default Timer;
