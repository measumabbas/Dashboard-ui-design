import React from "react";
import "./Settings.css";
import pic from '../../images/img.jpg'
import {BiUserPlus} from 'react-icons/bi'
import {RiSettingsLine} from 'react-icons/ri'
import {AiFillUnlock} from 'react-icons/ai'

function Settings(props) {
  return <div className="settings" id="settings">
    <div className="settings-container">
      <div className="settings-container-left">

          <div className="setting-header">
            <p>Settings</p>
          </div>

          <div className="settings-middle">
          <BiUserPlus/>
            <p>Add new User</p>
          </div>
          <div className="settings-bottom">
            <AiFillUnlock/>
            <p>Change Password</p>
          </div>
      </div>

      <div className="settings-container-right">
        <div className="settings-right-header">
          <BiUserPlus/>
          <p>Add new User</p>
        </div>
        <div className="settings-users">
          <div className="setting-user">
              <div className="setting-user-profile">

                <img src={pic} alt="" />
                <p>Measum Abbas</p>
              </div>
              <p>You</p>
              <RiSettingsLine/>
          </div>
        </div>
        <div className="settings-add-user">
          <p style={{color:'#000',fontSize:'18px',fontWeight:'bold'}}>+</p>
          <p>Add new user</p>
        </div>
      </div>
    </div>
  </div>;
}

export default Settings;
