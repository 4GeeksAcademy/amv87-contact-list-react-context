import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Contactlist } from "./component/contactlist";
import { Newcontact } from "./views/newcontact";
import { Editcontact } from "./views/editcontact";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contactlist />} />
						<Route path="/newcontact" element={<Newcontact />} />
						<Route path="/Editcontact/:theid" element={<Editcontact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
