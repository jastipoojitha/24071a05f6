import { useState } from "react";
import Footer from "../Footer";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div style={{ padding: "40px", textAlign: "center", minHeight: "80vh" }}>
      <h2>Contact Us</h2>
      <p>FitLife Gym, Hyderabad | +91 98765 43210 | fitlife@gym.com</p>
      <form onSubmit={submit} style={formStyle}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handle} required style={input} />
        <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handle} required style={input} />
        <textarea name="message" placeholder="Your Message" value={form.message} onChange={handle} required style={{ ...input, height: "100px", resize: "vertical" }} />
        <button type="submit" style={btn}>Send Message</button>
      </form>
      <Footer />
    </div>
  );
}

const formStyle = { display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" };
const input = { padding: "10px", width: "280px", borderRadius: "6px", border: "1px solid #ccc" };
const btn = { padding: "10px 30px", background: "#c0e2e7", color: "#000000", border: "none", borderRadius: "6px", cursor: "pointer" };

export default Contact;
