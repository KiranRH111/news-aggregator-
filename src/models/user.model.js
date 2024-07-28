class User {
    constructor(id, username, password, preferences = [], readArticles = [], favoriteArticles = []) {
      this.id = id;
      this.username = username;
      this.password = password;
      this.preferences = preferences;
      this.readArticles = readArticles;
      this.favoriteArticles = favoriteArticles;
    }
  }
  
  module.exports = User;