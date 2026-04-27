import { useState } from "react";
import Footer from "../Footer";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${form.email}`);
  };

  return (
    <div style={page}>
      <h2>Login</h2>
      <form onSubmit={submit} style={formStyle}>
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handle} required style={input} />
        <input name="password" type="password" placeholder="Password" value={form.password} onChange={handle} required style={input} />
        <button type="submit" style={btn}>Login</button>
      </form>
      <Footer />
    </div>
  );
}

const page = { padding: "40px", textAlign: "center", minHeight: "80vh" };
const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" };
const input = { padding: "10px", width: "280px", borderRadius: "6px", border: "1px solid #ccc" };
const btn = { padding: "10px 30px", background: "#c0e2e7", color: "#040000", border: "none", borderRadius: "6px", cursor: "pointer" };

export default Login;
