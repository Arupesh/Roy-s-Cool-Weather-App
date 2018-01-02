import React, {Component} from 'react';
import {connect} from 'react-redux';
//import WeatherListItem from '../components/weather-list-item';
import {Table} from "react-bootstrap";

class WeatherList extends React.Component{


	renderWeatherDetails(cityList) {
		
		//console.log("Arupesh 2>>", cityList.main.temp)
		//F = (K - 273.15)* 1.8000 + 32.00
		let tempF = (cityList.main.temp - 273.15)* 1.8000 + 32.00 ;
		return (
			
				<tr key={cityList.name}>
					<td>
						{cityList.name}
					</td>
					<td>
						{cityList.main.temp ? tempF : "No data"}
					</td>
					<td>
						{cityList.wind.speed ? cityList.wind.speed : "No data"}
					</td>
					<td>
						{cityList.main.pressure ? cityList.main.pressure : "No data"}
					</td>
					<td>
						{cityList.main.humidity ? cityList.main.humidity : "No data"}
					</td>
					<td>
						{cityList.weather[0].description ? cityList.weather[0].description : "No data"}
					</td>
				</tr>

			);

		
		}
		

	render(){
	
		if(this.props.weather.length === undefined)
		{
			console.log("List is null bro>>")
			return (<div className="coolGreen">Go on, Search with a city name above to see it's current forecast!!</div>);
		}
		return(
			<div> 
				<Table responsive>
				    <thead>
				      <tr>
				        <th>City</th>
				        <th>Temperature (F)</th>
				        <th>Wind (mph)</th>
				        <th>Pressure (hPa)</th>
				        <th>Humidity (%)</th>
				        <th>Forecast</th>
				      </tr>
				    </thead>
				    <tbody>
				      		{this.props.weather.map(this.renderWeatherDetails)}
				    </tbody>
				  </Table>
			</div>
				
			)
		}

}

function mapStateToProps(state){
	return  { weather : state.weather} ; 
}

export default connect(mapStateToProps)(WeatherList);