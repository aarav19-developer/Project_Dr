// ============================================================
// Confirmation.jsx — Success screen after booking
// ============================================================
import { useLocation, useNavigate } from 'react-router-dom'
import '../styles/Confirmation.css'

function Confirmation() {
  const navigate  = useNavigate()
  const location  = useLocation()

  // Destructure all the booking data passed from BookAppointment
  const { doctor, date, slot, patient } = location.state || {}

  // Guard: if someone lands here directly without data, redirect them
  if (!doctor) {
    navigate('/')
    return null
  }

  return (
    <div className="page-wrapper confirm-page">

      {/* Success animation / icon */}
      <div className="confirm-icon">✅</div>

      <h1 className="confirm-heading">Appointment Confirmed!</h1>
      <p className="confirm-sub">
        Your appointment has been booked successfully. See you soon!
      </p>

      {/* Booking details card */}
      <div className="confirm-card">
        {/* Doctor row */}
        <div className="confirm-doctor-row">
          <img src={doctor.image} alt={doctor.name} className="confirm-doctor-img" />
          <div>
            <p className="confirm-doctor-name">{doctor.name}</p>
            <p className="confirm-doctor-spec">{doctor.specialty}</p>
            <p className="confirm-hospital">🏥 {doctor.hospital}</p>
          </div>
        </div>

        <hr className="confirm-divider" />

        {/* Details grid */}
        <div className="confirm-details">
          <div className="confirm-detail-item">
            <span className="cd-icon">📅</span>
            <div>
              <p className="cd-label">Date</p>
              <p className="cd-value">{date}</p>
            </div>
          </div>
          <div className="confirm-detail-item">
            <span className="cd-icon">🕐</span>
            <div>
              <p className="cd-label">Time</p>
              <p className="cd-value">{slot}</p>
            </div>
          </div>
          <div className="confirm-detail-item">
            <span className="cd-icon">👤</span>
            <div>
              <p className="cd-label">Patient</p>
              <p className="cd-value">{patient.name}, {patient.age} yrs</p>
            </div>
          </div>
          <div className="confirm-detail-item">
            <span className="cd-icon">📞</span>
            <div>
              <p className="cd-label">Phone</p>
              <p className="cd-value">{patient.phone}</p>
            </div>
          </div>
          <div className="confirm-detail-item">
            <span className="cd-icon">💬</span>
            <div>
              <p className="cd-label">Reason</p>
              <p className="cd-value">{patient.reason}</p>
            </div>
          </div>
          <div className="confirm-detail-item">
            <span className="cd-icon">💰</span>
            <div>
              <p className="cd-label">Fee</p>
              <p className="cd-value fee-text">₹{doctor.fee}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="confirm-actions">
        <button className="btn-primary" onClick={() => navigate('/')}>
          🏠 Back to Dashboard
        </button>
        <button className="btn-secondary" onClick={() => navigate('/doctors')}>
          Book Another
        </button>
      </div>

    </div>
  )
}

export default Confirmation