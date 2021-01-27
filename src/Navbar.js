import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },

  nav: {
    marginBottom: "5rem",
  },
  spread: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const links = [
  { url: "counter", chalName: "Counter" },
  { url: "temperature", chalName: "Temperature Converter" },
  { url: "flight-booker", chalName: "Flight Booker" },
  { url: "timer", chalName: "Timer" },
  { url: "crud", chalName: "CRUD" },
  { url: "circle-drawer", chalName: "Circle Drawer" },
  { url: "cells", chalName: "Cells" },
];

const Navbar = () => {
  const history = useHistory();
  const currentLoc = useLocation().pathname;
  const classes = useStyles();

  const handleRedirect = (e) => {
    e.target.value === "home"
      ? history.push("/")
      : history.push(`/${e.target.value}`);
  };

  return (
    <AppBar position='static' mb={5} className={classes.nav}>
      <Toolbar className={classes.spread}>
        <Select
          defaultValue='home'
          onChange={handleRedirect}
          style={{ color: "white" }}
        >
          <MenuItem value='home'>Home</MenuItem>
          {links.map((link) => (
            <MenuItem value={link.url} key={link.url}>
              {link.chalName}
            </MenuItem>
          ))}
        </Select>
        <Typography variant='h6' align='right'>
          {links.filter((link) => link.url === currentLoc.slice(1))[0]?.[
            "chalName"
          ] || ""}
        </Typography>
        <Typography variant='h6'>
          <Link to='/'>7 GUIs</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
