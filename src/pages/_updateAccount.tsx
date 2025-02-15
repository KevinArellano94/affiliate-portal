import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { updateUser } from "../utils/function/updateUser";

const UpdateAccount = ({ user, setUser }: any) => {
	const navigate = useNavigate();

	function formatEmptyField(input: any): string {
		if (typeof input === "object" && input !== null && Object.keys(input).length === 0) {
			return "";
		}
		if (input === "{}") {
			return "";
		}
		return String(input);
	}

	const [formData, setFormData] = useState({
		fullName: user.fullName,
		email: user.email,
		password: "",
		contactInfo: formatEmptyField(user.contactInfo),
		taxInfo: formatEmptyField(user.taxInfo),
		bankingInfo: formatEmptyField(user.bankingInfo)
	});
	const [validationState, setValidationState] = useState({
		fullName: "required",
		email: "required",
		password: ""
	});
	// const [showPassword, setShowPassword] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		const { fullName, email, password } = formData;
		setValidationState({
			fullName: fullName.length ? "" : "required",
			email: email.length === 0 ? "required" : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "invalid email",
			password: password === "" ? "" :
				password.length < 8 ? "must be at least 8 characters" :
					!/[A-Z]/.test(password) ? "must include an uppercase letter" :
						!/[a-z]/.test(password) ? "must include a lowercase letter" :
							!/[0-9]/.test(password) ? "must include a number" :
								!/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "must include a special character" :
									/(.)\1{2,}/.test(password) ? "cannot contain repeating characters" :
										""
		});
	}, [formData]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleUpdate = async (e: React.FormEvent) => {
		e.preventDefault();

		if (Object.values(validationState).some(state => state !== "")) {
			setMessage("Please correct all fields before submitting.");
			return;
		}

		try {
			const updatedUser = {
				...user,
				fullName: formData.fullName,
				contactInfo: formData.contactInfo,
				taxInfo: formData.taxInfo,
				bankingInfo: formData.bankingInfo
			};

			const success = await updateUser(
				user.id,
				// formData.password,
				formData.fullName,
				formData.contactInfo,
				formData.taxInfo,
				formData.bankingInfo,
			);

			if (!success) {
				throw new Error("Account update failed. Please try again later.");
			}

			// Update user in state and localStorage
			setUser(updatedUser);
			localStorage.setItem("user", JSON.stringify(updatedUser));

			navigate("/dashboard", { state: { updated: true } });
		} catch (error) {
			setMessage("Update failed. Please try again later.");
		}
	};

	return (
		<>
			<div className="auth-container max-w-md mx-auto">
				<h2 className="auth-title text-2xl font-bold">Update account information</h2>
				<p className="auth-subtitle text-gray-600">Update any data that is out of date</p>

				<form className="auth-form space-y-4 mt-6" onSubmit={handleUpdate}>
					<div className="form-group">
						<label className="form-label">Full name</label>
						<input
							type="text"
							name="fullName"
							className={`form-input ${validationState.fullName ? 'border-red-300' : 'border-green-300'}`}
							placeholder="John Doe"
							value={formData.fullName}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Email</label>
						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="your@email.com"
							value={formData.email}
							readOnly
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Contact Info</label>
						<input
							type="text"
							name="contactInfo"
							className="form-input"
							placeholder="404-404-4004"
							value={formData.contactInfo}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Tax Info</label>
						<input
							type="text"
							name="taxInfo"
							className="form-input"
							placeholder="98-7654321"
							value={formData.taxInfo}
							onChange={handleInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="form-label">Banking Info</label>
						<input
							type="text"
							name="bankingInfo"
							className="form-input"
							placeholder="000123456789"
							value={formData.bankingInfo}
							onChange={handleInputChange}
						/>
					</div>

					{message && <p className="error-message text-red-500">{message}</p>}

					<button type="submit" className="auth-button bg-blue-600 text-white py-2 rounded-lg">
						Save
					</button>
				</form>
			</div>
		</>
	);
};

export default UpdateAccount;
