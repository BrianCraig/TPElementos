import React from "react";
import { SpecificReserve } from "./SpecificReserve";
import { getHosts } from "../../api/connector";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import moment from "moment";
import { HostProfileResumeComponent } from "../../components/HostProfileResume";
import { Grid, Box, Container } from "@material-ui/core";
import { sameDay, reserveDate } from "../../helpers/DataHelpers";

export const ReserveHostView = ({ host, reserveList}) => (
  <>
    <Box mt={4} />
    <HostProfileResumeComponent 
      host={host}
      field={host.field}
      />
    <Box mb={4} />

    <Container maxWidth='lg'>
    <Grid
      container
      direction="row"
      spacing={3}
    >
      {reserveList.map(reserve => (
        <Grid item key={reserve.dayHour}>
          <SpecificReserve key={reserve.dayHour} reserve={reserve} />
        </Grid>
      ))}
    </Grid>
    </Container>
  </>
);

export const HostsView = ({ hostsList, day, changeDay }) => (
  <>
    <Container>
      <Grid
        container
        direction="row"
        spacing={3}
      >
        { hostsList.map( host => ( 
          <Grid item key={host.name}>
            <ReserveHostView
              host={host}
              reserveList={host.field.calendar.filter(reserve =>
                    sameDay(reserveDate(reserve), day) )}
              />
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
    const limitAllDays = moment().add(6, "days");
    return (
      <>
        <Box align={"right"} mt={2} mb={2}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="mui-pickers-date"
              label="Reservation date"
              value={this.state.day}
              onChange={this.changeDay}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
              disablePast={true}
              maxDate={limitAllDays}
            />
          </MuiPickersUtilsProvider>
        </Box>
        <HostsView
          hostsList={this.state.hosts}
          day={this.state.day}
          changeDay={this.changeDay}
        />
      </>
    );
  }
}
