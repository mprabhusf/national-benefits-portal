import Card from './Card'
import StatusTag from './StatusTag'
import './ProgramCard.css'

export default function ProgramCard({
  title,
  description,
  status,
  metadata,
  showCheckbox = false,
  checked = false,
  onCheckboxChange,
  readMoreLink = '#',
}) {
  return (
    <Card className="program-card">
      {showCheckbox && (
        <div className="program-card-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={onCheckboxChange}
          />
        </div>
      )}
      <div className="program-card-content">
        <div className="program-card-header">
          <h3 className="program-card-title">{title}</h3>
          {status && <StatusTag status={status} />}
        </div>
        <p className="program-card-description">{description}</p>
        {metadata && (
          <div className="program-card-metadata">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key} className="metadata-item">
                <span className="metadata-label">{key}:</span>
                <span className="metadata-value">{value}</span>
              </div>
            ))}
          </div>
        )}
        <a href={readMoreLink} className="program-card-link">
          Read more
        </a>
      </div>
    </Card>
  )
}

