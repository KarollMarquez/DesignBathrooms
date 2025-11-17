import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-8 bg-[#02283b] text-white mt-10">
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-8 text-[#02283b] font-george">
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
                <Phone className="w-6 h-6 text-[#4ba5d3] mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-[#02283b] mb-2">Phone</h3>
                  <a
                    href="tel:703-775-1113"
                    aria-label="Call 703-775-1113"
                    className="text-2xl text-gray-700 hover:text-[#4ba5d3] transition-colors"
                  >
                    703-775-1113
                  </a>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="tel:703-775-1113"
                className="inline-flex items-center gap-2 bg-[#4ba5d3] text-white px-8 py-4 text-lg hover:opacity-90 transition-colors mt-4"
                aria-label="Call 703-775-1113"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#609bb9] mt-1" />
              <div>
                <h3 className="text-lg font-medium text-[#02283b] mb-2">Address</h3>
                <address className="text-xl text-gray-700 not-italic">
                  1655 Fort Myer Drive, 7th Floor, Arlington, VA
                </address>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <img
              src="/images/about/4.jpg"
              alt="Designo project"
              className="w-full h-64 md:h-[420px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps?q=1655+Fort+Myer+Drive%2C+7th+Floor%2C+Arlington%2C+VA&output=embed"
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
      <footer className="bg-[#02283b] text-white py-12 px-8">
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