var express = require("express");
var app = express();

var WeatherService = require('./services/weather-service');

app.get('/',(req,res) => {
	res.render("weather-home.ejs");
});

app.get('/:cityName',(req,res)=>{
	var city = req.params.cityName;

	return WeatherService.getLatLon(city)
	.then(function(latlonObject){
		var lat = latlonObject.results[0].geometry.location.lat,
			lon = latlonObject.results[0].geometry.location.lng;

		return WeatherService.getTemperature(lat,lon)
		.then(function(weatherObject){
			res.render("weather-display.ejs",{
				city : city,
				weatherObject : weatherObject
			});
		});
	}).catch((err)=>{

	});
});



module.exports = app;
