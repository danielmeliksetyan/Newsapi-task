export default async function handler(req, res) {
    const API_KEY = '9ee1891db57d47d08d7f5001566d4f97';
    const today = new Date().toISOString().split('T')[0];
    const url = `https://newsapi.org/v2/everything?q=AI%20OR%20"Artificial%20Intelligence"&from=2026-01-25&to=${today}&language=en&sortBy=popularity&apiKey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
}