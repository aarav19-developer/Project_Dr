// ============================================================
// BookAppointment.jsx — 3-step booking form
// Step 1: Pick a date & time slot
// Step 2: Fill in patient details
// Step 3: Confirm everything
// ============================================================
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StepperForm from '../components/StepperForm'
import TimeSlotGrid from '../components/TimeSlotGrid'
import '../styles/Booking.css'

// Labels for the 3 steps
const STEPS = ['Select Slot', 'Your Details', 'Confirm']

function BookAppointment() {
  const navigate  = useNavigate()
  const location  = useLocation()

  // The doctor object was passed when navigating here (from DoctorCard or Dashboard)
  const doctor = location.state?.doctor

  // If someone lands here without a doctor, send them back
  if (!doctor) {
    navigate('/doctors')
    return null
  }

  // ---- State ----
  const [currentStep, setCurrentStep] = useState(0)   // 0, 1, or 2
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [formData, setFormData]         = useState({
    name:   '',
    age:    '',
    phone:  '',
    reason: '',
  })

  // ---- Handlers ----

  // Update a single field in formData without losing the others
  function handleFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Go to next step
  function goNext() {
    setCurrentStep((prev) => prev + 1)
  }

  // Go back one step
  function goBack() {
    setCurrentStep((prev) => prev - 1)
  }

  // Final submit — go to confirmation page with all data
  function handleSubmit() {
    navigate('/confirmation', {
      state: {
        doctor,
        date: selectedDate,
        slot: selectedSlot,
        patient: formData,
      },
    })
  }

  // ---- Step 1 validation: both date and slot must be selected ----
  const step1Valid = selectedDate !== '' && selectedSlot !== ''

  // ---- Step 2 validation: all fields must be filled ----
  const step2Valid =
    formData.name.trim() !== '' &&
    formData.age.trim()  !== '' &&
    formData.phone.trim() !== '' &&
    formData.reason.trim() !== ''

  return (
    <div className="page-wrapper">
      {/* Progress bar */}
      <StepperForm steps={STEPS} currentStep={currentStep} />

      <div className="booking-card">

        {/* ===================== STEP 0: Pick Slot ===================== */}
        {currentStep === 0 && (
          <div className="booking-step">
            <h2 className="step-title">Choose Date & Time</h2>

            {/* Doctor mini-profile */}
            <div className="booking-doctor-info">
              <img src={doctor.image} alt={doctor.name} className="booking-doctor-img" />
              <div>
                <p className="booking-doctor-name">{doctor.name}</p>
                <p className="booking-doctor-spec">{doctor.specialty}</p>
              </div>
            </div>

            {/* Date picker */}
            <div className="form-group">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                className="form-input"
                value={selectedDate}
                // min: today's date — prevents booking in the past
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  setSelectedDate(e.target.value)
                  setSelectedSlot('')  // reset slot when date changes
                }}
              />
            </div>

            {/* Show time slots only after a date is picked */}
            {selectedDate && (
              <TimeSlotGrid
                slots={doctor.slots}
                selected={selectedSlot}
                onSelect={setSelectedSlot}
              />
            )}

            <button
              className="btn-primary"
              onClick={goNext}
              disabled={!step1Valid}  // grey out if not ready
            >
              Continue →
            </button>
          </div>
        )}

        {/* ===================== STEP 1: Patient Details ===================== */}
        {currentStep === 1 && (
          <div className="booking-step">
            <h2 className="step-title">Your Details</h2>

            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="e.g. Aarav Kumar"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                className="form-input"
                placeholder="e.g. 21"
                value={formData.age}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                placeholder="e.g. 9876543210"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Reason for Visit</label>
              <textarea
                name="reason"
                className="form-input form-textarea"
                placeholder="Briefly describe your symptoms or reason..."
                value={formData.reason}
                onChange={handleFormChange}
              />
            </div>

            <div className="btn-row">
              <button className="btn-secondary" onClick={goBack}>← Back</button>
              <button className="btn-primary" onClick={goNext} disabled={!step2Valid}>
                Review →
              </button>
            </div>
          </div>
        )}

        {/* ===================== STEP 2: Confirm ===================== */}
        {currentStep === 2 && (
          <div className="booking-step">
            <h2 className="step-title">Confirm Appointment</h2>

            {/* Summary box */}
            <div className="summary-box">
              <div className="summary-row">
                <span className="summary-label">Doctor</span>
                <span className="summary-value">{doctor.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Specialty</span>
                <span className="summary-value">{doctor.specialty}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Date</span>
                <span className="summary-value">{selectedDate}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Time</span>
                <span className="summary-value">{selectedSlot}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Patient</span>
                <span className="summary-value">{formData.name}, {formData.age} yrs</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Phone</span>
                <span className="summary-value">{formData.phone}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Reason</span>
                <span className="summary-value">{formData.reason}</span>
              </div>
              <div className="summary-row summary-fee">
                <span className="summary-label">Consultation Fee</span>
                <span className="summary-value fee-highlight">₹{doctor.fee}</span>
              </div>
            </div>

            <div className="btn-row">
              <button className="btn-secondary" onClick={goBack}>← Back</button>
              <button className="btn-primary" onClick={handleSubmit}>
                ✅ Confirm Booking
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default BookAppointment