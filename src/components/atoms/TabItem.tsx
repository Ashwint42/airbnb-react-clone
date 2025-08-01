import { type TabType } from "../../types/home.types";
import clsx from "clsx";

type TabProps = {
  tab: TabType;
};

function TabItem({ tab }: TabProps) {
  return (
    <div className="flex justify-between mt-2">
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
            "inline-block text-[14px] leading-[18px] mb-1 !text-secondary",
            tab.styles
          )}
        >
          {tab.label}
        </span>
      </a>
    </div>
  );
}

export default TabItem;
