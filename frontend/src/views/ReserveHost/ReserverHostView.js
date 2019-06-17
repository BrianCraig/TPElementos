import React from "react";
import { SpecificReserve } from "./SpecificReserve";
import Typography from "@material-ui/core/Typography";
import { getHosts } from "../../api/connector";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export const sameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const reserveDate = (reserve) => new Date(reserve.dayHour)

export const ReserveHostView = ({ reserveList }) => (
  <div>
    <Typography variant="h4">Reserve List for Today</Typography>
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

  changeDay = (date) => this.setState({day: date})

  render() {
    if (!this.state.hosts) return <p>Cargando</p>;
    const reservesForDate = this.state.hosts[0].field.calendar.filter(reserve => sameDay(reserveDate(reserve), this.state.day))
    return (
      <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
          margin="normal"
          id="mui-pickers-date"
          label="Reservation date"
          value={this.state.day}
          onChange={this.changeDay}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <ReserveHostView 
        changeDay={this.changeDay} 
        reserveList={reservesForDate} 
        day={this.state.day} 
      />
      </>
    );
  }
}
