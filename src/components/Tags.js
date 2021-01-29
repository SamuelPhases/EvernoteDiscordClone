import React from "react";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SortIcon from "@material-ui/icons/Sort";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import SearchIcon from "@material-ui/icons/Search";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import TrendingFlatRoundedIcon from "@material-ui/icons/TrendingFlatRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import "./Tags.css";

function Tags() {
  return (
    <div className="tags">
      <div className="tags__container">
        <div className="tags__header">
          <h2>Tags</h2>
          <div className="tags__icons">
            <div className="tags--rotateIcon">
              <LocalOfferIcon />
            </div>
            <div className="re-arrange">
              <div className="tags--rotate">
                <ArrowRightAltIcon />
              </div>
              <div>
                <SortIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="tags__search">
          <input type="text" placeholder="Find tags..." />
          <SearchIcon />
        </div>
        <div className="tag__body">
          <div className="tag__icon">
            <div>
              <CheckRoundedIcon />
            </div>
            <div>
              <TrendingFlatRoundedIcon />
            </div>
            <div>
              <AddRoundedIcon />
            </div>
            <div className="tag__main">
              <LocalOfferIcon />
            </div>
          </div>
          <div className="tag__text">
            <h2>Find notes faster with tags</h2>
            <p>Click the "add tag" button above to create your first tag.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tags;
