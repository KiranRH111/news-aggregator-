const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json())


const authRoutes = require('./routes/auth.routes')
const preferencesRoutes = require('./routes/preferences.routes');
const newsRoutes = require('./routes/news.routes');

app.use('/api/auth', authRoutes)
app.use('/api/preferences', preferencesRoutes);
app.use('/api/news', newsRoutes);


const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})