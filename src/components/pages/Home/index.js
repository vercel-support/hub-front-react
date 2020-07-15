import React from "react";
import { OneColumn } from "../../templates";
import { BannerSlider } from "../../molecules";

const Home = ({ content }) => (
  <OneColumn content={content}>
    <BannerSlider />
  </OneColumn>
);

export default Home;
