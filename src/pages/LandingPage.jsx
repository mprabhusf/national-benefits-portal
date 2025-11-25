import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../components/ui/Button'
import './LandingPage.css'

const needs = [
  'Food & Groceries',
  'Housing & Shelter',
  'Health & Medical Care',
  'Work & Income Support',
  'Disability & Family Care',
  'Utilities & Energy Bills',
]

const benefitPrograms = [
  {
    title: 'SOCIAL SECURITY',
    description:
      'Learn about retirement/disability benefits, how to get or replace your card.',
  },
  {
    title: 'FOOD ASSISTANCE',
    description:
      'Get nutritious food via SNAP, WIC, and emergency food assistance.',
  },
  {
    title: 'WELFARE & FINANCIAL ASSISTANCE',
    description:
      'Learn about welfare benefits, financial assistance, and more.',
  },
  {
    title: 'HOUSING HELP',
    description:
      'Learn about rental/buyer programs, find emergency housing, and avoid eviction.',
  },
  {
    title: 'HEALTH INSURANCE',
    description:
      'Find information on Medicaid, Medicare, the ACA marketplace, and COBRA.',
  },
  {
    title: 'GRANTS & LOANS',
    description:
      'Learn about federal grants and loans for states, organizations, and individuals.',
  },
]

export default function LandingPage() {
  const navigate = useNavigate()
  const [selectedNeeds, setSelectedNeeds] = useState(new Set())

  const toggleNeed = (index) => {
    const newSelected = new Set(selectedNeeds)
    if (newSelected.has(index)) {
      newSelected.delete(index)
    } else {
      newSelected.add(index)
    }
    setSelectedNeeds(newSelected)
  }

  const handleGetHelp = () => {
    if (selectedNeeds.size > 0) {
      navigate('/assessment')
    }
  }

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-headline">Help for today. Hope for tomorrow.</h1>
            <p className="hero-subhead">Your Benefits made Simple!</p>
          </div>
        </div>
      </section>

      <section className="needs-section">
        <h2 className="section-title">What do you need help with today?</h2>
        <p className="section-instruction">
          Choose your needs. We'll show you programs you qualify for and help you apply.
        </p>
        <div className="needs-grid">
          {needs.map((need, index) => (
            <div
              key={index}
              className={`need-tile ${selectedNeeds.has(index) ? 'selected' : ''}`}
              onClick={() => toggleNeed(index)}
            >
              <h3>{need}</h3>
            </div>
          ))}
        </div>
        <div className="get-help-button-container">
          <PrimaryButton
            onClick={handleGetHelp}
            disabled={selectedNeeds.size === 0}
          >
            Get Help
          </PrimaryButton>
        </div>
      </section>

      <section className="programs-section">
        <div className="programs-title-wrapper">
          <div className="title-line"></div>
          <h2 className="programs-title">OUR BENEFIT PROGRAMS</h2>
          <div className="title-line"></div>
        </div>
        <div className="programs-grid">
          {benefitPrograms.map((program, index) => (
            <div key={index} className="program-item">
              <h3 className="program-item-title">{program.title}</h3>
              <p className="program-item-description">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="floating-help">
        <div className="help-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <rect x="4" y="6" width="16" height="12" rx="2"/>
            <rect x="6" y="8" width="4" height="2" rx="0.5"/>
            <rect x="14" y="8" width="4" height="2" rx="0.5"/>
            <rect x="8" y="12" width="8" height="2" rx="0.5"/>
            <path d="M10 18h4M8 4v2M16 4v2"/>
            <circle cx="10" cy="4" r="1"/>
            <circle cx="14" cy="4" r="1"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

