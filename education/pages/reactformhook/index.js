
import React from "react";
import { useForm } from "react-hook-form";
const reactFormHook = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        credentials: "include", // Include cookies (e.g., accessToken) in the request
      });
      const result = await res.json();

      if (res.ok) {
        alert("Login Successful! Token: " + result.accessToken);
        // Store token or handle session as needed
      } else {
        alert(result.error || "Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong: " + error.message);
    }
  };

    return(
<>
  <h1>React Form hook</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username", { required: "Username is required" })}
      />
      {errors.username && <p>{errors.username.message}</p>}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
</>
      
    )
}
export default reactFormHook