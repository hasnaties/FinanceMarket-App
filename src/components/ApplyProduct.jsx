import percentIcon from '../../images/icons/percent.png';

const ApplyProduct = () => {

  function handleSubmit(e) {
    console.log(e);
  }

  return (
    <div className="apply-product">
      <h3>Application Form</h3>
      <div id="div-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="financeAmount">Finance Amount</label>
          <input name="financeAmount" type="text" placeholder="Finance Amount" required />

          <label htmlFor="bankName">POS Bank Name (Invest)</label>
          <input name="bankName" type="text" />
          <p className="sub-text">This is the Bank nameWhere the POS is setup</p>

          <label htmlFor="tenor">Finance Tenor</label>
          <select name="tenor" required>
            <option value={3}>3 Months</option>
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
            <option value={72}>72 Months</option>
          </select>
          <p className="sub-text">Maximum Finance Tenor: 72 Months</p>

          <label htmlFor="installment">Installment Date</label>
          <input name="installment" type="date" required />

          <label htmlFor="profitSharing">Profit Sharing Percentage</label>
          <div className='input-icon'>

            <input className="input-disable" name="profitSharing" type="text" value="1" disabled />
            <span>
              <img src={percentIcon} alt="Icon" />
            </span>
          </div>

          <label htmlFor="monthlyInstallment">Monthly Installment</label>
          <input className="input-disable" name="monthlyInstallment" type="text" disabled />

          <div id='credit-report'>
            <p id='label'>Credit Report</p>
            <div>
              <p>File Name</p>
              <p>Size</p>
            </div>
            <input name="credit-report" id='credit-report' type="file" required />
          </div>

          <div id='btn'>
            <button id='btn-secondary'>Cancel</button>
            <button type="submit" id='btn-primary'>Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ApplyProduct;