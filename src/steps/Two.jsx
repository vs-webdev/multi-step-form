import arcade from '/icon-arcade.svg'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'
import { useEffect, useState } from 'react'

const Two = ({setFormData}) => {
  const [planDuration, setPlanDuration] = useState(true)
  const [plans, setPlans] = useState([
    {
      title: 'Arcade',
      price: 9,
      icon: arcade,
      selected: true,
    },
    {
      title: 'Advanced',
      price: 12,
      icon: advanced,
      selected: false,
    },
    {
      title: 'Pro',
      price: 15,
      icon: pro,
      selected: false,
    },
  ])

  const onSelectPlan = (title, id) => {
    setPlans(prev => prev.map((plan, pId) => id === pId ? ({...plan, selected: true}) : ({...plan, selected: false})))
    setFormData(prev => ({...prev, plan: {...prev.plan, type: title}}))
  }
  
  useEffect(() => {
    const newPlanDuration = planDuration ? 'monthly' : 'yearly'
    setFormData(prev => ({...prev, plan: {...prev.plan, duration: newPlanDuration}}))
  }, [planDuration])

  return (
    <div className="step-container">
      <header>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </header>
      <div className="content">
        <ul className='plans-container'>
          {plans.map((plan, index) => 
            <li className={`plan ${plan.selected ? 'active-plan' : ''}`} key={index} onClick={() => onSelectPlan(plan.title, index)}>
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
          <div className="toggle" onClick={() => setPlanDuration(prev => !prev)}>
            <div></div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  )
}

export default Two
