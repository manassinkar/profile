import { ReactNode, useState, useMemo } from "react";
import { setTabAction } from "./Store/Actions/TabActions";
import store from "./Store";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [tab, setLocalTabState] = useState(store.getState().tab);
  const setTab: (tab: number) => void = (tab) => {
    store.dispatch(setTabAction(tab));
    setLocalTabState(tab);
  };
  const getChildByTab: (tab: number) => ReactNode = (tab) => {
    switch (tab) {
      case 0:
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Projects />;
      case 3:
        return <Skills />;
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header tab={tab} setTab={setTab} />
        {getChildByTab(tab)}
      </ThemeProvider>
    </div>
  );
}

export default App;
