import React from "react";
import web from "../src/img/image7.png";
// import { Link } from "react-router-dom";
import Common from './Common'

const About = () => {
  return (
    <div>
      <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
    </div>
  );
};

export default About;
