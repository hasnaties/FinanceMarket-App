const NavPairNotification = ({ imageSrc, navTitle, notification }) => {
  return (
    <>
      <div className="nav-pair">
        <img id="icon-img" src={imageSrc} alt="NavIcon" />
        <p id="bar-nav-text">{navTitle}</p>

        <div id="count">
          <p id="count-text">{notification.length}</p>
        </div>
      </div>
    </>
  )
}

export default NavPairNotification;