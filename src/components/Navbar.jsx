// ============================================================
// Navbar.jsx — Top navigation bar shown on all pages
// ============================================================
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'

function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      {/* Logo / Brand */}
      <div className="navbar-brand" onClick={() => navigate('/')}>
        🏥 <span> <i> <b>ScheDix</b> </i></span>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        {/* NavLink automatically adds "active" class to the current page */}
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Dashboard
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Find Doctors
        </NavLink>
      </div>

      {/* User Avatar */}
      <div className="navbar-user">
        <img
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="Aarav Harit"
          className="user-avatar"
        />
        <span className="user-name">Aarav</span>
      </div>
    </nav>
  )
}

export default Navbar