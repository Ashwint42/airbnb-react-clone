import "./App.css";
import Logo from "./components/atoms/Logo";
import Button from "./components/atoms/Button";

function App() {
  return (
    <div>
      <Logo></Logo>
      <Button className="bg-[var(--color-pink)] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "16px",
            width: "16px",
            stroke: "white",
            strokeWidth: "4",
            overflow: "visible",
          }}
        >
          <path
            fill="#FF385C"
            d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
          ></path>
        </svg>
      </Button>

      <h4>Hello world</h4>

      <h1>HI from file</h1>
    </div>
  );
}

export default App;
