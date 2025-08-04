import "./App.css";
import CardsSection from "./components/organisms/CardsSection";
import { tabs } from "./data/homepage";
import * as uuid from "uuid";
import { tabProperties } from "./utils";
import TabItem from "./components/atoms/TabItem";
import SearchPanelItem from "./components/atoms/SearchPanelItem";
import { useState } from "react";
import type { Tabs } from "./types/home.types";
import clsx from "clsx";

import Logo from "./assets/svg/logo.svg?react";
import Globe from "./assets/svg/globe.svg?react";
import Hamburger from "./assets/svg/hamburger.svg?react";

function App() {
  const [currentTab, setcurrentTab] = useState<Tabs>("Homes");

  return (
    <>
      <header className="h-[200px] px-8 bg-[linear-gradient(white.9%,_rgb(248,248,248)_100%)] border-b border-b-gray-300">
        <div className="primary-nav flex justify-between items-center relative">
          <div className="w-[225.28px]">
            <Logo />
          </div>

          <div className="tab-island flex w-[500px] h-12 mt-2 justify-center gap-[35px]">
            {tabProperties.map((property) => (
              <TabItem
                key={uuid.v4()}
                tab={property}
                currentTab={currentTab}
                setCurrentTab={setcurrentTab}
              ></TabItem>
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
                  <Globe></Globe>
                </span>
              </button>
            </div>
            <div className="hamburger flex justify-center items-center">
              <button className="h-10 w-10 bg-[#F2F2F2] flex justify-center items-center rounded-[20px]">
                <span>
                  <Hamburger></Hamburger>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="searchPanel flex justify-center items-center mt-3">
          <div
            className={clsx(
              "items-center w-full h-[66px] max-w-[850px] rounded-4xl shadow-[0_8px_24px_0_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.02)] border-[1px] border-gray-200",
              {
                "grid  grid-cols-[minmax(0,2fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,2fr)_auto]":
                  currentTab === "Homes",
                "grid grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)_auto]":
                  currentTab !== "Homes",
              }
            )}
          >
            <SearchPanelItem
              currentTabData={tabs[0][currentTab].searchBubbles}
            ></SearchPanelItem>
          </div>
        </div>
      </header>

      <main className="w-full">
        {tabs.map((tab) => (
          <CardsSection key={uuid.v4()} tab={tab[currentTab]}></CardsSection>
        ))}
      </main>
    </>
  );
}

export default App;
