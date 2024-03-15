import homeIcon from '../../images/icons/home.png';
import arrowIcon from '../../images/icons/greater-than.png';

const LocationPath = () => {
  return (
    <div className="nav-address">
      <img id="icon-address-home" src={homeIcon} alt="Home Icon" />
      <img id="icon-address-gt" src={arrowIcon} alt="greater-than" />
      <p id="address-name">Finance Products</p>
    </div>
  )
}

export default LocationPath;