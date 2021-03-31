import React, {FC} from "react";
import {render} from "react-dom";

import Main from "./pages/Main/Main";
import "../node_modules/bulma/bulma.sass";

const Index:FC = () => {
    return(
        <Main />
    )
}

render(<Index />, document.getElementById("root"));
