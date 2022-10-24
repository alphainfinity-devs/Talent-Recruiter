import React, { useEffect } from "react";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineReconciliation } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";
import { toast } from "react-toastify";
import { useUserRegisterMutation } from "../../features/userAuth/userAuthAPI";
const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [userRegister, { isLoading, error, isSuccess }] =
    useUserRegisterMutation();
  useEffect(() => {
    if (error) {
      toast.error("there was an error" + error?.message, { toastId: "error" });
    }
    if (!error && !isLoading && isSuccess) {
      navigate("/login");
      toast.success("You have register please login", {
        toastId: "success",
      });
    }
  }, [error, isLoading, navigate, isSuccess]);

  const onSubmit = async (data) => {
    await userRegister(data);
  };

  return (
    <>
      <PageTitleBanner title="Register" />
      <div className="flex py-8 sm:pt-16  px-2 justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
          <div className="card-body">
            {/* ......social login button..... */}
            <div className="flex gap-2 mb-3">
              <button className="btn bg-[#C80911] border-[#C80911] rounded-none hover:border-[#C80911] border-2 text-white hover:text-[#C80911] w-[49%] hover:shadow-lg font-bold hover:bg-white">
                Google
              </button>
              <button className="btn bg-[#005B7F] border-[#005B7F] rounded-none hover:border-[#005B7F] border-2 text-white hover:text-[#005B7F] w-[49%] hover:shadow-lg font-bold hover:bg-white">
                Facebook
              </button>
            </div>
            <div className="divider m-0 border-primary">or</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*.........Name Input filed start........... */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs rounded-none"
                  {...register("name", {
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
              {/* ..........role checker Input filed start...... */}
              <div className="flex justify-between w-full max-w-xs mb-3">
                <label className="label label-text">
                  <input
                    type="radio"
                    value="applicant"
                    defaultChecked="applicant"
                    className="radio radio-primary mr-2"
                    {...register("role", { required: true })}
                  />
                  <MdOutlineFindInPage
                    color="#39a746"
                    size={20}
                    className="mr-2"
                  />{" "}
                  Job Seeker
                </label>
                <label className="label label-text">
                  <input
                    type="radio"
                    value="recruiter"
                    // className="input input-bordered w-full max-w-xs rounded-none"
                    className="radio radio-primary mr-2"
                    {...register("role", { required: true })}
                  />
                  <AiOutlineReconciliation
                    color="#39a746"
                    size={20}
                    className="mr-2"
                  />{" "}
                  Recruiter
                </label>
              </div>
              {/*.........role checker Password Input filed start.......... */}

              {/* ..........Login Button.......... */}
              <input
                disabled={isLoading}
                className="btn btn-primary w-full max-w-xs text-white rounded-none hover:shadow-lg"
                type="submit"
                value={isLoading ? "Loading..." : "Register"}
              />
            </form>
            <div className="flex justify-center">
              <small>
                Already have an account?{" "}
                <Link className="text-primary hover:underline" to="/login">
                  please login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
