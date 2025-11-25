import Header from './Header'
import FooterStrip from './FooterStrip'
import './MainLayout.css'

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content">{children}</main>
      <FooterStrip />
    </div>
  )
}

