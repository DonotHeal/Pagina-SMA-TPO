const {createApp} = Vue;

let app = Vue.createApp({
    data(){
        return {
            dia: [],
            tMaxima: [],
            tMinima: []
        }
    },

    created() {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=-40.15&longitude=-71.35&daily=temperature_2m_max,temperature_2m_min&timezone=auto")
        .then(res => res.json()) 
        .then(data => {
            this.dia = data.daily.time,
            this.tMaxima = data.daily.temperature_2m_max,
            this.tMinima = data.daily.temperature_2m_min
        })
        .catch(err => console.error(err));
    }
}).mount("#app");