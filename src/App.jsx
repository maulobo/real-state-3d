import "./App.css";
import { Edificio } from "./components/3d/edificio";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Modelo 3d</h1>
      </header>

      <main>
        <Edificio />
      </main>
    </div>
  );
}

export default App;
