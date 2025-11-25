import { useNavigate } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'
import Card from '../components/ui/Card'
import './AssessmentPage.css'

export default function AssessmentPage() {
  const navigate = useNavigate()

  return (
    <div className="assessment-page">
      <PageTitle>Benefits Applicant's Details</PageTitle>

      <Card>
        <form className="assessment-form">
          <div className="form-group">
            <label htmlFor="dob">Date of birth</label>
            <div className="input-with-icon">
              <input type="date" id="dob" name="dob" />
              <span className="input-icon">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="citizenship">Citizenship status</label>
            <select id="citizenship" name="citizenship">
              <option value="">Select...</option>
              <option value="citizen">U.S. Citizen</option>
              <option value="non-citizen">Non-Citizen</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="state">State/territory</label>
            <select id="state" name="state">
              <option value="">Select...</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="household-size">Household size</label>
            <input
              type="number"
              id="household-size"
              name="household-size"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="monthly-income">Monthly income (before taxes)</label>
            <input
              type="number"
              id="monthly-income"
              name="monthly-income"
              placeholder="$0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="monthly-expenses">Monthly expenses</label>
            <input
              type="number"
              id="monthly-expenses"
              name="monthly-expenses"
              placeholder="$0.00"
            />
          </div>

          <div className="form-group">
            <label htmlFor="employment">Employment status</label>
            <select id="employment" name="employment">
              <option value="">Select...</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="self-employed">Self-Employed</option>
              <option value="retired">Retired</option>
            </select>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-group-label">Additional Information</label>
            <div className="checkbox-list">
              <label className="checkbox-item">
                <input type="checkbox" name="student" />
                <span>Student</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="unemployment" />
                <span>Unemployment</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="disabled" />
                <span>Disabled</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="pregnant" />
                <span>Pregnant</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" name="blind" />
                <span>Blind/Visually impaired</span>
              </label>
            </div>
          </div>

          <div className="form-actions">
            <SecondaryButton onClick={() => navigate('/')}>
              Cancel
            </SecondaryButton>
            <PrimaryButton onClick={() => navigate('/program-selection')}>
              View Qualifying Programs
            </PrimaryButton>
          </div>
        </form>
      </Card>
    </div>
  )
}

