const newsAggregateService = require('../services/aggregateNewsService');
class aggregateNewsController {
  static async aggregateNews(req, res) {
    try {
        const category = req.query.category || 'general';
        const lang = req.query.lang || 'en';
        const newsApiKey = process.env.X_NEWS_API_KEY;
        const maxArticles = process.env.MAX_ARTICLES;
        const country = req.query.country || "India";
        const baseUrl = process.env.NEWS_API_URL;
        

      // Call the service to aggregate news articles
      const url = baseUrl + '?category=' + category + '&lang=' + lang + '&country=' + country + '&max=' + maxArticles + '&apikey=' + newsApiKey;

      const newsArticles = await newsAggregateService.aggregateNews(url);
      if(newsArticles){
        res.status(200).json({
            status: 'success',
            data: newsArticles,
      });
    }
    else{
        res.status(404).json({
            status: 'error',
            message: 'No news articles found',
        });
      }
    } catch (error) {
      console.error('Error aggregating news:', error);
      res.status(500).json({
        status: 'error',
        message: 'Failed to aggregate news',
      });
    }
  }
}

module.exports = aggregateNewsController;
