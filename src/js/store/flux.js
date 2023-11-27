const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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
				//get the store
				const store = getStore();

				var requestOptions = {
					method: 'DELETE',
					redirect: 'follow'
				  };
				  
				  fetch("https://playground.4geeks.com/apis/fake/contact/" + indexToDelete, requestOptions)
					.then(response => response.json())
					.then(data => setStore({ contacts: store.contacts.filter((item)=> item.id !== indexToDelete) }))
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
				.then(result => console.log(result))
				.then(data => loadSomeData())
				.catch(error => console.log('error', error));
			},
			createContact: (inputName, inputEmail, inputPhone, inputAdress) => {
				console.log('Im working')

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
				.then(data => loadSomeData())
				.catch(error => console.log('error', error));

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
