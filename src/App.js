import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <main>
        <div className="Title">
          <h2>
            Best Tours
            <div className="Underline"></div>
          </h2>
        </div>
        <Card />
      </main>
    </div>
  );
}

export default App;
