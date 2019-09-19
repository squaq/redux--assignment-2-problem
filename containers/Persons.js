import React, { Component } from 'react';
import {connect} from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
	render () {
		// console.log('state person', this.props.persons)
		return (
			<div>
				<AddPerson personAdded={(name, age) => this.props.onAddPerson(name, age)} />
				{this.props.persons.map(person => (
					<Person 
						key={person.id}
						name={person.name} 
						age={person.age} 
						clicked={() => this.props.onDeletePerson(person.id)}/>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		persons: state.persons
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPerson: (name, age) => dispatch({type: 'ADD', personData: {name, age}}),
		onDeletePerson: id => dispatch({type: 'DELETE', id})
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);