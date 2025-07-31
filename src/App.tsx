import "./App.css";
import Card from "./components/molecules/Card";

function App() {
  return (
    <>
      <header className="h-[200px] bg-red-400"></header>

      <main className="w-full">
        <div className="grid w-full">
          <div>
            <div className="m-8 mb-[14px] flex justify-between items-center">
              <h2 className="text-sm flex">
                <span className="text-[20px] font-semibold leading-[24px] tracking-[-0.18px]">
                  Popular homes in Bengaluru
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "inline-block",
                        fill: "none",
                        height: "12px",
                        width: "12px",
                        stroke: "currentcolor",
                        strokeWidth: 5.33333,
                        overflow: "visible",
                      }}
                    >
                      <path
                        fill="none"
                        d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                      ></path>
                    </svg>
                  </span>
                </span>
              </h2>
              <div className="ml-auto flex items-center">
                <div className="columns-2 gap-1">
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          fill: "none",
                          height: "12px",
                          width: "12px",
                          stroke: "currentcolor",
                          strokeWidth: 4,
                          overflow: "visible",
                        }}
                      >
                        <path
                          fill="none"
                          d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                        ></path>
                      </svg>
                    </span>
                  </button>
                  <button>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        role="presentation"
                        focusable="false"
                        style={{
                          display: "block",
                          fill: "none",
                          height: "12px",
                          width: "12px",
                          stroke: "currentcolor",
                          strokeWidth: 4,
                          overflow: "visible",
                        }}
                      >
                        <path
                          fill="none"
                          d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 -mt-1 overflow-x-scroll">
            <div
              className="pt-1 pb-2 grid gap-[11px] overflow-x-scroll"
              style={{
                gridAutoColumns: "calc(16.6667% - 9.16667px)",
                gridTemplateRows: "225.812px",
                gridAutoFlow: "column",
              }}
            >
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
