import React from "react";
import ReactDOM from "react-dom";
import img from "../images/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { yellow } from "@material-ui/core/colors";

import FaceIcon from "@material-ui/icons/Face";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },

  logo: {
    maxWidth: 80,
    textAlign: "center",
  },
  stylebar: {
    background: "linear-gradient(45deg, #000000 30%, #353839 90%)",
    minHeight: 20,
  },
  button: {
    background: "linear-gradient(45deg, #000000 30%, #353839 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(53, 56, 57)",
    color: "white",
    height: 48,
    padding: "0 35px",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.stylebar}>
        <Toolbar>
          <Link to={{ pathname: "/" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>

          <Typography variant="h6" className={classes.title}>
            <img
              src={"https://i.ibb.co/fY7gnXb/habify-3-3.png"}
              alt="logo"
              className={classes.logo}
            />
          </Typography>
          <Link to={{ pathname: "/login" }}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <FaceIcon style={{ color: yellow[500] }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//export { default } from "./NavBar";
