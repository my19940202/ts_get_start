import * as React from "react";
import * as ReactDOM from "react-dom";

import { TestBar } from "./component/Cms";

// main router
ReactDOM.render(
    <div>
        <TestBar name=""fuck />
    </div>,
    document.getElementById("app")  as HTMLElement
);
