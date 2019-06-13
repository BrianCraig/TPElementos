import React from "react";
import { SpecificReserve } from "./SpecificReserve";
import Typography from "@material-ui/core/Typography";
import { getHosts } from "../../api/connector";

export const ReserveHostView = ({ reserveList }) => (
  <div>
    <Typography variant="h4">Reserve List for Today</Typography>
    <div>
      {reserveList.map(reserve => (
        <SpecificReserve key={reserve.from} reserve={reserve} />
      ))}
    </div>
  </div>
);

export class ReserveHostComponentConnector extends React.PureComponent {

  state = {}

  async componentDidMount() {
    this.setState({hosts: await getHosts()})
  }

  render() {
    if(!this.state.hosts) return <p>Cargando</p>
    return <ReserveHostView reserveList={this.state.hosts.hosts[0].field.calendar} />
  }
}
