class Storage{
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Miami';
        this.defaultState = 'FL';
    }

    getLocation(){
        this.city = this.defaultCity;
        this.state = this.defaultState;
        
        if(!localStorage.getItem('city')){
        this.city = this.defaultCity;
            this.state = this.defaultState;
        } else {
            this.city = localStorage.getItem('city');
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }
    
    setLocation(city, state){
        localStorage.setItem('city', city);
        localStorage.setItem('state', state); 
    }
}