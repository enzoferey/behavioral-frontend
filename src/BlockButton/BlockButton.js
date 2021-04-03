import React from "react";

import { withBp } from "../react-behavioral";
import { events } from "../Toast/Toast.constants";

const BlockButton = props => {
  const { isBlock } = props;
  return (
    <button
      onClick={() => {
        if (isBlock) {
          props.block(
            { type: events.SHOW_TOAST },
            { type: events.UNLOCK_TOAST }
          );
        } else {
          props.request({ type: events.UNLOCK_TOAST });
        }
      }}
    >
      {isBlock ? "Block toast" : "Unblock toast"}
    </button>
  );
};

export default withBp(BlockButton);
