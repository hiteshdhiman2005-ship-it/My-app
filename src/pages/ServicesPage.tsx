import React, { useState } from 'react';
import { SERVICES } from '../data/servicesData';
import { Service, PageType } from '../types';
import { Wrench, CheckCircle2, ArrowRight, Calendar, Building, Home, Package, RefreshCw, Send, Check, ShoppingBag, BookOpen, Mail } from 'lucide-react';

interface ServicesPageProps {
  onNavigate?: (page: PageType) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: 'Residential Living Room',
    budget: '$500 - $1,500',
    notes: ''
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Services Hero Header */}
      <section className="bg-[#2F4232] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#4A6B50]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/50">
            Plant Design & Styling Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5]">
            Custom Greenery Services
          </h1>
          <p className="text-sm sm:text-base text-[#D8E8DA] max-w-2xl mx-auto leading-relaxed">
            From living rooms to offices and restaurants, our team helps you choose, pot, and arrange beautiful artificial plants for your space.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE5DC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt || service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#2C3B2E] text-white text-xs font-bold px-3 py-1 rounded-md shadow-md">
                    {service.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[#2C3B2E] text-xs font-bold px-3 py-1.5 rounded-lg shadow-md font-serif text-base">
                    From {service.priceStarting}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1C281E]">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C6E5E] italic">
                    "{service.subtitle}"
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1C281E]">Includes:</p>
                    <ul className="space-y-1.5 text-xs text-gray-700">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Step Process */}
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#1C281E] mb-2">How It Works:</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {service.processSteps.map((step) => (
                        <div key={step.step} className="bg-[#FAF8F5] p-2.5 rounded-xl border border-gray-200 space-y-1">
                          <span className="w-5 h-5 rounded-full bg-[#2C3B2E] text-white text-[10px] font-bold inline-flex items-center justify-center">
                            {step.step}
                          </span>
                          <p className="text-[11px] font-bold text-[#1C281E]">{step.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setSubmitted(false);
                  }}
                  className="w-full py-3 bg-[#2C3B2E] hover:bg-[#1E2B20] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Request {service.title} Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Banner Section */}
        <div className="bg-[#EAE5DC] p-8 sm:p-12 rounded-3xl border border-[#DCD3C5] text-center space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl font-bold text-[#1C281E]">Need Help with a Large or Multi-Room Project?</h2>
            <p className="text-xs sm:text-sm text-[#4A524B] max-w-2xl mx-auto">
              We work directly with homeowners, interior decorators, hotel operators, and corporate office managers across the country.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedService(SERVICES[0]);
                setSubmitted(false);
              }}
              className="px-6 py-3.5 bg-[#4A6B50] text-white text-xs font-semibold rounded-full hover:bg-[#3B5542] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-emerald-200" />
              <span>Schedule Free Plant Consultation</span>
            </button>

            {onNavigate && (
              <>
                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 bg-white text-[#2C3B2E] border border-[#C2B8A8] text-xs font-semibold rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4 text-[#4A6B50]" />
                  <span>Browse Ready-to-Ship Products</span>
                </button>

                <button
                  onClick={() => onNavigate('blog')}
                  className="px-6 py-3.5 bg-white text-[#2C3B2E] border border-[#C2B8A8] text-xs font-semibold rounded-full hover:bg-[#FAF8F5] transition-colors cursor-pointer inline-flex items-center gap-2 shadow-xs"
                >
                  <BookOpen className="w-4 h-4 text-[#4A6B50]" />
                  <span>Read Styling Case Studies</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Service Inquiry Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-5 animate-fadeIn">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold p-1 cursor-pointer"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1C281E]">Inquiry Submitted!</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued client'}</strong>. Our senior botanical design advisor will reach out to <strong>{formData.email}</strong> within 24 hours with custom spatial recommendations.
                </p>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer"
                >
                  Return to Services
                </button>
              </div>
            ) : (
              <>
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                    Service Consultation
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C281E] mt-1">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Fill out the brief details below to receive a custom proposal and 3D visual mockups.
                  </p>
                </div>

                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexandra Wright"
                      className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandra@company.com"
                        className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 019-2834"
                        className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Space Type</label>
                      <select
                        value={formData.spaceType}
                        onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none bg-white cursor-pointer"
                      >
                        <option>Residential Living Room</option>
                        <option>Corporate Office Headquarters</option>
                        <option>Hotel / Restaurant Dining</option>
                        <option>Luxury Retail Boutique</option>
                        <option>Outdoor Covered Patio</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none bg-white cursor-pointer"
                      >
                        <option>$300 - $800</option>
                        <option>$800 - $2,500</option>
                        <option>$2,500 - $5,000</option>
                        <option>$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Project Notes / Room Dimensions</label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe ceiling height, light exposure, or desired tree varieties..."
                      className="w-full px-3.5 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#2C3B2E] text-white text-xs font-semibold rounded-xl hover:bg-[#1E2B20] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Send Service Consultation Request</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
