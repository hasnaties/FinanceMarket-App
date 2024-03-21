const ApplyExtra = () => {
  return (
    <div id="extra">
      <div id="first-box">
        <h4>Financing Details</h4>
        <div id="product-details">
          <div id="pair-row">
            <div>
              <p>Finance Type</p>
              <h6>POS Finance</h6>
            </div>
            <div id="second-row">
              <p>Maximum Tenor</p>
              <h6>{"72 Months"}</h6>

            </div>
          </div>

          <div id="pair-row" className="pair-second">
            <div>
              <p>Maximum Finance</p>
              <h6>{"80,000,000.00"} SAR</h6>
            </div>
            <div id="second-row">
              <p>Rate p.a</p>
              <h6>{"1"}%</h6>
            </div>
          </div>
        </div>
      </div>


      <div id="second-box">
        <button>Learn More</button>
        <p>Finance Options</p>
        <h5>Boost your business with an amount of up to SAR 7.5 million</h5>

        <ul>
          <li>Finance tenure up to 60 months</li>
          <li>Finance amount starting as low as SAR 50k up to SAR 7.5 MM</li>
          <li>Equal repayment through monthly installments.</li>
        </ul>
      </div>
    </div>
  )
}

export default ApplyExtra;