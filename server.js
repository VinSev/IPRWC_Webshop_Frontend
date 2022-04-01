//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/iprwc-webshop-frontend'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/iprwc-webshop-frontend/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
