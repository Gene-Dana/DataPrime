import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import SideBar from "./SideBar";
import Dash from "./Dash";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <Dash />
        </Grid>
      </Grid>
    </div>
  );
}
