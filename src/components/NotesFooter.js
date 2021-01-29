import React from "react";
import AddAlertIcon from "@material-ui/icons/AddAlert";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./NotesFooter.css";

function NotesFooter() {
  return (
    <div className="notes--footer">
      <div className="notes--footer--left">
        <div>
          <AddAlertIcon />
        </div>
        <p>Add tag</p>
      </div>
      <div className="notes--footer--right">
        <p>All changes saved</p>
        <div>
          <h5>new editor</h5>
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
}

export default NotesFooter;
