import React, { useState, useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Contact: React.FC = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        }, []);
        
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // To display success/failure messages

  // ✅ Handle Form Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xbldnnzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! ✅");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send message. ❌ Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message. ❌ Check your internet.");
    }
  };

  return (
    <div className="w-screen min-h-screen text-gray-100 flex flex-col items-center pt-24 px-6 pb-12">
        <Navbar />
        <motion.h1
                  className="text-5xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.4)' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                 Get in Touch!
                </motion.h1>
      <p className="text-lg text-gray-900 mb-8 max-w-2xl text-center">
        Whether you have a project in mind, a job opportunity, or just want to chat, feel free to reach out. I'd love to connect!
      </p>

      {/* ✅ Contact Methods */}
      <div className="flex flex-col space-y-4 text-center ">
        <a href="mailto:rrmuddinagiri@gmail.com" className="pointer-events-auto bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent hover:text-teal-300 text-lg flex items-center justify-center">
          <FaEnvelope className="mr-2 text-xl" /> rrmuddinagiri@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ruchika-muddinagiri/" target="_blank" className="pointer-events-auto bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent hover:text-teal-300 text-lg flex items-center justify-center">
          <FaLinkedin className="mr-2 text-xl" /> LinkedIn
        </a>
        <a href="https://github.com/ruchikamuddinagiri"  target="_blank" className="pointer-events-auto bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent hover:text-teal-300 text-lg flex items-center justify-center">
          <FaGithub className="mr-2 text-xl" /> GitHub
        </a>
      </div>

      {/* ✅ Contact Form */}
      <form onSubmit={handleSubmit} className="pointer-events-auto mt-8 bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <label className="block mb-2 text-gray-300">Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-900 text-white"
          placeholder="John Doe"
        />

        <label className="block mt-4 mb-2 text-gray-300">Your Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-900 text-white"
          placeholder="john@example.com"
        />

        <label className="block mt-4 mb-2 text-gray-300">Your Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-900 text-white h-32"
          placeholder="Write your message here..."
        ></textarea>

        <button type="submit" className="mt-4 w-full bg-teal-600 text-white p-3 rounded-lg shadow-lg hover:bg-teal-500">
          Send Message
        </button>

        {/* ✅ Show status messages */}
        {status && <p className="text-center mt-4 text-green-400">{status}</p>}
      </form>

      {/* ✅ Back Button */}
      {/* <Link to="/">
        <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded-lg text-lg shadow-lg hover:bg-teal-500 focus:ring-4 focus:ring-teal-300">
          Back to Home
        </button>
      </Link> */}
    </div>
  );
};

export default Contact;
