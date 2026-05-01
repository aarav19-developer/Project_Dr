// ============================================================
// DoctorCard.jsx — Card shown in the Doctor Listing page
// Props:
//   doctor   → one doctor object from mockDoctors.js
//   onBook   → function to call when "Book Appointment" is clicked
// ============================================================
import '../styles/Doctorcard.css'

function DoctorCard({ doctor, onBook }) {
  return (
    <div className="doctor-card">
      {/* Availability badge at top right */}
      <div className={`availability-badge ${doctor.available ? 'available' : 'unavailable'}`}>
        {doctor.available ? '● Available' : '● Unavailable'}
      </div>

      {/* Doctor photo + basic info */}
      <div className="doctor-card-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-img" />
        <div className="doctor-card-info">
          <h3 className="doctor-card-name">{doctor.name}</h3>
          <p className="doctor-card-spec">{doctor.specialty}</p>
          <p className="doctor-card-hospital">🏥 {doctor.hospital}</p>
          <p className="doctor-card-exp">🎓 {doctor.experience} experience</p>
        </div>
      </div>

      {/* Rating and fee row */}
      <div className="doctor-card-meta">
        <div className="doctor-rating">
          ⭐ {doctor.rating}
          <span className="doctor-reviews">({doctor.reviews} reviews)</span>
        </div>
        <div className="doctor-fee">₹{doctor.fee} / visit</div>
      </div>

      {/* Languages */}
      <div className="doctor-languages">
        {doctor.languages.map((lang) => (
          <span key={lang} className="lang-tag">{lang}</span>
        ))}
      </div>

      {/* Book button — disabled if doctor is not available */}
      <button
        className="book-btn"
        onClick={() => onBook(doctor)}
        disabled={!doctor.available}
      >
        {doctor.available ? 'Book Appointment' : 'Not Available'}
      </button>
    </div>
  )
}

export default DoctorCard