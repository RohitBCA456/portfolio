import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};

    if (!formData.fullName) tempErrors.fullName = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!validateEmail(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      toast
        .promise(
          emailjs.send(
            import.meta.env.VITE_SERVICE_KEY, 
            import.meta.env.VITE_TEMPLATE_KEY, 
            {
              name: formData.fullName,
              subject: formData.subject,
              message: formData.message,
              email: "rohit7120yadav@gmail.com",
            },
            import.meta.env.VITE_PUBLIC_KEY 
          ),
          {
            loading: "Sending message...",
            success: "Message sent successfully! 🎉",
            error: "Failed to send message. Try again!",
          }
        )
        .then(() => {
          setFormData({
            fullName: "",
            email: "",
            subject: "",
            message: "",
          });
        });
    }
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariant}
      className="bg-white dark:bg-[#111] p-8 mx-auto rounded-2xl shadow-xl space-y-6 border border-gray-300 dark:border-gray-700 max-w-lg md:max-w-2xl"
    >
      <motion.h2
        variants={itemVariant}
        className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2"
      >
        <Mail className="w-6 h-6" />
        Contact Me
      </motion.h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <motion.div variants={itemVariant} className="flex flex-col">
          <label
            htmlFor="fullName"
            className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 p-3 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariant} className="flex flex-col">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="john@example.com"
            className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 p-3 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </motion.div>

        {/* Subject */}
        <motion.div variants={itemVariant} className="flex flex-col">
          <label
            htmlFor="subject"
            className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Let's talk about your project"
            className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 p-3 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariant} className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            className="bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 p-3 rounded-md text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[100px] resize-y"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </motion.div>

        {/* Button */}
        <motion.div variants={itemVariant} whileHover={{ scale: 1.02 }}>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all h-14 text-base md:text-lg px-4 font-semibold"
          >
            Send
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
