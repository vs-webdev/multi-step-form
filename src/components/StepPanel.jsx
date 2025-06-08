import One from "../steps/One"
import Two from "../steps/Two"
import Three from "../steps/Three"
import Four from "../steps/Four"
import { useState } from "react"

const StepPanel = ({currentStep, setCurrentStep, setCompleted, formData, setFormData}) => {
  const steps = [One, Two, Three, Four]
  const ActiveStep = steps[currentStep - 1]
  const [errors, setErrors] = useState({
    name: { required: false},
    email: { required: false, invalid: false},
    phone: { required: false, invalid: false},
  })

  const validateInfo = () => {
    let newErrors = {...errors}
    const {name, email, phone} = formData;
    const fields = ['name', 'email', 'phone']

    fields.forEach(field => {
      newErrors[field].required = (!formData[field].trim()) ? true : false
    })

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    newErrors.email.invalid = !regexEmail.test(email) ? true : false
    newErrors.phone.invalid = (phone.length < 10 || phone.length > 10) ? true : false
    
    setErrors(newErrors)
    
    let hasError = Object.entries(newErrors).flatMap(([_, value]) => {
      return Object.entries(value).map(([_, eValue]) => eValue
      )}).some(Boolean)

    return !hasError
  }

  const handleNavigation = (event, word) => {
    event.preventDefault()
    
    if (word === 'next'){
      const isValid = validateInfo()
      if (!isValid) return
      setCurrentStep(prev => prev + 1)
    } else if (word === 'back'){
      setCurrentStep(prev => prev - 1)
    } else {
      setCompleted(true)
    }
  }

  return (
    <div className="step-panel-container">
      <ActiveStep
        formData={formData}
        setFormData={setFormData} 
        errors={errors}
        setErrors={setErrors}
      />
      <div className="btn-container">
        <div className="btn-left">
          {currentStep > 1 && <button onClick={(e) => handleNavigation(e, 'back')}>Go Back</button>}
        </div>
          <div className="btn-right">
            {
              currentStep !== 4
              ? <button onClick={(e) => handleNavigation(e, 'next')}>Next Step</button>
              : <button onClick={(e) => handleNavigation(e, 'confirm')}>Confirm</button>
            }
          </div>
      </div>
    </div>
  )
}

export default StepPanel
