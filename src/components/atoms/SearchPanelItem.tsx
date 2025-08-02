import React from "react";
import { SearchPanelItemProperties } from "../../utils";
import * as uuid from "uuid";

function SearchPanelItem() {
  return (
    <>
      {SearchPanelItemProperties.map((item) => (
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
