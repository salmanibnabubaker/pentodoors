"use client";

import { useState } from "react";

export default function GeneralInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    location: "",
    subject: "",
    message: "",
    contactMethod: "WhatsApp",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
*New Inquiry*

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}

Subject: ${formData.subject}

Message:
${formData.message}

Preferred Contact Method: ${formData.contactMethod}
`;

    if (formData.contactMethod === "WhatsApp") {
      const whatsappNumber = "919846083216"; // Replace with your WhatsApp number

      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      const businessEmail = "pentodoors@gmail.com"; // Replace with your email

      window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(message)}`;
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom max-w-5xl">
        <h2 className="text-5xl font-bold mb-4">
          Send Us a Message
        </h2>

        <p className="text-lg text-neutral-600 mb-12">
          Have a question about our products or services?
          Fill out the form below and our team will get back to you as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your city or location"
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows={6}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your requirements..."
              required
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div>
            <label className="block mb-3 font-medium">
              Preferred Contact Method
            </label>

            <div className="flex flex-wrap gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="WhatsApp"
                  checked={formData.contactMethod === "WhatsApp"}
                  onChange={handleChange}
                />
                WhatsApp
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  checked={formData.contactMethod === "Email"}
                  onChange={handleChange}
                />
                Email
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="
              inline-flex
              items-center
              justify-center
              px-4
              py-4
              rounded-full
              bg-black
              text-white
              font-semibold
              tracking-wide
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]
            "
          >
            Send Inquiry
          </button>

          
        </form>
      </div>
    </section>
  );
}