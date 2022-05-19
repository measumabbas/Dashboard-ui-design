import React from "react";
import { BsChevronDoubleDown } from "react-icons/bs";
import { MdRefresh } from "react-icons/md";
import { MemberData } from "./MemberData";
import "./Memberships.css";
function Memberships(props) {
  return (
    <>
      <div className="memberships" id="memberships">
        <div className="membership_content">
          <div className="membership_count">
            <div>Memberships counts</div>
            <div>
              <BsChevronDoubleDown />
            </div>
          </div>

          {MemberData.map((items, key) => (
            <div className="MemberShip-data">
              <img src={items.icon} alt="img" className="membership-image" />
              <div>{items.gmail}</div>
              <div>{items.period}</div>
            </div>
          ))}
          <div className="membership_button">
          <button >
            updated list ? <MdRefresh className="Refresh_icons" />{" "}
          </button>
          </div>
         
        </div>

        <div className="Memberships_status">
          <div className="MemberShip_header">
            <div> Membership Status</div>
            <div className="Membership_color"> 60000/300000 Users</div>
            <div>
              {" "}
              <BsChevronDoubleDown />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Memberships;
