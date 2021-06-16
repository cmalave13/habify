import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import DetailsIcon from "@material-ui/icons/Details";
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(12, 4),
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "8px solid black",
    borderRadius: "5px",
    textAlign: "center",
    backgroundColor: "#ffd453",
  },
  icon: {
    padding: theme.spacing(2, 0),
  },
  title: {
    padding: theme.spacing(2),
  },
  featureList: {
    padding: theme.spacing(2),
  },
}));

const Features = () => {
  const classes = useStyles();

  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <ColorButton
              variant="contained"
              color="primary"
              className={classes.margin}
            >
              JANUARY
            </ColorButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              FEBRUARY
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              MARCH
            </Typography>
          </div>
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              APRIL
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              MAY
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              JUNE
            </Typography>
          </div>
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              JULY
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              AUGUST
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              SEPTEMBER
            </Typography>
          </div>
        </Grid>
      </Grid>

      <br />

      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              OCTOBER
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              NOVEMBER
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className={classes.card}>
            <DetailsIcon fontSize="large" className={classes.icon} />
            <Typography variant="h5" component="h3" className={classes.title}>
              DECEMBER
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
