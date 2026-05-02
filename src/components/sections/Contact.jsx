"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setStatus({ type: "loading", message: "Sending..." });
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
      );
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-white via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how I can help bring your
            vision to life.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-4 md:pt-2">
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                placeholder="Project details"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 resize-vertical focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              disabled={status.type === "loading"}
              className="w-full md:w-auto group bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status.type === "loading" ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    className="group-hover:translate-x-1 transition-transform duration-300 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>

          {status.message && (
            <div
              className={`md:col-span-2 p-4 rounded-xl border-2 transition-all duration-300 ${
                status.type === "success"
                  ? "bg-green-500/10 border-green-400 text-green-100"
                  : "bg-red-500/10 border-red-400 text-red-100"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg">
            Or email me directly at{" "}
            <a
              href="mailto:sharif845g7@gmail.com"
              className="text-blue-400 hover:text-blue-300 underline font-semibold"
            >
              sharif845g7@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
