import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-8 bg-[#3c3c3c] text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-wide font-george">
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Ready to transform your bathroom into a sanctuary? Get in touch with us.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column - Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-8 text-[#3c3c3c] font-george">
                Get In Touch
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Whether you're planning a complete bathroom renovation or just 
                exploring ideas, we'd love to hear from you. Our team is here to 
                bring your vision to life.
              </p>
            </div>

            {/* Phone */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#A4C179] mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#3c3c3c] mb-2">Phone</h3>
                  <a 
                    href="tel:+15712595473" 
                    className="text-2xl text-gray-700 hover:text-[#A4C179] transition-colors"
                  >
                    (571) 259-5473
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="tel:+15712595473"
                className="inline-flex items-center gap-2 bg-[#A4C179] text-white px-8 py-4 text-lg hover:bg-[#8da966] transition-colors mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#A4C179] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-[#3c3c3c] mb-2">Email</h3>
                <a 
                  href="mailto:info@designobathrooms.com" 
                  className="text-xl text-gray-700 hover:text-[#A4C179] transition-colors"
                >
                  info@designobathrooms.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#A4C179] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-[#3c3c3c] mb-2">Address</h3>
                <address className="text-xl text-gray-700 not-italic">
                  5290 Shawnee Rd<br />
                  Alexandria, VA 22312
                </address>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12">
            <h3 className="text-2xl font-light mb-8 text-[#3c3c3c] font-george">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#A4C179] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#A4C179] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#A4C179] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#A4C179] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3c3c3c] text-white py-4 text-lg hover:bg-[#A4C179] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.8467024843767!2d-77.14444!3d38.8087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3d8e8f8c8c9%3A0x1234567890abcdef!2s5290%20Shawnee%20Rd%2C%20Alexandria%2C%20VA%2022312!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Designo Bathrooms Location"
        ></iframe>
      </div>

      {/* Footer */}
      <footer className="bg-[#3c3c3c] text-white py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 text-sm">
            Copyright © Designo Bathrooms<br />
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}