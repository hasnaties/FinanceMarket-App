import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../API_Requests/product";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, [products]);

  return (
    <>
      {/* Section Heading */}
      <div id="menu-heading">
        <h2 id="menu-heading-text">Finance Products</h2>
      </div>

      {/* Product-list */}
      <div id="v-list">
        {products.map(({
          _id,
          image,
          ...rest
        }) => {
          return (
            <ProductItem
              key={_id}
              imageSrc={image ? (import.meta.env.VITE_STATIC_PATH + image) : null}
              details={{ ...rest }}
            />
          );
        })}
      </div>
    </>
  )
}

export default ProductList;