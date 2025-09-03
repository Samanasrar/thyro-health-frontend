import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapMarkerAlt,
  faPhone,
  faUser,
  faEnvelope,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css"; // custom styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.warn("Please fill in all fields.");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      toast.warn("Please enter a valid email address.");
      return;
    }

    toast.info("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Try again later.");
    }
  };

  return (
    <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-25 py-12 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-20 bg-[#EDE7F6]">
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#6A5794]">
          Contact Information
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Thank you for visiting our website. We are here to assist you with any
          inquiries you may have.
        </p>

        <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-purple-600" />{" "}
              Working Hours:
            </h3>
            <p className="text-gray-600 text-sm">Mon-Thu: 8:00am - 5:00pm</p>
            <p className="text-gray-600 text-sm">Fri: 8:00am - 1:00pm</p>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-purple-600" />{" "}
              Office Address:
            </h3>
            <p className="text-gray-600 text-sm">
              764 15768 Delmer Shoals, Eliasport, FL 04331-6195
            </p>
          </div>
        </div>

        <a
          href="tel:+11234567890"
          className="inline-flex items-center px-6 py-3 text-gray-900 font-semibold hover:opacity-90 transition"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-2 text-purple-600" /> +1
          123 456 7890
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6A5794] mb-8">
          Ask A Question
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-4 pr-10 text-gray-700 focus:outline-none focus:border-[#6A5794] focus:ring-2 focus:ring-[#6A5794] text-sm md:text-base"
            />
            <FontAwesomeIcon
              icon={faUser}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-4 pr-10 text-gray-700 focus:outline-none focus:border-[#6A5794] focus:ring-2 focus:ring-[#6A5794] text-sm md:text-base"
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-xl py-3 pl-4 pr-10 text-gray-700 resize-none focus:outline-none focus:border-[#6A5794] focus:ring-2 focus:ring-[#6A5794] text-sm md:text-base"
            />
            <FontAwesomeIcon
              icon={faCommentDots}
              className="absolute right-3 top-3 text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="bg-[#6A5794] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#5a4880] transition-all text-sm md:text-base lg:text-lg"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
