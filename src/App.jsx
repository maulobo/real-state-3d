import "./App.css";
import Test from "./components/test";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Visualizador de Modelos 3D</h1>
        Selector de modelos
      </header>

      <main>
        <Test />
      </main>
    </div>
  );
}

export default App;
