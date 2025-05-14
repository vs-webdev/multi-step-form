
const Three = () => {
  const addOns = [
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
      price: 1,
    },
    {
      heading: 'Customizable Profile',
      description: 'Custom theme on your profile',
      state: false,
      price: 1,
    },
  ]

  return (
    <div className="step-container">
      <header>
        <h1>Pick Add-ons</h1>
        <h2>Add-ons help enhance your gaming experience</h2>
      </header>
      <div className="content">
        <ul className="add-ons">
          {addOns.map((addOn, index) =>
            <li key={index}>
              <div className="state">{addOn.state}</div>
              <div>
                <h3>{addOn.heading}</h3>
                <p>{addOn.description}</p>
              </div>
              <p>+${addOn.price}/mo</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Three
