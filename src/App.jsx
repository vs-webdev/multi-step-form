import { useState } from 'react'
import './App.css'

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

  return (
    <>
      
    </>
  )
}

export default App
