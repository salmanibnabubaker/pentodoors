"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is this product waterproof?",
    answer:
      "Many of our products are designed to resist moisture and perform well in humid environments. Please check the product specifications for exact details.",
  },
  {
    question: "Can I order custom sizes?",
    answer:
      "Yes. Custom sizing options are available for many of our products depending on project requirements.",
  },
  {
    question: "Is installation support available?",
    answer:
      "Yes. Our team can provide installation guidance and recommendations to help ensure proper product performance.",
  },
  {
    question: "Is this suitable for Kerala's climate?",
    answer:
      "Absolutely. Our products are selected to perform reliably in Kerala's humid and coastal conditions.",
  },
  {
    question: "Do you offer bulk orders?",
    answer:
      "Yes. We support residential developments, apartment projects, commercial buildings, hospitality projects, and institutional requirements.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-24 bg-neutral-50 mb-10">
      <div className="container-custom">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-neutral-500 mb-3 font-medium">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-neutral-900">
            Product FAQs
          </h2>
          <p className="text-base md:text-lg text-neutral-600">
            Answers to some of the most common questions about our products and services.
          </p>
        </div>

        {/* Semantic FAQ List */}
        <dl className="space-y-4 max-w-4xl">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white border border-neutral-200 rounded-[20px] md:rounded-[24px] overflow-hidden transition-all duration-300 hover:border-neutral-300"
              >
                {/* Question Trigger Container */}
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left select-none group"
                  >
                    <span className="text-lg md:text-xl font-semibold text-neutral-900 tracking-tight pr-4">
                      {faq.question}
                    </span>

                    {/* Arrow Animation */}
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform duration-300 shrink-0 group-hover:text-neutral-700 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </dt>

                {/* Fail-safe Max-Height Animation Wrapper */}
                <dd
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  style={{ maxHeight: isOpen ? "200px" : "0px" }}
                  className="transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden"
                >
                  <p className="px-6 pb-6 md:px-8 md:pb-8 text-neutral-600 leading-relaxed text-sm md:text-base max-w-prose">
                    {faq.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}