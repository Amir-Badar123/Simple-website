import React from "react";
// import web from "../src/img/images.jpeg";
import { Link } from "react-router-dom";

const Common = (props) => {
  return (
    <section id="header" className="d-flex   align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-20 mx-auto">
            <div className="row"> 

            
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                              <h1>{props.name}<strong className="brand-name"> Badar Technical</strong></h1>
              <h2 className="my-3">We are the team of talented developers making websites</h2>
              <div className="mt-3">
                                  <Link className="btn-get-started" to={props.visit}>{props.btname}</Link>
              </div>

            </div>
            <div className="col-lg-6 mr-auto header-img">
              <img src={props.imgsrc} className="img-fluid animated" alt="home-img"></img>
            </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Common;
