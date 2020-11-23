import React from "react";
import "../App.css";
import twitterIcon from "../img/twitter.jpg";
import githubIcon from "../img/github.png";
import Icon from "../img/prf.jpg";
import Hukidasi from "../img/huki2.png";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <footer className="footer">
      <h2>お問い合わせはこちら</h2>
      <p className="footer-wrapper-text">
        ※お問い合わせはTwiiterのDMからお願いします。
      </p>
      <div className="footer-wrapper">
        <div className="footer-wrapper-box">
          {/* eslint-disable-next-line */}
          <a href="https://twitter.com/tststs1031" target="_blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
          <p className="footer-wrapper-text">Twitter</p>
          <p className="footer-wrapper-text">別タブで開きます。</p>
        </div>
        <div className="footer-wrapper-box">
          {/* eslint-disable-next-line */}
          <a href="https://github.com/tokuyama-shouta" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
          <p className="footer-wrapper-text">GitHub</p>
          <p className="footer-wrapper-text">別タブで開きます。</p>
        </div>
      </div>
      <div className="skill-coment-box">
        <div className="skill-coment-img">
          <img src={Icon} alt="アイコン" />
        </div>
        <div className="skill-coment-img1">
          <img src={Hukidasi} alt="吹き出し" />
          <div className="skill-coment-img1-text">
            <p>
              貴重なお時間の中
              <br />
              私のポートフォリオサイトを
              <br />
              最後までご覧いただきまして、
              <br />
              本当にありがとうございました。
              <br />
              全力で頑張りたいと思いますので、
              <br />
              少しでも気になっていただけましたら
              <br />
              ご連絡いただけると嬉しいです。
            </p>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <button onClick={scrollToTop} className="footer-btn">
          Topへもどる
        </button>
        <p className="btn-box-text">
          Created by Tokuyama Shouta in November 2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
