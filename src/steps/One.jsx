
const One = ({formData, setFormData, errors}) => {

  const handleOnChange = (e, field) => {
    const value = e.target.value;
    setFormData(prev => ({...prev, [field]: value}))
  }

  return (
    <div className="step-container">
      <header>
        <h1>Personal Info</h1>
        <h2>Please provide your name, email address and phone number</h2>
      </header>
      <div className="inp-container">
        {
          errors.name.required &&
          <p className="error">This field is required</p>
        }
        <label htmlFor="name">Name</label>
        <input className={`input ${(errors.name.required || errors.name.invalid) ? 'input-err' : ''}`} type="text" placeholder="e.g Stephen King" id="name" value={formData.name} onChange={e => handleOnChange(e, 'name')}/>
      </div>

      <div className="inp-container">
        {
          errors.email.required &&
          <p className="error">This field is requierd</p>
        }
        {
          !errors.email.required && errors.email.invalid &&
          <p className="error">Invalid email address</p>
        }
        <label htmlFor="email">Email Address</label>
        <input className={`input ${(errors.email.required || errors.email.invalid) ? 'input-err' : ''}`} type="email" placeholder="e.g stephenking@lorem.com" id="email" value={formData.email} onChange={e => handleOnChange(e, 'email')}/>
      </div>

      <div className="inp-container">
        {
          errors.phone.required &&
          <p className="error">This field is required</p>
        }
        {
          !errors.phone.required && errors.phone.invalid &&
          <p className="error">Invalid phone number</p>
        }
        <label htmlFor="phone">Phone Number</label>
        <input className={`input ${(errors.phone.required || errors.phone.invalid) ? 'input-err' : ''}`} type="number" placeholder="e.g +1 234 567 890" id="phone" value={formData.phone} onChange={e => handleOnChange(e, 'phone')}/>
      </div>
    </div>
  )
}

export default One
