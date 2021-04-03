import React from "react";
import styled from "styled-components";

import { connect } from "../react-behavioral";
import { events } from "./Toast.constants";

function* Toast() {
  while (true) {
    this.updateView(null);

    yield {
      wait: [events.SHOW_TOAST],
    };
    this.updateView(<Main>Toasts are cool !</Main>);

    yield {
      wait: [events.HIDE_TOAST],
    };
  }
}

export default connect(Toast);

const Main = styled.div`
  width: 180px;
  height: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid grey;
  border-radius: 2px;
  padding: 12px;
`;
