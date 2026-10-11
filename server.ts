import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint for AI Copywriting Generator
  app.post('/api/generate-copy', async (req, res) => {
    try {
      const { prompt } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(200).json({
          text: `### Custom AI Copy for "${prompt}"\n\n**Catchy Headline (H1):** Bring The Tranquility Of Nature Home—Without The Maintenance.\n\n**Product Highlights:**\n- Hand-painted Real-Touch™ foliage\n- 100% pet-friendly & non-toxic\n- Weighted artisan ceramic planter included\n\n*Note: Configure GEMINI_API_KEY in secrets to activate live Gemini model outputs.*`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Act as an expert e-commerce copywriter and SEO specialist for a luxury artificial plant brand called "Plantiqa". Target audience: busy professionals, interior stylists, and pet owners.
Tone: Elegant, reassuring, inspiring.
Generate high-converting homepage hero headline, key bullet points, and SEO meta description for: ${prompt}`,
      });

      res.json({ text: response.text || 'Generated successfully.' });
    } catch (err: any) {
      console.error('Gemini API error:', err);
      res.status(500).json({ error: 'Failed to generate copy.', details: err.message });
    }
  });

  // Explicit endpoints for SEO Crawlers
  app.get(['/robots.txt', '/robot.txt'], (req, res) => {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    res.type('text/plain').sendFile(robotsPath);
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    res.type('application/xml').sendFile(sitemapPath);
  });

  // Google Search Console verification file
  app.get(['/googlec3ec9c70865c6e25.html', '/googlec3ec9c70865c6e25%20(1).html'], (req, res) => {
    const filePath = path.join(process.cwd(), 'public', 'googlec3ec9c70865c6e25.html');
    res.type('text/html').sendFile(filePath);
  });

  // Vite dev middleware vs production static
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);

    // Fallback explicitly to index.html with vite HTML transformation for any unmatched GET route
    app.get('*', async (req, res, next) => {
      if (req.method !== 'GET') return next();
      const url = req.originalUrl;
      try {
        const fs = await import('fs');
        const indexPath = path.join(process.cwd(), 'index.html');
        let template = fs.readFileSync(indexPath, 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Plantiqa E-Commerce server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
