const ApplyPhaseIndicator = ({ phaseStyle, reviewStyle }) => {
  return (
    <>
      <div id="selected-phase" style={phaseStyle}>
        <div id="phase-pair">
          <div className="blue-pair">
            <h4>Application Form</h4>
            <div id="blue-line"></div>
          </div>
          <h4>Review Form</h4>
        </div>
        <div id="grey-line"></div>
      </div>

      {/* 2nd case */}
      <div id="selected-phase" style={reviewStyle}>
        <div id="phase-pair">
          <h4>Application Form</h4>
          <div className="blue-pair">
            <h4>Review Form</h4>
            <div id="blue-line"></div>
          </div>
        </div>
        <div id="grey-line"></div>
      </div>
    </>
  )
}

export default ApplyPhaseIndicator;