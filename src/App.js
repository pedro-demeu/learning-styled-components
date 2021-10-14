import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/Temas";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyles } from "./Components/GlobalStyles";
import { BtnTema } from "./Components/UI";
import SwitchTheme from './Components/SwitchTheme/SwitchTheme';

function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema( (tema) => !tema);
  }
  return (
    <>
      <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
        <GlobalStyles />
        <BtnTema onClick={toggleTema}>
          <SwitchTheme tema={tema} />
        </BtnTema>
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
