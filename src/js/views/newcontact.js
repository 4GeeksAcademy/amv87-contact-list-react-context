import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Newcontact = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div class="mb-3">
				<label for="fullName" class="form-label">Full Name</label>
				<input type="text" class="form-control" id="fullName" placeholder="Full Name" />
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Email</label>
				<input type="text" class="form-control" id="email" placeholder="Email" />
			</div>
			<div class="mb-3">
				<label for="phone" class="form-label">Phone</label>
				<input type="text" class="form-control" id="phone" placeholder="Phone" />
			</div>
			<div class="mb-3">
				<label for="address" class="form-label">Address</label>
				<input type="text" class="form-control" id="address" placeholder="Address" />
			</div>
			<div class="d-grid gap-2">
				<button class="btn btn-primary" type="button">Save</button>
			</div>
			<Link to="/">
				<button className="btn text-primary">Or get back to contacts</button>
			</Link>
		</div>
	);
};
