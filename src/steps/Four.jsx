
const Four = ({formData}) => {
  
  return (
    <div className="step-container">
      <header>
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
      </header>
      <div className="content">
        <div className="final-plan">
          <div>
            <h3>{formData.plan.type} ({formData.plan.duration})</h3>
            <span>Change</span>
          </div>
          <span>$9/mo</span>
        </div>
        <div className="total">
          <p>Total (per month)</p>
          <span>+$9/mo</span>
        </div>
      </div>
    </div>
  )
}

export default Four
