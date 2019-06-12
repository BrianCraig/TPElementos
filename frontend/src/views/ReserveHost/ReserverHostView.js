import React from 'react';
import { SpecificReserve } from './SpecificReserve';
import Typography from '@material-ui/core/Typography';

export const ReserveHostView = ({reserveList}) =>
    <div>
        <Typography variant="h4">Reserve List for Today</Typography>
        <div>
            {reserveList.map((reserve) =><SpecificReserve key={reserve.from} reserve={reserve}/>)}
        </div>
    </div>