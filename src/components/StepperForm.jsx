// ============================================================
// StepperForm.jsx — A multi-step progress bar (Step 1 → 2 → 3)
// Props:
//   steps       → array of step labels e.g. ["Select Slot", "Your Info", "Confirm"]
//   currentStep → which step is active (0-indexed)
// ============================================================
import '../styles/stepper.css'

function StepperForm({ steps, currentStep }) {
  return (
    <div className="stepper">
      {steps.map((label, index) => {
        // Decide the state of each circle
        const isDone    = index < currentStep   // already completed
        const isActive  = index === currentStep // currently on this step

        return (
          <div className="stepper-item" key={label}>
            {/* Step circle */}
            <div
              className={`stepper-circle
                ${isDone   ? 'stepper-circle--done'   : ''}
                ${isActive ? 'stepper-circle--active' : ''}
              `}
            >
              {/* Show a ✓ tick for completed steps, number otherwise */}
              {isDone ? '✓' : index + 1}
            </div>

            {/* Step label */}
            <div className={`stepper-label ${isActive ? 'stepper-label--active' : ''}`}>
              {label}
            </div>

            {/* Draw a connecting line between steps (not after last one) */}
            {index < steps.length - 1 && (
              <div className={`stepper-line ${isDone ? 'stepper-line--done' : ''}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default StepperForm