import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Card from "./Cards";
import Mdata from "./Mdata";
ReactDOM.render(
  <>
    <header>List of top 5 Selena Gomez movies</header>

    {Mdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          mtitle={val.title}
          mname={val.name}
          mlink={val.link}
        />
      );
    })}
  </>,
  document.getElementById("root")
);
