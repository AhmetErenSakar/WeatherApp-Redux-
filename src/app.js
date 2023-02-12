import React from 'react'
import { WapiProvider } from './context/setcontext'
import './App.css';
import WeatherList from './components/WeatherList/WeatherList';
import Header from './components/Header/Header';


function App() {

  return (
    <WapiProvider className="wapi">
      <Header />
      <WeatherList />
    </WapiProvider>
  )
}

export default App