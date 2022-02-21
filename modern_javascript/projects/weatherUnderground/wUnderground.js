const queryString = require('query-string');
class Weather {
    async getWeather(loc) {
        const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
        const apikey = 'FS8Cni2JhBeTTQAkwyssZ3VfZIfYshWF';
        let location = [-73.98529171943665,40.75872069597532];
        const fields = [
            "windSpeed",
            "temperature",
            "temperatureApparent",
            "dewpoint",
            "weatherCode"
          ];
        const units = 'metric';
        const timesteps = 'current';
        const getTimelineParameters =  queryString.stringify({
            apikey,
            location,
            fields,
            units,
            timesteps
        }, {arrayFormat: "comma"});
        
        fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET"})
          .then((result) => result.json())
          .then((json) => console.log(json))
          .catch((error) => console.error("error: " + error));
    }
}

const weather = new Weather;
weather.getWeather('test');