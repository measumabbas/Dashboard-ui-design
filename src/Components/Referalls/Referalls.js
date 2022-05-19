import React from "react";
import "./Referalls.css";
import pic from '../../images/img.jpg'
import {BsChevronDoubleDown} from 'react-icons/bs'
import {GiHazardSign} from 'react-icons/gi'
import {BiChevronDown} from 'react-icons/bi'

function Referalls(props) {
  return <div className="referalls" id="referalls">
    <div className="main-container">
      <div className="referral-left">
          <div className="upper">
                <div className="upper-header">
                  <p>Referral</p>
                  <BsChevronDoubleDown/>
                </div>

                <div className="lower-main">

                  <div className="upper-content">
                    <div className="upper-img-content">
                      <img src={pic} alt="" />
                      <p><a href="/">xxxx@gmail.com</a> Just reffered</p>
                    </div>
                    <a className="link" href="/">xxxx@yahoo.com</a>
                  </div>
                  <div className="upper-content">
                    <div className="upper-img-content">
                      <img src={pic} alt="" />
                      <p><a href="/">xxxx@gmail.com</a> Just reffered</p>
                    </div>
                    <a className="link" href="/">xxxx@yahoo.com</a>
                  </div>
                  <div className="upper-content">
                    <div className="upper-img-content">
                      <img src={pic} alt="" />
                      <p><a href="/">xxxx@gmail.com</a> Just reffered</p>
                    </div>
                    <a className="link" href="/">xxxx@yahoo.com</a>
                  </div>
                  <div className="upper-content">
                    <div className="upper-img-content">
                      <img src={pic} alt="" />
                      <p><a href="/">xxxx@gmail.com</a> Just reffered</p>
                    </div>
                    <a className="link" href="/">xxxx@yahoo.com</a>
                  </div>

                  <a className="btn" href="/">See All</a>
                </div>
          </div>
          <div className="lower">
                <div className="lower-header">
                   <GiHazardSign/>
                    <p>Referral Bonus</p>
                </div>
                <div className="lower-down-content">
                  <p>The Referral Bonus is ongoing would you like to stop it ?</p>
                  <div>
                    <p>ON</p>
                    <p>OFF</p>
                  </div>
                </div>
          </div>
      </div>
      <div className="refferal-right">
            <div className="top">
              <div className="top-header">
                <p>Referral Stats</p>
                <a href="/">18000/30000 users</a>
                <BsChevronDoubleDown/>
              </div>
              <div className="top-content">
                <p><a href="/">60%</a> of users have referred their friends</p>
              </div>
            </div>

            <div className="bottom">
              <div className="bottom-header">
                <p>Top Referrals</p>
                <p>All
                  <BiChevronDown/>
                </p>
                <BsChevronDoubleDown/>
              </div>
              <div className="bottom-body">
                <div className="bottom-body-item">
                  <p>1</p>
                  <div className="bottom-img">
                    <img src={pic} alt="" />
                    <p>maisumabbas.charbu@gmai.com</p>
                  </div>
                    <a href="/">view Details</a>
                </div>
                <div className="bottom-body-item">
                  <p>2</p>
                  <div className="bottom-img">
                    <img src={pic} alt="" />
                    <p>maisumabbas.charbu@gmai.com</p>
                  </div>
                    <a href="/">view Details</a>
                </div>
                <div className="bottom-body-item">
                  <p>3</p>
                  <div className="bottom-img">
                    <img src={pic} alt="" />
                    <p>maisumabbas.charbu@gmai.com</p>
                  </div>
                    <a href="/">view Details</a>
                </div>
              </div>
            </div>
      </div>
    </div>
  </div>;
}

export default Referalls;

// BsChevronDoubleDown