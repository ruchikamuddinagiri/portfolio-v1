import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

type Status =
  | { state: "idle"; message?: string }
  | { state: "sending"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "Sending…" });

    try {
      const response = await fetch("https://formspree.io/f/xbldnnzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ state: "success", message: "Thanks! I'll get back to you soon. ✅" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ state: "error", message: "Hmm, that didn’t go through. Please try again. ❌" });
      }
    } catch {
      setStatus({ state: "error", message: "Network error. Check your connection and try again. ❌" });
    }
  };

  const isSending = status.state === "sending";

  return (
    <div className="w-screen min-h-screen flex flex-col items-center pt-24 px-6 pb-16 bg-transparent text-slate-900">
      <Navbar />

      {/* subtle background blob */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto mt-16 h-64 w-[48rem]
                   bg-gradient-to-r from-pink-300/30 via-rose-300/30 to-orange-300/30 blur-3xl"
      />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <motion.p
        className="text-lg text-slate-700 mb-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        Have a project, role, or idea? I’d love to hear from you. Drop a message below or{" "}
        <a
          href="mailto:rrmuddinagiri@gmail.com?subject=Hi%20Ruchika"
          className="font-semibold bg-gradient-to-r from-pink-600 to-orange-400 bg-clip-text text-transparent underline-offset-2 hover:underline"
        >
          email me
        </a>
        .
      </motion.p>

      {/* Form card with gradient border + glass inner */}
      <motion.form
        onSubmit={handleSubmit}
        aria-busy={isSending}
        className="pointer-events-auto w-full max-w-md"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
      >
        <div className="rounded-2xl p-[1.5px] bg-gradient-to-tr from-pink-500/70 via-rose-400/70 to-orange-400/70 shadow-sm">
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm p-6">
            {/* Name */}
            <label htmlFor="name" className="block mb-2 text-slate-700 font-medium">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              placeholder="John Doe"
              autoComplete="name"
            />

            {/* Email */}
            <label htmlFor="email" className="block mt-4 mb-2 text-slate-700 font-medium">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
              placeholder="john@example.com"
              autoComplete="email"
            />

            {/* Message */}
            <label htmlFor="message" className="block mt-4 mb-2 text-slate-700 font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white text-slate-900 border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition h-32 resize-vertical"
              placeholder="Write your message here..."
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={isSending}
              className={`mt-5 w-full inline-flex items-center justify-center rounded-lg text-white font-semibold py-3 shadow-lg transition
                ${isSending ? "opacity-80 cursor-not-allowed" : "hover:scale-[1.02]"}
                bg-gradient-to-r from-pink-600 to-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400`}
            >
              {isSending ? "Sending…" : "Send Message"}
            </button>

            {/* Status */}
            {status.message && (
              <p
                role="status"
                aria-live="polite"
                className={`text-center mt-4 text-sm ${
                  status.state === "success"
                    ? "text-pink-700"
                    : status.state === "error"
                    ? "text-rose-700"
                    : "text-slate-600"
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
