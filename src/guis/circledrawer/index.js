import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import CircleDialog from "./CircleDialog";
import { hoverDrawnCircle, drawCircle } from "./helpers";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CircleMenu from "./CircleMenu";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const CircleDrawer = () => {
  const classes = useStyles();
  const [history, setHistory] = useState([[]]);
  const [circles, setCircles] = useState([]);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [step, setStep] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    setCircles(history[step]);
  }, [history, step]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    circles.map((circle) =>
      drawCircle(context, circle.x, circle.y, circle.r, circle.hovered)
    );
  }, [circles]);

  const getPosition = (e) => {
    const rec = canvasRef.current.getBoundingClientRect();
    const xPos = e.clientX - rec.left;
    const yPos = e.clientY - rec.top;
    return { xPos, yPos };
  };

  const fillCircle = (circle, hovered) => {
    let newCircles = [...circles];
    const circlePos = newCircles.map((item) => item.id).indexOf(circle.id);
    newCircles[circlePos] = { ...circle, hovered: hovered };
    setCircles(newCircles);
  };

  const handleClick = (e) => {
    const { xPos, yPos } = getPosition(e);
    const newCircles = [...circles, { id: uuid(), x: xPos, y: yPos, r: 30 }];
    setHistory((hist) => [...hist.slice(0, step + 1), newCircles]);
    setStep((step) => step + 1);
  };

  const handleMouseMove = (e) => {
    const { xPos, yPos } = getPosition(e);

    for (let circle of circles) {
      if (hoverDrawnCircle(circle, xPos, yPos) && !circle.hovered) {
        fillCircle(circle, true);
      }
      if (!hoverDrawnCircle(circle, xPos, yPos) && circle.hovered) {
        fillCircle(circle, false);
      }
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    const { xPos, yPos } = getPosition(e);
    for (let circle of circles) {
      if (hoverDrawnCircle(circle, xPos, yPos)) {
        setSelectedCircle(circle);
        setAnchorEl(e.currentTarget);
      }
    }
  };

  const changeRadius = (circle, radius) => {
    let newCircles = [...circles];
    const circlePos = newCircles.map((item) => item.id).indexOf(circle.id);
    newCircles[circlePos] = { ...circle, r: radius };
    setCircles(newCircles);
    setSelectedCircle(newCircles[circlePos]);
    setHistory((hist) => [...hist.slice(0, step + 1), newCircles]);
    setStep((step) => step + 1);
  };

  const handleUndo = () => {
    setStep((step) => (step > 0 ? step - 1 : step));
  };

  const handleRedo = () => {
    setStep((step) => (step < history.length - 1 ? step + 1 : step));
  };

  // DIALOG FROM MATERIAL UI
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container>
      <Grid item container justify='center'>
        <Button variant='contained' color='primary' onClick={handleUndo}>
          Undo
        </Button>
        <Button variant='contained' color='secondary' onClick={handleRedo}>
          Redo
        </Button>
      </Grid>
      <Grid item container justify='center'>
        <canvas
          style={{ border: "2px solid black" }}
          ref={canvasRef}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onContextMenu={handleRightClick}
          height='600'
          width='800'
        ></canvas>
      </Grid>

      {selectedCircle && (
        <div className={classes.root}>
          <CircleDialog
            circle={selectedCircle}
            changeRadius={changeRadius}
            open={open}
            onClose={handleCloseDialog}
          />
          <CircleMenu
            selectedCircle={selectedCircle}
            changeRadius={changeRadius}
            handleClickOpenDialog={handleClickOpenDialog}
            anchorEl={anchorEl}
            handleCloseMenu={handleCloseMenu}
          />
        </div>
      )}
    </Grid>
  );
};

export default CircleDrawer;
