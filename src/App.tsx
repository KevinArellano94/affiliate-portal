import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect, Suspense, lazy } from "react";
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UpdateAccount from "./pages/_updateAccount";
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {
	const [user, setUser] = useState(() => {
		const storedUser = localStorage.getItem("user");
		return storedUser ? JSON.parse(storedUser) : null;
	});

	useEffect(() => {
		if (user) {
			localStorage.setItem("user", JSON.stringify(user));
		} else {
			localStorage.removeItem("user");
		}
	}, [user]);

	return (
		<>
		<Router>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			<Route path="/login" element={<Login setUser={ setUser } />} />
			<Route
				path="/dashboard"
				element={
					<Suspense fallback={<div>Loading...</div>}>
						<Dashboard user={ user } key={ location.pathname } />
					</Suspense>}
			/>
			<Route path="/updateAccount" element={<Suspense fallback={<div>Loading...</div>}><UpdateAccount user={ user } setUser={ setUser } /></Suspense>} />
			</Routes>
		</Router>
		</>
	)
}

export default App;
