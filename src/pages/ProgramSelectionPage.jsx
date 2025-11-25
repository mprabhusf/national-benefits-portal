import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PageTitle from '../components/ui/PageTitle'
import { PrimaryButton } from '../components/ui/Button'
import ProgramCard from '../components/ui/ProgramCard'
import './ProgramSelectionPage.css'

const programs = [
  {
    id: 1,
    title: 'Supplemental Nutrition Assistance Program (SNAP)',
    description:
      'Provides nutrition benefits to supplement the food budget of needy families so they can purchase healthy food.',
  },
  {
    id: 2,
    title: 'Temporary Assistance for Needy Families (TANF)',
    description:
      'Provides temporary financial assistance for pregnant women and families with one or more dependent children.',
  },
  {
    id: 3,
    title: 'Medicaid',
    description:
      'A joint federal and state program that helps with medical costs for people with limited income and resources.',
  },
]

export default function ProgramSelectionPage() {
  const navigate = useNavigate()
  const [selectedPrograms, setSelectedPrograms] = useState(new Set())

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPrograms(new Set(programs.map((p) => p.id)))
    } else {
      setSelectedPrograms(new Set())
    }
  }

  const handleProgramToggle = (programId) => {
    const newSelected = new Set(selectedPrograms)
    if (newSelected.has(programId)) {
      newSelected.delete(programId)
    } else {
      newSelected.add(programId)
    }
    setSelectedPrograms(newSelected)
  }

  const allSelected = selectedPrograms.size === programs.length

  return (
    <div className="program-selection-page">
      <PageTitle>Multiple qualifying programs – One Application!</PageTitle>

      <div className="select-all-container">
        <label className="select-all-checkbox">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={handleSelectAll}
          />
          <span>Select all</span>
        </label>
      </div>

      <div className="programs-list">
        {programs.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            description={program.description}
            showCheckbox={true}
            checked={selectedPrograms.has(program.id)}
            onCheckboxChange={() => handleProgramToggle(program.id)}
          />
        ))}
      </div>

      <div className="program-selection-actions">
        <PrimaryButton onClick={() => navigate('/applications/20002')}>
          Proceed to Apply
        </PrimaryButton>
      </div>
    </div>
  )
}

