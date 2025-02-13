import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, Suspense, lazy } from "react";
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
// import Login from './pages/Login'
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {
	// const [user, setUser] = useState(null);

	const user: any = {
		"id": "481bdbbd-e2be-41a7-939d-8f80698dfaf0",
		"email": "gabriel@gmail.com",
		"hashedPassword": "$2b$12$.ulPAmw2UFBr8eUgRogHy.9DI7tInZ3h2jmY6Kn339mXwbujf92IO",
		"fullName": "gabriel",
		"contactInfo": {
		"cell": "404-404-4004"
		},
		"taxInfo": {},
		"bankingInfo": {},
		"twoFactorSettings": {},
		"createdAt": "2025-02-08T05:00:15.867Z",
		"updatedAt": "2025-02-09T18:18:09.726Z",
		"isActive": true,
		"token": "eyJ...Jye"
	}

	return (
		<>
		<Router>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register />} />
			{/* <Route path="/login" element={<Login setUser={ setUser } />} /> */}
			<Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard user={ user } /></Suspense>} />
			</Routes>
		</Router>
		</>
	)
}

export default App
