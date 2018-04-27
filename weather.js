class Weather{
    constructor(city, state) {
        this.api_key = '3951a50ea33b647f';
        this.city = city;
        this.state = state;
    }

    //Fetch weather
    async getWeather(){
        // const response = await fetch(`http://api.wunderground.com/api/3951a50ea33b647f/conditions/q/FL/Miami.json`);
        const response = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);
        const respData = await response.json();
        return respData.current_observation;
    }

    //Change location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}
