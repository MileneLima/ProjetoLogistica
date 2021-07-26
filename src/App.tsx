import React from "react";
import GlobalStyle from "./styles/global";

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