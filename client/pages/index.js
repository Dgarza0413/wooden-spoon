import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  background: {
    color: "black",
    opacity: 0.6,
  },
}));

const index = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} className={classes.background}>
        <Typography variant="h1" component="h2" gutterBottom>
          Welcome
        </Typography>
      </Grid>
    </Grid>
  );
};

export default index;
