import { useState } from "react";
import ApplyExtra from "./ApplyExtra";
import ApplyFormReview from "./ApplyFormReview";
import ApplyForm from "./ApplyForm";
import ApplyPhaseIndicator from "./ApplyPhaseIndicator";
import SideMenu from "./SideMenu";

const ApplyProduct = () => {
  const [phaseStyle, setPhaseStyle] = useState({});
  const [reviewStyle, setReviewStyle] = useState({ display: "none" });
  const [inputData, setInputData] = useState([]);

  function handleNext(inputData) {
    setPhaseStyle({ display: "none" });
    setReviewStyle({});
    setInputData(Object.entries(inputData));
    console.log(inputData);
  }

  return (
    <div className="apply-product">
      <SideMenu />
      <div id="right-div">
        <div id="form-div">
          <div>
            <ApplyPhaseIndicator phaseStyle={phaseStyle} reviewStyle={reviewStyle} />
            <ApplyForm handleNext={handleNext} phaseStyle={phaseStyle} />
            <ApplyFormReview reviewStyle={reviewStyle} details={inputData} />
          </div>

        </div>
        <ApplyExtra />
      </div>
    </div>
  )
}

export default ApplyProduct;