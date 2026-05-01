// ============================================================
// StatCard.jsx — A single stats box shown on the Dashboard
// Props:
//   icon  → emoji or icon (e.g. "📅")
//   label → title text (e.g. "Upcoming")
//   value → big number to show (e.g. "3")
//   sub   → small text below the number (e.g. "Next: Today 3:00 PM")
//   color → "red" | "black" | "green" | "warning"
// ============================================================

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className={`stat-card stat-card--${color}`}>
      <div className="stat-icon">{icon}</div>
      <div className="stat-info">
        <div className="stat-label">{label}</div>
        <div className="stat-value">{value}</div>
        <div className="stat-sub">{sub}</div>
      </div>
    </div>
  )
}

export default StatCard