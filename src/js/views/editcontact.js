import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Editcontact = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [inputName, setInputName ] = useState();
	const [inputEmail, setInputEmail] = useState();
	const [inputPhone, setInputPhone ] = useState();
	const [inputAdress, setInputAdress ] = useState();

	return (
		<div className="container">
					
			<h1 key={store.contacts[params.theid].id} className="text-center mt-3">Edit a contact</h1>
			<div className="mb-3">
				<label htmlFor="fullName" className="form-label">Full Name</label>
				<input type="text" className="form-control" id="fullName" placeholder={store.contacts[params.theid].full_name} value={inputName} onChange={(e)=>setInputName(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">Email</label>
				<input type="text" className="form-control" id="email" placeholder={store.contacts[params.theid].email} value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="phone" className="form-label">Phone</label>
				<input type="text" className="form-control" id="phone" placeholder={store.contacts[params.theid].phone} value={inputPhone} onChange={(e)=>setInputPhone(e.target.value)} />
			</div>
			<div className="mb-3">
				<label htmlFor="address" className="form-label">Address</label>
				<input type="text" className="form-control" id="address" placeholder={store.contacts[params.theid].address} value={inputAdress} onChange={(e)=>setInputAdress(e.target.value)} />
			</div>
			<Link to="/">
				<div className="d-grid gap-2">
					<button  className="btn btn-primary" type="button" onClick={()=>actions.editContact(inputName, inputEmail, inputPhone, inputAdress, store.contacts[params.theid].id)} >Save</button>
				</div>
			</Link>
			<Link to="/">
				<button className="btn text-primary mb-3">Or get back to contacts</button>
			</Link>
		
		</div>
	);
};

Editcontact.propTypes = {
	match: PropTypes.object
};
