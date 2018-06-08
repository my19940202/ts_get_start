import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./component/Hello";
import { Fuck } from "./component/Fuck";
import { cc, ck } from "./util";
console.log(cc([1,2,3], 66))
console.log(ck([1,2,3], 66))

ReactDOM.render(
    <div>
        <Hello compiler="TypeScript" framework="React" />
        <Fuck compiler="TypeScript" framework="React" />
    </div>,
    document.getElementById("example")
);