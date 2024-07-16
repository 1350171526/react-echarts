var express = require('express');
var router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/baseWeather',async function(req, res, next) {
const cityCodes = require('../public/citycodes')
  try {
    const requests = cityCodes.map(cityCode =>
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
        params: {
          key: 'acca7d00d4361354f0f92e5452443bd4', 
          city: cityCode, 
          extensions: 'base' 
        }
      })
    );
    const responses = await Promise.all(requests);
    const weatherData = responses.map(response => response.data);
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/allWeather',async function(req, res, next) {
  const cityCodes = require('../public/citycodes')
  try {
    const requests = cityCodes.map(cityCode =>
      axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
        params: {
          key: 'acca7d00d4361354f0f92e5452443bd4', 
          city: cityCode, 
          extensions: 'all' 
        }
      })
    );
    const responses = await Promise.all(requests);
    const weatherData = responses.map(response => response.data);
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.get('/oneBaseWeather',async function(req, res, next) {
  try {
    const request = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', {
      params: {
        key: 'acca7d00d4361354f0f92e5452443bd4', 
        city: '410100', 
        extensions: 'base' 
      }
    })
    res.json(request.data.lives[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

module.exports = router;
