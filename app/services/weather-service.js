'use strict';

var FinalService = require('./final-service');

function getLatLon(city){
 var encodeaddress = encodeURIComponent(city);
 return FinalService.invoke({
   url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeaddress}`,
   method: 'GET'
 }).then((response)=>{
   return response;
 }).catch((err)=>{
   return err;
 });
}

function getTemperature(lat,lon){
  return FinalService.invoke({
    url:`https://api.darksky.net/forecast/3aab5fafd317d5872543474e4f7303bc/${lat},${lon}?units=si`,
    method: 'GET'
  }).then((response)=>{
    return response;
  }).catch((err)=>{
    return err;
  });
}

module.exports = {
  getLatLon,
  getTemperature,
}
