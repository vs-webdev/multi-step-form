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
    plan: {type: 'Arcade', duration: 'monthly', price: 9},
    addOns: [...addOnsData],
  })
  const [completed, setCompleted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  
  const steps = [
    {id: 1, content: 'your info'},
    {id: 2, content: 'select plan'},
    {id: 3, content: 'add-ons'},
    {id: 4, content: 'summary'},
  ]

  console.log(formData)

  return (
    <>
      <form action="" className='form-container'>
        <StepsInfo steps={steps} setCurrentStep={setCurrentStep}/>
        <StepPanel 
          currentStep={currentStep} 
          setCurrentStep={setCurrentStep} 
          setCompleted={setCompleted}
          formData={formData}
          setFormData={setFormData}
        />
      </form>
    </>
  )
}

export default App
