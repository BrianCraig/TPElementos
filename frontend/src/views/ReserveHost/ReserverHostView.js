import React from 'react';
import { SpecificReserve } from './SpecificReserve';

export const ReserveHostView = ({reserveList}) =>
    <div>
        <h1>Reserve List for Today</h1>
        <div>
            {reserveList.map((reserve) =><SpecificReserve reserve={reserve}/>)}
        </div>
    </div>