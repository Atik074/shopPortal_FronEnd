import React from "react";
import { useForm } from "react-hook-form";
import Divider from "@/components/Divider";
import SocialLogin from "./SocialLogin";
import { useMutation } from "@tanstack/react-query";
import { createNewUser } from "@/api/authApi";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

const navigate = useNavigate()

    const mutation = useMutation({
      mutationKey:["register"],
      mutationFn:createNewUser ,
      onSuccess:(data)=>{
        localStorage.setItem("token", data.token)

        Swal.fire({
         icon: "success",
          title: "Registration Successful",
          text: `Welcome ${data.user.name}!`,
   
});
       navigate("/login")
      } ,

      onError:(error)=>{
  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error?.response?.data?.message || 'Something went wrong in register!',
      });
      }
    })


  // check password for confirm 
  const password = watch("password", "");


  const onSubmit = (data) => {
    const { name, email, password, role } = data;
    mutation.mutate({ name, email, password, role })
        console.log("Form Data:", data);
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="flex flex-col md:flex-row items-center gap-16 bg-white shadow-lg rounded-2xl p-10 max-w-6xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-[42%]">
          <img
            className="w-full h-auto rounded-xl object-cover"
            src="https://img.freepik.com/free-vector/registration-concept-illustration_114360-8165.jpg?w=740&t=st=1689363389~exp=1689363989~hmac=2858152a1a3f43d0a244ce1a3de6e3f77f6e38a4f6ca1ff195cfbdac92bb4d08"
            alt="Register Illustration"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-pink-600 text-transparent bg-clip-text">
            Create Your Account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your full name"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-amber-500"
                }`}
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="email@example.com"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-amber-500"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-amber-500"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                    message:
                      "Password must include uppercase, lowercase, number, and special character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
                  errors.confirmPassword
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-amber-500"
                }`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
               disabled={mutation.isLoading}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-[10px] rounded-lg transition duration-300 text-[18px]"
            >
              {mutation?.isLoading ? "Registering..." : "Register"}
            </button>

            <Divider />
            <SocialLogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
