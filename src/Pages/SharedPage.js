import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

function SharedPage() {
  return (
    <div className="app__flex">
      <Sidebar />
      <Editor shared />
    </div>
  );
}

export default SharedPage;
