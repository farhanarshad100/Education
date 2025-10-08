import React, {useEffect, useState} from "react"

const LoginFrom = () =>{
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [message, setMessage] = useState ("");
    const [error, setError] = useState("");
    const handleSubmit = async (e) => {
  e.preventDefault();

  // Basic validation
  if (!email && !password) {
    setError("Please fill in both fields");
    return;
  } else if (!email) {
    setError("Please enter your email");
    return;
  } else if (!password) {
    setError("Please enter your password");
    return;
  } else {
    setError("");
  }

  alert("Form submitted");

  try {
    const response = await fetch("https://example.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage("Login successful!");
      console.log("User token:", data.token);
      // Example: localStorage.setItem("token", data.token);
      // navigate("/dashboard");
    } else {
      setMessage(data.message || "Invalid credentials");
    }
  } catch (error) {
    console.error("Login error:", error);
    setMessage("Something went wrong!");
  }
};

    return(
        <>
 <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
<form onSubmit={handleSubmit}>
<h2>Login</h2>
<input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
         />
   <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:border-blue-500"
        />
         {password && <p className="text-red-500">{password}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

        {message && <p className="text-red-500">{message}</p>}
</form>

    </div>
        </>
    )
}
export default LoginFrom