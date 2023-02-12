import { createContext, useEffect, useState, useContext } from 'react'
import axios from 'axios';



export const Wapi = createContext();


export const WapiProvider = ({ children }) => {

    const [weath, setWeath] = useState([])
    const [city, setCity] = useState()
    let weekDays = ["Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    const dayİnAWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayİnAWeek, weekDays.length).concat(weekDays.slice(0, dayİnAWeek))
    const key = "ef1dbb2a408d651f01dfa8294423191c"


    useEffect(() => {
        async function data() {
            await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&appid=ef1dbb2a408d651f01dfa8294423191c&units=metric').then(res => setWeath(res.data.list))
        }
        data()
    }, [])

    const values = {
        weath,
        setWeath,
        city,
        setCity,
        forecastDays
    };

    return <Wapi.Provider value={values}>{children}</Wapi.Provider>
}
export const useWeather = () => useContext(Wapi);