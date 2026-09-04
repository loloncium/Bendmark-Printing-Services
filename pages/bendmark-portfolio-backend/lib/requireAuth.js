const { verify } = require('./auth');

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  header.split(';').forEach((pair) => {
    const idx = pair.indexOf('=');
    if (idx === -1) return;
    const key = pair.slice(0, idx).trim();
    const val = pair.slice(idx + 1).trim();
    out[key] = decodeURIComponent(val);
  });
  return out;
}

// Returns the session payload if the request carries a valid admin cookie,
// otherwise writes a 401 response and returns null. Call and check for null
// before doing any protected work in a handler.
function requireAuth(req, res) {
  const cookies = parseCookies(req.headers.cookie);
  const session = verify(cookies.bm_session);
  if (!session) {
    res.status(401).json({ error: 'Unauthorized — please log in again.' });
    return null;
  }
  return session;
}

module.exports = { requireAuth, parseCookies };
