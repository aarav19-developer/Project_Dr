// ============================================================
// App.jsx — Root component. Sets up all page routes.
// ============================================================
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar          from './components/Navbar'
import Dashboard       from './pages/Dashboard'
import DoctorListing   from './pages/DoctorListing'
import BookAppointment from './pages/BookAppointment'
import Confirmation    from './pages/Confirmation'
import './styles/Global.css'

function App() {
  return (
    // BrowserRouter: gives us access to URL-based routing everywhere in the app
    <BrowserRouter>

      {/* Navbar stays visible on every page */}
      <Navbar />

      {/* Routes: only ONE of these renders at a time based on the URL */}
      <Routes>
        <Route path="/"              element={<Dashboard />} />
        <Route path="/doctors"       element={<DoctorListing />} />
        <Route path="/book/:id"      element={<BookAppointment />} />
        <Route path="/confirmation"  element={<Confirmation />} />
      </Routes>

    </BrowserRouter>
  )
}


export default App 