import React from "react";
import "./Editor.css";
import Trash from "./Trash";
import CloseIcon from "@material-ui/icons/Close";
import RedeemIcon from "@material-ui/icons/Redeem";
import Tags from "./Tags";
import Notebooks from "./Notebooks";
import Shared from "./Shared";
import AllNotes from "./AllNotes";

function Editor({ trash, tags, note, allnotes, shared }) {
  return (
    <div className="editor">
      <div className="editor__header">
        <div className="editor__auto">
          <div className="editor__headercontent">
            <RedeemIcon />
            <p className="title">Try Premium for Free:</p>
            <p>Sync across all your devices. Cancel anytime.</p>
            <button>Get it free for 7 days</button>
          </div>
          <CloseIcon />
        </div>
      </div>
      {allnotes && <AllNotes />}
      {shared && <Shared />}
      {trash && <Trash />}
      {tags && <Tags />}
      {note && <Notebooks />}
    </div>
  );
}

export default Editor;
