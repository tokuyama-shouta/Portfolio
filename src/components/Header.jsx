import React from "react";
import "../App.css";
import Icon from "../img/prf.jpg";
import CloudIcon from "../img/cloud.png";
import Yajirusi from "../img/yajirusi.png";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="header-wrapper-contents">
          <div className="cloud-img">
            <img src={CloudIcon} alt="アイコン" />
            <div className="header-text-box">
              <p>
                徳山翔太と申します。
                <br />
                ReactでPortfolioを作成してみました！
                <br />
                是非、最後までご覧ください！
              </p>
            </div>
          </div>
          <div className="icon-img">
            <img src={Icon} alt="アイコン" />
          </div>
        </div>
      </div>
      <div className="yajirusi">
        <img src={Yajirusi} alt="矢印" />
      </div>
    </header>
  );
};

export default Header;
