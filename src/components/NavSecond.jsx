import NavPairNotification from "./NavPairNotification";
import NavPair from "./NavPair";

import notificationIcon from "../../images/icons/notification.png";
import settingsIcon from "../../images/icons/settings.png";

const NavSecond = ({ notification }) => {
  return (
    <div id="div-nav-second">
      <NavPairNotification imageSrc={notificationIcon} navTitle={"Notifications"} notification={notification} />
      <NavPair imageSrc={settingsIcon} navTitle={"Settings"} />
    </div>
  )
}

export default NavSecond;