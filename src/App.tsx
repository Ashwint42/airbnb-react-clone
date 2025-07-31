import "./App.css";
import CardsSection from "./components/organisms/CardsSection";
import { tabs } from "./data/tabs";

function App() {
  return (
    <>
      <header className="h-[200px] bg-red-400"></header>

      <main className="w-full">
        {tabs.map((tab) => (
          <CardsSection home={tab.home}></CardsSection>
        ))}
      </main>
    </>
  );
}

export default App;
