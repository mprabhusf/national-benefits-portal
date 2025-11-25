import { useParams, useNavigate } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton } from '../components/ui/Button'
import Card from '../components/ui/Card'
import './SubmissionConfirmationPage.css'

export default function SubmissionConfirmationPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="submission-confirmation-page">
      <Card className="confirmation-card">
        <div className="confirmation-illustration">🚀</div>
        <h1 className="confirmation-title">Application Submitted</h1>
        <p className="confirmation-subtext">
          We'll get back to you in 3 business days
        </p>
        <PrimaryButton onClick={() => navigate(`/applications/${id}`)}>
          Link to Application
        </PrimaryButton>
      </Card>
    </div>
  )
}

