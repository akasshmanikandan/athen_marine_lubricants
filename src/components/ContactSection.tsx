import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Anchor, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    vesselName: '',
    imoNumber: '',
    portOfCall: '',
    etaDate: '',
    contactPerson: '',
    email: '',
    gradesRequired: 'Cylinder Oils (CYL Oil 5040/5070)',
    estimatedQuantity: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-[#051118] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase py-1 px-3 rounded-full bg-emerald-950/80 border border-emerald-800/40">
            CONNECT WITH ATHEN MARINE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
            Request Port Bunkering & Lubricants RFQ
          </h2>
          <p className="text-slate-300 mt-4 text-base">
            Reach our 24/7 global operations desks across Dubai, Rotterdam, Singapore, and Mumbai for spot quotations and technical support.
          </p>
        </div>

        {/* Global Hubs Grid (Direct from Official Brochure Page 12) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {COMPANY_INFO.globalHubs.map((hub, i) => (
            <div key={i} className="bg-[#0b212d] border border-emerald-900/50 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  {hub.country}
                </span>
                <h4 className="text-xl font-bold text-white mb-2">{hub.city}</h4>
                {hub.address && <p className="text-xs text-slate-300 mb-2">{hub.address}</p>}
                {hub.entity && <p className="text-xs text-slate-400 mb-2 font-medium">{hub.entity}</p>}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-1 text-xs">
                <a href={`tel:${hub.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-emerald-400 flex items-center gap-1.5 font-mono">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{hub.phone}</span>
                </a>
                <a href={`mailto:${hub.email}`} className="text-emerald-400 hover:underline flex items-center gap-1.5 truncate">
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{hub.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                24/7 Global Maritime Desk
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Our operations coordinators provide guaranteed response within 2 hours. Seamless coordination directly with your vessel agents, port authorities, and terminal operators.
              </p>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>24/7/365 On-Demand Port Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Factory Sealed Drums & Dedicated Barge Lines</span>
                </div>
                <div className="flex items-center gap-3">
                  <Anchor className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Legero Customs Clearance & Eleven Energy Bunkering</span>
                </div>
              </div>
            </div>

            {/* Corporate Office Badge */}
            <div className="bg-[#071924] border border-emerald-900/60 rounded-2xl p-6 text-xs text-slate-300">
              <strong className="text-white block text-sm mb-1">Corporate Headquarters</strong>
              1802, IFZA Towers, Dubai Silicon Oasis, Dubai, United Arab Emirates.
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#0b212d] border border-emerald-800/40 rounded-3xl p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received Successfully</h4>
                  <p className="text-slate-300 max-w-md mx-auto text-sm">
                    Thank you. Our 24/7 maritime desk has received your vessel inquiry for <strong>{formData.vesselName || 'your vessel'}</strong> at <strong>{formData.portOfCall || 'the nominated port'}</strong>. A dedicated bunkering coordinator will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Submit Vessel Inquiry / Quote Request
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
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
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
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
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Port of Call / Bunkering Terminal *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rotterdam, Dubai, Singapore, Mumbai"
                        value={formData.portOfCall}
                        onChange={e => setFormData({ ...formData, portOfCall: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
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
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Contact Person / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Superintendent Name / Shipping Co."
                        value={formData.contactPerson}
                        onChange={e => setFormData({ ...formData, contactPerson: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="operations@shippingline.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Lubricant Family
                      </label>
                      <select
                        value={formData.gradesRequired}
                        onChange={e => setFormData({ ...formData, gradesRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-400"
                      >
                        <option>Cylinder Oils (CYL Oil 5040 / 5070 / 50100)</option>
                        <option>System Oils (SYS Oil 3006)</option>
                        <option>Trunk Piston Engine Oils (MSDO 4030 / 4040)</option>
                        <option>Hydraulic Oils (AW 46 / 68, HVI)</option>
                        <option>Gear & Transmission Oils (Gear 150 / 220 / 320)</option>
                        <option>EAL Bio-Lubricants (Stern EAL / Hyd EAL)</option>
                        <option>Marine Greases (CS WR EP 2 / Li EP2)</option>
                        <option>Multiple / Full Fleet Vessel Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                        Estimated Volume / Supply Mode
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15 x 208L Drums / Bulk Barge"
                        value={formData.estimatedQuantity}
                        onChange={e => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-1">
                      Technical Notes / Machinery Type
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify engine maker (MAN ES / WinGD), fuel type (VLSFO / HFO), or special port requirements..."
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
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
