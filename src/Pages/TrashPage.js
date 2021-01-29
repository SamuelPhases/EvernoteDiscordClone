import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

function TrashPage() {
  return (
    <div className="app__flex">
      <Sidebar />
      <Editor trash />
    </div>
  );
}

export default TrashPage;
