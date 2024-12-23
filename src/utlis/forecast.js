const request = require('request')

const forecast = (latitude, longitude, callback) =>{
    const url ='https://api.weatherstack.com/current?access_key=62d6fb8184ea5c1d308263823db35122&query=37.8267,-122.4233https://api.weatherstack.com/current?access_key=62d6fb8184ea5c1d308263823db35122&query='+ latitude + ' , ' + longitude + '&units=f '
     request({url: url , json:true} , (error,response) => {
        if (error) {
            callback('unable to connect with weather service!', undefined)

        }else if(response.body.error) {
            callback('unable to find location!', undefined)

        } else {
            callback( undefined + response.body.current.weather_descriptions[0] +" .It is currently "+" degrees out .It feels like " + response.body.current.feelslike + " degrees out. ")

        }
    })
}

module.exports = forecast