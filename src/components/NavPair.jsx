const NavPair = ({ imageSrc, navTitle }) => {
  return (
    <>
      <div className="nav-pair">
        <img id="icon-img" src={imageSrc} alt="NavIcon" />
        <p id="bar-nav-text">{navTitle}</p>
      </div>
    </>
  )
}

export default NavPair;