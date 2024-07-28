const newsService = require('../services/news.service');

const fetchNews = async (req, res) => {
    try {
        const articles = await newsService.fetchNewsBasedOnPreferences(req.user.id);
        res.json(articles);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const markAsRead = (req, res) => {
    try {
        const message = newsService.markArticleRead(req.user.id, req.params.id);
        res.status(200).send(message);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const markAsFavorite = (req, res) => {
    try {
        const message = newsService.markArticleFavorite(req.user.id, req.params.id);
        res.status(200).send(message);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const fetchReadArticles = (req, res) => {
    try {
        const readArticles = newsService.getReadArticles(req.user.id);
        res.json(readArticles);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const fetchFavoriteArticles = (req, res) => {
    try {
        const favoriteArticles = newsService.getFavoriteArticles(req.user.id);
        res.json(favoriteArticles);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    fetchNews,
    markAsRead,
    markAsFavorite,
    fetchReadArticles,
    fetchFavoriteArticles,
};