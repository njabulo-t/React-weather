import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import "./styles.css";
import "./App.css";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} description={props.data.description} />
                
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                    <div className="weather-icon">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
                    
                        <div>
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                    <hr></hr>
                        <li>Humidity:{props.data.humidity}%</li> <hr></hr>
                        <li>Wind: {props.data.humidity}</li><hr></hr>
                    </ul>

                </div>
            </div>

        </div>
    )
}

