import React from "react";
import "./AllNotes.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SortIcon from "@material-ui/icons/Sort";
import AspectRatioRoundedIcon from "@material-ui/icons/AspectRatioRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import TodoNotes from "./TodoNotes";
import MeetingNotes from "./MeetingNotes";
import DailyReflection from "./DailyReflection";
import NotesFooter from "./NotesFooter";

function AllNotes() {
  return (
    <div className="allnotes">
      <section className="allnotes--sectiona">
        <div className="allnotes--fixed">
          <h2>all notes</h2>
          <div className="allnotes--split">
            <p>4 notes</p>
            <div className="allnotes--split--icon">
              <div className="notebook--rotate">
                <ArrowRightAltIcon />
              </div>
              <div>
                <SortIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="allnotes--sections">
          <div>
            <h4>to-do</h4>
            <p>Today Start a to-do list Tomorrow This Week Someday</p>
            <p>Sep 12</p>
          </div>
          <div>
            <h4>to-do</h4>
            <p>Today Start a to-do list Tomorrow This Week Someday</p>
            <p>Sep 12</p>
          </div>

          <div>
            <h4>meeting note</h4>
            <p>
              Date & Time Goal Attendees me Agenda Notes Action Items Assignee
              Status Clean up meeting...
            </p>
            <p>Sep 11</p>
          </div>
          <div>
            <h4>Daily Reflection</h4>
            <p>What went well? What didn't go well What can I improve on?</p>
            <p>Sep 11</p>
          </div>
          <div>
            <h4>Untitled</h4>
            <p>Sep 12</p>
          </div>
        </div>
      </section>
      <section className="allnotes--sectionb">
        <div className="note--header">
          <div className="note--header--row1">
            <div className="note--headerleft">
              <div className="note--expand">
                <AspectRatioRoundedIcon />
              </div>
              <div className="note--title">
                <MenuBookRoundedIcon />
                <h4>my notebook</h4>
              </div>
            </div>
            <div className="note--headerright">
              <h4>Only you</h4>
              <button className="share--btn">share</button>
              <div className="note--headerleft--icon">
                <MoreHorizRoundedIcon />
              </div>
            </div>
          </div>
          <div className="note--header--row2">
            <p>Last edited on Sep 14, 2020</p>
            <div>
              <div>
                <AddCircleRoundedIcon />
              </div>
              <p>Insert</p>
              <div>
                <ExpandMoreRoundedIcon />
              </div>
            </div>
          </div>
        </div>

        {/* CLICKED */}
        <div className="section--clicked">
          {/* <TodoNotes /> */}
          {/* <MeetingNotes /> */}
          <DailyReflection />
        </div>
        <div className="footer--section">
          <NotesFooter />
        </div>
      </section>
    </div>
  );
}

export default AllNotes;
