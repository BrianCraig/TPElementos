import React from "react";
import { Paper, Typography, Grid, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Consumer, selectHost, selectField } from "../state/store";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2)
  },
  purpleAvatar: {
    color: "#fff",
    backgroundColor: theme.palette.primary.dark,
    width: 48,
    height: 48
  }
}));

const HostProfileResumeComponent = ({ host, field }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        spacing={4}
        alignItems="flex-start"
      >
        <Grid item>
          <Avatar className={classes.purpleAvatar}>RP</Avatar>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            Host
          </Typography>
          <Typography variant="h5">{host.name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="textSecondary">
            Field
          </Typography>
          <Typography variant="h5">{field.name}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export const HostProfileResume = () => (
  <Consumer select={[selectHost, selectField]}>
    {(host, field) => <HostProfileResumeComponent host={host} field={field} />}
  </Consumer>
);
