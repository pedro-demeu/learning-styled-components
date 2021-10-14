import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyles } from "./Components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
