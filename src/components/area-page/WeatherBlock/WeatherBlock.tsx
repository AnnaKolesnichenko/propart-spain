import { fetchWeatherApi } from 'openmeteo';
import React from 'react';
import './WeatherBlock.scss';

interface WeatherBlockProps {
  lat: string;
  lng: string;
}
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const getDayName = (i: number) => (new Date().getDay() + i) % 7;
const roundTemperature = (temp: number) => (Math.round(temp * 10) / 10).toFixed(1);

async function getWeather(lat: string, lng: string) {
  const params = {
    latitude: lat,
    longitude: lng,
    hourly: 'temperature_180m',
    forecast_days: 3,
  };
  const url = 'https://api.open-meteo.com/v1/forecast';

  try {
    const responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    const hourly = response.hourly()!;

    const temperatureArray = hourly.variables(0)!.valuesArray()!;

    // Найти индекс элемента с временем 12:00 сегодня, завтра и послезавтра
    const currentHour = new Date().getHours();
    const todayIdx = currentHour <= 12 ? 12 - currentHour : 36 - currentHour;
    const tomorrowIdx = todayIdx + 24;
    const dayAfterIdx = tomorrowIdx + 24;

    // Получить температуры на 12:00 сегодня, завтра и послезавтра
    const tempToday = roundTemperature(temperatureArray[todayIdx]);
    const tempTomorrow = roundTemperature(temperatureArray[tomorrowIdx]);
    const tempAfterDay = roundTemperature(temperatureArray[dayAfterIdx]);

    // Вернуть объект с температурами на 12:00 сегодня, завтра и послезавтра
    return [tempToday, tempTomorrow, tempAfterDay];
  } catch (error) {
    console.log(error);
    return [];
  }
}

const WeatherBlock = async ({ lat, lng }: WeatherBlockProps) => {
  const weater = await getWeather(lat, lng);

  return (
    <div className="area__weather">
      <h2 className="title">Weather</h2>
      <ul className="weater-list">
        {weater.map((w, i) => (
          <li key={i}>
            <p className="day">{daysOfWeek[getDayName(i)]}</p>
            <p className="temp">
              {sunImage}
              {w}°
            </p>
          </li>
        ))}
      </ul>
      <span className="subtext">Real - time weather</span>
    </div>
  );
};

export default WeatherBlock;

const sunImage = (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.96915 9.10978C6.81561 9.5442 6.73206 10.0117 6.73206 10.4987C6.73206 12.7999 8.59754 14.6654 10.8987 14.6654C13.1999 14.6654 15.0654 12.7999 15.0654 10.4987C15.0654 8.19751 13.1999 6.33203 10.8987 6.33203C10.4117 6.33203 9.94423 6.41558 9.50981 6.56912"
      stroke="#222222"
      stroke-linecap="round"
    />
    <path d="M10.9 2.16797V3.83464" stroke="#222222" stroke-linecap="round" />
    <path d="M10.9 17.168V18.8346" stroke="#222222" stroke-linecap="round" />
    <path d="M4.23466 10.5H2.56799" stroke="#222222" stroke-linecap="round" />
    <path d="M19.2346 10.5H17.568" stroke="#222222" stroke-linecap="round" />
    <path d="M17.3806 4.01953L15.5289 5.71251" stroke="#222222" stroke-linecap="round" />
    <path d="M4.41956 4.01953L6.27124 5.71251" stroke="#222222" stroke-linecap="round" />
    <path d="M6.27142 15.1289L4.41956 16.9807" stroke="#222222" stroke-linecap="round" />
    <path d="M17.3806 16.9807L15.5289 15.1289" stroke="#222222" stroke-linecap="round" />
  </svg>
);
