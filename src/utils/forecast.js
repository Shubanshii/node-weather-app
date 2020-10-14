const request = require('postman-request')

//const weatherURL = 'http://api.weatherstack.com/current?access_key=ee66b2facf0681a1ed4d5a37d9f6869d&query=10.81667,106.63333&units=f'

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ee66b2facf0681a1ed4d5a37d9f6869d&query=' + latitude + ',' + longitude + '&units=f'
    console.log('loggin url', url)
    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to Weatherstack!', undefined)
        } 
        else if (body.success === false){
            callback("Bad API request. Try again. You may have provided a bad location.", undefined)

        } 
        else {
            
            callback(undefined, body.current.weather_descriptions[0] + '. The date and time is ' + body.location.localtime + '. It is currently ' + body.current.temperature + ' degrees out, but it feels like ' + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast