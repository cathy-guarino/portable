const express = require('express');
var axios = require('axios');

const router = express.Router();

router.use((req, res, next) => {
  req.setup = {'api-key': "cc9bb72b-1b8b-466d-bd59-784b212abe0d"}
  next()
})

// Wrapper for the Guardian Search endpoint
router.get('/search', (req, res) => {

  const params = {
    ...req.setup,
    'q': req.query.searchTerm,
    'order-by': 'newest',
    'query-fields': 'headline',
    'show-fields': 'thumbnail,byline,trailText'}

  axios.get('https://content.guardianapis.com/search', {params})
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error('Error occurred:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Wrapper for the Guardian Single Item endpoint
router.get('/article', (req, res) => {

  const params = {
    ...req.setup,
    'show-fields': 'body'}

  axios.get(`https://content.guardianapis.com/${req.query.id}`, {params})
    .then((response) => res.json(response.data))
    .catch((error) => {
      console.error('Error occurred:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

module.exports = router;
