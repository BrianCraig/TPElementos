import React from 'react';

export default class Status extends React.PureComponent {
  state = {
    queried: false,
    alive: false
  }

  componentDidMount () {
    fetch('http://localhost:8081/greeting')
      .then(() => this.setState({queried: true, alive: true}))
      .catch(() => this.setState({queried: true}));
  }

  render() {
    if(!this.state.queried) return <p>Obtaining status</p>
    if(!this.state.alive) return <p>Server unavailable</p>
    return <p>Server connected!</p>
  }
}