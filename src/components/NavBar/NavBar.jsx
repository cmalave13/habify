import React from "react";
import ReactDOM from "react-dom";
//import logo from "../images/logo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
    maxWidth: 40,
    marginRight: "10px",
  },
}));

/* logo
 <img src={logo} alt="logo" className={classes.logo} />
 */

// const NavBar = () => {
//   return (
//     <div>
//       <h1>Welcome to Habify - another test</h1>
//       <Button variant="contained" color="primary">
//         Yerrrrr
//       </Button>
//     </div>
//   );
// };

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="red">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            HABIFY
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

//export { default } from "./NavBar";
