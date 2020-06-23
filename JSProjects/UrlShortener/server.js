const express = require('express');
const app = express();
const shortUrl = require('./models/shortUrl');
require('./db');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await shortUrl.find();
  await res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  await shortUrl.create({
    full: req.body.fullURL,
  });
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl1 = await shortUrl.findOne({ short: req.param.shortUrl });

  if (shortUrl1 == null) return res.sendStatus(404);

  shortUrl1.clicks++;
  shortUrl1.save();

  res.redirect(shortUrl1.full);
});
app.listen(process.env.PORT || 8080, (req, res) => {
  console.log('server is hot!');
});
