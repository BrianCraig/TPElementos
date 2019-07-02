import mock_hosts from "../../../mocks/getHosts.json";
jest.mock("../../api/connector", () => {
  return {
    __esModule: () => 3,
    getHosts: jest.fn(async () => mock_hosts._embedded.hosts)
  };
});
import React from "react";
import { shallow } from "enzyme";
import {
  ReserveHostComponentConnector,
  HostsView,
  ReserveHostView
} from "./ReserverHostView.js";
import { sameDay } from "../../helpers/DataHelpers";

describe("Reserve Host change Day", () => {
  let view;

  beforeEach(async () => {
    view = shallow(<ReserveHostComponentConnector />);
    await view.instance().componentDidMount();
  });

  it("defaults to all reserves from today", () => {
    //const { hostsList, day } = view.find(HostsView).props();
    const sHostsView = view.find(HostsView);
    const { day, hostsList } = sHostsView.props();
    const sReserveHostView = sHostsView.shallow(<ReserveHostView host={hostsList[0]} reserveList={hostsList[0].reserveList}/>);
    const { reserveList} = sReserveHostView.find(ReserveHostView).props();
    expect(sameDay(day, new Date())).toBeTruthy();

    expect(reserveList.every(reserve => sameDay(new Date(reserve.dayHour), new Date()))).toBeTruthy();
  });

  it("when changing day, it show only reserves from that date", async () => {
    const {changeDay} = view.find(HostsView).props();
    const date = new Date("2019-06-21T09:00:00");
    
    changeDay(date);

    const sHostsView = view.find(HostsView);
    const { day, hostsList } = sHostsView.props();
    const sReserveHostView = sHostsView.shallow(<ReserveHostView host={hostsList[0]} reserveList={hostsList[0].reserveList}/>);
    const { reserveList} = sReserveHostView.find(ReserveHostView).props();
    //console.log(reserveList);

    expect(day).toBe(date);
    expect(reserveList.every(reserve => sameDay(new Date(reserve.dayHour), date))).toBeTruthy();
  });
});
