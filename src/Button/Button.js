import React from "react";

import { connect } from "../react-behavioral";

import { events } from "./Button.constants";

function* Button() {
  // Initial state
  this.updateView(
    <button
      onClick={() => {
        this.request({
          type: events.BUTTON_CLICKED,
          payload: "ciao",
        });
      }}
    >
      Click me!
    </button>
  );

  // Wait for a SHOW_HELLO_WORLD event
  yield {
    wait: [events.SHOW_HELLO_WORLD],
  };
  this.updateView("Hello world: " + this.lastEvent().payload);
}

export default connect(Button);
