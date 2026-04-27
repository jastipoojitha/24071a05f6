import { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Footer";

const allPlans = ["Basic", "Standard", "Premium"];

function Payment() {
  const { state } = useLocation();
  const [selectedPlan, setSelectedPlan] = useState(state?.selectedPlan || "");
  const [form, setForm] = useState({ name: "", card: "", expiry: "", cvv: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!selectedPlan) return alert("Please select a plan.");
    alert(`Payment successful for ${selectedPlan} plan! Thank you.`);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", minHeight: "80vh", paddingBottom: "60px" }}>
      <h2>Payment</h2>
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontWeight: "bold" }}>Select a Plan:</p>
        {allPlans.map((plan) => (
          <label key={plan} style={{ marginRight: "20px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={selectedPlan === plan}
              onChange={() => setSelectedPlan(plan)}
              style={{ marginRight: "6px" }}
            />
            {plan}
          </label>
        ))}
      </div>
      <form onSubmit={submit} style={formStyle}>
        <input name="name" placeholder="Cardholder Name" value={form.name} onChange={handle} required style={input} />
        <input name="card" placeholder="Card Number (16 digits)" maxLength={16} value={form.card} onChange={handle} required style={input} />
        <input name="expiry" placeholder="Expiry (MM/YY)" value={form.expiry} onChange={handle} required style={input} />
        <input name="cvv" placeholder="CVV" maxLength={3} value={form.cvv} onChange={handle} required style={input} />
        <button type="submit" style={btn}>Pay Now</button>
      </form>
      <Footer />
    </div>
  );
}

const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" };
const input = { padding: "10px", width: "280px", borderRadius: "6px", border: "1px solid #ccc" };
const btn = { padding: "10px 30px", background: "#c0e2e7", color: "#080000", border: "none", borderRadius: "6px", cursor: "pointer" };

export default Payment;
