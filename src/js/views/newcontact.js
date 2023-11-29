import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Newcontact = () => {
	const { store, actions } = useContext(Context);
	const [inputName, setInputName ] = useState('');
	const [inputEmail, setInputEmail] = useState('');
	const [inputPhone, setInputPhone ] = useState('');
	const [inputAdress, setInputAdress ] = useState('');

	return (
		<div className="container">
			<h1 className="text-center mt-3">Add a new contact</h1>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="fullName" placeholder="Full Name" value={inputName} onChange={(e)=>setInputName(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email</label>
				<input type="text" className="form-control" id="email" placeholder="Email" value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input type="text" className="form-control" id="phone" placeholder="Phone" value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input type="text" className="form-control" id="address" placeholder="Address" value={inputAdress} onChange={(e)=>setInputAdress(e.target.value)} />
			</div>
			<Link to="/">
				<div className="d-grid gap-2">
					<button
						className="btn btn-primary"
						type="button"
						onClick={()=>(inputName!=='' && inputEmail!=='' && inputPhone!=='' && inputAdress!=='' ? actions.createContact(inputName, inputEmail, inputPhone, inputAdress) : alert('You must complete all fields! Your contact has not been saved.'))} >
						Save
					</button>
				</div>
			</Link>
			<Link to="/">
				<button className="btn text-primary mb-3">Or get back to contacts</button>
			</Link>
		</div>
	);
};
