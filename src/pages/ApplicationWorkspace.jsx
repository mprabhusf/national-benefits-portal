import { useState } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton, SecondaryButton } from '../components/ui/Button'
import StatusTag from '../components/ui/StatusTag'
import Tabs from '../components/ui/Tabs'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import './ApplicationWorkspace.css'

const initialSections = [
  { id: 'household-head', name: "Household Head's Details", status: 'complete' },
  { id: 'household-members', name: 'Household Members', status: 'partiallyFilled' },
  { id: 'income', name: 'Income', status: 'notStarted' },
  { id: 'expenses', name: 'Expenses', status: 'notStarted' },
  { id: 'health-expenses', name: 'Health Expenses', status: 'notStarted' },
  { id: 'acknowledgement', name: 'Acknowledgement & Submission', status: 'notStarted' },
]

const tabs = [
  { id: 'sections', label: 'Application Sections' },
  { id: 'preview', label: 'Application Preview' },
  { id: 'benefits', label: 'Applied Benefits' },
]

export default function ApplicationWorkspace() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState('sections')
  
  // Check if all sections should be marked as complete
  const allComplete = searchParams.get('completed') === 'true'
  
  // Update sections based on completion status
  const sections = allComplete
    ? initialSections.map(section => ({ ...section, status: 'complete' }))
    : initialSections

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'preview') {
      navigate(`/applications/${id}/preview`)
    } else if (tabId === 'benefits') {
      navigate(`/applications/${id}/benefits`)
    } else {
      navigate(`/applications/${id}`)
    }
  }

  const getActionButton = (section) => {
    if (section.status === 'complete') {
      return (
        <SecondaryButton
          onClick={() =>
            navigate(`/applications/${id}/section/${section.id}`)
          }
        >
          Edit
        </SecondaryButton>
      )
    }
    return (
      <PrimaryButton
        onClick={() =>
          navigate(`/applications/${id}/section/${section.id}`)
        }
      >
        Add
      </PrimaryButton>
    )
  }

  return (
    <div className="application-workspace">
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      <Breadcrumbs
        items={[
          { label: 'Applications', path: '/applications/20002' },
          { label: `AF-${id}`, path: `/applications/${id}` },
        ]}
      />

      <div className="workspace-metadata">
        <div className="metadata-item">
          <span className="metadata-label">Application Form ID:</span>
          <span className="metadata-value">AF-{id}</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Status:</span>
          <span className="metadata-value">In Progress</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Date Created:</span>
          <span className="metadata-value">2024-01-15</span>
        </div>
        <div className="metadata-item">
          <span className="metadata-label">Subject:</span>
          <span className="metadata-value">SNAP, TANF, Medicaid</span>
        </div>
      </div>

      {activeTab === 'sections' && (
        <div className="workspace-content">
          <div className="sections-list">
            <Card>
              <div className="sections-header">
                <h2>Application Sections</h2>
              </div>
              <div className="sections-items">
                {sections.map((section) => (
                  <div key={section.id} className="section-row">
                    <div className="section-info">
                      <h3 className="section-name">{section.name}</h3>
                    </div>
                    <div className="section-right">
                      <StatusTag status={section.status} />
                      <div className="section-action">
                        {getActionButton(section)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="sections-footer">
                <PrimaryButton 
                  disabled={!allComplete}
                  onClick={() => {
                    if (allComplete) {
                      navigate(`/applications/${id}/acknowledgement`)
                    }
                  }}
                >
                  Submit
                </PrimaryButton>
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

