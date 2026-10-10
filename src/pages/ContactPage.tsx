import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ChevronDown, ChevronUp, MessageSquare, ShieldCheck, Sparkles, Truck, RotateCcw, HeartHandshake, ShoppingBag, Wrench, BookOpen, ArrowRight } from 'lucide-react';
import { PageType } from '../types';
import { Link } from '../context/RouterContext';

interface ContactPageProps {
  onNavigate?: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Order Inquiry',
    message: '',
    contactPreference: 'Email'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const categories = ['All', 'Durability & Quality', 'Pet Safety', 'Shipping & Delivery', 'Returns & Guarantee'];

  const faqs = [
    {
      category: 'Pet Safety',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      q: 'Are artificial plants safe for pets, cats, and dogs?',
      a: 'Yes, 100%! While live houseplants like Monsteras or Pothos carry severe toxicity risks, Plantiqa pet safe artificial plants for cats and non toxic fake plants for dogs are crafted from certified hypoallergenic, non-toxic polymers with zero sap or toxic chemical dyes.'
    },
    {
      category: 'Durability & Quality',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      q: 'What makes Plantiqa high end fake plants that look real superior to cheap store alternatives?',
      a: 'We specialize in artificial plants that don’t look fake. Our team uses Real-Touch™ liquid polymer leaf molds, hand-painted leaf veining, and natural hardwood trunks. Whether you choose a realistic faux olive tree indoor or a luxury artificial fiddle leaf fig, they look 100% natural.'
    },
    {
      category: 'Durability & Quality',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      q: 'Which species are considered the best indoor plants for oxygen, and how do Plantiqa replicas compare?',
      a: 'Botanically, Snake Plants (Sansevieria), Monsteras, Fiddle Leaf Figs, and Peace Lilies are famous as the best indoor plants for oxygen production and lush bedroom greenery. Plantiqa creates botanical replicas of these exact species—giving you their iconic air-freshening look, rich green leaf aesthetic, and relaxing feel with zero watering, soil mold, or pet toxicity risks.'
    },
    {
      category: 'Shipping & Delivery',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
      q: 'What are the best artificial plants for dark rooms and windowless bathrooms?',
      a: 'Plantiqa zero maintenance indoor plants for office spaces, dark rooms, and fake plants for windowless bathrooms thrive anywhere! Our potted Snake Plants, Monsteras, and trailing Satin Pothos require zero sunlight or humidity to look fresh every day.'
    },
    {
      category: 'Pet Safety',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      q: 'Are tall artificial trees for living room corners stable around active cats and dogs?',
      a: 'Yes! Every cat friendly artificial indoor tree comes pre-potted in a heavy, pre-weighted ceramic or stone planter with a low center of gravity. This tip-resistant design keeps tall artificial trees for living room corners upright even if bumped by pets.'
    },
    {
      category: 'Durability & Quality',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      q: 'How do I clean and maintain zero maintenance indoor plants for office & home?',
      a: 'No watering, pruning, or soil changes are ever required. Simply dust the leaves once a month with a dry feather duster or wipe gently with a damp microfiber cloth to keep your foliage satin-smooth and vibrant.'
    },
    {
      category: 'Returns & Guarantee',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
      q: 'What is your 30-Day Easy Return policy?',
      a: 'We want you to feel completely confident styling Plantiqa artificial plants for home. If you are not 100% delighted by the lifelike look, texture, or fit in your room, return it in its original packaging within 30 days for a full refund.'
    }
  ];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-24">
      {/* Hero Header */}
      <section className="bg-[#2F4232] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#4A6B50]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/50">
            Customer Support & Showroom
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF8F5]">
            Get In Touch
          </h1>
          <p className="text-sm sm:text-base text-[#D8E8DA] max-w-2xl mx-auto leading-relaxed">
            Have questions about our plants, orders, or custom greenery? Our team is here to help you 7 days a week.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-bold text-[#1C281E]">We'd Love to Hear From You</h2>
              <p className="text-xs sm:text-sm text-[#5C6E5E] leading-relaxed">
                Reach out via email, phone, or visit our flagship botanical design studio.
              </p>
            </div>

            {/* Info Box 1 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2C3B2E] text-emerald-300 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-[#1C281E]">Email Customer Support</h3>
                <p className="text-xs text-gray-600">support@plantiqa.com</p>
                <p className="text-xs text-gray-600">trade@plantiqa.com (Commercial Inquiries)</p>
                <p className="text-[11px] text-emerald-700 font-semibold pt-1">Average response time: &lt; 2 hours</p>
              </div>
            </div>

            {/* Info Box 2 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2C3B2E] text-emerald-300 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-[#1C281E]">Direct Concierge Line</h3>
                <p className="text-xs text-gray-600">1800-837-3268 (PLANTIQA)</p>
                <p className="text-xs text-gray-500">Mon - Fri: 8:00 AM - 7:00 PM IST</p>
                <p className="text-xs text-gray-500">Sat - Sun: 9:00 AM - 5:00 PM IST</p>
              </div>
            </div>

            {/* Info Box 3 */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE5DC] shadow-xs flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#2C3B2E] text-emerald-300 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-[#1C281E]">Flagship Design Showroom</h3>
                <p className="text-xs text-gray-600">420 Botanical Way, Suite 100</p>
                <p className="text-xs text-gray-600">New Delhi, DL 110001</p>
                <p className="text-[11px] text-gray-400 pt-1">Appointments recommended for custom tree potting.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#EAE5DC] shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#1C281E]">Message Sent!</h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued customer'}</strong>. Our botanical support team has received your inquiry regarding "<strong>{formData.subject}</strong>" and will follow up at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Order Inquiry',
                      message: '',
                      contactPreference: 'Email'
                    });
                  }}
                  className="px-6 py-2.5 bg-[#2C3B2E] text-white text-xs font-semibold rounded-full hover:bg-[#1E2B20] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C281E]">Send Us a Direct Message</h3>
                  <p className="text-xs text-gray-500 mt-1">Fill out the fields below and we'll reply as quickly as possible.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sophia Martinez"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sophia@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF8F5] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF8F5] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none cursor-pointer"
                    >
                      <option>General Order Inquiry</option>
                      <option>Plant Sizing & Styling Advice</option>
                      <option>Durability & Pet Safety Details</option>
                      <option>Shipping & Delivery Status</option>
                      <option>Returns & Exchanges</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can our plant team assist you today?"
                    className="w-full px-4 py-3 text-xs bg-[#FAF8F5] border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C3B2E] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#4A6B50] hover:bg-[#3B5542] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4 text-emerald-200" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Accordion-Style FAQ Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#EAE5DC] shadow-sm space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4A6B50] bg-[#E2EFE4] px-3 py-1 rounded-full border border-[#C7DFC9]">
              Instant Help & Clarifications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C281E]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#5C6E5E] leading-relaxed">
              Clear answers regarding plant durability, 100% pet safety, express shipping, and risk-free returns to ensure seamless shopping.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenFaq(0);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2F4232] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-gray-600 hover:bg-[#EAE5DC] border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Accordion Items List */}
          <div className="max-w-3xl mx-auto space-y-3 pt-2">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen ? 'border-[#4A6B50] ring-1 ring-[#4A6B50]/20 bg-[#FAF8F5]' : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="space-y-1.5 pr-2">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md text-[10px] font-semibold border ${faq.badgeColor}`}>
                        {faq.category}
                      </span>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-[#1C281E] leading-snug">
                        {faq.q}
                      </h3>
                    </div>
                    <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#E2EFE4] text-[#2F4232]' : 'bg-gray-100 text-gray-500'}`}>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100/80 animate-fadeIn">
                      <p className="bg-white p-4 rounded-xl border border-[#EAE5DC] text-[#3B423C]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EAE5DC] text-center max-w-xl mx-auto space-y-2">
            <p className="text-xs font-bold text-[#1C281E]">Still have a specific question about our plants?</p>
            <p className="text-xs text-gray-500">Call our concierge at 1800-837-3268 or send a message using the form above.</p>
          </div>
        </div>

        {/* Cross-Link Navigation Banner */}
        {onNavigate && (
          <div className="bg-[#1C281E] text-white p-8 sm:p-12 rounded-3xl border border-[#2C3B2E] text-center space-y-6">
            <div className="space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-800/50">
                Explore Plantiqa
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#E8E0D5]">
                Where Would You Like To Go Next?
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Browse our lifelike botanical catalog, explore custom room styling services, or read plant guides.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/products"
                onClick={() => onNavigate && onNavigate('products')}
                className="px-6 py-3.5 bg-[#4A6B50] hover:bg-[#3B5542] text-white text-xs font-bold rounded-full transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-200" />
                <span>Browse Plant Catalog</span>
              </Link>

              <Link
                href="/services"
                onClick={() => onNavigate && onNavigate('services')}
                className="px-6 py-3.5 bg-[#263628] hover:bg-[#324734] text-white border border-[#3A4E3D] text-xs font-bold rounded-full transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <Wrench className="w-4 h-4 text-emerald-300" />
                <span>Explore Design Services</span>
              </Link>

              <Link
                href="/blog"
                onClick={() => onNavigate && onNavigate('blog')}
                className="px-6 py-3.5 bg-[#263628] hover:bg-[#324734] text-white border border-[#3A4E3D] text-xs font-bold rounded-full transition-colors cursor-pointer inline-flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-emerald-300" />
                <span>Read Botanical Journal</span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

