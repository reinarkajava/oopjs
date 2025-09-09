const express = require('express');
const db = require(./utils/db);
const app = express();
const PORT = 3025;
app.use(express.json);

const articleRouter = require('./routers/article');


app.use('/articles', articleRouter);

app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
});