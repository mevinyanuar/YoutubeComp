import React from "react";
import './YouTubeComp.css';

const YouTubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://media.giphy.com/media/RMwgs5kZqkRyhF24KK/giphy.gif" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Lofi Default',
    desc: "desc is here"
}

export default YouTubeComp;
