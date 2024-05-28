const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDatabase } = require('./models');
const authRoutes = require('./routes/auth');
const urlRoutes = require('./routes/urls');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/urls', urlRoutes);

const PORT = process.env.PORT || 5000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
