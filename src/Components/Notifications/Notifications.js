import React from "react";
import "./Notifications.css";
import { BsChevronDoubleDown } from "react-icons/bs";
function Notifications(props) {
  return (
    <div className="notifications" id="notifications">
      <div className="memberships" id="memberships">
        <div className="membership_content">
          <div className="membership_count">
            <div>Notfication</div>
            <div>All</div>
            <div>
              <BsChevronDoubleDown />
            </div>
          </div>

          <div className="Notification_DAta">
            <div className="Data">
              <p className="padd_bottom">
                <span></span> <span className="span_color">Someone</span> just suscribed for membership
              </p>
              <p className="padd_bottom">
              <span></span> <span className="span_color">Logins</span> statistaic for the day have been updated
              </p>

              <p className="padd_bottom">
                <span></span> A new <span className="span_color">Complaint</span> just came in 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="notification_center">
        <div className="Notification_Container">
          <div className="Notification_Flex">
            <h5>Notifications</h5>
            <p>All</p>
            <p>
              <BsChevronDoubleDown />
            </p>
          </div>
        </div> */}
    </div>
    // </div>
  );
}

export default Notifications;
