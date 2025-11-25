import './Button.css'

export function PrimaryButton({ children, onClick, disabled, ...props }) {
  return (
    <button
      className={`btn btn-primary ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export function SecondaryButton({ children, onClick, disabled, ...props }) {
  return (
    <button
      className={`btn btn-secondary ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export function TextButton({ children, onClick, disabled, ...props }) {
  return (
    <button
      className={`btn btn-text ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

