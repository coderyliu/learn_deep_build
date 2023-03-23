import React, { memo, useEffect } from "react";
import { getTodos } from "../utils/api";
import Logo from '../assets/imgs/hai.jpg'

const Home = memo(() => {
  useEffect(() => {
    getTodos().then((res) => {
      console.log(res);
    });
  }, []);

  return <div>
    <h1>Home Page</h1>
    {/* 第一种方案不行 */}
    {/* <img src={require('../assets/imgs/hai.jpg')}></img> */}
    <img src={Logo} />
  </div>;
});

export default Home;
