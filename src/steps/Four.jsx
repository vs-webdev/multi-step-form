import { useEffect, useState } from "react"

const Four = ({formData, setCurrentStep}) => {
  const [total, setTotal] = useState(0)
  const duration = formData.duration === 'mo' ? 'monthly' : 'yearly'
  useEffect(() => {
    const selectedAddOns = formData.addOns.filter(addOn => addOn.state)
    const totalAddOns = selectedAddOns.reduce((acc, curr) => acc +  curr.price[duration], 0)
    setTotal(totalAddOns + formData.plan.price[duration])
  }, [])
  
  return (
    <div className="step-container">
      <header>
        <h1>Finishing up</h1>
        <h2>Double-check everything looks OK before confirming.</h2>
      </header>
      <div className="content">
        <div className="summary-container">
          <div className="final-plan">
            <div>
              <h3>{formData.plan.type} (<span>{duration}</span>)</h3>
              <span className="change" onClick={() => setCurrentStep(2)}>Change</span>
            </div>
            <span className="final-plan-price">${formData.plan.price[duration]}/{formData.duration}</span>
          </div>
          <ul>
            {
              formData.addOns.map((addOn, addOnInd) => {
                if (addOn.state){
                  return (<li key={addOnInd} className="total-add-on">
                    <h2>{addOn.heading}</h2>
                    <span>+{addOn.price[duration]}/{formData.duration}</span>
                  </li>)
                }
              })
            }
          </ul>
        </div>
        <div className="total">
          <p>Total (per {duration})</p>
          <span>${total}/mo</span>
        </div>
      </div>
    </div>
  )
}

export default Four
