import { useState, useEffect } from "react";
import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BorrowerSearch() {
  const [showModal, setShowModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);

  const [formData, setFormData] = useState({
    applicationId: "",
    bureau: "CIBIL",
    name: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    pin: "",
    otp: ""
  });

  const [borrowers, setBorrowers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      pan: "ABCDE1235F",
      mobile: "98XXXX321",
      score: 721,
      risk: "Medium"
    }
  ]);

  // Auto-generate Application ID
  const generateApplicationId = () => {
    return "APP" + Date.now();
  };

  const openModal = () => {
    setFormData({
      ...formData,
      applicationId: generateApplicationId()
    });
    setShowModal(true);
  };

  const sendOtp = () => {
    setOtpSent(true);
    setTimer(60); // 60 seconds expiry
  };

  // OTP Countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleSubmit = () => {
    // Add applicant to table (mock until bureau integration)
    setBorrowers([
      ...borrowers,
      {
        id: borrowers.length + 1,
        name: formData.name,
        pan: "N/A",
        mobile: formData.mobile,
        score: "Pending",
        risk: "Pending"
      }
    ]);

    setShowModal(false);
    setOtpSent(false);
    setTimer(0);
  };

  return (
    <B2BLayout>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Borrower Search</h1>
        <button className="b2b-primary-btn" onClick={openModal}>
          + New Application
        </button>
      </div>

      <p className="b2b-subtitle">
        Search borrowers using PAN, mobile number, or application ID.
      </p>

      <div className="b2b-search-card">
        <input placeholder="PAN (e.g. ABCDE1235F)" />
        <input placeholder="Mobile Number" />
        <input placeholder="Application ID (optional)" />
        <button className="b2b-primary-btn">
          Search Borrower
        </button>
      </div>

      <table className="b2b-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>PAN</th>
            <th>Mobile</th>
            <th>Credit Score</th>
            <th>Risk</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {borrowers.map((b) => (
            <tr key={b.id}>
              <td>{b.name}</td>
              <td>{b.pan}</td>
              <td>{b.mobile}</td>
              <td>{b.score}</td>
              <td>{b.risk}</td>
              <td>
                <a href="#">View Profile</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* LIGHTBOX MODAL */}
      {showModal && (
        <div className="b2b-modal-overlay">
          <div className="b2b-modal">
            <h2>New Application</h2>

            <input value={formData.applicationId} disabled />

            <select
              value={formData.bureau}
              onChange={(e) =>
                setFormData({ ...formData, bureau: e.target.value })
              }
            >
              <option>CIBIL</option>
              <option>Experian</option>
              <option>Equifax</option>
              <option>CRIF</option>
            </select>

            <input
              placeholder="Name"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              placeholder="Mobile"
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />

            <input
              placeholder="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="date"
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />

            <input
              placeholder="PIN"
              onChange={(e) =>
                setFormData({ ...formData, pin: e.target.value })
              }
            />

            {!otpSent ? (
              <button className="b2b-primary-btn" onClick={sendOtp}>
                Send OTP
              </button>
            ) : (
              <>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input
                    placeholder="Enter OTP"
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                  />
                  <span style={{ color: "red" }}>
                    Expires in {timer}s
                  </span>
                </div>

                <button className="b2b-primary-btn" onClick={handleSubmit}>
                  Submit
                </button>
              </>
            )}

            <button
              className="b2b-secondary-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </B2BLayout>
  );
}
