import { useState } from 'react'
import './App.css'
import StepsInfo from './components/StepsInfo'
import One from './steps/One'
import Two from './steps/Two'
import Three from './steps/Three'
import Four from './steps/Four'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan_type: "",
    online_service: false,
    large_storage: false,
    custom_profile: false,
  })
  const [completed, setCompleted] = useState(false)
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
        <StepsInfo steps={steps}/>
        <One />
        <Two />
        <Three />
        <Four />
      </form>
    </>
  )
}

export default App
