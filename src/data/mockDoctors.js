// ============================================================
// mockDoctors.js — All fake data for the app (no backend needed)
// ============================================================

// ---------- DOCTORS LIST ----------
export const doctors = [
  {
    id: 1,
    name: "Dr. Sakshi",
    specialty: "Cardiologist",
    experience: "12 years",
    rating: 4.9,
    reviews: 214,
    fee: 1300,
    available: true,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    hospital: "Apollo Hospital, Delhi",
    about:
      "Dr. Sakshi is a leading cardiologist with over 12 years of experience in treating heart conditions.",
    languages: ["English", "Hindi"],
    slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
  },
  {
    id: 2,
    name: "Dr. Rohan Mehta",
    specialty: "Dermatologist",
    experience: "8 years",
    rating: 4.7,
    reviews: 189,
    fee: 600,
    available: true,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    hospital: "Fortis Hospital, Gurgaon",
    about:
      "Dr. Rohan Mehta specialises in skin disorders, cosmetic dermatology, and laser treatments.",
    languages: ["English", "Hindi", "Punjabi"],
    slots: ["10:00 AM", "11:30 AM", "01:00 PM", "03:00 PM", "05:00 PM"],
  },
  {
    id: 3,
    name: "Dr. Anjali Nair",
    specialty: "Neurologist",
    experience: "15 years",
    rating: 4.8,
    reviews: 302,
    fee: 1000,
    available: false,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    hospital: "Max Hospital, Saket",
    about:
      "Dr. Anjali Nair is an expert in diagnosing and managing neurological disorders including migraines and epilepsy.",
    languages: ["English", "Malayalam", "Hindi"],
    slots: ["09:30 AM", "12:00 PM", "02:30 PM"],
  },
  {
    id: 4,
    name: "Dr. Vikram Singh",
    specialty: "Orthopedic",
    experience: "10 years",
    rating: 4.6,
    reviews: 145,
    fee: 700,
    available: true,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    hospital: "Medanta, Gurgaon",
    about:
      "Dr. Vikram Singh focuses on bone, joint, and muscle conditions, including sports injuries and arthritis.",
    languages: ["English", "Hindi"],
    slots: ["08:00 AM", "10:30 AM", "01:30 PM", "04:30 PM"],
  },
  {
    id: 5,
    name: "Dr. Sneha Reddy",
    specialty: "Pediatrician",
    experience: "9 years",
    rating: 4.9,
    reviews: 267,
    fee: 500,
    available: true,
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    hospital: "Rainbow Children's Hospital, Hyderabad",
    about:
      "Dr. Sneha Reddy is a compassionate pediatrician who specialises in child wellness and developmental health.",
    languages: ["English", "Telugu", "Hindi"],
    slots: ["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM", "05:30 PM"],
  },
  {
    id: 6,
    name: "Dr. Arjun Kapoor",
    specialty: "Psychiatrist",
    experience: "11 years",
    rating: 4.7,
    reviews: 198,
    fee: 900,
    available: true,
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    hospital: "NIMHANS, Bangalore",
    about:
      "Dr. Arjun Kapoor works with patients dealing with anxiety, depression, and other mental health conditions.",
    languages: ["English", "Hindi", "Kannada"],
    slots: ["10:00 AM", "12:00 PM", "03:00 PM", "05:00 PM"],
  },
];

// ---------- UPCOMING APPOINTMENTS ----------
export const upcomingAppointments = [
  {
    id: 101,
    doctor: "Dr. Priya Sharma",
    specialty: "Cardiologist",
    date: "Today",
    time: "3:00 PM",
    status: "Confirmed",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 102,
    doctor: "Dr. Rohan Mehta",
    specialty: "Dermatologist",
    date: "27 Apr 2026",
    time: "11:30 AM",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 103,
    doctor: "Dr. Vikram Singh",
    specialty: "Orthopedic",
    date: "30 Apr 2026",
    time: "10:30 AM",
    status: "Confirmed",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

// ---------- SPECIALTIES (for filter buttons) ----------
export const specialties = [
  "All",
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Orthopedic",
  "Pediatrician",
  "Psychiatrist",
];