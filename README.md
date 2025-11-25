# National Benefits Portal

A React-based skeleton implementation of the National Benefits web application portal.

## Project Structure

```
PSS-262-IE/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Main header with navigation
│   │   │   ├── Header.css
│   │   │   ├── FooterStrip.jsx     # Footer with peach background
│   │   │   ├── FooterStrip.css
│   │   │   ├── MainLayout.jsx      # Main layout wrapper
│   │   │   └── MainLayout.css
│   │   └── ui/
│   │       ├── Button.jsx          # Primary, Secondary, Text buttons
│   │       ├── Button.css
│   │       ├── StatusTag.jsx       # Status badges
│   │       ├── StatusTag.css
│   │       ├── Card.jsx            # Generic card component
│   │       ├── Card.css
│   │       ├── ProgramCard.jsx     # Program/benefit card
│   │       ├── ProgramCard.css
│   │       ├── Tabs.jsx             # Tab navigation
│   │       ├── Tabs.css
│   │       ├── Stepper.jsx          # Step indicator
│   │       ├── Stepper.css
│   │       ├── PageTitle.jsx        # Page title component
│   │       ├── PageTitle.css
│   │       ├── HelpPanel.jsx        # Help sidebar panel
│   │       └── HelpPanel.css
│   ├── pages/
│   │   ├── LandingPage.jsx          # Home / Needs selection
│   │   ├── LandingPage.css
│   │   ├── AssessmentPage.jsx       # Eligibility pre-screener
│   │   ├── AssessmentPage.css
│   │   ├── ProgramSelectionPage.jsx # Qualifying programs list
│   │   ├── ProgramSelectionPage.css
│   │   ├── ApplicationWorkspace.jsx # Application workspace shell
│   │   ├── ApplicationWorkspace.css
│   │   ├── SectionDetailPage.jsx    # Section detail form
│   │   ├── SectionDetailPage.css
│   │   ├── AcknowledgementPage.jsx  # Acknowledgment & submission
│   │   ├── AcknowledgementPage.css
│   │   ├── SubmissionConfirmationPage.jsx # Submission success
│   │   ├── SubmissionConfirmationPage.css
│   │   ├── ApplicationPreviewPage.jsx # Application preview
│   │   ├── ApplicationPreviewPage.css
│   │   ├── AppliedBenefitsPage.jsx  # Applied/assigned benefits
│   │   └── AppliedBenefitsPage.css
│   ├── App.jsx                      # Main app with routing
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Routes

- `/` - Landing / Needs Selection
- `/assessment` - Eligibility Pre-Screener Form
- `/program-selection` - Qualifying Programs List
- `/applications/:id` - Application Workspace Shell
- `/applications/:id/section/:sectionName` - Section Detail Page
- `/applications/:id/acknowledgement` - Acknowledgment & Submission
- `/applications/:id/submitted` - Submission Confirmation
- `/applications/:id/preview` - Application Preview
- `/applications/:id/benefits` - Applied / Assigned Benefits

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Color Palette

- **Gold/Amber**: `#A86400`, `#B56A00` - Primary buttons, active tabs
- **Soft Peach**: `#FFF4EC`, `#FDF1E8` - Section and footer backgrounds
- **White**: `#FFFFFF` - Main page and card backgrounds
- **Cool Gray**: `#E5E7EB`, `#6B7280` - Borders, dividers, secondary text
- **Green**: `#2E7D32`, `#D1FAE5` - Success and completed states
- **Orange/Amber**: `#B45309`, `#FFE4C7` - In-progress and review states
- **Soft Pink/Red**: `#FDE2E2`, `#B91C1C` - Not started and attention states
- **Blue**: `#1D4ED8` - Links and interactive text

## Implementation Notes

- This is a skeleton implementation with placeholder data
- No API integration or complex state management yet
- TODO comments should be added where future logic will go
- Responsive design for desktop breakpoints (mobile can be addressed later)
- All routing is functional and navigates between pages

## Components

### Reusable UI Components
- **Button**: PrimaryButton, SecondaryButton, TextButton
- **StatusTag**: Status badges (complete, partiallyFilled, notStarted, underReview, assigned)
- **Card**: Generic container with padding and rounded corners
- **ProgramCard**: Card for programs/benefits with optional checkbox and metadata
- **Tabs**: Tab navigation component
- **Stepper**: Step indicator for multi-step flows
- **PageTitle**: Page title with optional subtitle
- **HelpPanel**: Sidebar help panel with 3 steps

### Layout Components
- **Header**: Persistent header with logo, navigation, search, user info, notifications
- **FooterStrip**: Footer with peach background and decorative elements
- **MainLayout**: Wrapper component used by all pages

