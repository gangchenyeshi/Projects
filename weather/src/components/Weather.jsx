import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./Weather.css"

function Weather() {
    const APIKEY = "1b4f7bf4a30e9a865dd59bfa82f77cd0";

    const [form, setForm] = useState({
        city: "",
    })

    //Create a weather var for store the fetch data in this variable
    const [weather, setWeather] = useState([])


    async function weatherData(e) {
        e.preventDefault();
        if (form.city == "") {
            alert("Add value");
        } else {
            const data = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`)
                    .then(res =>
                        // console.log(res.json())
                        res.json()
                        //convert information into JSON format
                    )
                    .then((data) =>
                        // console.log(data)
                        data
                    )
            setWeather(
                {
                    data: data
                }
            ); //now data store in setWeather var
        }
    }
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name == "city") {
            setForm({ ...form, city: value })
        }
        // console.log(form.city)
    }
    return (
        <div className="container-fluid ">
            <div className="row d-flex justify-content-center">
                <div className="col-sm-12 col-md-8 col-lg-6">
                    <div className="background">

                        <main>
                            <h3 className="heading">Weather </h3>
                            <form className="search-Box">
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="addon-wrapping"><i class="fas fa-search"></i> </span>
                                    <input type="text"
                                        className="form-control search-bar"
                                        name="city"
                                        placeholder="Search city ..."
                                        onChange={(e) => handleChange(e)}
                                    />
                                    <button type="button"
                                        class="btn btn-dark"
                                        onClick={(e) => weatherData(e)}
                                    >Go</button>
                                </div>
                            </form>

                            {
                                weather.data != undefined ? ( //if weather.data is undefined then show Null else show DisplayWeather props data
                                    <div>
                                        <DisplayWeather data={weather.data} />
                                    </div>
                                ) : null
                            }
                        </main>

                    </div>
                </div>

            </div>

        </div>

    )
}

export default Weather;