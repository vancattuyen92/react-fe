const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./connect');

// env
const PORT = process.env.PORT || 3005;
dotenv.config();
app.use(cors());

// routes
const userRoute = require('./routes/userRoute');

app.use(express.json({ extend: true }));
app.get('/', (_, res) => res.send('API running'));

// route
app.use('/api/user', userRoute);

// start
const start = async () => {
  try {
    await connectDB(process.env.DB_CONNECT);
    app.listen(PORT, console.log(`Server Up and running localhost:${PORT}`));
  } catch (err) {
    console.log('start err: ', err)
  }
}

start();