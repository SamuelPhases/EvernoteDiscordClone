import React, { useState } from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem";

import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import StarRoundedIcon from "@material-ui/icons/StarRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";
import LibraryBooksRoundedIcon from "@material-ui/icons/LibraryBooksRounded";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import Avatar from "@material-ui/core/Avatar";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Sidebar() {
  const [showShortcut, setShowShortcut] = useState(true);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerleft">
          <div className="sidebar__headername">
            <Avatar className="user__dp">L</Avatar>
            <h2>Lorewr Ipwio</h2>
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="sidebar__headerright"></div>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className="sidebar__newnote">
          <div className="sidebar__newnoteleft">
            <div>
              <AddIcon />
            </div>
            <h3>new note</h3>
          </div>
          <div className="sidebar-box">
            <KeyboardArrowDownIcon />
          </div>
        </div>
        <div className="sidebar__sidebaritem">
          {/* <SidebarItem
            title="Shortcuts"
            Icon={StarRoundedIcon}
            showArrow
            onClick={() => {
              setShowShortcut(!showShortcut);
            }}
          /> */}
          <div
            className="sidebaritem--showArrow"
            onClick={() => {
              setShowShortcut(!showShortcut);
            }}
          >
            <ArrowRightIcon />
            <StarRoundedIcon />
            <h3>Shortcut</h3>
          </div>
          {showShortcut && (
            <div className="shortcut--info">
              <h3>Add your first shortcut</h3>
              <p>
                Click the ... on a note, notebook, stack or tag to add it here.
              </p>
            </div>
          )}
          <Link to="/">
            <SidebarItem title="All notes" Icon={NoteAddRoundedIcon} />
          </Link>
          <Link to="/notebooks">
            <SidebarItem
              title="Notebooks"
              Icon={LibraryBooksRoundedIcon}
              showArrow
              // Icon={ArrowRightIcon}
            />
          </Link>
          <Link to="/shared">
            <SidebarItem title="Shared with me" Icon={PeopleIcon} />
          </Link>
          <Link to="/tags">
            <SidebarItem title="tags" Icon={LocalOfferIcon} />
          </Link>
          <Link to="/trash">
            <SidebarItem title="trash" Icon={DeleteIcon} />
          </Link>
        </div>
      </div>
      <footer>
        <p>get started</p>
        <div className="close-nav">
          <DoubleArrowIcon />
        </div>
      </footer>
    </div>
  );
}

export default Sidebar;
