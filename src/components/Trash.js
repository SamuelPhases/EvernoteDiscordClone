import React from "react";
import "./Trash.css";
import DeleteIcon from "@material-ui/icons/Delete";
import SortIcon from "@material-ui/icons/Sort";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

function Trash() {
  return (
    <div className="trash">
      <section className="trash__sectiona">
        <h2>trash</h2>
        <div className="trash__info">
          <p>0 notes</p>
          <div>
            <div>
              <ArrowRightAltIcon />
            </div>
            <div>
              <SortIcon />
            </div>
          </div>
        </div>
        <div className="trash__content">
          <div>
            <DeleteIcon />
            <h3>Your trash is empty</h3>
            <p>
              When you have notes in the trash, click ‘...’ to restore or delete
              them.
            </p>
          </div>
        </div>
      </section>
      <section className="trash__sectionb"></section>
    </div>
  );
}

export default Trash;
