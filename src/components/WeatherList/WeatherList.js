import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useWeather } from '../../context/setcontext'
import { updateİtem } from '../../redux/weatherSlice'


import './WeatherList.css'



function WeatherList() {

  const [wet, setWet] = useState([])
  let weekDays = ["Monday", "Tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
  const dayİnAWeek = new Date().getDay();
  const forecastDays = weekDays.slice(dayİnAWeek, weekDays.length).concat(weekDays.slice(0, dayİnAWeek))
  const items = useSelector(state => state.weather.item)
  const dispatch = useDispatch();

  function update() {
    const wett = wet.slice(0, 7)
    dispatch(updateİtem(wett))
  }


  useEffect(() => {
    async function data() {
      await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&appid=ef1dbb2a408d651f01dfa8294423191c&units=metric').then(res => setWet(res.data.list))
    }
    data()
  }, [])

  useEffect(() => {
    update()
  }, [wet])

  console.log(items);
  return (
    <>
      {items.map((item, i) => {
        return (
          <div className={i === 0 ? 'today' : 'weatherContainer'}>
            <p className={'h1'}>{i === 0 ? 'Today' : forecastDays[i]}</p>
            <p className={'h1'}>temperature:{item.main.temp}°C</p>
            <img alt='weather' src={`icons/${item.weather[0].icon}.png`} />
          </div>
        )
      })}
    </>
  )
}

export default WeatherList