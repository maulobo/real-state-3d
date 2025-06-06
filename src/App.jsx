import "./App.css";
import { Edificio } from "./components/3d/edificio";
import Test from "./components/test";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Modelo 3d</h1>
      </header>

      <main>
        <Test />
      </main>
    </div>
  );
}

export default App;
