import type { TabItemProps } from "../../types/atoms";

function TabItem({ videoSource, label }: TabItemProps) {
  return (
    <div>
      <a className="flex items-center">
        <span>
          <video src={videoSource}></video>
        </span>
        <span>{label}</span>
      </a>
    </div>
  );
}

export default TabItem;
