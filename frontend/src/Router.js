import React from "react";

import { Router as ReachRouter } from "@reach/router";
import { ReserveHostComponentConnector } from "./views/ReserveHost/ReserverHostView";
import { HomeView } from "./views/Home/HomeView";
import { ProfileHostView } from "./views/ProfileHost/ProfileHostView";

export const Router = () =>
  <ReachRouter>
    <HomeView path='/' />
    <ProfileHostView path='/host/profile' />
    <ReserveHostComponentConnector path='/host/calendar'/>
  </ReachRouter>