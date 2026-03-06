import { NavLink } from "react-router-dom";
import "../../styles/b2b.css";

export default function Sidebar() {
  return (
    <aside className="b2b-sidebar">
      <h2 className="b2b-logo">MendCredit Lender</h2>

      <nav>
        <ul>
          <li><NavLink to="/b2b/dashboard" end>Overview</NavLink></li>
          <li><NavLink to="/b2b/dashboard/borrowers">Borrower Search</NavLink></li>
          <li><NavLink to="/b2b/dashboard/credit-report">Credit Report</NavLink></li>
          <li><NavLink to="/b2b/dashboard/bank-analysis">Bank Statement Analysis</NavLink></li>
          <li><NavLink to="/b2b/dashboard/income">Income Verification</NavLink></li>
          <li><NavLink to="/b2b/dashboard/risk">Risk Engine</NavLink></li>
          <li><NavLink to="/b2b/dashboard/decision">Credit Decision</NavLink></li>
          <li><NavLink to="/b2b/dashboard/audit">Audit Trail</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}

