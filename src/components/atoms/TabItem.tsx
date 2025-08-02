import type { TabType, Tabs } from "../../types/home.types";
import clsx from "clsx";

type TabProps = {
  tab: TabType;
  currentTab: Tabs;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tabs>>;
};

function TabItem({ tab, currentTab, setCurrentTab }: TabProps) {
  return (
    <div
      className={clsx("flex justify-between mt-2", {
        "border-b-3": currentTab === tab.label,
      })}
      onClick={() => setCurrentTab(tab.label)}
    >
      <a
        className={clsx(
          "tab-item flex  items-center mb-3",
          tab.additionalStyles
        )}
      >
        <span className="inline-block w-9 h-9">
          <video
            src={tab.videoSource}
            className="inline-block object-contain transform scale-[2]"
          ></video>
        </span>
        <span
          className={clsx(
            "inline-block text-[14px] leading-[18px] mb-1 text-blue-500",
            tab.labelStyles,
            {
              "font-bold !text-primary": currentTab === tab.label,
            }
          )}
        >
          {tab.label}
        </span>
      </a>
    </div>
  );
}

export default TabItem;
