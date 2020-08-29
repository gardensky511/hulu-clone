import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon">
          <HomeIcon />
          <p className="icon__text header__icon--active">Home</p>
        </div>
        <div className="header__icon">
          <FlashOnIcon />
          <p className="icon__text">Trending</p>
        </div>
        <div className="header__icon">
          <LiveTvIcon />
          <p className="icon__text">Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibraryIcon />
          <p className="icon__text">Collection</p>
        </div>
        <div className="header__icon">
          <SearchIcon />
          <p className="icon__text">Search</p>
        </div>
        <div className="header__icon">
          <PersonOutlineIcon />
          <p className="icon__text">Account</p>
        </div>
      </div>
      <img
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        alt="LOGO"
        className="header__logo"
      />
    </div>
  );
}

export default Header;
