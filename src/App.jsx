import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./contexts/Navbar";
import Intro from "./contexts/Intro";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Intro />
    </ThemeProvider>
  );
}

export default App;
