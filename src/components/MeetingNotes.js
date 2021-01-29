import React from "react";
import "./MeetingNotes.css";

function MeetingNotes() {
  return (
    <div className="meeting--notes">
      <div className="meeting--notes--header">
        <h2>Meeting Note</h2>
      </div>
      <div className="meeting-notes--body">{/* agenda */}</div>
    </div>
  );
}

export default MeetingNotes;
