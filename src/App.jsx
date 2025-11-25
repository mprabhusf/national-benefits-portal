import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import LandingPage from './pages/LandingPage'
import AssessmentPage from './pages/AssessmentPage'
import ProgramSelectionPage from './pages/ProgramSelectionPage'
import ApplicationWorkspace from './pages/ApplicationWorkspace'
import SectionDetailPage from './pages/SectionDetailPage'
import AcknowledgementPage from './pages/AcknowledgementPage'
import SubmissionConfirmationPage from './pages/SubmissionConfirmationPage'
import ApplicationPreviewPage from './pages/ApplicationPreviewPage'
import AppliedBenefitsPage from './pages/AppliedBenefitsPage'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/program-selection" element={<ProgramSelectionPage />} />
          <Route path="/applications/:id" element={<ApplicationWorkspace />} />
          <Route
            path="/applications/:id/section/:sectionName"
            element={<SectionDetailPage />}
          />
          <Route
            path="/applications/:id/acknowledgement"
            element={<AcknowledgementPage />}
          />
          <Route
            path="/applications/:id/submitted"
            element={<SubmissionConfirmationPage />}
          />
          <Route
            path="/applications/:id/preview"
            element={<ApplicationPreviewPage />}
          />
          <Route
            path="/applications/:id/benefits"
            element={<AppliedBenefitsPage />}
          />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App

