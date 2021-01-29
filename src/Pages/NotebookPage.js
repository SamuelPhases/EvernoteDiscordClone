import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

function NotebookPage() {
  return (
    <div className="app__flex">
      <Sidebar />
      <Editor note />
    </div>
  );
}

export default NotebookPage;
