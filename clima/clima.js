const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b3022b14bad0f8d8bb2902f6cdc9c2b1`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}