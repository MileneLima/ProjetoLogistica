import React from "react";
import GlobalStyle from "./styles/global";

import SigIn from "./pages/SigIn";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <>
    <SignUp></SignUp>
    <GlobalStyle></GlobalStyle>
    </>
  )
};

export default App;