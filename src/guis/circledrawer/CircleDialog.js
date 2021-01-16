import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slider from "@material-ui/core/Slider";

const CircleDialog = ({ circle, open, onClose, changeRadius }) => {
  const [radius, setRadius] = useState(circle.r);
  const handleClose = () => {
    changeRadius(circle, radius);
    onClose();
  };

  const handleChange = (e, newRadius) => {
    setRadius(newRadius);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
    >
      <DialogTitle aria-labelledby='simple-dialog-title'>
        <DialogTitle id='simple-dialog-title'>
          Adjust diameter of circle at: ({circle.x}, {circle.y})
        </DialogTitle>
        <Slider
          value={radius}
          aria-labelledby='discrete-slider'
          valueLabelDisplay='auto'
          step={1}
          min={10}
          max={100}
          onChange={handleChange}
        />
      </DialogTitle>
    </Dialog>
  );
};

export default CircleDialog;
