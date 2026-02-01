const fetch = require('node-fetch'); // Netlify includes this automatically in functions

exports.handler = async function(event, context) {
  try {
    // Replace with your NEW, regenerated API Key
    const API_KEY = process.env.NEWS_API_KEY; 
    
    // Dynamic dates (optional) or hardcoded as per your needs
    const url = `https://newsapi.org/v2/everything?q=AI%20OR%20"Artificial%20Intelligence"&language=en&sortBy=popularity&apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        // Allow your frontend to access this function
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
