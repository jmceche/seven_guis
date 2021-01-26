import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Card,
  CardContent,
  Slider,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";

import { genMarksK } from "./genMarksK";
import { genMarksC } from "./genMarksC";
import { genMarksF } from "./genMarksF";

const INITIAL_CELCIUS = 0;
const convertCToF = (val) => (val * 9) / 5 + 32;
const convertFToC = (val) => ((val - 32) * 5) / 9;
const convertCToK = (val) => val + 273.15;
const convertKToC = (val) => val - 273.15;

const useStyles = makeStyles({
  root: {
    height: "60vh",
  },
  temps: {
    marginTop: "2rem",
  },
});

function genValueToText(label) {
  return function valueToText(value) {
    if (label === "K") {
      return `${value}${label}`;
    }
    return `${value}°${label}`;
  };
}

export default function App() {
  const [c, setC] = useState(INITIAL_CELCIUS);
  const [f, setF] = useState(convertCToF(INITIAL_CELCIUS));
  const [k, setK] = useState(convertCToK(INITIAL_CELCIUS));
  const classes = useStyles();

  const handleC = (val) => {
    setC(val);
    setF(convertCToF(val));
    setK(convertCToK(val));
  };

  const handleF = (val) => {
    setF(val);
    setC(convertFToC(val));
    setK(convertCToK(convertFToC(val)));
  };

  const handleK = (val) => {
    setK(val);
    setC(convertKToC(val));

    setF(convertCToF(convertKToC(val)));
  };

  return (
    <div>
      <AppBar position='static' mb={5}>
        <Toolbar>
          <Typography id='vertical-slider' variant='h6'>
            Temperature Calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.temps}>
        <Card variant='outlined'>
          <CardContent className={classes.temps}>
            <Box
              display='flex'
              justifyContent='center'
              className={classes.root}
            >
              <Box marginRight={10}>
                <Slider
                  value={k}
                  orientation='vertical'
                  getAriaValueText={genValueToText("K")}
                  aria-labelledby='vertical-slider'
                  step={3}
                  min={0}
                  max={400}
                  valueLabelDisplay='auto'
                  marks={genMarksK("K")}
                  onChange={(e, val) => handleK(val)}
                />
              </Box>
              <Box marginRight={10}>
                <Slider
                  value={c}
                  orientation='vertical'
                  getAriaValueText={genValueToText("C")}
                  aria-labelledby='vertical-slider'
                  step={3}
                  min={-273.15}
                  max={100}
                  valueLabelDisplay='auto'
                  marks={genMarksC("C")}
                  onChange={(e, val) => handleC(val)}
                />
              </Box>
              <Slider
                value={f}
                orientation='vertical'
                getAriaValueText={genValueToText("F")}
                aria-labelledby='vertical-slider'
                step={3}
                min={-459.67}
                max={220}
                valueLabelDisplay='auto'
                marks={genMarksF("F")}
                onChange={(e, val) => handleF(val)}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
