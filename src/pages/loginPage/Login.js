import React, { useEffect } from "react";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLoginMutation } from "../../features/userAuth/userAuthAPI";
import { toast } from "react-toastify";
import LoginInfo from "./LoginInfo";
const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [login, { isLoading, error, data: userInfo }] = useLoginMutation();
  useEffect(() => {
    // console.log(userInfo?.user);
    // console.log(userInfo?.accessToken);
    const from = location.state?.from || `/${userInfo?.user?.role}`;
    if (error?.data) {
      toast.error("there was an error" + error?.data, { toastId: "error" });
    } else {
      toast.dismiss();
      if (userInfo?.user || userInfo?.accessToken) {
        navigate(from, { replace: true });
      }
    }
  }, [error, userInfo, navigate, location.state?.from]);
  const onSubmit = async (data) => {
    await login(data);
  };

  return (
    <>
      <PageTitleBanner title="Login" />
      <div className="flex py-8 sm:pt-16  px-2 justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
          <div className="card-body">
            <LoginInfo />

            {/* ......social login button..... */}
            <div className="flex gap-2 mb-3">
              <button className="btn bg-[#C80911] border-[#C80911] rounded-none hover:border-[#C80911] border-2 text-white hover:text-[#C80911] w-[49%] hover:shadow-lg font-bold hover:bg-white">
                Google
              </button>
              <button className="btn bg-[#005B7F] border-[#005B7F] rounded-none hover:border-[#005B7F] border-2 text-white hover:text-[#005B7F] w-[49%] hover:shadow-lg font-bold hover:bg-white">
                Facebook
              </button>
            </div>
            <div className="divider m-0">or</div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <label className="label">
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
                <label className="label">
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

              {/* ..........Login Button.......... */}
              <input
                disabled={isLoading}
                className="btn btn-primary font-bold w-full max-w-xs text-white rounded-none hover:shadow-lg"
                type="submit"
                value={isLoading ? "Loading..." : "Login"}
              />
            </form>
            <p>
              <small>
                New at this website{" "}
                <Link className="text-primary hover:underline" to="/register">
                  please register
                </Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
