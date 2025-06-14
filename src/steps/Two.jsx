import { useState } from 'react'
import {plansData} from '../data.js'

const Two = ({setFormData, formData}) => {
  const [plans, setPlans] = useState(plansData)

  const onSelectPlan = (plan, id) => {
    setFormData(prev => ({...prev, plan: {...prev.plan, type: plan.title, price: plan.price}}))
    setPlans(prev => prev.map((plan, pId) => id === pId ? ({...plan, selected: true}) : ({...plan, selected: false})))
  }

  const handleToggle = () => {
    setFormData(prev => ({...prev, duration: prev.duration === 'mo' ? 'yr' : 'mo'}))
  }

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
              <div className='plan-detail'>
                <h3>{plan.title}</h3>
                <p>${formData.duration === 'mo' ? plan.price.monthly : plan.price.yearly}/{formData.duration}</p>
              </div>
              {formData.duration === 'yr' && <p className='free-detail'>2 months free</p>}
            </li>
          )}
        </ul>

        <div className='toggle-container'>
          <span className={`${formData.duration === 'mo' && 'active-duration'}`}>Monthly</span>
          <div className="toggle" onClick={handleToggle}>
            <div className={`toggle-switch ${formData.duration === 'yr' && 'right'}`}></div>
          </div>
          <span className={`${formData.duration === 'yr' && 'active-duration'}`}>Yearly</span>
        </div>
      </div>
    </div>
  )
}

export default Two