
const StepsInfo = ({steps, currentStep}) => {
  const width = 274;
  const height = 225;

  return (
    <div className='steps-info-container'>
      <ul className="steps">
        {
          steps.map(step => 
            <li key={step.id}>
              <div className={`step-num ${currentStep === step.id && 'active-step'}`}>{step.id}</div>
              <div className="step-detail">
                <h2>Step {step.id}</h2>
                <p>{step.content}</p>
              </div>
            </li>
          )
        }
      </ul>
      <div className="banner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="M-34.692 200.101C3.24702 289.538 168.767 342.017 211.96 269.52C255.154 197.023 145.861 183.867 107.225 108.951C68.59 34.035 38.568 -12.723 -17.257 4.34399C-73.081 21.412 -72.631 110.664 -34.692 200.101Z" fill="white" fillOpacity="0.16" />
          <path fillRule="evenodd" clipRule="evenodd" d="M233.095 258.153C293.774 229.875 325.934 114.627 274.97 86.625C224.005 58.622 217.573 134.204 166.911 162.612C116.249 191.02 84.771 212.819 97.867 250.853C110.963 288.887 172.416 286.431 233.095 258.153Z" fill="#F9818E" />
          <path d="M165.305 126.097L175.912 115.291M209.461 131.581L196.955 121.078M187.56 145.991L180.652 160.789" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="bevel" />
          <path d="M0.304993 203.891C37.308 203.891 67.305 173.894 67.305 136.891C67.305 99.888 37.308 69.891 0.304993 69.891C-36.698 69.891 -66.695 99.888 -66.695 136.891C-66.695 173.894 -36.698 203.891 0.304993 203.891Z" fill="#FFAF7E" />
        </svg>
      </div>
    </div>
  )
}

export default StepsInfo
