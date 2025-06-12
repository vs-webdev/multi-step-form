import { useEffect, useState } from 'react'
import {plansData} from '../data.js'

const Two = ({setFormData, formData}) => {
  const [planDurationState, setPlanDurationState] = useState(true)
  const [plans, setPlans] = useState(plansData)

  const onSelectPlan = (plan, id) => {
    setFormData(prev => ({...prev, plan: {...prev.plan, type: plan.title, price: plan.price}}))
    setPlans(prev => prev.map((plan, pId) => id === pId ? ({...plan, selected: true}) : ({...plan, selected: false})))
  }
  
  useEffect(() => {
    const newPlanDuration = planDurationState ? 'monthly' : 'yearly'
    setFormData(prev => ({...prev, plan: {...prev.plan, duration: newPlanDuration}}))
  }, [planDurationState])

  return (
    <div className="step-container">
      <header>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </header>
      <div className="content">
        <ul className='plans-container'>
          {plans.map((plan, index) => 
            <li className={`plan ${plan.title === formData.plan.type ? 'active-plan' : ''}`} 
              key={index} 
              onClick={() => onSelectPlan(plan, index)}
            >
              <img src={plan.icon} alt="Plan Icon" />
              <div>
                <h3>{plan.title}</h3>
                <p>${plan.price}/mo</p>
              </div>
            </li>
          )}
        </ul>

        <div className='switch-container'>
          <span>Monthly</span>
          <div className="toggle" onClick={() => setPlanDurationState(prev => !prev)}>
            <div></div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  )
}

export default Two