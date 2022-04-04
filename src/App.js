import React from "react";
import { render } from "react-dom";
import "@styles/sass/NormalizeCDN.sass";
import "@styles/sass/App.sass";
import App from "@routes/App.jsx";

render(<App />, document.getElementById("app"));
