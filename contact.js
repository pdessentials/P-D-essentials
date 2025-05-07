import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setSubmitted(true);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      {submitted ? (
        <p className="text-green-600">Thanks for your message! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input type="text" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border p-2 rounded" required />
          <textarea placeholder="Message" onChange={e => setForm({ ...form, message: e.target.value })} className="w-full border p-2 rounded" required />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
      )}
      <p className="text-sm text-gray-500 mt-4">You can also email us directly at <a href="mailto:pdessentials26632@gmail.com" className="text-blue-600 underline">pdessentials26632@gmail.com</a></p>
    </div>
  );
}
