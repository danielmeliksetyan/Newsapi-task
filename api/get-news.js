export default async function handler(req, res) {
  // Your API Key is safer here than in the HTML
  const API_KEY = '9ee1891db57d47d08d7f5001566d4f97';
  const today = new Date().toISOString().split('T')[0];
  
  // We use the same URL, but now the request comes from Vercel's server
  const url = `https://newsapi.org/v2/everything?q=AI%20OR%20"Artificial%20Intelligence"&from=2026-01-25&to=${today}&language=en&sortBy=popularity&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Send the data back to your index.html
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news from server' });
  }
}
