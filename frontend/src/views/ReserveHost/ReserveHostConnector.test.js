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
  ReserveHostView,
  sameDay
} from "./ReserverHostView.js";

describe("Reserve Host change Day", () => {
  let view;

  beforeEach(async () => {
    view = shallow(<ReserveHostComponentConnector />);
    await view.instance().componentDidMount();
  });

  it("defaults to all reserves from today", () => {
    const { day, reserveList } = view.find(ReserveHostView).props();
    expect(sameDay(day, new Date())).toBeTruthy();
    expect(reserveList.every(reserve => sameDay(new Date(reserve.dayHour), new Date()))).toBeTruthy();
  });

  it("when changing day, it show only reserves from that date", async () => {
    const {changeDay} = view.find(ReserveHostView).props();
    const date = new Date("2019-06-21T09:00:00");
    changeDay(date);
    const {day, reserveList} = view.find(ReserveHostView).props();
    expect(day).toBe(date);
    expect(reserveList.every(reserve => sameDay(new Date(reserve.dayHour), date))).toBeTruthy();
  });
});
