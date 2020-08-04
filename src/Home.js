import React from "react";
import web from "../src/img/images.jpeg"
// import { Link } from "react-router-dom"
import Common from "./Common"

const Home = () => {
  return (
    <div>
      <Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started"/>/>
    </div>
   
  );
};

export default Home;
