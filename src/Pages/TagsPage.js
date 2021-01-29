import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

function TagsPage() {
  return (
    <div className="app__flex">
      <Sidebar />
      <Editor tags />
    </div>
  );
}

export default TagsPage;
