import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Anchor } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    vesselName: '',
    imoNumber: '',
    portOfCall: '',
    etaDate: '',
    contactPerson: '',
    email: '',
    gradesRequired: 'Main Grades (Cylinder 5040/5070 & System)',
    estimatedQuantity: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#051118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/60 border border-emerald-800/40">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 tracking-tight">
            Request Port Bunkering & Lubricants RFQ
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Reach our 24/7 global operations desk for spot quotations, port delivery coordination, and technical product inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                24/7 Global Maritime Desk
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Global Operations Email</span>
                    <a href="mailto:operations@athenmarine.com" className="text-base font-bold text-emerald-300 hover:underline block mt-0.5">
                      operations@athenmarine.com
                    </a>
                    <span className="text-xs text-slate-400">Response guaranteed within 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Rotterdam Central Bunkering Desk</span>
                    <a href="tel:+31104298544" className="text-base font-bold text-emerald-300 hover:underline block mt-0.5">
                      +31 (0)10 429 8544
                    </a>
                    <span className="text-xs text-slate-400">Legero Logistics Hub, Netherlands</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Global Blending & Delivery Hubs</span>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Rotterdam (ARA Barge) • Greece (EU) • India (Subcontinent) • Singapore (Far East)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>24/7/365 On-Demand Port Delivery</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Factory Sealed Drums & Dedicated Barges</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Anchor className="w-4 h-4 text-emerald-400" />
                  <span>Seamless Legero Customs & Port Clearance</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#061e16] to-[#0a2735] border border-emerald-500/30 rounded-2xl p-6 text-xs text-slate-300">
              <strong className="text-white block text-sm mb-1">Logistics Backbone: Legero International Group</strong>
              Our strategic partnership with Legero ensures full freight forwarding, customs clearance, and terminal coordination for zero-delay vessel turnarounds.
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received Successfully</h4>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Thank you. Our 24/7 operations desk has received your vessel inquiry for <strong>{formData.vesselName || 'your vessel'}</strong> at <strong>{formData.portOfCall || 'the nominated port'}</strong>. A dedicated bunker coordinator will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Submit Vessel Inquiry / Quote Request
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Vessel Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. MV Athen Star"
                        value={formData.vesselName}
                        onChange={e => setFormData({ ...formData, vesselName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        IMO Number
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 9876543"
                        value={formData.imoNumber}
                        onChange={e => setFormData({ ...formData, imoNumber: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Port of Call / Delivery *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rotterdam, Piraeus, Singapore"
                        value={formData.portOfCall}
                        onChange={e => setFormData({ ...formData, portOfCall: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Estimated ETA Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.etaDate}
                        onChange={e => setFormData({ ...formData, etaDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Contact Person / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name & Shipping Company"
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="superintendent@shipping.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Product Grade Needed
                      </label>
                      <select
                        value={formData.gradesRequired}
                        onChange={e => setFormData({ ...formData, gradesRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option>Main Grades (Cylinder 5040/5070 & System)</option>
                        <option>Trunk Piston Oils (TPEO 4030 / 4040)</option>
                        <option>Secondary Grades (Hydraulic EP, Gear, Comp)</option>
                        <option>EAL Bio-Lubricants (BioStern, BioHyd)</option>
                        <option>Marine Greases (EP 2, OpenGear)</option>
                        <option>Multiple / Complete Vessel Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                        Estimated Volume / Packaging
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 10 x 208L Drums / Bulk Barge"
                        value={formData.estimatedQuantity}
                        onChange={e => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                      Additional Notes / Machinery Specifications
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify engine type, delivery mode (truck/barge), or special terminal requirements..."
                      value={formData.comments}
                      onChange={e => setFormData({ ...formData, comments: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 shadow-xl shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Port Bunkering & Lubricants RFQ</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Your data is confidential and used solely for RFQ fulfillment.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
