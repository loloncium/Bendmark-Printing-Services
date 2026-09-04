const { put } = require('@vercel/blob');
const { requireAuth } = require('../lib/requireAuth');

// Vercel's default serverless body limit is 4.5MB. Base64 adds ~33% overhead,
// so keep uploaded files under ~3MB — admin.html resizes images client-side
// before sending them here for exactly this reason.
module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end();
  }
  if (!requireAuth(req, res)) return;

  const { filename, dataUrl } = req.body || {};
  if (!filename || !dataUrl) {
    return res.status(400).json({ error: 'filename and dataUrl are required' });
  }

  const match = dataUrl.match(/^data:(.+);base64,(.*)$/);
  if (!match) return res.status(400).json({ error: 'dataUrl must be a base64 data URL' });

  const contentType = match[1];
  const buffer = Buffer.from(match[2], 'base64');
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '_');

  try {
    const blob = await put(`portfolio/${Date.now()}-${safeName}`, buffer, {
      access: 'public',
      contentType,
    });
    res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error('[upload] blob put failed:', err);
    res.status(500).json({ error: 'Upload failed' });
  }
};
