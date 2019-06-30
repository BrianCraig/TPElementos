import React from "react";
import moment from "moment";
import {
  CardActionArea,
  makeStyles,
  Typography,
  CardContent,
  Card,
  Box,
  Grid,
  CardActions,
  Button
} from "@material-ui/core";
import { isAvailable, isReserved } from "../../helpers/DataHelpers";
import { ModalActions } from "../../state/modal";

const useStyles = makeStyles(theme => ({
  title: {
    background: theme.palette.primary.light
  }
}));

export const SpecificReserve = ({ reserve }) => {
  const classes = useStyles();

  const onOpen = () => {
    const { set, openModal } = ModalActions;
    set({
      title: "Do you want to confirm the reserve?",
      content: `You're about to confirm your reservation for ${moment(reserve.dayHour).format("dddd, D \\a\\t HH:mm")}`
    });
    openModal();
  };

  const titleProps = isReserved(reserve)
    ? {
        bgcolor: "secondary.main",
        color: "secondary.contrastText"
      }
    : {
        bgcolor: "primary.main",
        color: "primary.contrastText"
      };

  return (
    <Card>
      <CardActionArea>
        <Box {...titleProps}>
          <CardContent>
            <Grid container justify={"space-between"}>
              <Grid item display={"inline"}>
                <Typography display={"inline"} variant="h5">
                  {moment(reserve.dayHour).format("dddd, D")}
                </Typography>
              </Grid>
              <Grid item display={"inline"}>
                <Typography display={"inline"} variant="h6">
                  {moment(reserve.dayHour).format("HH:mm")}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          disabled={isReserved(reserve)}
          onClick={onOpen}
        >
          I want it
        </Button>
      </CardActions>
    </Card>
  );
};
