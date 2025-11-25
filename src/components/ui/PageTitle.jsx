import './PageTitle.css'

export default function PageTitle({ children, subtitle }) {
  return (
    <div className="page-title">
      <h1>{children}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  )
}

