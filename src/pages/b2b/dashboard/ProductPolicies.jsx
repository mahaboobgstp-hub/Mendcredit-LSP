import React, { useState } from "react";
import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

const loanProducts = [
  "Personal Loan",
  "Business Loan",
  "Housing Loan",
  "Loan Against Property",
  "Car Loan"
];

const defaultMetrics = {
  creditScore: { value: 720, active: true },
  foir: { value: 50, active: true },
  maxDPD: { value: 30, active: true },
  income: { value: 25000, active: true },
  bankBalance: { value: 10000, active: true },
  gstTurnover: { value: 1000000, active: false },
  businessVintage: { value: 24, active: false },
  propertyLTV: { value: 70, active: false }
};

export default function CreditPolicyPage() {

  const [activeTab, setActiveTab] = useState("Personal Loan");

  const [policies, setPolicies] = useState({
    "Personal Loan": { ...defaultMetrics },
    "Business Loan": { ...defaultMetrics },
    "Housing Loan": { ...defaultMetrics },
    "Loan Against Property": { ...defaultMetrics },
    "Car Loan": { ...defaultMetrics }
  });

  const handleSliderChange = (metric, value) => {
    setPolicies({
      ...policies,
      [activeTab]: {
        ...policies[activeTab],
        [metric]: {
          ...policies[activeTab][metric],
          value
        }
      }
    });
  };

  const toggleMetric = (metric) => {
    setPolicies({
      ...policies,
      [activeTab]: {
        ...policies[activeTab],
        [metric]: {
          ...policies[activeTab][metric],
          active: !policies[activeTab][metric].active
        }
      }
    });
  };

  const policy = policies[activeTab];

  return (
    <div className="policy-container">

      <h2>Credit Policy Builder</h2>

      {/* Loan Product Tabs */}
      <div className="tabs">
        {loanProducts.map(product => (
          <button
            key={product}
            className={activeTab === product ? "activeTab" : ""}
            onClick={() => setActiveTab(product)}
          >
            {product}
          </button>
        ))}
      </div>

      {/* Metrics Section */}

      <div className="metrics">

        <MetricSlider
          label="Minimum Credit Score"
          metric="creditScore"
          min={300}
          max={900}
          step={10}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`score >= ${policy.creditScore.value}`}
        />

        <MetricSlider
          label="FOIR (%)"
          metric="foir"
          min={10}
          max={80}
          step={5}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`foir <= ${policy.foir.value}%`}
        />

        <MetricSlider
          label="Max DPD Allowed"
          metric="maxDPD"
          min={0}
          max={90}
          step={5}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`dpd <= ${policy.maxDPD.value}`}
        />

        <MetricSlider
          label="Minimum Monthly Income"
          metric="income"
          min={5000}
          max={200000}
          step={5000}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`income >= ₹${policy.income.value}`}
        />

        <MetricSlider
          label="Minimum Avg Bank Balance"
          metric="bankBalance"
          min={1000}
          max={100000}
          step={1000}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`avg_balance >= ₹${policy.bankBalance.value}`}
        />

        <MetricSlider
          label="Minimum GST Turnover"
          metric="gstTurnover"
          min={100000}
          max={50000000}
          step={100000}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`gst_turnover >= ₹${policy.gstTurnover.value}`}
        />

        <MetricSlider
          label="Business Vintage (Months)"
          metric="businessVintage"
          min={6}
          max={120}
          step={6}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`vintage >= ${policy.businessVintage.value} months`}
        />

        <MetricSlider
          label="Maximum LTV (%)"
          metric="propertyLTV"
          min={30}
          max={90}
          step={5}
          policy={policy}
          toggleMetric={toggleMetric}
          handleSliderChange={handleSliderChange}
          rule={`ltv <= ${policy.propertyLTV.value}%`}
        />

      </div>

    </div>
  );
}


function MetricSlider({
  label,
  metric,
  min,
  max,
  step,
  policy,
  toggleMetric,
  handleSliderChange,
  rule
}) {

  return (
    <div className="metric-card">

      <div className="metric-header">

        <label>{label}</label>

        <input
          type="checkbox"
          checked={policy[metric].active}
          onChange={() => toggleMetric(metric)}
        />

      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={policy[metric].value}
        onChange={(e) => handleSliderChange(metric, e.target.value)}
      />

      <div className="metric-value">

        <span>{policy[metric].value}</span>

      </div>

      <div className="rule">

        Rule: {rule}

      </div>

    </div>
  );
}
