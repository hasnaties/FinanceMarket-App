const ProductItemDetails = ({ details }) => {
  return (
    <div className="div-item-text">
      <h3>{details.title}</h3>
      <p id="card-p">{details.description}</p>
      <div className="double-pair">
        <div className="single-pair">
          <p className="heading-second">Product</p>
          <h6>{details.productName}</h6>
        </div>
        <div className="single-pair">
          <p className="heading-second">Max Finance Amount</p>
          <h6>{details.maxAmount}</h6>
        </div>
      </div>

      <div className="double-pair">
        <div className="single-pair">
          <p className="heading-second">Tenor</p>
          <h6>{details.tenor} Months</h6>
        </div>
        <div className="single-pair ratepa">
          <p className="heading-second">Rate p.a</p>
          <h6>{details.rate}%</h6>
        </div>
      </div>


    </div>
  )
}

export default ProductItemDetails;