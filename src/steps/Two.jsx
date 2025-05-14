import arcade from '/icon-arcade.svg'
import advanced from '/icon-advanced.svg'
import pro from '/icon-pro.svg'

const Two = () => {
  const plans = [
    {
      title: 'Arcade',
      price: 9,
      icon: arcade,
    },
    {
      title: 'Advanced',
      price: 12,
      icon: advanced,
    },
    {
      title: 'Pro',
      price: 15,
      icon: pro,
    },
  ]
  return (
    <div className="step-container">
      <header>
        <h1>Select your plan</h1>
        <h2>You have the option of monthly or yearly billing.</h2>
      </header>
      <div className="content">
        <ul className='plans'>
          {plans.map((plan, index) => 
            <li className="" key={index}>
              <img src={plan.icon} alt="" />
              <div>
                <h3>{plan.title}</h3>
                <p>${plan.price}/mo</p>
              </div>
            </li>
          )}
        </ul>

        <div className='switch-container'>
          <span>Monthly</span>
          <div className="toggle">
            <div></div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
    </div>
  )
}

export default Two
