import React from "react";

import Heart from "../../assets/Heart";
import "./Post.css";

function Posts() {
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Based on your last search</span>
          <button className="viewMoreBtn">
            <span>View more</span>
          </button>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img
                src="https://apollo-singapore.akamaized.net:443/v1/files/lgqmdmvue6fl3-IN/image;s=272x0"
                alt=""
              />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
              <div className="date">
                <span>DEC 02</span>
              </div>
              <div className="place">
                <span>Chandakunnu, Nilambur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
              <div className="date">
                <span>DEC 02</span>
              </div>
              <div className="place">
                <span>Chandakunnu, Nilambur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
