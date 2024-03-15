const NavPairNotification = ({ imageSrc, navTitle }) => {
  return (
    <>
      <div className="nav-pair">
        <img id="icon-img" src={imageSrc} alt="NavIcon" />
        <p id="bar-nav-text">{navTitle}</p>

        <div id="count">
          <p id="count-text">03</p>
        </div>
      </div>
    </>
  )
}

export default NavPairNotification;