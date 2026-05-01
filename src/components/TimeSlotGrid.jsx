// ============================================================
// TimeSlotGrid.jsx — Grid of time buttons to pick an appointment slot
// Props:
//   slots       → array of time strings e.g. ["09:00 AM", "10:00 AM"]
//   selected    → currently selected slot (string)
//   onSelect    → function called when a slot is clicked
// ============================================================
import '../styles/Timeslot.css'

function TimeSlotGrid({ slots, selected, onSelect }) {
  return (
    <div className="timeslot-section">
      <h4 className="timeslot-title">Select a Time Slot</h4>

      {/* If no slots passed, show a message */}
      {slots.length === 0 ? (
        <p className="no-slots">No slots available for this date.</p>
      ) : (
        <div className="timeslot-grid">
          {slots.map((slot) => (
            <button
              key={slot}
              // If this slot equals the selected one → add "selected" class
              className={`slot-btn ${selected === slot ? 'slot-btn--selected' : ''}`}
              onClick={() => onSelect(slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default TimeSlotGrid