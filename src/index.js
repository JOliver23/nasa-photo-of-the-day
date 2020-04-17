import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";

WebFont.load({
    google: {
        families:['Baloo Bhaina 2:700', 'cursive']
    }
});

ReactDOM.render(<App />, document.getElementById("root"));
