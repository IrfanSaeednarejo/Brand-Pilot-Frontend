import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-gray-900 text-white py-12 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-blue-400 mb-4"
        >
          Contact Us
        </motion.h2>

        <p className="text-center text-gray-400 mb-10">
          Got a technical issue? Want to send feedback? Need more details? We’re here to help!
        </p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-xl rounded-xl p-6 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-gray-300 font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help?"
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-gray-300 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold focus:ring-4 focus:ring-blue-400 transition duration-200"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 flex items-center justify-center gap-2 bg-green-900 text-green-200 p-3 rounded-lg shadow-md"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Thank you! Your message has been sent successfully.</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default ContactUs;