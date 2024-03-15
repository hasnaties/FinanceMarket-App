import BlogList from "./BlogList";
import LocationPath from "./LocationPath";
import ProductList from "./ProductList";

const RightSide = ({ toggleStyle }) => {

  return (
    <div
      id="right-side"
      className="right-side"
      style={toggleStyle}
    >
      <LocationPath />
      <ProductList />
      <BlogList />
    </div>
  );
}

export default RightSide;