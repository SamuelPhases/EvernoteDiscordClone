import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotebookPage from "./Pages/NotebookPage";
import TrashPage from "./Pages/TrashPage";
import TagsPage from "./Pages/TagsPage";
import AllNotesPage from "./Pages/AllNotesPage";
import SharedPage from "./Pages/SharedPage";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Router>
        <Switch>
          <Route path="/notebooks">
            <NotebookPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/trash">
            <TrashPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/tags">
            <TagsPage />
          </Route>
        </Switch>
        <Switch>
          <Route path="/shared">
            <SharedPage />
          </Route>
        </Switch>
        <Switch>
          <Route>
            <AllNotesPage />
          </Route>
        </Switch>
      </Router>
      {/* <div className="app__flex">
        <Sidebar />
        <Editor />
      </div> */}
    </div>
  );
}

export default App;
