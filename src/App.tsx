import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, Suspense, lazy } from "react";
import './App.css'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
const Dashboard = lazy(() => import('./pages/Dashboard'));


function App() {
	const [user, setUser] = useState(null);

	return (
		<>
		<Router>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register setUser={ setUser } />} />
			<Route path="/login" element={<Login setUser={ setUser } />} />
			<Route path="/dashboard" element={<Suspense fallback={<div>Loading...</div>}><Dashboard user={ user } /></Suspense>} />
			</Routes>
		</Router>
		</>
	)
}

export default App
