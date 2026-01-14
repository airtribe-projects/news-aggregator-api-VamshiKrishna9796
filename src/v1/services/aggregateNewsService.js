//complete the news aggretae service there should be class
const axios = require('axios');
class newsAggregateService {
    static async aggregateNews(url) {
        try {
            console.log('Fetching news from URL:', url);
            const response = await axios.get(url);
            const newsData = response.data;
            return newsData;
        } catch (error) {
            console.error('Error aggregating news:', error);
            throw error;
        }
    }
}
module.exports = newsAggregateService;