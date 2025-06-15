
const StepsInfo = ({steps, currentStep}) => {

  return (
    <div className='steps-info-container'>
      <ul className="steps">
        {
          steps.map(step => 
            <li key={step.id}>
              <div className={`step-num ${currentStep === step.id && 'active-step'}`}>{step.id}</div>
              <div className="step-detail">
                <h2>Step {step.id}</h2>
                <p>{step.content}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default StepsInfo
