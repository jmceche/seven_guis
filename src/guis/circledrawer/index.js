import React, { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";
import CircleDialog from "./CircleDialog";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const CircleDrawer = () => {
  const classes = useStyles();
  const [circles, setCircles] = useState([]);
  const [selCircle, setSelCircle] = useState(null);
  const canvasRef = useRef(null);

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

  const drawCircle = (ctx, x, y, r, hovered) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.fillStyle = hovered ? "#aaaaaa" : "#ffffff";
    ctx.fill();
  };

  const fillCircle = (circle, hovered) => {
    let newCircles = [...circles];
    const circlePos = newCircles.map((item) => item.id).indexOf(circle.id);
    newCircles[circlePos] = { ...circle, hovered: hovered };
    setCircles(newCircles);
  };

  const handleClick = (e) => {
    const { xPos, yPos } = getPosition(e);

    setCircles((cir) => [...cir, { id: uuid(), x: xPos, y: yPos, r: 30 }]);
  };

  const selecCircle = (circle, xPos, yPos) =>
    (xPos - circle.x) ** 2 + (yPos - circle.y) ** 2 <= circle.r ** 2;

  const handleMouseMove = (e) => {
    const { xPos, yPos } = getPosition(e);

    for (let circle of circles) {
      if (selecCircle(circle, xPos, yPos) && !circle.hovered) {
        fillCircle(circle, true);
      }
      if (!selecCircle(circle, xPos, yPos) && circle.hovered) {
        fillCircle(circle, false);
      }
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    const { xPos, yPos } = getPosition(e);
    for (let circle of circles) {
      if (selecCircle(circle, xPos, yPos)) {
        setSelCircle(circle);
        //handleClickOpen();
        setAnchorEl(e.currentTarget);
      }
    }
  };

  const changeRadius = (circle, radius) => {
    let newCircles = [...circles];
    const circlePos = newCircles.map((item) => item.id).indexOf(circle.id);
    newCircles[circlePos] = { ...circle, r: radius };
    setCircles(newCircles);
    setSelCircle(newCircles[circlePos]);
  };

  // DIALOG FROM MATERIAL UI
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickMenu = () => {
    handleClickOpenDialog();
  };

  return (
    <Grid container>
      <Grid item container justify='center'>
        <Button variant='contained' color='primary'>
          Undo
        </Button>
        <Button variant='contained' color='secondary'>
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

      {selCircle && (
        <div className={classes.root}>
          <CircleDialog
            circle={selCircle}
            changeRadius={changeRadius}
            open={open}
            onClose={handleCloseDialog}
          />
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: selCircle.y,
              horizontal: selCircle.x,
            }}
          >
            <MenuItem onClick={handleClickMenu}>Adjust Diameter...</MenuItem>
          </Menu>
        </div>
      )}
    </Grid>
  );
};

export default CircleDrawer;
