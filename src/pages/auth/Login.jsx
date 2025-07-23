import Divider from "@/components/Divider";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 ">
      <div className="flex flex-col md:flex-row items-center gap-16 bg-white shadow-lg rounded-2xl p-10 max-w-6xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-[42%]">
          <img
            className="w-full h-auto rounded-xl object-cover"
            src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            alt="Login Illustration"
          />
        </div>

        {/* Form Section start */}
        <div className="w-full md:w-[45%]">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-pink-600 text-transparent bg-clip-text">
            Please Login to Your Account
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Email Address
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-amber-500"
          }`}
          type="email"
          id="email"
          placeholder="email@example.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

            {/* input component */}
            {/* <Input htmlFor="radio mastan"
        title={"text"} 
        placeholder="textub"/> */}

            {/* Password */}
           <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          Password
        </label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          id="password"
          placeholder="••••••••"
          className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 ${
            errors.password
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-amber-500"
          }`}
        />
        {
        errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>


            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-[10px] rounded-lg transition duration-300 text-[18px]"
            >
              Sign In
            </button>

            <Divider />
            <SocialLogin />
          </form>
        </div>
        {/* Form Section end*/}
      </div>
    </div>
  );
};

export default Login;
