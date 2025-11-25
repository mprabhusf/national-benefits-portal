import { useParams, useNavigate } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import './AcknowledgementPage.css'

const acknowledgementText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
aliquam quaerat voluptatem.
`

export default function AcknowledgementPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="acknowledgement-page">
      <Breadcrumbs
        items={[
          { label: 'Applications', path: '/applications/20002' },
          { label: `AF-${id}`, path: `/applications/${id}` },
        ]}
      />
      <PageTitle>Acknowledgment & Submission</PageTitle>

      <Card className="acknowledgement-card">
        <h2 className="acknowledgement-title">Acknowledgment</h2>

        <div className="acknowledgement-checkbox">
          <label className="certify-checkbox">
            <input type="checkbox" />
            <span>I certify that the information provided is true and accurate</span>
          </label>
        </div>

        <div className="acknowledgement-text">
          {acknowledgementText}
        </div>

        <div className="acknowledgement-actions">
          <SecondaryButton onClick={() => navigate(`/applications/${id}`)}>
            Cancel
          </SecondaryButton>
          <PrimaryButton
            onClick={() => navigate(`/applications/${id}/submitted`)}
          >
            Submit
          </PrimaryButton>
        </div>
      </Card>
    </div>
  )
}

