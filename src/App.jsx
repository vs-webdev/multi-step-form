import { useState } from 'react'
import './App.css'
import StepsInfo from './components/StepsInfo'
import StepPanel from './components/StepPanel'
import { addOnsData } from './data'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: {type: 'Arcade', price: {monthly: 9, yearly: 90}},
    addOns: [...addOnsData],
    duration: 'mo',
  })
  const [formSucess, setFormSucess] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  
  const steps = [
    {id: 1, content: 'your info'},
    {id: 2, content: 'select plan'},
    {id: 3, content: 'add-ons'},
    {id: 4, content: 'summary'},
  ]

  return (
    <>
      <form action="" className='form-container'>
        <StepsInfo steps={steps} currentStep={currentStep}/>
        <StepPanel 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
          formSucess={formSucess}
          setFormSucess={setFormSucess}
          formData={formData}
          setFormData={setFormData}
        />
      </form>
    </>
  )
}

export default App
