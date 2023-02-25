import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { Scores } from "./components/Scores";
import { Tasks } from "./components/Tasks";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Scores />
      <Tasks />
      <GlobalStyle />
    </ThemeProvider>
  );
}
