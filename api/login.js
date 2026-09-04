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
};
