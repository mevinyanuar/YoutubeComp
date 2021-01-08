import React, { Component } from "react";
import YouTubeComp from "../../YouTubeComp/YouTubeComp";
import Product from './Product/Product'

class Home extends Component {
  render() {
    return (
      <div>
        {/* <YouTubeComp
          time="7.12"
          title="lofi playlist"
          desc="1x ditonton 2 hari yang lalu"
        />
        <YouTubeComp
          time="9.10"
          title="lofi music"
          desc="1x ditonton 2 hari yang lalu"
        />
        <YouTubeComp
          time="6.22"
          title="lofi chill"
          desc="1x ditonton 2 hari yang lalu"
        />
        <YouTubeComp
          time="5.42"
          title="lofi jazz"
          desc="1x ditonton 2 hari yang lalu"
        />
        <YouTubeComp /> */}
        <p>Counter</p>
        <hr/>
        <Product />
      </div>
    );
  }
}

export default Home;
