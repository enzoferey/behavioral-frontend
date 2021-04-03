import React from "react";

import { withBp } from "../react-behavioral";
import { events } from "../Toast/Toast.constants";

const SimpleButton = props => {
  const { isOpen } = props;
  return (
    <button
      onClick={() => {
        props.request({ type: isOpen ? events.SHOW_TOAST : events.HIDE_TOAST });
      }}
    >
      {isOpen ? "Open toast" : "Hide toast"}
    </button>
  );
};

export default withBp(SimpleButton);
