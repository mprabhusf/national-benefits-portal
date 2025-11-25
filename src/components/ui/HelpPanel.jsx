import './HelpPanel.css'

export default function HelpPanel() {
  const steps = [
    { number: 1, title: 'Fill out your information', description: 'Complete all required sections' },
    { number: 2, title: 'Review your application', description: 'Check all details before submitting' },
    { number: 3, title: 'Submit and wait', description: 'We\'ll review and get back to you' },
  ]

  return (
    <div className="help-panel">
      <h3 className="help-panel-title">Benefit Application Easy as 1–2–3</h3>
      <div className="help-panel-steps">
        {steps.map((step) => (
          <div key={step.number} className="help-panel-step">
            <div className="help-panel-step-number">{step.number}</div>
            <div className="help-panel-step-content">
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

