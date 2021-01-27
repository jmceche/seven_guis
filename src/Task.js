import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mgthree: { marginBottom: "2rem" },
  mgone: { marginBottom: "1rem" },
  inblk: { display: "inline-block" },
});

const Task = ({ title, subtitle, children, img }) => {
  const classes = useStyles();
  return (
    <div className={classes.mgthree}>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='subtitle1' gutterBottom className={classes.mgone}>
        <em>Challenge:</em> {subtitle}
      </Typography>
      <Typography variant='body1' gutterBottom className={classes.inblk}>
        <img src={img} alt='img' style={{ float: "left" }} />
        {children}
      </Typography>
    </div>
  );
};

export default Task;
