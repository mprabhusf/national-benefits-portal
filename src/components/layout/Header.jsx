import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isApplications = location.pathname.startsWith('/applications')

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-top">
          <div className="header-left">
            <Link to="/" className="header-logo">
              <div className="logo-icon">🏛️</div>
              <span className="logo-text">National Benefits</span>
            </Link>
          </div>
          <div className="header-right">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#825101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <div className="user-dropdown">
              <div className="user-avatar">👤</div>
              <span className="user-name">Bill Smith</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <button className="notifications-btn" aria-label="Notifications">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#825101" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
          </div>
        </div>
        <nav className="header-nav">
          <Link to="/" className={`nav-link ${isHome ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/program-selection" className="nav-link">
            Benefits
          </Link>
          <Link to="/applications/20002" className={`nav-link ${isApplications ? 'active' : ''}`}>
            Applications
          </Link>
          <Link to="/applications/20002" className="nav-link">
            My Profile
          </Link>
        </nav>
      </div>
    </header>
  )
}

