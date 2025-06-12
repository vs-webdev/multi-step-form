
import checkMark from '/icon-checkmark.svg'

const Three = ({setFormData, formData}) => {
  
  const handleAddOn = (index) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.map((addOn, i) => 
        (index === i) ? {...addOn, state: !addOn.state} : {...addOn})
    }))
  }

  return (
    <div className="step-container">
      <header>
        <h1>Pick Add-ons</h1>
        <h2>Add-ons help enhance your gaming experience</h2>
      </header>
      <div className="content">
        <ul className="add-ons">
          {formData.addOns.map((addOn, index) =>
            <li key={index} 
              className={`add-on ${addOn.state ? 'active-addOn' : ''}`} 
              onClick={() => handleAddOn(index, addOn)}
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