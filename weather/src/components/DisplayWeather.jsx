import React from 'react';
import "./DisplayWeather.css"

function DisplayWeather(props) {
    // console.log("Props from weather data ",props)
    const { data } = props; //de-constructed the props into data
    console.log(data);

    // const icon = "http://openweathermap.org/img/wn/" + `${data.weather[0].icon}` + ".png"//this url is for list of Icons for weather

    const icon = "http://openweathermap.org/img/wn/" +
        `${data.cod != 404 ?
            data.weather[0].icon
            : null
        }` + ".png"


    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    };
    return (
        <div className="weatherDisplay">
            {
                data.cod != 404 ?
                    <React.Fragment>
                        <div className="location-box">
                            <div className="location">
                                {data.name}, {data.sys.country}
                            </div>
                            <div className="date">
                                {/* To display the current time at local time */}
                                {/* As on {new Date().toLocaleTimeString()} */}
                                {dateBuilder(new Date())}
                            </div>

                            <div className="weather-box">
                                <div className="temp">
                                    {/* {data.main.temp} */}
                                    {/* convert temp data into degree Celcious */}
                                    {Math.floor(data.main.temp - 272.15)} °C
                                </div>
                            </div>
                            <div className="weather-box">
                                <div className="weather">
                                    <span>{data.weather[0].description}</span>
                                    <img src={icon} className="weatherIcon" alt="" />
                                </div>
                            </div>


                            {/* <span>{data.weather[0].main}</span> */}
                        </div>

                        <div className="container">
                            <div className="row d-flex justify-content-around">
                                <div className="col-6">
                                    <div className="card-box">
                                        <p>High/Low {Math.floor(data.main.temp_max - 270.15)} °C / {Math.floor(data.main.temp_min - 270.15)} °C</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Humidity {data.main.humidity} %</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Pressure {data.main.pressure} hPa</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Visibility {data.visibility / 1000} km</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card-box">
                                        <p>Wind {Math.floor(data.wind.speed * 18) / 5} km/hr</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Wind Direction {data.wind.deg} ° deg</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Sunrise {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                                    </div>
                                    <div className="card-box">
                                        <p>Sunset {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </React.Fragment>
                    : <div>
                        <h2>{data.message}</h2>
                    </div>
            }

        </div>
    )
}
export default DisplayWeather;