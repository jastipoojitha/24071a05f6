import { useNavigate } from "react-router-dom";
import Footer from "../Footer";

const plans = [
  { name: "Basic", price: "₹999/month", features: ["Access to gym floor", "Locker room", "2 group classes/week"] },
  { name: "Standard", price: "₹1799/month", features: ["All Basic features", "Unlimited group classes", "Dietician Consultation"] },
  { name: "Premium", price: "₹2999/month", features: ["All Standard features", "Personal trainer", "Spa access"] },
];

function MembershipPlans() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px", textAlign: "center", minHeight: "80vh" }}>
      <h2>Membership Plans</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap", marginTop: "20px" }}>
        {plans.map((plan) => (
          <div key={plan.name} style={card}>
            <h3>{plan.name}</h3>
            <p style={{ fontSize: "1.4rem", color: "#001973" }}>{plan.price}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button style={btn} onClick={() => navigate("/payment", { state: { selectedPlan: plan.name } })}>Choose Plan</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

const card = { background: "#f4f4f4", borderRadius: "10px", padding: "24px", width: "220px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" };
const btn = { marginTop: "12px", padding: "10px 20px", background: "#c0e2e7", color: "#001973", border: "none", borderRadius: "6px", cursor: "pointer" };

export default MembershipPlans;
