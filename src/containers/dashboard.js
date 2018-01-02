import React , {Component} from 'react';
import { Button, form,  FormGroup, FormControl, Grid, Col, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {makeWeatherApiCall} from '../actions/weather-action';
import WeatherList from './weather-list';

class Dashboard extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { value : '' };
	} 

	cityNameChange = event => {
		this.setState({value: event.target.value});
	}

	makeApiCall = e => {
    	e.preventDefault();
    	this.props.makeWeatherApiCall(this.state.value);
    	this.setState({value : ''});
    }


render() {
    return (
    	<div>
    	 <Grid>
    	 <h2>Roy's Cool Weather Application </h2>
    	 <form onSubmit = {this.makeApiCall.bind(this)} >
		      <Row className="show-grid">
			      <Col xs={12} md={10}>
				    <FormGroup bsSize="large">
				      <FormControl 
				      	type="text" 
				      	placeholder="Enter the name of your favourite city !!"   
				      	value={this.state.value}
				      	onChange = {this.cityNameChange.bind(this)}/>
				    </FormGroup>
			      </Col>

			      <Col xs={6} md={2}>
			      	  <Button 
			      	  	type= "submit" 
			      	  	bsStyle="primary" 
			      	  	bsSize="large">
			      	  	Search
			      	  	</Button>
			      </Col>
	    	</Row>
	    	  </form>
        </Grid>
        <Grid>
	    <Row className="show-grid">
	      <Col xs={12} md={12}>
	      	<WeatherList/>
	      </Col>
	    </Row>
	    </Grid>
       </div>
    );
  }
}



export default connect(null, {makeWeatherApiCall})(Dashboard);