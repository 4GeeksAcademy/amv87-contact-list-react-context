const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadSomeData: () => {
				const store = getStore();
				var requestOptions = {
					method: 'GET',
					redirect: 'follow'
				  };
				  
				  fetch("https://playground.4geeks.com/apis/fake/contact/agenda/amv87", requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log('error', error));
			},

			deleteContact: (indexToDelete) => {
				const store = getActions();
				var requestOptions = {
				method: 'DELETE',
				redirect: 'follow'
				};
				  
				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete, requestOptions)
				.then(response => response.text())
				.then(result => console.log(result))
				.then( ()=>{getActions().loadSomeData()} )
				.catch(error => console.log('error', error));
			},

			editContact: (inputName, inputEmail, inputPhone, inputAdress, indexToEdit) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
				"address": inputAdress,
				"agenda_slug": "amv87",
				"email": inputEmail,
				"full_name": inputName,
				"phone": inputPhone
				});

				var requestOptions = {
				method: 'PUT',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToEdit, requestOptions)
				.then(response => response.text())
				.then( () => {getActions().loadSomeData()} )
				.catch(error => console.log('error', error));
			},

			createContact: (inputName, inputEmail, inputPhone, inputAdress) => {
				const store = getActions();

				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
				"address": inputAdress,
				"agenda_slug": "amv87",
				"email": inputEmail,
				"full_name": inputName,
				"phone": inputPhone
				});

				var requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
				};

				fetch("https://playground.4geeks.com/apis/fake/contact/", requestOptions)
				.then(response => response.json())
				.then(() => {getActions().loadSomeData()})
				.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;
