import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./react-behavioral";

import threads from "./threads";

import Button from "./Button";
import BlockButton from "./BlockButton";
import SimpleButton from "./SimpleButton";
import Toast from "./Toast";

ReactDOM.render(
  <Provider threads={threads}>
    <BlockButton isBlock />
    <BlockButton />
    <SimpleButton isOpen />
    <SimpleButton />
    <Button />
    <br />
    <br />
    <Toast />
  </Provider>,
  document.getElementById("root")
);
