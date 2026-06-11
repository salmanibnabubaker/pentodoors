"use client";

import { useState } from "react";

export default function ProductInquiryForm() {
  const [formData, setFormData] = useState({
    category: "Doors",
    productName: "",
    quantity: "",
    projectType: "Residential",
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `
*Product Inquiry*

Product Category: ${formData.category}
Product Name: ${formData.productName || "Not Specified"}
Quantity Required: ${formData.quantity}
Project Type: ${formData.projectType}

Additional Requirements:
${formData.requirements}
`;

    const whatsappNumber = "919846083216"; // Replace with your number

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-5xl">
        <h2 className="text-5xl font-bold mb-4">
          Looking for a Specific Product?
        </h2>

        <p className="text-lg text-neutral-600 mb-12">
          Tell us what you're looking for and our team
          will recommend suitable doors, windows, or
          frame solutions for your project.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">
              Product Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
            >
              <option>Doors</option>
              <option>Windows</option>
              <option>Frames</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Product Name (Optional)
            </label>

            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">
                Quantity Required
              </label>

              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Project Type
              </label>

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
              >
                <option>Residential</option>
                <option>Villa</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Additional Requirements
            </label>

            <textarea
              rows={5}
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Mention dimensions, finishes, quantity, or any special requirements..."
              className="w-full border rounded-xl px-4 py-3 outline-none focus:border-black"
            />
          </div>

          <button
            type="submit"
            className="
              px-4
              py-4
              bg-black
              text-white
              rounded-full
              hover:opacity-90
              transition
            "
          >
            Request Product Details
          </button>
        </form>
      </div>
    </section>
  );
}