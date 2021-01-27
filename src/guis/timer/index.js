import React, { useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import LinearProgress from "@material-ui/core/LinearProgress";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 600,
  },
  box: {
    border: "2px solid gray",
    padding: "2rem",
    borderRadius: "15px",
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
      <Container className={classes.root}>
        <Box className={classes.box}>
          <h3>Elapsed Time:</h3>
          <LinearProgress
            variant='determinate'
            value={(seconds / value) * 100}
          />
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
        </Box>
      </Container>
    </>
  );
};

export default Timer;
