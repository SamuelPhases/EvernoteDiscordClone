import React from "react";
import SupervisorAccountRoundedIcon from "@material-ui/icons/SupervisorAccountRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import "./Shared.css";

function Shared() {
  return (
    <div className="shared">
      <h2 className="shared--header">Shared with Me</h2>
      <div className="shared--imgcontent">
        <div className="shared--img">
          <div className="shared--icon">
            <SupervisorAccountRoundedIcon />
          </div>
          <div className="shared--check">
            <CheckRoundedIcon />
          </div>
          <div className="shared--add">
            <AddRoundedIcon />
          </div>
          <div className="shared--up">
            <ArrowUpwardRoundedIcon />
          </div>
        </div>
        <h3>Nothing shared yet</h3>
        <p>Notes and notebooks shared with you will show up here.</p>
      </div>
    </div>
  );
}

export default Shared;
