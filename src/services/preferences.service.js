const {users} = require('../dataStore');

exports.getUserPreferences = (userId) => {
  const user = users.find(user => user.id === userId);
  return user.preferences;
};

exports.updateUserPreferences = (userId, preferences) => {
  const user = users.find(user => user.id === userId);
  user.preferences = preferences;
  return { message: 'Preferences updated successfully.' };
};