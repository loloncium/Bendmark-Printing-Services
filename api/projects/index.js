module.exports = async function handler(req, res) {
    // 1. Paste the CORS headers here to unlock permissions for your portfolio grid
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', 'https://bendmark.co.ke');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // 2. Clear out browser pre-flight checks safely
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
const { sql } = require('../../lib/db');
const { requireAuth } = require('../../lib/requireAuth');

module.exports = async function handler(req, res) {
  if (req.method === 'GET') {
    // Public — this is what portfolio.html reads to render the grid.
    const rows = await sql`
      SELECT * FROM projects ORDER BY sort_order ASC, created_at DESC
    `;
    return res.status(200).json(rows);
  }

  if (req.method === 'POST') {
    if (!requireAuth(req, res)) return;

    const {
      title,
      category,
      description = '',
      location = '',
      client_name = '',
      year = '',
      dimensions = '',
      materials = [],
      features = [],
      glow = '#7CDCD4',
      aspect_ratio = 'ar-sq',
      image_url = null,
      media_type = 'image',
      sort_order = 0,
    } = req.body || {};

    if (!title || !category) {
      return res.status(400).json({ error: 'title and category are required' });
    }

    const rows = await sql`
      INSERT INTO projects
        (title, category, description, location, client_name, year, dimensions,
         materials, features, glow, aspect_ratio, image_url, media_type, sort_order)
      VALUES
        (${title}, ${category}, ${description}, ${location}, ${client_name}, ${year}, ${dimensions},
         ${materials}, ${features}, ${glow}, ${aspect_ratio}, ${image_url}, ${media_type}, ${sort_order})
      RETURNING *
    `;
    return res.status(201).json(rows[0]);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end();
}
};