import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

import Tab2Content from "./Tab2Content";

function TabSection2() {
    const [fillActive, setFillActive] = useState("tab1");

    const handleFillClick = (value) => {
      if (value === fillActive) {
        return;
      }
      setFillActive(value);
    };

  return (
    <div className=" my-20 mx-auto max-w-screen-xl">
      <TETabs fill>
      <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          Record Meeting
          {fillActive === "tab1" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          Meeting clip
          {fillActive === "tab2" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab3")}
          active={fillActive === "tab3"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          Notes
          {fillActive === "tab3" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab4")}
          active={fillActive === "tab4"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          Share meeting
          {fillActive === "tab4" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab5")}
          active={fillActive === "tab5"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          Mail and calender
          {fillActive === "tab5" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab6")}
          active={fillActive === "tab6"}
          className="text-base font-semibold text-gray-400 hover:text-blue-500 focus:text-blue-500 focus:outline-none relative"
        >
          cloud Storage
          {fillActive === "tab6" && (
            <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-700"></span>
          )}
        </TETabsItem>
        
      </TETabs>

      <TETabsContent>
        <TETabsPane show={fillActive === "tab1"}><Tab2Content/></TETabsPane>
        <TETabsPane show={fillActive === "tab2"}><Tab2Content/></TETabsPane>
        <TETabsPane show={fillActive === "tab3"}><Tab2Content/></TETabsPane>
        <TETabsPane show={fillActive === "tab4"}><Tab2Content/></TETabsPane>
        <TETabsPane show={fillActive === "tab5"}><Tab2Content/></TETabsPane>
        <TETabsPane show={fillActive === "tab6"}><Tab2Content/></TETabsPane>
      </TETabsContent>
    </div>
  )
}

export default TabSection2
