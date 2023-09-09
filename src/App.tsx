// useContext
// useState
// styled-component com darkMode

import { Button, Container, GlobalStyle } from "./assets/styles/global";
import Header from "./components/header";
import { ThemeProvider } from "./contexts/theme-context";
import List from "./pages/list";

function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <Container>
        <Header />
        
        <Button>Não faço nada</Button>

        <List />

      </Container>
    </ThemeProvider>
  )
}

export default App
