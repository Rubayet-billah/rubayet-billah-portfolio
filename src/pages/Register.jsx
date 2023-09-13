import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Your registration logic here
    console.log({ email, password });
  };

  const handleGoogleRegister = async () => {
    // You can use a Google OAuth library to handle Google registration here
    // For example, you can use the 'react-oauth/google' library
  };

  return (
    <div className="container max-w-md mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-600 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 w-full"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="block text-gray-600 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-teal-500 w-full"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <p className="text-sm text-center mb-3">
        Already have an account?{" "}
        <Link to="/login" className="font-bold uppercase text-blue-700">
          Login
        </Link>
      </p>
      <button
        className="bg-teal-500 w-full text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-300"
        onClick={handleRegister}
      >
        Register
      </button>
      <hr className="my-5" />
      <button
        className="btn btn-info py-1 w-full rounded"
        onClick={handleGoogleRegister}
      >
        <FaGoogle /> Google
      </button>
    </div>
  );
};

export default Register;
