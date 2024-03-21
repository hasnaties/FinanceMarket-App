import ApplyFormReviewPair from "./ApplyFormReviewPair";

const ApplyFormReview = ({ reviewStyle, details }) => {
  return (
    <div className="apply-form-review" style={reviewStyle}>
      {details.map(([property, value]) => (
        <ApplyFormReviewPair key={property} title={property} value={value} />
      ))}

    </div>
  )
}

export default ApplyFormReview;