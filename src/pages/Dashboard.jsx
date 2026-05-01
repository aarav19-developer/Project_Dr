import { useNavigate } from 'react-router-dom'
import StatCard from '../components/StatCard'
import { upcomingAppointments, doctors } from '../data/mockDoctors'
import '../styles/Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const recentDoctors = doctors.slice(0, 3)

  return (
    <div className="page-wrapper">

      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-greeting">
          Good Morning, <span>Aarav! 👋</span>
        </div>
        <div className="dashboard-date">
          Saturday, 25 April 2026 — Stay healthy today!
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard
          icon="📅"
          label="Upcoming"
          value="3"
          sub="Next: Today 3:00 PM"
          color="blue"
        />
        <StatCard
          icon="👨‍⚕️"
          label="Doctors Visited"
          value="12"
          sub="This year"
          color="purple"
        />
        <StatCard
          icon="✅"
          label="Completed"
          value="28"
          sub="+2 this month"
          color="green"
        />
        <StatCard
          icon="💊"
          label="Prescriptions"
          value="5"
          sub="Active"
          color="warning"
        />
      </div>

      {/* Two col layout */}
      <div className="dashboard-grid">

        {/* Left: Upcoming Appointments */}
        <div>
          <div className="section-header">
            <div className="section-title">Upcoming Appointments</div>
            <span className="section-link" onClick={() => navigate('/doctors')}>
              Book New →
            </span>
          </div>

          <div className="appointments-list">
            {upcomingAppointments.map((appt) => (
              <div className="appointment-item" key={appt.id}>
                <div className="appointment-avatar">
                  <img src={appt.image} alt={appt.doctor} />
                </div>
                <div className="appointment-info">
                  <div className="appointment-doctor">{appt.doctor}</div>
                  <div className="appointment-specialty">{appt.specialty}</div>
                </div>
                <div className="appointment-meta">
                  <div className="appointment-date">{appt.date}</div>
                  <div className="appointment-time">{appt.time}</div>
                  <div style={{ marginTop: '0.35rem' }}>
                    <span
                      className={`badge ${
                        appt.status === 'Confirmed'
                          ? 'badge-success'
                          : 'badge-warning'
                      }`}
                    >
                      {appt.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sidebar */}
        <div>
          {/* Health Summary */}
          <div className="health-card">
            <div className="health-card-title">📊 Health Summary</div>
            <div className="health-metrics">
              <div className="health-metric">
                <div className="health-metric-label">Blood Pressure</div>
                <div className="health-metric-value">120/80</div>
                <div className="health-metric-unit">mmHg — Normal</div>
              </div>
              <div className="health-metric">
                <div className="health-metric-label">Heart Rate</div>
                <div className="health-metric-value">72</div>
                <div className="health-metric-unit">bpm — Normal</div>
              </div>
              <div className="health-metric">
                <div className="health-metric-label">Blood Sugar</div>
                <div className="health-metric-value">98</div>
                <div className="health-metric-unit">mg/dL — Normal</div>
              </div>
              <div className="health-metric">
                <div className="health-metric-label">BMI</div>
                <div className="health-metric-value">22.4</div>
                <div className="health-metric-unit">Healthy</div>
              </div>
            </div>
          </div>

          {/* Recent Doctors */}
          <div className="card">
            <div className="section-header">
              <div className="section-title">Recent Doctors</div>
              <span
                className="section-link"
                onClick={() => navigate('/doctors')}
              >
                View All
              </span>
            </div>
            <div className="recent-doctors">
              {recentDoctors.map((doc) => (
                <div className="recent-doctor-item" key={doc.id}>
                  <div className="recent-doctor-img">
                    <img src={doc.image} alt={doc.name} />
                  </div>
                  <div>
                    <div className="recent-doctor-name">{doc.name}</div>
                    <div className="recent-doctor-spec">{doc.specialty}</div>
                  </div>
                  <button
                    className="book-again-btn"
                    onClick={() =>
                      navigate(`/book/${doc.id}`, { state: { doctor: doc } })
                    }
                  >
                    Book
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard