TomorrowIO.setApiKey("RzQbmQ25FZ0I2OgNYTt7C7IgZfphyiVU");
TomorrowIO.get('weather', {location: '40.75872069597532,-73.98529171943665'}, function(response) {
    console.log(response.data.temperature.value + ' ' + response.data.temperature.units);
});