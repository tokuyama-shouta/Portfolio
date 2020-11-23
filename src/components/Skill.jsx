import React from "react";
import "../App.css";
import Icon from "../img/prf.jpg";
import Hukidasi from "../img/huki2.png";

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-profile-box">
        <div className="skill-profile">
          <h2>- 自己PR -</h2>
          <p>
            私は前職で液晶ガラスの製造会社に高校卒業後から
            <br />
            ６年間勤務していました。
            <br />
            チームで活動する機会が多く、
            <br />
            良くコミュニケーションを
            <br />
            取り合いながら業務に勤めていました。
            <br />
            安全活動やQC活動という物があり、
            <br />
            「職場環境をより良くしていく」を目標に
            <br />
            チームで意見交換をして改善していくという事も
            <br />
            行っておりました。
            <br />
            前職で得たコミュニケーション能力を活かして
            <br />
            エンジニアとしてチームで開発したサービスが
            <br />
            世の中に進出し、貢献できれば
            <br />
            良いなと思いプログラミングを日々学習し、
            <br />
            就職活動をしております。
          </p>
        </div>
        <div className="skill-profile">
          <h2>- エンジニアへの志望理由 -</h2>
          <p>
            私は「自分が携わったサービスで世の中に貢献したい！」と思い
            <br />
            プログラミングの学習をはじめました。
            <br />
            <br />
            その中でもフロントエンドエンジニアを志望している理由は
            <br />
            フロントは技術やデザインの移り変わりが早い分野という事を学習しているうちに知りました。
            <br />
            だからこそチャレンジしたいと思いました。
            <br />
            私自身を成長させより良いサービス開発やサイト制作をする、そして社会に貢献したいと思っています。
            <br />
            私は実務未経験ですが、
            <br />
            学習意欲には自身があります。
            <br />
            勉学に励み、貢献できるよう頑張りますので
            <br />
            よろしくお願い致します。
          </p>
        </div>
      </div>
      <h2>学習してきた技術</h2>
      <div className="skill-container-box">
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>HTML＆CSS</h3>
        </div>
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>JavaScript</h3>
        </div>
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>jQuery</h3>
        </div>
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>TypeScript</h3>
        </div>
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>React</h3>
        </div>
        <div className="skill-box">
          <p>フロントエンド</p>
          <h3>Next.js</h3>
        </div>
        <div className="skill-box">
          <p>管理ツール</p>
          <h3>Git GitHub</h3>
        </div>
        <div className="skill-box">
          <p>ツール</p>
          <h3>Firebase</h3>
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
              私はプログラミングの学習を
              <br />
              Progateからスタートし、
              <br />
              UdemyやYouTubeなどの動画教材を使い
              <br />
              独学で学習しています。
              <br />
              これからもスキルアップを目指し、
              <br />
              積極的に学習していきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
