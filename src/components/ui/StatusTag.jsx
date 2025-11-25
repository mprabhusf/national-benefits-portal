import './StatusTag.css'

const statusConfig = {
  complete: {
    label: 'Complete',
    className: 'status-complete',
  },
  partiallyFilled: {
    label: 'Partially Filled',
    className: 'status-partially-filled',
  },
  notStarted: {
    label: 'Not Started',
    className: 'status-not-started',
  },
  underReview: {
    label: 'Under Review',
    className: 'status-under-review',
  },
  assigned: {
    label: 'Assigned',
    className: 'status-assigned',
  },
}

export default function StatusTag({ status, customLabel }) {
  const config = statusConfig[status] || statusConfig.notStarted
  const label = customLabel || config.label

  return <span className={`status-tag ${config.className}`}>{label}</span>
}

