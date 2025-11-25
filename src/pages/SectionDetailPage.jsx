import { useParams, useNavigate } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton, SecondaryButton, TextButton } from '../components/ui/Button'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import Stepper from '../components/ui/Stepper'
import './SectionDetailPage.css'

const stepperSteps = [
  { id: 'expenses', label: 'Household Expenses' },
  { id: 'medical-expenses', label: 'Medical Expenses' },
]

export default function SectionDetailPage() {
  const { id, sectionName } = useParams()
  const navigate = useNavigate()

  return (
    <div className="section-detail-page">
      <Breadcrumbs
        items={[
          { label: 'Applications', path: '/applications/20002' },
          { label: `AF-${id}`, path: `/applications/${id}` },
        ]}
      />
      <PageTitle>Medical Expenses</PageTitle>

      <div className="section-detail-layout">
        <div className="section-detail-main">
          <Card>
            <form className="section-form">
              <div className="form-group">
                <label htmlFor="medical-expenses">
                  Have you paid any medical expenses, including prescriptions?
                </label>
                <div className="currency-input">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="medical-expenses"
                    name="medical-expenses"
                    defaultValue="100.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="insurance-premiums">
                  Have you paid any medical insurance premiums?
                </label>
                <div className="currency-input">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="insurance-premiums"
                    name="insurance-premiums"
                    defaultValue="100.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="reimbursement">
                  Have you received or intend to receive reimbursement for any of these medical expenses Have you paid any medical insurance premiums?
                </label>
                <div className="currency-input">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="reimbursement"
                    name="reimbursement"
                    defaultValue="100.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="childcare">
                  Have you paid any child care costs that were not reimbursed by anyone?
                </label>
                <div className="currency-input">
                  <span className="currency-symbol">$</span>
                  <input
                    type="number"
                    id="childcare"
                    name="childcare"
                    defaultValue="100.00"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="document-upload-section">
                <div className="form-group">
                  <label htmlFor="document-name">
                    Document Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="document-name"
                    name="document-name"
                    className="text-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Attach income proof</label>
                  <div className="upload-area">
                    <div className="upload-placeholder">
                      <p>Drop files here or <a href="#" className="upload-link-inline">Upload files</a></p>
                    </div>
                  </div>
                  <p className="upload-hint">
                    Accepted file type: .pdf, .jpeg & .png
                  </p>
                </div>

                <div className="document-card-actions">
                  <SecondaryButton onClick={() => navigate(`/applications/${id}`)}>
                    Cancel
                  </SecondaryButton>
                  <SecondaryButton onClick={() => navigate(`/applications/${id}?completed=true`)}>
                    Save
                  </SecondaryButton>
                </div>
              </div>
            </form>
          </Card>
        </div>

        <div className="section-detail-sidebar">
          <Card>
            <h3 className="steps-title">Steps</h3>
            <Stepper steps={stepperSteps} currentStep={1} />
          </Card>
        </div>
      </div>

      <div className="save-close-section">
        <div className="save-close-content">
          <div className="save-close-text">
            <span className="save-close-label">Save & Close</span>
            <span className="save-close-message">
              The form has been automatically saved,{' '}
              <a href="#" className="link-action">Copy the link</a> or{' '}
              <a href="#" className="link-action">Email link</a>
            </span>
          </div>
          <div className="save-close-actions">
            <SecondaryButton onClick={() => navigate(`/applications/${id}`)}>
              Cancel
            </SecondaryButton>
            <PrimaryButton onClick={() => navigate(`/applications/${id}?completed=true`)}>
              Next Section
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}

