import React from "react";
import { shallow } from "enzyme";
import { ReserveHostView } from "./ReserverHostView";
import { reserveDayMock } from "./mock";
import { SpecificReserve } from "./SpecificReserve";

describe("Reserve Host View", () => {
  const reserveList = reserveDayMock();
  const view = shallow(<ReserveHostView reserveList={reserveList} />);

  it("renders same quantity SpecificReserve as items in reserveList", () => {
    expect(view.find(SpecificReserve).length).toBe(reserveList.length);
  });
  it("passes reserve property to SpecificReserve component", () => {
    expect(
      view
        .find(SpecificReserve)
        .first()
        .props()
    ).toHaveProperty("reserve");
  });
});
