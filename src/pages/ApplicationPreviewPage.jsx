import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Tabs from '../components/ui/Tabs'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import Card from '../components/ui/Card'
import './ApplicationPreviewPage.css'

const sections = [
  { id: 'household-head', name: "Household head details" },
  { id: 'household-members', name: 'Household members' },
  { id: 'income', name: 'Income' },
  { id: 'expenses', name: 'Expenses' },
  { id: 'health-expenses', name: 'Health Expenses' },
]

const tabs = [
  { id: 'sections', label: 'Application Sections' },
  { id: 'preview', label: 'Application Preview' },
  { id: 'benefits', label: 'Applied Benefits' },
]

// Placeholder data for preview
const previewData = {
  'household-head': {
    'Full Name': 'John Doe',
    'Email': 'john.doe@example.com',
    'Phone': '(555) 123-4567',
    'Address': '123 Main St, City, State 12345',
  },
  'household-members': {
    'Member 1': 'Jane Doe (Spouse)',
    'Member 2': 'Child Doe (Age 8)',
  },
  'income': {
    'Monthly Income': '$3,500.00',
    'Employment Status': 'Full-time',
  },
  'expenses': {
    'Monthly Rent': '$1,200.00',
    'Utilities': '$150.00',
  },
  'health-expenses': {
    'Prescription Costs': '$200.00',
    'Doctor Visits': '$150.00',
  },
}

export default function ApplicationPreviewPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('preview')
  const [selectedSection, setSelectedSection] = useState('household-head')

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId === 'sections') {
      navigate(`/applications/${id}`)
    } else if (tabId === 'benefits') {
      navigate(`/applications/${id}/benefits`)
    }
  }

  const currentData = previewData[selectedSection] || {}

  return (
    <div className="application-preview-page">
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

      {activeTab === 'preview' && (
        <div className="preview-layout">
          <div className="preview-sidebar">
            <Card>
              <h3 className="sidebar-title">Sections</h3>
              <ul className="sections-list">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className={`section-item ${
                      selectedSection === section.id ? 'active' : ''
                    }`}
                    onClick={() => setSelectedSection(section.id)}
                  >
                    {section.name}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="preview-main">
            <Card>
              <h2 className="preview-section-title">
                {sections.find((s) => s.id === selectedSection)?.name}
              </h2>
              <div className="preview-fields">
                {Object.entries(currentData).map(([label, value]) => (
                  <div key={label} className="preview-field">
                    <div className="preview-label">{label}</div>
                    <div className="preview-value">{value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}

