import React from "react";
import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Globalstyle from "../commons/styles/global-style";
import Main from "./Main";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Globalstyle />
      <Main />
    </StylesProvider>
  );
}
export default App;
