// components
import Form from "./components/Form";
import Navbar from "./components/Navbar";

// context
import { ChangeThemeContext } from "./contexts/ChangeThemeContext";
import { useContext } from "react";

function App() {
  const themeContext = useContext(ChangeThemeContext);
  console.log("Tema tual: " + themeContext?.theme);

  return (
    <div className="container" style={{ backgroundColor: themeContext?.theme }}>
      <Navbar/>
      <Form />
    </div>
  );
}

export default App;
