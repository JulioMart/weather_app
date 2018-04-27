//Init Storage
const storage = new Storage();
//Get stored Loc
const weatherLoc = storage.getLocation();

//Init Weather
const weather = new Weather(weatherLoc.city, weatherLoc.state);

//Init UI
const ui = new UI();


//Get weather on DOM load
document.addEventListener('DOMContentLoaded', get_Weather);

//Change event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;

    weather.changeLocation(city,state);

    //Store location
    storage.setLocation(city,state);

    //Get Weather
    get_Weather();

    //Close modal
    $('#locModal').modal('hide');

});

function get_Weather(){
    weather.getWeather()
        .then(results => {
            ui.paint(results)
        })
        .catch(err => console.log(err));
}