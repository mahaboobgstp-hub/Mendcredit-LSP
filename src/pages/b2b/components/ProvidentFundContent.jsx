import React, { useState } from "react";
import "./PFUnderwritingDashboard.css";

const pfData = {
  employee_name: "Rahul Sharma",
  uan: "100234567890",
  employer_name: "ABC Pvt Ltd",
  establishment_id: "EST12345",
  employment_start_date: "2021-06-01",
  employment_status: "Active",

  estimated_salary: 50000,
  average_salary: 48000,
  salary_growth: "8%",
  salary_volatility: "Low",

  total_employers: 2,
  employment_tenure: "3.5 years",
  job_change_frequency: "Low",

  contribution_months: 34,
  missed_contributions: 1,
  employer_contribution: 6000,

  risk_flags: {
    employer_mismatch: "No",
    contribution_gaps: "No",
    frequent_job_changes: "No"
  }
};

export default function PFUnderwritingDashboard() {

  const [activeTab, setActiveTab] = useState("employment");

  return (
    <div className="pf-dashboard">

      <h2 className="dashboard-title">PF / EPFO Underwriting Dashboard</h2>

      {/* TOP SUMMARY CARDS */}

      <div className="summary-grid">

        <div className="summary-card">
          <h4>Estimated Salary</h4>
          <p>₹{pfData.estimated_salary}</p>
        </div>

        <div className="summary-card">
          <h4>Employment Tenure</h4>
          <p>{pfData.employment_tenure}</p>
        </div>

        <div className="summary-card">
          <h4>Total Employers</h4>
          <p>{pfData.total_employers}</p>
        </div>

        <div className="summary-card">
          <h4>Contribution Months</h4>
          <p>{pfData.contribution_months}</p>
        </div>

      </div>


      {/* TABS */}

      <div className="tabs">

        <button
          className={activeTab === "employment" ? "tab active" : "tab"}
          onClick={() => setActiveTab("employment")}
        >
          Employment
        </button>

        <button
          className={activeTab === "salary" ? "tab active" : "tab"}
          onClick={() => setActiveTab("salary")}
        >
          Salary Analytics
        </button>

        <button
          className={activeTab === "contribution" ? "tab active" : "tab"}
          onClick={() => setActiveTab("contribution")}
        >
          Contributions
        </button>

        <button
          className={activeTab === "risk" ? "tab active" : "tab"}
          onClick={() => setActiveTab("risk")}
        >
          Risk Indicators
        </button>

      </div>


      {/* TAB CONTENT */}

      <div className="tab-content">

        {activeTab === "employment" && (
          <div className="grid">

            <div className="card">
              <h4>Employee Name</h4>
              <p>{pfData.employee_name}</p>
            </div>

            <div className="card">
              <h4>UAN</h4>
              <p>{pfData.uan}</p>
            </div>

            <div className="card">
              <h4>Current Employer</h4>
              <p>{pfData.employer_name}</p>
            </div>

            <div className="card">
              <h4>Establishment ID</h4>
              <p>{pfData.establishment_id}</p>
            </div>

            <div className="card">
              <h4>Employment Status</h4>
              <p>{pfData.employment_status}</p>
            </div>

          </div>
        )}


        {activeTab === "salary" && (
          <div className="grid">

            <div className="card">
              <h4>Estimated Monthly Salary</h4>
              <p>₹{pfData.estimated_salary}</p>
            </div>

            <div className="card">
              <h4>Average Salary</h4>
              <p>₹{pfData.average_salary}</p>
            </div>

            <div className="card">
              <h4>Salary Growth</h4>
              <p>{pfData.salary_growth}</p>
            </div>

            <div className="card">
              <h4>Salary Volatility</h4>
              <p>{pfData.salary_volatility}</p>
            </div>

          </div>
        )}


        {activeTab === "contribution" && (
          <div className="grid">

            <div className="card">
              <h4>Months With Contribution</h4>
              <p>{pfData.contribution_months}</p>
            </div>

            <div className="card">
              <h4>Missed Contributions</h4>
              <p>{pfData.missed_contributions}</p>
            </div>

            <div className="card">
              <h4>Employer Contribution</h4>
              <p>₹{pfData.employer_contribution}</p>
            </div>

          </div>
        )}


        {activeTab === "risk" && (
          <div className="grid">

            <div className="card risk">
              <h4>Employer Mismatch</h4>
              <p>{pfData.risk_flags.employer_mismatch}</p>
            </div>

            <div className="card risk">
              <h4>Contribution Gaps</h4>
              <p>{pfData.risk_flags.contribution_gaps}</p>
            </div>

            <div className="card risk">
              <h4>Frequent Job Changes</h4>
              <p>{pfData.risk_flags.frequent_job_changes}</p>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
