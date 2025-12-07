import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-[800px] bg-gradient-to-b from-orange-50 to-white px-4 sm:px-6">
      <div className="max-w-6xl w-full mx-auto">
        <div className="mt-8 overflow-hidden bg-white rounded-2xl shadow-xl border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side of Info */}
            <div className="p-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                Get in Touch
              </h1>
              <p className="text-orange-100 text-lg mb-8">
                Fill in the form to start a conversation
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4">
                    <p className="font-medium">Location</p>
                    <p className="text-orange-100 text-sm">Karachi, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4">
                    <p className="font-medium">Phone</p>
                    <p className="text-orange-100 text-sm">+92 300 1234567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mt-1 flex-shrink-0"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <p className="font-medium">Email</p>
                    <p className="text-orange-100 text-sm">
                      arisha@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side of Form */}
            <form className="p-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your.email@example.com"
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="+92 300 1234567"
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
