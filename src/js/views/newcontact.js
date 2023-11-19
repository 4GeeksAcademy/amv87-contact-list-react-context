import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Newcontact = () => {
	const { store, actions } = useContext(Context);
	const [inputName, setInputName ] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputPhone, setInputPhone ] = useState('');
	const [inputAdress, setInputAdress ] = useState('');
	const [newContact, setNewContact] = useState([]);

	function addNewarray() {
		if (inputName !== '' && inputEmail !== '' && inputPhone !== '' && inputAdress !== '') {
			newContact = [{
				name: {inputName},
				email: {inputEmail},
				phone: {inputPhone},
				address: {newContact}
			}]
			setNewContact(array.from(newContact))
		} else {
			alert("All fields must be completed.");
		}
	}

	return (
		<div className="container">
			<h1 className="text-center mt-3">Add a new contact</h1>
			<div class="mb-3">
				<label for="fullName" class="form-label">Full Name</label>
				<input type="text" class="form-control" id="fullName" placeholder="Full Name" value={inputName} onChange={(e)=>setInputName(e.target.value)} />
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email</label>
				<input type="text" class="form-control" id="email" placeholder="Email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} />
			</div>
			<div class="mb-3">
				<label for="phone" class="form-label">Phone</label>
				<input type="text" class="form-control" id="phone" placeholder="Phone" value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} />
			</div>
			<div class="mb-3">
				<label for="address" class="form-label">Address</label>
				<input type="text" class="form-control" id="address" placeholder="Address" value={inputAdress} onChange={(e)=>setInputAdress(e.target.value)} />
			</div>
			<div class="d-grid gap-2">
				<button class="btn btn-primary" type="button" onClick={()=>(addNewarray())}>Save</button>
			</div>
			<Link to="/">
				<button className="btn text-primary">Or get back to contacts</button>
			</Link>
		</div>
	);
};
