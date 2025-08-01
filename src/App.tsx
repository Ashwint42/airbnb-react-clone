import "./App.css";
import CardsSection from "./components/organisms/CardsSection";
import { tabs } from "./data/homepage";
import * as uuid from "uuid";

import Logo from "./components/atoms/Logo";

function App() {
  return (
    <>
      <header className="h-[200px] bg-red-400 ">
        <div className="primary-nav bg-amber-100 px-8 py-6 flex">
          <Logo></Logo>
          <div className="tab-island">
            <a className="tab-item">
              <div>
                <video src="https://a0.muscache.com/videos/search-bar-icons/webm/house-twirl-selected.webm"></video>
              </div>
            </a>
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
