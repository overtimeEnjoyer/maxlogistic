import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_v5knz5c",
        "template_kq3wztc",
        templateParams,
        "dECeW48-oxuiEFwIg"
      );
      setIsSent(true);
      setError("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Помилка надсилання. Спробуйте ще раз.");
    }
  };

  return (
    <section
      className="w-full py-8 md:py-16 px-4 sm:px-6 lg:px-8"
      id="contactUs"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.672333366405!2d23.71083277655961!3d49.79222653453858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b1db60c30a857%3A0x2cefe1d8099accb9!2z0JzQuNGC0L3QuNC5INC_0L7RgdGCIMKr0JPQvtGA0L7QtNC-0LrCuy4g0JLQnNCeIOKEljEsINCS0JzQniDihJYyICgi0KHQutC90LjQu9GW0LIiLCDRgtGA0LDQvdGB0L_QvtGA0YLQvdC40Lkg0LLRltC00LTRltC7KQ!5e0!3m2!1sen!2sua!4v1739801870860!5m2!1sen!2sua"
              className="w-full h-full border-0 rounded-lg shadow-md"
              loading="lazy"
              title="Location Map"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="w-full mb-6 lg:pl-6">
              <h3 className="font-medium text-2xl md:text-3xl text-[#333333] mb-2">
                Чекаємо на співпрацю з вами!
              </h3>
              <p className="text-[#8D8D8D] text-sm md:text-base">
                Ми завжди готові вам допомогти
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full lg:pl-6">
              <div className="w-full flex flex-col sm:flex-row gap-5 mb-5">
                <div className="w-full sm:w-1/2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name *"
                    className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address *"
                    className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 mb-5">
                <div className="w-full sm:w-1/2">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone Number *"
                    className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300"
                  />
                </div>
                <div className="w-full sm:w-1/2 relative">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 text-[#A6A6A6] bg-white  border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300"
                  >
                    <option
                      value=""
                      disabled
                      selected
                      className="text-gray-400"
                    >
                      Subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Інше</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full p-3 md:p-4 bg-white border border-gray-200 rounded resize-none focus:outline-none focus:ring-1 focus:ring-gray-300"
                ></textarea>
              </div>

              {isSent && (
                <p className="text-green-600 mb-3">
                  Повідомлення успішно надіслано!
                </p>
              )}
              {error && <p className="text-red-600 mb-3">{error}</p>}

              <div className="mt-2">
                <button
                  type="submit"
                  className="bg-[#FF0000] text-white text-sm font-bold uppercase py-3 px-6 md:py-4 md:px-10 rounded hover:bg-red-700 transition-colors"
                >
                  НАДІСЛАТИ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
