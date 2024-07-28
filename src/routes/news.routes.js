const express = require('express');
const {
    fetchNews,
    markAsRead,
    markAsFavorite,
    fetchReadArticles,
    fetchFavoriteArticles,
} = require('../controllers/news.controller');
const authenticateToken = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', authenticateToken, fetchNews);
router.post('/:id/read', authenticateToken, markAsRead);
router.post('/:id/favorite', authenticateToken, markAsFavorite);
router.get('/read', authenticateToken, fetchReadArticles);
router.get('/favorites', authenticateToken, fetchFavoriteArticles);

module.exports = router;