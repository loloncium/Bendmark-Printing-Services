const { verify } = require('../lib/auth');
const { parseCookies } = require('../lib/requireAuth');

module.exports = async function handler(req, res) {
  const cookies = parseCookies(req.headers.cookie);
  const session = verify(cookies.bm_session);
  res.status(200).json({ loggedIn: !!session });
};
