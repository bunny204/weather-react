import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          <a
            href="https://github.com/bunny204/weather-react.git"
            target="_blank"
            rel="noreferrer"
            className="Footer-link text-center"
          >
            Open-source
          </a>{" "}
          coded by Shavondra Lynch
        </footer>
      </div>
    </div>
  );
}
export default App;
