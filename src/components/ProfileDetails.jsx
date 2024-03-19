import { useEffect, useState } from 'react';
import menuIcon from "../../images/icons/menu.png";
import logoutIcon from "../../images/icons/logout.png";

import { requestGetProfile, requestUpdateLastActive } from '../API_Request/profileReq';
import { lastActiveString, setInitials } from '../utils/utilProfile';
import NavSecond from './NavSecond';

const profileDefault = {
  fullName: "User",
  profileType: "User",
  lastActive: Date.now(),
  initials: "U",
  notification: []
}

const ProfileDetails = () => {
  const [profile, setProfile] = useState(profileDefault);
  const [dropdownStyle, setDropdownStyle] = useState({ display: '' });

  //dropdown menu
  function dropdown() {
    if (dropdownStyle.display === '') {
      setDropdownStyle({ display: 'flex' });
    } else {
      setDropdownStyle({ display: '' });
    }
  }
  //logout
  function handleLogout() {
    requestUpdateLastActive().then((res) => {
      console.log(res.data);
    })
  }

  useEffect(() => {
    requestGetProfile().then((res) => {
      res.data.initials = setInitials(res.data.fullName);
      setProfile(res.data);
    }).catch((err) => {
      console.log(err);
      setProfile(profileDefault);
    });
  }, [])

  return (
    <>
      <NavSecond notification={profile.notification} />

      <hr />

      <div>
        <div id="profile">

          <div id="dp">
            <p id="dp-text">{profile.initials}</p>
          </div>

          <div id="profile-text-details">
            <p id="profile-name">{profile.fullName}</p>
            <p id="profile-title">{profile.profileType}</p>
          </div>

          {/* Drop down button */}
          <div id="btn-dropdown" onClick={dropdown}>
            <img id="icon-menu" src={menuIcon} alt="menu" />
          </div>

          {/* Drop down Menu */}
          <div id="drop-down" style={dropdownStyle} onClick={handleLogout}>
            <img id="icon-img-logout" src={logoutIcon} alt="logout" />
            <p id="text-logout">Log out</p>
          </div>
        </div>
        <p id="last-login">{lastActiveString(profile.lastActive)}</p>
      </div>
    </>
  )
}

export default ProfileDetails;