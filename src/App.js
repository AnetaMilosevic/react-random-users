import { Content, Footer, Header } from "./components";

import CssBaseline from "@mui/material/CssBaseline";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

const App = () => {
  const [isGrid, setIsGrid] = useState(false);

  const changeView = () => {
    setIsGrid(!isGrid);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header changeView={changeView} />
      <CssBaseline />
      <Content isGrid={isGrid} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
