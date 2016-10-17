const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');
const rp = require('request-promise')
const searchRouter = require('./router/search.router.js')

// Utilities
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('./client'));


app.use('/api/search', searchRouter);

app.get('/', (request, response) => response.sendFile('index.html'));
app.set('port', process.env.PORT || 3500);
app.listen(app.get('port'), () => console.log('Server listening on port: ', app.get('port')));
