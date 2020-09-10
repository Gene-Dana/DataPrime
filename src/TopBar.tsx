import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PersonIcon from '@material-ui/icons/Person';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  spacing: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },

  first: {
    flexGrow: 1,
    alignSelf: "flex-start",
    paddingTop: "10px",
    color: "#747474",
    fontSize: 14,
  },
  second: {
    flexGrow: 1,
    alignSelf: "flex-start",
    paddingTop: "10px",
    marginBottom: "0px",
    color: "#007DC7",
    fontSize: 14,
  },
  third: {
    flexGrow: 1,
    // alignSelf: "flex-start",
    paddingTop: "0px",
    paddingBottom: "10px",
    color: "#FFFFFF",
    fontSize: 20,
  },
  divider: {
    background: "#3E3E3E",
  },
  spacing2: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  buttonone: {
    textTransform: 'none',
    textAlign: "center",
    background: "#007DC7",
    color: "#ffffff",
  },
  buttontwo: {
    textTransform: 'none',
    textAlign: "center",
    background: "#007DC7",
    color: "#ffffff",
  },
  styled: {
    background: "#1D1E22",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.styled}>
        <Container disableGutters className={classes.spacing}>
          <Typography className={classes.first} gutterBottom>
            Dashboard / Opportunity
          </Typography>
          <Typography className={classes.second} gutterBottom>
            Edit
          </Typography>
          <Typography className={classes.third} gutterBottom>
            GENENTECH - Manufacturing Data Scientist
          </Typography>
          <Divider light className={classes.divider} />
          <Container disableGutters className={classes.spacing2}>
            <Grid
              container
              spacing={3}
              direction="row"
              justify="space-between"
              // alignItems="flex-end"
            >
              <Grid item xs={4} justify="flex-start">
              <Button fullWidth variant="contained" className={classes.buttonone}>
                  Contact Us
                </Button>
              </Grid>
              <Grid item justify="flex-end">
                <Button variant="contained " className={classes.buttontwo} startIcon={<SaveIcon />}>
                  Contact Us
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </AppBar>
    </div>
  );
}
