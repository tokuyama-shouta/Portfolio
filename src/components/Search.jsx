import "../App.css";
import React, { useEffect, useState } from "react";
import Icon from "../img/prf.jpg";
import Hukidasi from "../img/huki2.png";

const Search = () => {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("dog");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.results);
      });
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(text);
    setText("");
  };

  return (
    <div className="App">
      <h2>
        画像検索アプリです！
        <br />
        何か入力してみてください！
      </h2>
      <div className="main">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="ここに入力"
          />
          <button className="pushbtn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container">
        {images.map((image) => (
          <div className="card" key={image.id}>
            <img src={image.urls.regular} alt="" className="card-img" />
            <div className="card-content">
              <div className="card-title">{image.alt_description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="skill-coment-box" style={{ marginTop: "300px" }}>
        <div className="skill-coment-img">
          <img src={Icon} alt="アイコン" />
        </div>
        <div className="skill-coment-img1">
          <img src={Hukidasi} alt="吹き出し" />
          <div className="skill-coment-img1-text">
            <p>
              Reactで画像検索アプリを
              <br />
              作成しました。
              <br />
              是非何か入力してみてください！
              <br />
              使用技術はReact/React Hooks
              <br />
              WebApiは Unsplashの物を
              <br />
              使用しています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
