// Receives the website forms (quote, contact, careers, partner) and emails them via Resend.
// Env vars (Vercel > Project > Settings > Environment Variables):
//   RESEND_API_KEY  required
//   FORM_TO         optional, default support@athenmarine.com
//   FORM_FROM       optional, default "Athen Marine Website <onboarding@resend.dev>" (verify athenmarine.com in Resend to send from your own domain)
const TITLES = {
  'request-quote': 'New Quote Request',
  contact: 'New Contact Enquiry',
  careers: 'New Careers Application',
  'partner-with-us': 'New Partnership Enquiry'
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');
  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const form = String(body._form || 'contact');
  const next = typeof body._next === 'string' && /^\/[a-z0-9\-\/]*\?sent=1$/.test(body._next) ? body._next : '/contact/?sent=1';
  const fields = Object.entries(body).filter(([k, v]) => !k.startsWith('_') && !/nonce$/i.test(k) && v !== '');
  const email = String(body.email || '');

  if (!process.env.RESEND_API_KEY) {
    return res.status(503).send('The form is not configured yet. Please email support@athenmarine.com.');
  }
  const text = fields.map(([k, v]) => `${k.replace(/_/g, ' ')}: ${Array.isArray(v) ? v.join(', ') : v}`).join('\n');
  const html = '<table cellpadding="6">' + fields.map(([k, v]) =>
    `<tr><td><b>${esc(k.replace(/_/g, ' '))}</b></td><td>${esc(Array.isArray(v) ? v.join(', ') : v)}</td></tr>`).join('') + '</table>';
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.FORM_FROM || 'Athen Marine Website <onboarding@resend.dev>',
      to: [process.env.FORM_TO || 'support@athenmarine.com'],
      subject: `${TITLES[form] || 'New Website Enquiry'} - Athen Marine`,
      reply_to: /^[^@\s]+@[^@\s]+$/.test(email) ? email : undefined,
      text, html
    })
  });
  if (!r.ok) return res.status(502).send('Sorry, we could not send your message. Please email support@athenmarine.com.');
  res.writeHead(303, { Location: next });
  res.end();
};
