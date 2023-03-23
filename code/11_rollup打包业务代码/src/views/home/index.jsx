import React, { memo, useEffect } from "react";

import { getSongHotMenu } from "../../api/index";
import HomeImg from "../../assets/imgs/hai.jpg";

const Home = memo(() => {
  useEffect(() => {
    getSongHotMenu().then((res) => {
      console.log(res);
    });
  });

  return (
    <div>
      <h1 className="icon-ashbin">Home Page</h1>
      <img src={HomeImg} alt="" />
    </div>
  );
});

export default Home;
