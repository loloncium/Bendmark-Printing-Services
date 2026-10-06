export default async function handler(req, res) {
    // 1. Manually inject headers directly onto the response object
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://bendmark.co.ke');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // 2. Safely end the request immediately if it's just a browser pre-flight check
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
const { checkPassword, sign } = require('../lib/auth');

const SESSION_HOURS = 8;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }

  const { password } = req.body || {};

  if (!checkPassword(password)) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  const token = sign({
    role: 'admin',
    exp: Date.now() + SESSION_HOURS * 60 * 60 * 1000,
  });

  res.setHeader(
    'Set-Cookie',
    `bm_session=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${SESSION_HOURS * 60 * 60}`
  );
  res.status(200).json({ ok: true });
}
};
