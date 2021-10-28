import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(setLoading(false));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div class="loader"></div>
      ) : (
        <main>
          <div className="Title">
            <h2>
              Best Tours
              <div className="Underline"></div>
            </h2>
          </div>
          <Card data={data} />
        </main>
      )}
    </div>
  );
}

export default App;
