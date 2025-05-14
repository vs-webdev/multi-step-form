import { useState } from "react"

const One = () => {
  const [values, setValues] = useState({name: '', email: '', password: ''})

  return (
    <div className="step-container">
      <header>
        <h1>Personal Info</h1>
        <h2>Please provide your name, email address and phone number</h2>
      </header>
      <div className="inp-container">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="e.g Stephen King" id="name" value={values.name} onChange={e => setValues(prev => ({...prev, name: e.target.value}))}/>
      </div>

      <div className="inp-container">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="e.g Stephen King" id="email" value={values.email} onChange={e => setValues(prev => ({...prev, email: e.target.value}))}/>
      </div>

      <div className="inp-container">
        <label htmlFor="phone">Phone Number</label>
        <input type="text" placeholder="e.g Stephen King" id="phone" value={values.password} onChange={e => setValues(prev => ({...prev, password: e.target.value}))}/>
      </div>
    </div>
  )
}

export default One
