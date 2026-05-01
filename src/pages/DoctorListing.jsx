// ============================================================
// DoctorListing.jsx — Browse & filter all doctors
// ============================================================
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'
import { doctors, specialties } from '../data/mockDoctors'
import '../styles/Listing.css'

function DoctorListing() {
  const navigate = useNavigate()

  // State: which specialty filter is active
  const [activeFilter, setActiveFilter] = useState('All')

  // State: search box text
  const [searchText, setSearchText] = useState('')

  // ---------- Filter logic ----------
  // 1. Filter by specialty (if "All" is chosen, keep every doctor)
  // 2. Then filter by name matching the search text
  const filteredDoctors = doctors
    .filter((doc) => activeFilter === 'All' || doc.specialty === activeFilter)
    .filter((doc) => doc.name.toLowerCase().includes(searchText.toLowerCase()))

  // ---------- When "Book Appointment" is clicked on a card ----------
  function handleBook(doctor) {
    // Navigate to the booking page and pass the doctor data via router state
    navigate(`/book/${doctor.id}`, { state: { doctor } })
  }

  return (
    <div className="page-wrapper">
      {/* Page title */}
      <div className="listing-header">
        <h2 className="listing-title">Find a Doctor</h2>
        <p className="listing-sub">
          {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Search bar */}
      <input
        type="text"
        className="search-input"
        placeholder="🔍  Search by doctor name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      {/* Specialty filter buttons */}
      <div className="filter-row">
        {specialties.map((spec) => (
          <button
            key={spec}
            className={`filter-btn ${activeFilter === spec ? 'filter-btn--active' : ''}`}
            onClick={() => setActiveFilter(spec)}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctor cards grid */}
      {filteredDoctors.length > 0 ? (
        <div className="doctors-grid">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onBook={handleBook} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>😔 No doctors found. Try a different search or filter.</p>
        </div>
      )}
    </div>
  )
}

export default DoctorListing