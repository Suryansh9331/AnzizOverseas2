import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Clock,
  Video,
  Phone,
  Mail,
} from "lucide-react";

export default function ConsultationBooking() {
  const [currentMonth, setCurrentMonth] = useState(5); // June (0-based index)
  const [currentYear, setCurrentYear] = useState(2025);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const times = [
    "1:25 pm",
    "2:00 pm",
    "2:25 pm",
    "3:00 pm",
    "3:25 pm",
    "4:00 pm",
    "4:25 pm",
    "5:25 pm",
  ];

  // Generate calendar days
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFFE9] font-[Poppins] px-4 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        {/* ========== LEFT: Calendar Section ========== */}
        <div>
          {/* Heading outside card */}
          <h2 className="text-4xl font-[Outfit] font-bold mb-6">Ask an expert</h2>
          <p className="text-2xl font-[Outfit] mb-6">Select a date & time</p>

          {/* Calendar Card */}
          <div className="bg-white rounded-xl shadow p-6">
            {/* Calendar Header */}
            <div className="flex justify-between items-center mb-4">
              <button onClick={handlePrevMonth}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h3 className="font-semibold">
                {new Date(currentYear, currentMonth).toLocaleString("default", {
                  month: "long",
                })}{" "}
                {currentYear}
              </h3>
              <button onClick={handleNextMonth}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Days of week */}
            <div className="grid grid-cols-7 text-sm font-semibold text-gray-600 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <div key={d} className="text-center">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Dates */}
            <div className="grid grid-cols-7 gap-1 text-sm mb-4">
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} />
              ))}
              {Array.from({ length: daysInMonth }, (_, i) => {
                const date = `${currentYear}-${currentMonth + 1}-${i + 1}`;
                const isSelected = selectedDate === date;
                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={`py-2 rounded-lg text-center ${
                      isSelected
                        ? "bg-[#E44F39] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-gray-200 rounded-lg">Cancel</button>
              <button className="px-4 py-2 bg-[#E44F39] text-white rounded-lg">
                ✓ Set date
              </button>
            </div>
          </div>

          {/* Timezone (outside card, centered) */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2 bg-white shadow rounded-lg px-4 py-2">
              <span className="font-semibold">Timezone:</span>
              <select className="border rounded-lg px-3 py-1">
                <option>Asia/Calcutta</option>
                <option>UTC</option>
                <option>EST</option>
              </select>
            </div>
          </div>
        </div>

        {/* ========== MIDDLE: Time Selection ========== */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-[Outfit] mb-4">Select a time</p>
          <div className="grid grid-cols-2 gap-3">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`px-4 py-2 rounded-lg ${
                  selectedTime === t
                    ? "bg-[#E44F39] text-white "
                    : "bg-gray-100  text-[#E44F39] hover:bg-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* ========== RIGHT: Meeting Details ========== */}
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Phone className="text-[#E44F39]" />
            </div>
            <h3 className="text-xl font-[Outfit] font-semibold">
              Book a 1-on-1 Consultation with Mr. Suprans
            </h3>
          </div>

          {/* Meeting Details */}
          <div className="mb-8">
            <h4 className="font-[Outfit] font-semibold mb-2">Meetings Details</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Find reliable suppliers from around the world with our extensive
              network and verification process.
            </p>

            <div className="flex items-center gap-2 mb-2 text-sm">
              <CreditCard size={18} />
              <span>Rs.21,2546</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <Clock size={18} />
              <span>Online</span>
            </div>
            <div className="flex items-center gap-2 mb-2 text-sm">
              <Video size={18} />
              <span>30 minutes</span>
            </div>
          </div>

          {/* Operator */}
          <div>
            <h4 className="font-[Outfit] font-semibold mb-2">Operator</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Find reliable suppliers from around the world with our extensive
              network and verification process.
            </p>

            <div className="flex items-center gap-2 mb-2 text-sm">
              <Phone size={18} />
              <span>212 929 9953</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail size={18} />
              <span>***********.com</span>
            </div>
          </div>

          {/* Chat button (absolute inside section only) */}
          <div className="absolute bottom-0 right-0">
            <button className="w-12 h-12 bg-[#E44F39] rounded-full flex items-center justify-center shadow-lg">
              <MessageIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chat bubble icon
function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 10h8M8 14h6M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4.615-1.086L3 20l1.086-4.615A9.77 9.77 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}
