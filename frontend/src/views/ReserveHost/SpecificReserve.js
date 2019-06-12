import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

export const SpecificReserve = ({ reserve }) =>
  <Card>
    <CardContent>
      <Typography>Reserve today from {reserve.from} to {reserve.to}</Typography>
      <Typography>{reserve.reserved ? "Reserved" : "Available to Rent"}</Typography>
    </CardContent>
  </Card>

