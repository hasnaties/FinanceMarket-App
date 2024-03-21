import { useRef, useState } from "react";
import DatePicker from "react-datepicker";

import percentIcon from '../../images/icons/percent.png';
import calendarIcon from '../../images/icons/calendar.png';
// import uploadIcon from '../../images/icons/upload.png';

const ApplyForm = ({ handleNext, phaseStyle }) => {

  const [formData, setFormData] = useState({ installment: null });
  const fileInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const inputData = {};

    const inputs = new FormData(e.target);
    for (let [key, value] of inputs.entries()) {
      inputData[key] = value;
    }
    inputData['credit-report'] = inputData['credit-report'].name;
    console.log(inputData['credit-report']);
    setFormData(inputData);
    handleNext(inputData);
  }

  return (
    <div id="div-form" style={phaseStyle}>

      <form onSubmit={handleSubmit} method="post">
        <label
          htmlFor="financeAmount"
        >
          Finance Amount
          <span className="required"> *</span>
        </label>
        <input id="financeAmount" name="financeAmount" type="text" placeholder="Finance Amount" required />

        <label htmlFor="bankName">POS Bank Name (Invest)</label>
        <input name="bankName" type="text" />
        <p className="sub-text">This is the Bank nameWhere the POS is setup</p>

        <label
          htmlFor="tenor"
        >
          Finance Tenor
          <span className="required"> *</span>
        </label>
        <select id="tenor" name="tenor" required>
          <option value={3}>3 Months</option>
          <option value={6}>6 Months</option>
          <option value={12}>12 Months</option>
          <option value={72}>72 Months</option>
        </select>
        <p className="sub-text">Maximum Finance Tenor: 72 Months</p>


        <label
          htmlFor="installment"
        >
          Installment Date
          <span className="required"> *</span>
        </label>
        <div className='input-date'>
          <DatePicker
            id="installment"
            name="installment"
            selected={formData.installment}
            onChange={(date) => setFormData((prevState) => ({ ...prevState, installment: date }))}
            required
          />
          <span>
            <img src={calendarIcon} alt="Icon" />
          </span>
        </div>

        <label htmlFor="profitSharing">Profit Sharing Percentage</label>
        <div className='input-profit'>

          <input className="input-disable" name="profitSharing" type="text" value="1" disabled />
          <span>
            <img src={percentIcon} alt="Icon" />
          </span>
        </div>

        <label htmlFor="monthlyInstallment">Monthly Installment</label>
        <input className="input-disable" name="monthlyInstallment" type="text" disabled />

        <div id='credit-report'>
          <p id='title'>Credit Report</p>
          <div id="table">
            <p>File Name</p>
            <p>Size</p>
          </div>

          {/* <div id="input-container" hidden>
              <img src={uploadIcon} alt="Icon" />
              <p>Drop files to attach, or</p>
              <a href="" onClick={handleBrowse}>browse</a>
            </div> */}

          <input
            accept="application/pdf"
            name="credit-report"
            ref={fileInputRef}
            id='credit-report'
            type="file"
            onChange={(file) => { console.log(file.target.value) }}
          />
        </div>



        <div id='btn'>
          <button id='btn-secondary'>Cancel</button>
          <button type="submit" id='btn-primary'>Next</button>
        </div>
      </form>
    </div>
  )
}

export default ApplyForm;