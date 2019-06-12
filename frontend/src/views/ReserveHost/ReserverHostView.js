import React from 'react';
import { SpecificReserve } from './SpecificReserve';
import Typography from '@material-ui/core/Typography';

export const ReserveHostView = ({reserveList}) =>
    <div>
        <Typography variant="h4">Reserve List for Today</Typography>
        <div>
            {reserveList.map((reserve) =><SpecificReserve reserve={reserve}/>)}
        </div>
    </div>