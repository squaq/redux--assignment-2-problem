const initialState = {
	persons: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD':
			console.log('ADD', action.personData.name)
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: action.personData.name,
				age: action.personData.age
			}
			return {...state,  persons: state.persons.concat(newPerson)};
		case 'DELETE':
			let newPersons = state.persons.filter(idx => idx.id !== action.id)
			return {...state, persons: newPersons};
		default:
		 return state;
	}
	
}

export default reducer;