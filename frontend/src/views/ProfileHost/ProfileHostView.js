import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { Consumer, selectHost, selectField } from '../../state/store';

const Texto = ({ children }) => <Typography variant="body1" >{children}</Typography>

export const ProfileHostViewComponent = ({host, field}) =>
  <div>
    <Typography variant="h4">Host Profile View</Typography>

    <div class="card">
      <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Cacho" />
      <h1>{host.name}</h1>
      <Texto>Ubicacion: Bv. de los Intalianos 456, Wilde</Texto>
      <Texto>Nombre de Establecimiento: {field.name}</Texto>
      <p><Button color="primary" variant="contained">LogOut</Button></p>
    </div>

  </div>

export const ProfileHostView = () => (
  <Consumer select={[selectHost, selectField]}>
    {(host, field) => <ProfileHostViewComponent host={host} field={field} />}
  </Consumer>
);