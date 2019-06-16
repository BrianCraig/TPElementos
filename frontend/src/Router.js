import React, {useEffect} from "react";

import { Router as ReachRouter } from "@reach/router";
import { ReserveHostComponentConnector } from "./views/ReserveHost/ReserverHostView";
import { HomeView } from "./views/Home/HomeView";
import { ProfileHostView } from "./views/ProfileHost/ProfileHostView";
import { Consumer, loadData } from "./state/store"

export const RouterComponent = ({dataLoaded, hosts}) => {
  useEffect(() => {
    if(dataLoaded) return;
    loadData().then(() => {})
  })
  if(!dataLoaded){
    return <p>Cargando</p>
  }
  return (
    <ReachRouter>
      <HomeView path='/' />
      <ProfileHostView path='/host/profile' />
      <ReserveHostComponentConnector path='/host/calendar'/>
    </ReachRouter>
  )
}

export const Router = () =>
  <Consumer>
    {({dataLoaded, hosts}) => (
      <RouterComponent
        dataLoaded={dataLoaded}
        hosts={hosts} />
    )}
  </Consumer>