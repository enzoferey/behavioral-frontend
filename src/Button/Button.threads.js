import { events } from "./Button.constants";

function* click() {
  yield {
    wait: [events.BUTTON_CLICKED],
  };
  yield {
    request: [
      {
        type: events.SHOW_HELLO_WORLD,
        payload: this.lastEvent().payload,
      },
    ],
  };
}

function* doubleClick() {
  yield {
    wait: [events.BUTTON_CLICKED],
  };
  yield {
    block: [events.SHOW_HELLO_WORLD],
    wait: [events.BUTTON_CLICKED],
  };
}

export default [click, doubleClick];
