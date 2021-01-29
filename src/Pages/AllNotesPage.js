import React from "react";
import Editor from "../components/Editor";
import Sidebar from "../components/Sidebar";

function AllNotesPage() {
  return (
    <div className="app__flex">
      <Sidebar />
      <Editor allnotes />
    </div>
  );
}

export default AllNotesPage;
