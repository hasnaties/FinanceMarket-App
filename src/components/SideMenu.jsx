import { useState } from "react";
import NavPair from "./NavPair";
import NavPairNotification from "./NavPairNotification";

//content
import profile from '../content/profile.json';

//Icons
import hamBurgerIcon from "../../images/icons/hamburger-menu.png";
import homeIcon from "../../images/icons/home.png";
import barsIcon from "../../images/icons/bars.png";
import paperIcon from "../../images/icons/paper.png";
import notificationIcon from "../../images/icons/notification.png";
import settingsIcon from "../../images/icons/settings.png";
import menuIcon from "../../images/icons/menu.png";
import logoutIcon from "../../images/icons/logout.png";

const SideMenu = ({ toggleStyle, handleToggle }) => {

  const [dropdownStyle, setDropdownStyle] = useState({ display: '' });

  //dropdown menu
  function dropdown() {
    if (dropdownStyle.display === '') {
      setDropdownStyle({ display: 'flex' });
    } else {
      setDropdownStyle({ display: '' });
    }
  }

  // toggle menu switch
  function toggle() {
    handleToggle();
  }

  return (
    <div>
      {/* Side Menu */}

      {/* Menu toggle */}

      <div id="menu-toggle" className="menu-toggle" onClick={toggle}>
        <img id="ham-menu" src={hamBurgerIcon} alt="Ham-Menu" />
      </div>


      <div
        id="side-menu"
        className="side-menu"
        style={toggleStyle}
      >
        <div id="title-div">
          <h2 id="title-heading">Finance Market</h2>
        </div>

        {/* Nav */}
        <div className="nav-menu">

          <NavPair imageSrc={homeIcon} navTitle={"Dashboard"} />
          <NavPair imageSrc={barsIcon} navTitle={"Finance Products"} />
          <NavPair imageSrc={paperIcon} navTitle={"My Applications"} />

          {/* Remaining Nav */}
          <div id="div-nav-second">
            <NavPairNotification imageSrc={notificationIcon} navTitle={"Notifications"} />
            <NavPair imageSrc={settingsIcon} navTitle={"Settings"} />
          </div>
        </div>


        <hr />

        {/* Profile and Details */}
        <div id="profile">

          <div id="dp">
            <p id="dp-text">{profile.initials}</p>
          </div>

          <div id="profile-text-details">
            <p id="profile-name">{profile.name}</p>
            <p id="profile-title">{profile.type}</p>
          </div>

          {/* Drop down button */}
          <div id="btn-dropdown" onClick={dropdown}>
            <img id="icon-menu" src={menuIcon} alt="menu" />
          </div>

          {/* Drop down Menu */}
          <div id="drop-down" style={dropdownStyle}>
            <img id="icon-img-logout" src={logoutIcon} alt="logout" />
            <p id="text-logout">Log out</p>
          </div>
        </div>
        <p id="last-login">Last Login {profile.lastActive} ago.</p>


      </div>

    </div>
  )
};

export default SideMenu;