const { sql } = require('../../lib/db');
const { requireAuth } = require('../../lib/requireAuth');

module.exports = async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    if (!requireAuth(req, res)) return;

    const {
      title,
      category,
      description,
      location,
      client_name,
      year,
      dimensions,
      materials,
      features,
      glow,
      aspect_ratio,
      image_url,
      media_type,
      sort_order,
    } = req.body || {};

    const { rows } = await sql`
      UPDATE projects SET
        title        = COALESCE(${title}, title),
        category     = COALESCE(${category}, category),
        description  = COALESCE(${description}, description),
        location     = COALESCE(${location}, location),
        client_name  = COALESCE(${client_name}, client_name),
        year         = COALESCE(${year}, year),
        dimensions   = COALESCE(${dimensions}, dimensions),
        materials    = COALESCE(${materials}, materials),
        features     = COALESCE(${features}, features),
        glow         = COALESCE(${glow}, glow),
        aspect_ratio = COALESCE(${aspect_ratio}, aspect_ratio),
        image_url    = COALESCE(${image_url}, image_url),
        media_type   = COALESCE(${media_type}, media_type),
        sort_order   = COALESCE(${sort_order}, sort_order)
      WHERE id = ${id}
      RETURNING *
    `;

    if (!rows[0]) return res.status(404).json({ error: 'Project not found' });
    return res.status(200).json(rows[0]);
  }

  if (req.method === 'DELETE') {
    if (!requireAuth(req, res)) return;
    await sql`DELETE FROM projects WHERE id = ${id}`;
    return res.status(204).end();
  }

  res.setHeader('Allow', ['PUT', 'DELETE']);
  res.status(405).end();
};
