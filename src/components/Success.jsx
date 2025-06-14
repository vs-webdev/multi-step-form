import thankYou from '/icon-thank-you.svg'

const Success = () => {
  return (
    <div className='success-container'>
      <img src={thankYou} alt="" />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default Success
