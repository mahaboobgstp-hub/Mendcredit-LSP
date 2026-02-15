import B2BLayout from "../../../layouts/B2BLayout";
import "../../../styles/b2b.css";

export default function BorrowerSearch() {
  return (
    <B2BLayout>
      <h1>Borrower Search</h1>
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
            <th>Risk Score</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rahul Sharma</td>
            <td>ABCDE1235F</td>
            <td>98XXXX321</td>
            <td>721</td>
            <td className="risk-medium">Medium</td>
            <td>
              <a href="/b2b/dashboard/borrowers/1">View Profile</a>
            </td>
          </tr>
        </tbody>
      </table>
    </B2BLayout>
  );
}

