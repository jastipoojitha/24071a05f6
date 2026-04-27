import { useState } from "react";
import Footer from "../Footer";

function Register() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", age: "", gender: "", height: "", weight: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert(`Registered successfully! Welcome, ${form.firstName} ${form.lastName}`);
  };

  return (
    <div style={page}>
      <h2>Register</h2>
      <form onSubmit={submit} style={formStyle}>
        <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handle} required style={input} />
        <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handle} required style={input} />
        <input name="email" type="email" placeholder="Email ID" value={form.email} onChange={handle} required style={input} />
        <input name="phone" placeholder="Phone No" value={form.phone} onChange={handle} required style={input} />
        <input name="age" type="number" placeholder="Age" value={form.age} onChange={handle} required style={input} />
        <select name="gender" value={form.gender} onChange={handle} required style={input}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input name="height" type="number" placeholder="Height (cm)" value={form.height} onChange={handle} required style={input} />
        <input name="weight" type="number" placeholder="Weight (kg)" value={form.weight} onChange={handle} required style={input} />
        <button type="submit" style={btn}>Register</button>
      </form>
      <Footer />
    </div>
  );
}

const page = { padding: "40px", textAlign: "center", minHeight: "80vh", paddingBottom: "60px" };
const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" };
const input = { padding: "10px", width: "280px", borderRadius: "6px", border: "1px solid #ccc" };
const btn = { padding: "10px 30px", background: "#c0e2e7", color: "#160000", border: "none", borderRadius: "6px", cursor: "pointer" };

export default Register;
