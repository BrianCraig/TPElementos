import React from "react";

import { Router as ReachRouter, Link } from "@reach/router";
import { ReserveHostView } from "./views/ReserveHost/ReserverHostView";
import { reserveDayMock } from "./views/ReserveHost/mock";


let Home = () => 
  <div>
    <Link to='/host/profile'>Profile</Link>
    <Link to='/host/calendar'>Reserve Calendar</Link>
  </div>
let ProfileHostView = () => <div>Profile</div>

export const Router = () =>
  <ReachRouter>
    <Home path='/' />
    <ProfileHostView path='/host/profile' />
    <ReserveHostView path='/host/calendar' reserveList={reserveDayMock()} />
  </ReachRouter>