import * as uuid from "uuid";
import type { SearchBubbleType } from "../../types/home.types";
import React from "react";

type SearchBubbleProp = {
  currentTabData: SearchBubbleType[];
};

function SearchPanelItem({ currentTabData }: SearchBubbleProp) {
  {
    console.log(currentTabData);
  }
  return (
    <>
      {currentTabData.map((item: SearchBubbleType) => (
        <React.Fragment key={uuid.v4()}>
          <div className={item.styles.wrapper}>
            <p className={item.styles.label}>{item.label}</p>
            <span className={item.styles.subText}>{item.subText}</span>
          </div>
          {!item.isLast && <div className="w-[1px] h-10 bg-gray-300"></div>}
        </React.Fragment>
      ))}
    </>
  );
}

export default SearchPanelItem;
