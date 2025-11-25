import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Tabs from '../components/ui/Tabs'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import ProgramCard from '../components/ui/ProgramCard'
import './AppliedBenefitsPage.css'

const tabs = [
  { id: 'sections', label: 'Application Sections' },
  { id: 'preview', label: 'Application Preview' },
  { id: 'benefits', label: 'Applied Benefits' },
]

// Benefits data - showing both under review and assigned states
const benefits = [
  {
    id: 1,
    title: 'Supplemental Nutrition Assistance Program (SNAP)',
    description:
      'Provides nutrition benefits to supplement the food budget of needy families.',
    status: 'underReview',
  },
  {
    id: 2,
    title: 'Medicaid',
    description:
      'A joint federal and state program that helps with medical costs.',
    status: 'assigned',
    metadata: {
      'Coverage Type': 'Full Coverage',
      'Validity': 'Ongoing',
      'Start Date': '2024-02-01',
    },
  },
]

export default function AppliedBenefitsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('benefits')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'sections') {
      navigate(`/applications/${id}`)
    } else if (tabId === 'preview') {
      navigate(`/applications/${id}/preview`)
    }
  }

  return (
    <div className="applied-benefits-page">
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

      {activeTab === 'benefits' && (
        <div className="benefits-content">
          <div className="benefits-list">
            {benefits.map((benefit) => (
              <ProgramCard
                key={benefit.id}
                title={benefit.title}
                description={benefit.description}
                status={benefit.status}
                metadata={benefit.metadata}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

