import React from "react";

import { Router as ReachRouter, Link } from "@reach/router";
import { ReserveHostView } from "./views/ReserveHost/ReserverHostView";
import { reserveDayMock } from "./views/ReserveHost/mock";
import { HomeView } from "./views/Home/HomeView";
import { ProfileHostView } from "./views/ProfileHost/ProfileHostView";


export const Router = () =>
  <ReachRouter>
    <HomeView path='/' />
    <ProfileHostView path='/host/profile' />
    <ReserveHostView path='/host/calendar' reserveList={reserveDayMock()} />
  </ReachRouter>