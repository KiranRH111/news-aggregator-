const axios = require('axios');
const {users} = require('../dataStore');

const NEWS_API_URL = 'https://newsapi.org/v2/everything';
const NEWS_API_KEY = process.env.NEWS_API_KEY;

const getUserPreferences = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("User not found");
    return user.preferences;
};

const fetchNewsFromAPI = async (query) => {
    try {
        const response = await axios.get(NEWS_API_URL, {
            params: {
                q: query,
                apiKey: NEWS_API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        throw new Error('Failed to fetch articles from external API');
    }
};

const fetchNewsBasedOnPreferences = async (userId) => {
    const preferences = getUserPreferences(userId);
    const query = (preferences.categories.join(' ') + ' ' + preferences.keywords.join(' ')).trim();
    return await fetchNewsFromAPI(query);
};

const markArticleRead = (userId, articleId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("User not found");
    if (!user.readArticles.includes(articleId)) {
        user.readArticles.push(articleId);
    }
    return "Article marked as read";
};

const markArticleFavorite = (userId, articleId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("User not found");
    if (!user.favoriteArticles.includes(articleId)) {
        user.favoriteArticles.push(articleId);
    }
    return "Article marked as favorite";
};

const getReadArticles = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("User not found");
    return user.readArticles;
};

const getFavoriteArticles = (userId) => {
    const user = users.find((u) => u.id === userId);
    if (!user) throw new Error("User not found");
    return user.favoriteArticles;
};

module.exports = {
    fetchNewsBasedOnPreferences,
    markArticleRead,
    markArticleFavorite,
    getReadArticles,
    getFavoriteArticles,
};