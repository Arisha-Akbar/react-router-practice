import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image */}
          <div className="flex-1">
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img
                src="/public/undraw_customer-survey_ek29.png"
                alt="Developer team collaborating"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              React Development by Passionate Developers
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-orange-700 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
