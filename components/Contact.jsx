"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="relative font-mono py-20 px-6 md:px-16 bg-gradient-to-br from-white via-red-50 to-rose-100"
    >
      {/* Decorative blobs */}
      <div className="relative mx-auto max-w-screen-md  backdrop-blur-md rounded-2xl  p-8 md:p-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-extrabold text-center text-gray-900"
        >
          Contact Me
        </motion.h2>
        <p className="mb-8 text-center text-gray-600">
          Want to send a message? Need more details about me? Let me know.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-gray-700 text-sm font-medium "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@gmail.com"
              required
              className="w-full p-3 bg-transparent rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let me know how I can help you"
              required
              className="w-full bg-transparent p-3 rounded-lg border  focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Leave a comment..."
              required
              className="w-full bg-transparent p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-5 text-white font-medium rounded-lg bg-gradient-to-r from-black to-black hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-sm font-medium text-gray-700">
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
