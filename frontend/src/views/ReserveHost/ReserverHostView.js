import React from "react";
import { SpecificReserve } from "./SpecificReserve";
import Typography from "@material-ui/core/Typography";
import { getHosts } from "../../api/connector";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import moment from "moment";

export const sameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const reserveDate = reserve => new Date(reserve.dayHour);

export const ReserveHostView = ({ reserveList, day, changeDay }) => (
  <div>
    <Typography variant="h4">
      Reserve List for {moment(day).format("LL")}
    </Typography>
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
      />
    </MuiPickersUtilsProvider>
    <div>
      {reserveList.map(reserve => (
        <SpecificReserve key={reserve.dayHour} reserve={reserve} />
      ))}
    </div>
  </div>
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
    return (
      <ReserveHostView
        changeDay={this.changeDay}
        reserveList={reservesForDate}
        day={this.state.day}
      />
    );
  }
}
