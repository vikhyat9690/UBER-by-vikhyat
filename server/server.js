const app = require('./app');
const http = require('http');
const connectDB = require('./db/db');
const server = http.createServer(app);
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})

connectDB();