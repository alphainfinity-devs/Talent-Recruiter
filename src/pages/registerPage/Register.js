import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex py-8 sm:pt-16  px-2 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl rounded-none">
        <div className="card-body">
          {/* ......social login button..... */}
          <div className="flex gap-2 mb-3">
            <button className="btn rounded-none bg-white w-[49%] hover:bg-white hover:shadow-lg hover:border-primary hover:text-primary">
              Google
            </button>
            <button className="btn rounded-none bg-white w-[49%] hover:bg-white hover:shadow-lg hover:border-primary hover:text-primary">
              Facebook
            </button>
          </div>
          <div className="divider m-0">or</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/*.........Name Input filed start........... */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="fname"
                type="text"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs rounded-none"
                {...register("fname", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.fname?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fname.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fname.message}
                  </span>
                )}
              </label>
            </div>
            {/*.........Name Input filed end.............*/}

            {/* .........Email Input filed start ............*/}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs rounded-none"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            {/* ...........Email Input filed end .............*/}

            {/*......... Password Input filed start....... */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs rounded-none"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label p-[2px]">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {/*......... Password Input filed start....... */}

            {/* ..........confirm Password Input filed start...... */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full max-w-xs rounded-none"
                {...register("confirmPassword", {
                  required: {
                    value: true,
                    message: "confirm Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.confirmPassword?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>
            {/*.........confirm Password Input filed start.......... */}

            {/* ..........Login Button.......... */}
            <input
              className="btn btn-primary w-full max-w-xs text-white rounded-none hover:shadow-lg"
              type="submit"
              value="Register"
            />
          </form>
          <p>
            <small>
              Alrady have an account?{" "}
              <Link className="text-primary hover:underline" to="/login">
                please login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
