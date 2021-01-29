import React from "react";
import "./SidebarItem.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function SidebarItem({ title, Icon, showArrow }) {
  return (
    <>
      {showArrow ? (
        <>
          <div className="sidebaritem--showArrow">
            <div>
              <ArrowRightIcon />
            </div>
            <Icon />
            <h3>{title}</h3>
          </div>
        </>
      ) : (
        <>
          <div className="sidebaritem">
            <Icon />
            <h3>{title}</h3>
          </div>
        </>
      )}
    </>
  );
}

export default SidebarItem;
