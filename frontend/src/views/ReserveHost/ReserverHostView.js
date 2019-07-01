import React from "react";
import { SpecificReserve } from "./SpecificReserve";
import { getHosts } from "../../api/connector";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import moment from "moment";
import { HostProfileResume } from "../../components/HostProfileResume";
import { Grid, Box, Container } from "@material-ui/core";
import { sameDay, reserveDate } from "../../helpers/DataHelpers";

export const ReserveHostView = ({ reserveList, day, changeDay, limitDay }) => (
  <>
    <Box mt={4} />
    <HostProfileResume />
    <Box align={"right"} mt={2} mb={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Reservation date"
          value={day}
          onChange={changeDay}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
          disablePast={true}
          maxDate={limitDay}
        />
      </MuiPickersUtilsProvider>
    </Box>
    <Container maxWidth='sm'>
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="left"
      spacing={3}
    >
      {reserveList.map(reserve => (
        <Grid item xs={12} sm={12} lg={12}>
          <SpecificReserve key={reserve.dayHour} reserve={reserve} />
        </Grid>
      ))}
    </Grid>
    </Container>
    <Box mb={4} />
  </>
);

export class ReserveHostComponentConnector extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      day: new Date()
    };
  }

  async componentDidMount() {
    this.setState({ hosts: await getHosts() });
  }

  changeDay = date => this.setState({ day: date });

  render() {
    if (!this.state.hosts) return <p>Cargando</p>;
    const reservesForDate = this.state.hosts[0].field.calendar.filter(reserve =>
      sameDay(reserveDate(reserve), this.state.day)
    );
    const limitAllDays = moment().add(6, "days");
    return (
      <ReserveHostView
        changeDay={this.changeDay}
        reserveList={reservesForDate}
        day={this.state.day}
        limitDay={limitAllDays}
      />
    );
  }
}
