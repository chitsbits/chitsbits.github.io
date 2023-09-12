import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Banner from "./components/banner";
import NavBar from "./components/navBar";
import About from "./components/about";
import Projects from "./components/projects";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Banner />
			<NavBar />
			<main className="main-content">
				<Routes>
					<Route
						path="/"
						element={<Navigate replace to="/about" />}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route
						path="*"
						element={<Navigate replace to="/about" />}
					/>
				</Routes>
			</main>
		</React.Fragment>
	);
}

export default App;
