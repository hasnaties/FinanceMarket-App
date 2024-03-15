import ProductItemDetails from "./ProductItemDetails";
import ProductItemButtons from "./ProductItemButtons";
import ProductNoImage from "./ProductNoImage";

const ProductItem = ({ imageSrc, details }) => {

  const image = imageSrc ? (<img id="card-img" src={imageSrc} alt="item" />) : (<ProductNoImage />);

  return (
    <div className="div-item">

      {/* Image */}
      {image}

      {/* Details */}
      <ProductItemDetails details={details} />

      {/* Buttons */}
      <ProductItemButtons />

    </div>
  )
}

export default ProductItem;