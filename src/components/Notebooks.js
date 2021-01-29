import React from "react";
import "./Notebooks.css";
// material-ui
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";
import SortRoundedIcon from "@material-ui/icons/SortRounded";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import ArrowRightRoundedIcon from "@material-ui/icons/ArrowRightRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import SortIcon from "@material-ui/icons/Sort";
import ListAltRoundedIcon from "@material-ui/icons/ListAltRounded";

function Notebooks() {
  return (
    <div className="notebooks">
      <div className="notebooks--container">
        <div className="notebooks--header">
          <h2>Notebooks</h2>
          <div className="notebook--search">
            <input type="text" placeholder="Find Notebooks..." />
            <div className="notebook--icon">
              <SearchRoundedIcon />
            </div>
          </div>
        </div>
        <div className="notebook--table">
          <div className="notebook--tabletitle">
            <div className="notebook--tableleft">
              <h4>My notebook list</h4>
            </div>
            <div className="notebook--tableright">
              <NoteAddRoundedIcon />
              <h4>New Notebook</h4>

              <div className="notebook-arrange">
                <div className="notebook--rotate">
                  <ArrowRightAltIcon />
                </div>
                <div>
                  <SortIcon />
                </div>
              </div>
            </div>
          </div>
          {/* TABLE */}
          <table>
            <tr>
              <th>
                <div className="notebook--header">
                  <h5>title</h5>
                  <ArrowUpwardRoundedIcon />
                </div>
              </th>

              <th>created by</th>
              <th>updated</th>
              <th>shared with</th>
              <th>actions</th>
            </tr>
            <tr>
              <td>
                <div className="notebook--toggle">
                  <div className="notebook--click">
                    <ArrowDropDownRoundedIcon />
                  </div>
                  <p>My Notebook(5)</p>
                </div>
              </td>
              <td>
                <p>Lore Ips</p>
              </td>
              <td>
                <p>1 hour ago</p>
              </td>
              <td>
                <p>-</p>
              </td>
              <td>
                <MoreHorizRoundedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <div className="notebook--togglecontent">
                  <div className="notebook--togglecontentTitle">
                    <div>
                      <ListAltRoundedIcon />
                      <p>Daily Reflection</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>Lore Ips</p>
              </td>
              <td>
                <p>Yesterday</p>
              </td>
              <td>
                <p>Only you</p>
              </td>
              <td>
                <MoreHorizRoundedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <div className="notebook--togglecontent">
                  <div className="notebook--togglecontentTitle">
                    <div>
                      <ListAltRoundedIcon />
                      <p>meeting note</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>Lore Ips</p>
              </td>
              <td>
                <p>Yesterday</p>
              </td>
              <td>
                <p>Only you</p>
              </td>
              <td>
                <MoreHorizRoundedIcon />
              </td>
            </tr>
            <tr>
              <td>
                <div className="notebook--togglecontent">
                  <div className="notebook--togglecontentTitle">
                    <div>
                      <ListAltRoundedIcon />
                      <p>To-Do</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p>Lore Ips</p>
              </td>
              <td>
                <p>Yesterday</p>
              </td>
              <td>
                <p>Only you</p>
              </td>
              <td>
                <MoreHorizRoundedIcon />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notebooks;
