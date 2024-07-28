const preferencesService = require('../services/preferences.service');

exports.getPreferences = (req, res) => {
  try {
    const userId = req.user.id;
    const preferences = preferencesService.getUserPreferences(userId);
    res.json({ preferences });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updatePreferences = (req, res) => {
  try {
    const userId = req.user.id;
    const preferences = req.body.preferences;
    const result = preferencesService.updateUserPreferences(userId, preferences);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};