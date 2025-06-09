import { useState } from "react"
import checkMark from '/icon-checkmark.svg'

const Three = () => {
  const [addOns, setAddOns] = useState([
    {
      heading: 'Online Service',
      description: 'Access to multiplayer games',
      state: false,
      price: 1,
    },
    {
      heading: 'Large Storage',
      description: 'Extra 1TB of cloud save',
      state: false,
      price: 2,
    },
    {
      heading: 'Customizable Profile',
      description: 'Custom theme on your profile',
      state: false,
      price: 2,
    },
  ])

  return (
    <div className="step-container">
      <header>
        <h1>Pick Add-ons</h1>
        <h2>Add-ons help enhance your gaming experience</h2>
      </header>
      <div className="content">
        <ul className="add-ons">
          {addOns.map((addOn, index) =>
            <li key={index} className={`add-on ${addOn.state ? 'active-addOn' : ''}`} 
              onClick={() => setAddOns(prev => {
                return prev.map((addOn, i) => {
                  if (index === i) {
                    return {...addOn, state: !addOn.state} 
                  } else {
                    return {...addOn}
                  }
                })
              })}
            >
              <div className={`state ${addOn.state ? 'checkmark' : ''}`}>{addOn.state && <img src={checkMark} /> }</div>
              <div className="add-on-info">
                <div className="add-on-head">
                  <h3>{addOn.heading}</h3>
                  <p>{addOn.description}</p>
                </div>
                <p>+${addOn.price}/mo</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Three
