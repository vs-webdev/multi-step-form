import One from "../steps/One"
import Two from "../steps/Two"
import Three from "../steps/Three"
import Four from "../steps/Four"

const StepPanel = ({currentStep, setCurrentStep, setCompleted}) => {
  const steps = [One, Two, Three, Four]
  const ActiveStep = steps[currentStep - 1]

  const onHandle = (event, word) => {
    event.preventDefault()
    if (word === 'nxt'){
      setCurrentStep(prev => prev + 1)
    } else if (word === 'back'){
      setCurrentStep(prev => prev - 1)
    } else {
      setCompleted(true)
    }
  }

  return (
    <div className="step-panel">
      <ActiveStep />
      <div className="btn-container">
        {currentStep !== 1 && <button onClick={(e) => onHandle(e, 'back')}>Back</button>}
          {
            currentStep !== 4
            ? <button onClick={(e) => onHandle(e, 'nxt')}>Next</button>
            : <button onClick={(e) => onHandle(e, 'confirm')}>Confirm</button>  
          }
      </div>
    </div>
  )
}

export default StepPanel
