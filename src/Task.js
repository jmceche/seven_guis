import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
  mgthree: { marginBottom: "2rem" },
  mgone: { marginBottom: "1rem" },
  inblk: { display: "inline-block" },
  pad: { padding: "1rem" },
  check: { color: "darkblue" },
});

const Task = ({ title, subtitle, children, img, compPath }) => {
  const classes = useStyles();
  return (
    <div className={classes.mgthree}>
      <Paper elevation='5' className={classes.pad}>
        <Typography variant='h3'>{title}</Typography>
        <Typography variant='subtitle1' gutterBottom className={classes.mgone}>
          <em>Challenge:</em> {subtitle}
        </Typography>
        <Typography variant='body1' gutterBottom className={classes.inblk}>
          <img
            src={img}
            alt='img'
            style={{ float: "left" }}
            className={classes.mgone}
          />
          {children}
        </Typography>
        <Typography variant='subtitle1' className={classes.check}>
          <Link to={`${compPath}`}>Check my implementation</Link>
        </Typography>
      </Paper>
    </div>
  );
};

export default Task;
