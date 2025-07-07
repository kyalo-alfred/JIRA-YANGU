const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Feature routers
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/marketplace', require('./routes/marketplace'));
app.use('/api/mentorship', require('./routes/mentorship'));

// TODO: Add auth, profile, and other shared routes

module.exports = app; 