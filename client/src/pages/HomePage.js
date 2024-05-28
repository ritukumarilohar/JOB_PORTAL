import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
const HomePage = () => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src="/assets/videos/a3.mp4" type="video/mp4" />
      </video>

      <div className="content">
        <div className="card w-25">
          {/* <video autoPlay muted loop id="abc">
            <source src="/assets/images/logo/C.mp4"  weight="60" height="30" type="video/mp4" />
          </video> */}
          <div style={{ marginLeft: "100px" }}>
          <img src="/assets/images/logo/C.png" width="60%" height="10%" alt="logo" />
          </div>
          <hr />
          <div className="card-body" style={{ marginTop: "-60px" }}>
            <h5 className="card-title">Indias No #1 Carrer Platform</h5>
            
            <p className="card-text">
            Craft your career with <b>Career Crafter</b> : where talent meets opportunity.
            </p>
            <div className="d-flex justify-content-between mt-5" style={{margin :"0px"}} >
              <p>
                Not a user Register <Link to="/register">Here !</Link>{" "}
              </p>
              <p>
                <Link to="/login" className="myBtn">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
