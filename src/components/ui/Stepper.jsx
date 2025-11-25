import './Stepper.css'

export default function Stepper({ steps, currentStep }) {
  return (
    <div className="stepper">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isActive = index === currentStep
        
        return (
          <div key={step.id} className="stepper-item">
            <div
              className={`stepper-circle ${
                isCompleted ? 'completed' : isActive ? 'active' : ''
              }`}
            >
              {isCompleted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <div className={`stepper-label ${isActive ? 'active' : ''}`}>{step.label}</div>
            {index < steps.length - 1 && (
              <div
                className={`stepper-line ${
                  isCompleted ? 'active' : ''
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

