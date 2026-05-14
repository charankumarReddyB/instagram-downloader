/**
 * FAQ Accordion Section
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Card from "../components/Card";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is it legal to download videos from Instagram?",
      answer:
        "Downloading content for personal use is generally acceptable, but respect copyright laws and the creator's rights. Always check local regulations before downloading.",
    },
    {
      question: "Do you store my videos?",
      answer:
        "No, we don't store any videos or personal data. All downloads are temporary and processed directly on your device.",
    },
    {
      question: "What quality options are available?",
      answer:
        "We support multiple quality options up to 4K resolution depending on the original video quality. The highest available quality will be offered.",
    },
    {
      question: "Is MediaDrop free to use?",
      answer:
        "Yes, MediaDrop is completely free. No sign-up required, no hidden fees, just download your videos instantly.",
    },
    {
      question: "Do downloaded videos have watermarks?",
      answer:
        "No, our tool removes watermarks completely. You get clean, watermark-free videos.",
    },
    {
      question: "Which platforms are currently supported?",
      answer:
        "Currently, we support Instagram Reels and posts. TikTok, YouTube Shorts, Facebook, and Twitter/X support are coming soon.",
    },
    {
      question: "What should I do if the download fails?",
      answer:
        "Make sure the URL is correct and the video is public. Try refreshing and pasting the URL again. If issues persist, contact our support team.",
    },
    {
      question: "Can I download private videos?",
      answer:
        "No, we can only download public videos. Private videos are protected and cannot be accessed without permission from the account holder.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-gray-400">Find answers to common questions</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card
                className="cursor-pointer"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                hover
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white text-left flex-1">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4 text-purple-400"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-400 mt-4 text-left leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center glassmorphic p-8 rounded-2xl"
        >
          <p className="text-gray-300 mb-2">Still have questions?</p>
          <p className="text-white font-semibold">
            Contact us at{" "}
            <a href="mailto:support@mediadrop.com" className="text-purple-400 hover:text-purple-300">
              support@mediadrop.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
