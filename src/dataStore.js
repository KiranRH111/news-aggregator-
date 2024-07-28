const users = [
    {
        id: 1,
        username: "john_doe",
        password: '$2a$10$IPKGVmLR/pv4gxZxkH5LPeXjct2hSjFxmzm3RQW2031sMStw8kV6e',
        preferences: {
            categories: ["technology", "sports"],
            keywords: ["AI", "blockchain"]
        },
        readArticles: ["article001", "article002"],
        favoriteArticles: ["article003"]
    },
    {
        id: 2,
        username: "jane_smith",
        password: '$2a$10$IPKGVmLR/pv4gxZxkH5LPeXjct2hSjFxmzm3RQW2031sMStw8kV6e',
        preferences: {
            categories: ["health", "business"],
            keywords: ["COVID-19", "stock market"]
        },
        readArticles: ["article004"],
        favoriteArticles: ["article005", "article006"]
    }
];


const newsArticles = [
    {
        id: 1,
        title: "Advancements in AI",
        category: "technology",
        content: "Content about AI advancements...",
        keywords: ["AI", "technology"]
    },
    {
        id: 2,
        title: "Blockchain and its Future",
        category: "technology",
        content: "Content about blockchain...",
        keywords: ["blockchain"]
    },
    {
        id: 3,
        title: "Football World Cup Highlights",
        category: "sports",
        content: "Content about football...",
        keywords: ["football"]
    },
    {
        id: 4,
        title: "Latest COVID-19 News",
        category: "health",
        content: "Content about COVID-19...",
        keywords: ["COVID-19"]
    },
    {
        id: 5,
        title: "Stock Market Updates",
        category: "business",
        content: "Content about stock market...",
        keywords: ["stock market"]
    },
    {
        id: 6,
        title: "Business Strategies 101",
        category: "business",
        content: "Content about business strategies...",
        keywords: ["business"]
    }
];

module.exports = {users,newsArticles};