import type { TabType } from "../types/home.types";
export const tabProperties: TabType[] = [
  {
    videoSource:
      "https://a0.muscache.com/videos/search-bar-icons/webm/house-twirl-selected.webm",
    label: "Homes",
    labelStyles: " ml-4",
  },
  {
    videoSource:
      "https://a0.muscache.com/videos/search-bar-icons/webm/balloon-twirl.webm",
    label: "Experiences",
    labelStyles: "ml-2",
  },
  {
    videoSource:
      "https://a0.muscache.com/videos/search-bar-icons/webm/consierge-selected.webm",
    label: "Services",
    labelStyles: "ml-3",
    additionalStyles: "pl-1 transform translate-x-[-1px]",
  },
];

export const SearchPanelItemProperties = [
  {
    label: "Where",
    subText: "Search destinations",
    styles: {
      wrapper: "px-8 py-[15px] h-[66px]",
      label: "text-[12px] font-medium",
      subText: "inline-block text-[14px] !text-secondary -mt-1",
    },
  },
  {
    label: "Check in",
    subText: "Add dates",
    styles: {
      wrapper: "py-[15px] px-[24px] h-[66px]",
      label: "text-[12px] font-medium mb-1",
      subText: "inline-block text-[14px] !text-secondary mt-[-8px] ",
    },
  },
  {
    label: "Check out",
    subText: "Add dates",
    styles: {
      wrapper: "px-8 py-[15px] h-[66px]",
      label: "text-[12px] font-medium mb-1",
      subText: "inline-block text-[14px] !text-secondary ",
    },
  },
  {
    label: "Who",
    subText: "Add guests",
    styles: {
      wrapper: "py-[15px] pr-[130.904px] pl-[24px] h-[66px]",
      label: "text-[12px] font-medium",
      subText: "inline-block text-[14px] !text-secondary",
    },
    isLast: true,
  },
];
