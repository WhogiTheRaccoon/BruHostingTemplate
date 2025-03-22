"use client";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string>("");

  // Handle input change for all form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Clear the Form
  const clearForm = () => setFormData({ name: "", email: "", message: "" });

  // Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) return setStatus("Please fill in all fields.");
    
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        clearForm();
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }

    setIsSubmitting(false);
  }

    return (
        <div className="container py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Any questions holding you back?</h1>
        <h2 className="text-2xl text-muted pb-6">Leave us a message and we'll get back to you!</h2>
        {status && <p className={`text-lg pb-6 ${status.includes("successfully") ? "text-green-500" : "text-red-500"}`}>{status}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full md:w-1/2 mx-auto text-white text-xl">
          <input type="text" name="name" placeholder="Name" className="p-2 bg-backgroundLight border-2 border-borders col-span-2 md:col-span-1" value={formData.name} onChange={handleChange}/>
          <input type="email" name="email" placeholder="Email" className="p-2 bg-backgroundLight border-2 border-borders col-span-2 md:col-span-1" value={formData.email} onChange={handleChange} />
          <textarea placeholder="Message" name="message" className="col-span-2 p-2 bg-backgroundLight border-2 border-borders h-[12rem]" value={formData.message} onChange={handleChange}></textarea>
          <button className="bg-accent hover:bg-[#0160d9] hover:text-white p-2 rounded-md text-white w-full col-span-2" onClick={handleSubmit} disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    )
}