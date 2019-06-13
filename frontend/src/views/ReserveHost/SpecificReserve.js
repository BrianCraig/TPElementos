import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';

export const SpecificReserve = ({ reserve }) =>
  <Card>
    <CardContent>
      <Typography variant={"body1"}>{moment(reserve.dayHour).calendar()}</Typography>
      <Typography variant={"body1"}>{reserve.reserveState}</Typography>
    </CardContent>
  </Card>

