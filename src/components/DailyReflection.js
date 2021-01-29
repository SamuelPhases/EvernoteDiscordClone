import React from "react";
import "./DailyReflection.css";

function DailyReflection() {
  return (
    <div className="daily--reflection">
      <div className="daily--reflection--header">
        <h2>Daily Reflection</h2>
      </div>
      <div className="daily--reflection--body">
        <div className="reflection--question">
          <h4>What went well?</h4>
          <ul>
            <li className="reflection--answer">Went Well</li>
          </ul>
        </div>
        <div className="reflection--question">
          <h4>What didn't go well?</h4>
          <ul>
            <li className="reflection--answer">Went Well</li>
          </ul>
        </div>
        <div className="reflection--question">
          <h4>What can I improve on?</h4>
          <ul>
            <li className="reflection--answer">Went Well</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DailyReflection;
