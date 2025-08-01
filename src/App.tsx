import "./App.css";
import CardsSection from "./components/organisms/CardsSection";
import { tabs } from "./data/homepage";
import * as uuid from "uuid";

import Logo from "./components/atoms/Logo";
import { tabProperties } from "./utils";
import TabItem from "./components/atoms/TabItem";

function App() {
  return (
    <>
      <header className="h-[200px]  px-8">
        <div className="primary-nav flex justify-between items-center relative">
          <Logo></Logo>

          <div className="tab-island flex w-[500px] h-12 mt-2 justify-center gap-[35px]">
            {tabProperties.map((property) => (
              <TabItem key={uuid.v4()} tab={property}></TabItem>
            ))}
          </div>

          <div className="h-20 nav-right flex justify-between items-center">
            <div className="mr-3 flex items-center gap-3 justify-end">
              <button className="px-3 py-[11px] ">
                <span className="inline-block text-[14px] font-medium leading-[-14px]">
                  Become a host
                </span>
              </button>
              <button className="h-10 w-10 bg-[#F2F2F2] flex justify-center items-center rounded-[20px]">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    style={{
                      display: "block",
                      height: "16px",
                      width: "16px",
                    }}
                  >
                    <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="hamburger flex justify-center items-center">
              <button className="h-10 w-10 bg-[#F2F2F2] flex justify-center items-center rounded-[20px]">
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
                      height: "16px",
                      width: "16px",
                      stroke: "black",
                      strokeWidth: 3,
                      overflow: "visible",
                    }}
                  >
                    <g fill="none">
                      <path d="M2 16h28M2 24h28M2 8h28"></path>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full">
        {tabs.map((tab) => (
          <CardsSection key={uuid.v4()} tab={tab.home}></CardsSection>
        ))}
      </main>
    </>
  );
}

export default App;
