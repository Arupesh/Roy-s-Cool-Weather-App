import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table} from 'react-bootstrap';

export function WeatherListItem (props) {

	return (
		<div>
			<tr>
	        <td>this.props.data.city.name</td>
	        <td>this.props.data.city.population</td>
	        <td>Table cell</td>
	        <td>Table cell</td>
	        <td>Table cell</td>
	        <td>Table cell</td>
	        <td>Table cell</td>
	      </tr>
      </div>
			)
	

}

