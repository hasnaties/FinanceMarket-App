import NavPair from "./NavPair";

//Icons
import hamBurgerIcon from "../../images/icons/hamburger-menu.png";
import homeIcon from "../../images/icons/home.png";
import barsIcon from "../../images/icons/bars.png";
import paperIcon from "../../images/icons/paper.png";
import ProfileDetails from "./ProfileDetails";

const SideMenu = ({ toggleStyle, handleToggle }) => {


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

        </div>




        {/* Profile and Details */}
        <ProfileDetails />

      </div>

    </div>
  )
};

export default SideMenu;